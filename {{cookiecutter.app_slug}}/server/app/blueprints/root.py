# Standard libs
import os

# Flask
from flask import Blueprint
from flask import send_file

# Config
from ..config import CLIENT_BUILD_DIR

# Initialize blueprint
blueprint = Blueprint('root', __name__)

@blueprint.route('/')
def index():
    filepath = os.path.join(CLIENT_BUILD_DIR, 'index.html')
    return send_file(filepath, mimetype='text/html')

@blueprint.route('/service-worker.js')
def service_worker():
    filepath = os.path.join(CLIENT_BUILD_DIR, 'service-worker.js')
    return send_file(filepath, mimetype='application/javascript')

@blueprint.route('/asset-manifest.json')
def asset_manifest():
    filepath = os.path.join(CLIENT_BUILD_DIR, 'asset-manifest.json')
    return send_file(filepath, mimetype='application/manifest+json')

@blueprint.route('/manifest.json')
def manifest():
    filepath = os.path.join(CLIENT_BUILD_DIR, 'manifest.json')
    return send_file(filepath, mimetype='application/manifest+json')

@blueprint.route('/favicon.ico')
def favicon():
    filepath = os.path.join(CLIENT_BUILD_DIR, 'favicon.ico')
    return send_file(filepath, mimetype='image/png')
