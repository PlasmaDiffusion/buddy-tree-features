

from flask import Flask, send_from_directory
from flask_cors import CORS, cross_origin

app = Flask(__name__)

# Enable CORS while testing
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/", defaults={'path': ''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/api/test')
def test():
    return {'test': "Hello world"}
