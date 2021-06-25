from flask import Flask, send_from_directory, request
from flask_cors import CORS  # Comment on deployment
from flask_migrate import Migrate
from models import db, FeatureModel

app = Flask((__name__), static_url_path='', static_folder='frontend/build')
CORS(app)  # Comment on deployment/uncomment when testing locally

app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:1148@localhost:5432/buddytree"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)


@ app.route("/", defaults={'path': ''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')


@ app.route('/addFeature', methods=['POST'])
def addFeature():

    data = request.get_json(silent=True)

    if request.method == 'POST':
        newDescription = data.get("description")
        new_feature = FeatureModel(description=newDescription)
        db.session.add(new_feature)
        db.session.commit()
        return f"Feature Request Added!"


@ app.route('/getFeatures', methods=['GET'])
def getFeatures():

    if request.method == 'GET':
        features = FeatureModel.query.all()

        # Make a new array to be JSONified properly
        featuresJSON = []

        for feature in features:
            print(feature.description)
            featuresJSON.append({"description": feature.description,
                                "votes": feature.votes, "usersVoted": feature.usersVoted})
        return {"features": featuresJSON}
