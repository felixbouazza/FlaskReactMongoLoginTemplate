from flask_mongoengine import MongoEngine

db = MongoEngine()

# Initiliaza Database
def initialize_db(app):
    db.init_app(app)