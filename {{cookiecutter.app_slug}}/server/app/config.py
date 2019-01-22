# Standard libs
import os

# Constants
SERVER_DIR = os.path.dirname(os.path.realpath(__file__))
CLIENT_DIR = os.path.join(SERVER_DIR, os.pardir, os.pardir, 'client')
CLIENT_BUILD_DIR = os.path.join(CLIENT_DIR, 'build')
CLIENT_STATIC_DIR = os.path.join(CLIENT_BUILD_DIR, 'static')
