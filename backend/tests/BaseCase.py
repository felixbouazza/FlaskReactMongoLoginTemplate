import unittest

from app import app
from database.db import db

## Default configuration
class BaseCase(unittest.TestCase):

    # Execute action before any unittest
    def setUp(self):
        # Load application to test
        self.app = app.test_client()
        # Load database to test
        self.db = db.get_db()

    # Execute action after any unittest
    def tearDown(self):
        # Delete Database collections after the test is complete
        for collection in self.db.list_collection_names():
            self.db.drop_collection(collection)