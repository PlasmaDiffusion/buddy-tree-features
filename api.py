

from flask import Flask
from flask_cors import CORS, cross_origin
import os

app = Flask(__name__)

# Enable CORS while testing
if os.environ['FLASK_ENV'] == "development":
    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/api/test')
def test():
    return {'test': "Hello world"}
