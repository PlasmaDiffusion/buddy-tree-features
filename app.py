from flask import Flask, send_from_directory
from flask_cors import CORS  # Comment on deployment
from models.featureModel import db, FeatureModel


app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app)  # Comment on deployment

app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:<password>@<server>:5432/buddytree"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


@app.route("/", defaults={'path': ''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/addFeature', methods=['POST'])
def addFeature():

    if request.method == 'POST':
        newDescription = request.form['feature']
        new_feature = FeatureModel(description=newDescription)
        db.session.add(new_feature)
        db.session.commit()
        return f"Feature Request Added!"


@app.route('/getFeatures', methods=['GET'])
def getFeatures():

    if request.method == 'GET':

        return "Get features"
