# Standard libs
import os

# Flask
from flask import Flask
from flask_sslify import SSLify

# Our libs
from .database import Database

# Config
from .config import CLIENT_STATIC_DIR

def create_app():
    app = Flask(__name__, static_folder=CLIENT_STATIC_DIR)
    app.secret_key = os.environ['FLASK_SECRET_KEY']

    # Force SSL
    SSLify(app)

    # Blueprints
    from .blueprints.root import blueprint as root_blueprint
    app.register_blueprint(root_blueprint)

    from .blueprints.example import blueprint as example_blueprint
    app.register_blueprint(example_blueprint, url_prefix='/example')

    Database.connect()

    return app
