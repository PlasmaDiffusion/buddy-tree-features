from flask import Flask, send_from_directory, request
from flask_cors import CORS
from flask_migrate import Migrate
from models import db, FeatureModel
from classes.featureManager import FeatureManager

app = Flask((__name__), static_url_path='', static_folder='frontend/build')
CORS(app)  # Comment CORS on deployment, or uncomment when testing locally

app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:1148@localhost:5432/buddytree"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)


# Render the built front end
@ app.route("/", defaults={'path': ''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')


# Post a feature from the FeatureInput component
@ app.route('/addFeature', methods=['POST'])
def addFeature():

    if request.method == 'POST':

        data = request.get_json(silent=True)
        featureManager = FeatureManager()
        return featureManager.addFeature(data, db)


# Get all features from the FeatureList component
@ app.route('/getFeatures', methods=['GET'])
def getFeatures():

    if request.method == 'GET':

        featureManager = FeatureManager()

        return {"features": featureManager.getAllFeatures()}


# Same as above but without a user "signed in"
@ app.route('/getFeatures/<int:user>', methods=['GET'])
def getFeaturesWithUsersVotes(user):

    if request.method == 'GET':

        featureManager = FeatureManager(user)

        return {"features": featureManager.getAllFeatures(user)}


# Vote from the Feature component using feature id and user#
@ app.route('/voteForFeature', methods=['POST'])
def voteForFeature():

    data = request.get_json(silent=True)

    if request.method == 'POST':

        # Get request data, and make sure it's all there
        featureId = data.get("id")
        user = data.get("user")
        print(featureId)
        print(user)
        if featureId is None or user is None:
            return f"Error voting. Didn't get all values."

        featureManager = FeatureManager(user)

        # Find the feature and check if the user voted for it prior
        feature = FeatureModel.query.filter_by(id=featureId).first()
        userHasVoted = user in feature.usersVoted
        if userHasVoted:
            # Unvote
            feature.votes -= 1
            feature.usersVoted.remove(user)
            userHasVoted = False
        else:
            # Vote
            feature.votes += 1
            feature.usersVoted.append(user)
            userHasVoted = True

        db.session.commit()

        return {"features": featureManager.getAllFeatures()}
