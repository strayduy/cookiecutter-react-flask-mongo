# Standard libs
import os

# Third party libs
import pymongo

# Database config
DB_HOST = os.environ['DB_HOST']
DB_NAME = os.environ['DB_NAME']
DB_USER = os.environ['DB_USER']
DB_PASSWORD = os.environ['DB_PASSWORD']

class Database(object):
    db = None

    @classmethod
    def connect(cls):
        client = pymongo.MongoClient(DB_HOST)
        db = client[DB_NAME]
        if DB_USER and DB_PASSWORD:
            db.authenticate(DB_USER, DB_PASSWORD)
        cls.db = db
