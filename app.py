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


# Get all features from the FeatureList component
@ app.route('/getFeatures', methods=['GET'])
@ app.route('/getFeatures/<user>', methods=['GET'])
def getFeaturesWithUsersVotes(user=None):

    if request.method == 'GET':

        if user is not None:
            featureManager = FeatureManager(user)
            return {"features": featureManager.getAllFeatures()}
        else:
            featureManager = FeatureManager()
            return {"features": featureManager.getAllFeatures()}


# Post a feature from the FeatureInput component
@ app.route('/addFeature', methods=['POST'])
def addFeature():

    if request.method == 'POST':

        data = request.get_json(silent=True)
        featureManager = FeatureManager()
        return featureManager.addFeature(data, db)


# Vote from the Feature component using feature id and user#
@ app.route('/voteForFeature', methods=['POST'])
def voteForFeature():

    if request.method == 'POST':

        # Get request data, and make sure it's all there
        data = request.get_json(silent=True)
        featureId = data.get("id")
        user = data.get("user")
        if featureId is None or user is None or user == "":
            return f"Error voting. Didn't get id and user."

        featureManager = FeatureManager(user)
        featureManager.voteForFeature(featureId, db)

        return {"features": featureManager.getAllFeatures()}
