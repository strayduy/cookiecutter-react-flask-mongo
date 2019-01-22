# Flask
from flask import Blueprint
from flask import jsonify

# Initialize blueprint
blueprint = Blueprint('example', __name__)

@blueprint.route('/get-async-data.json')
def get_async_data():
    # Add a 1 second delay for drama
    import time
    time.sleep(1)

    data = {
        'message': "This is an asynchronous message."
    }
    return jsonify(**data)
