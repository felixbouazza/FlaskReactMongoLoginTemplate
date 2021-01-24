from ..db import db

class Campaign(db.Document):
    name = db.StringField(required=True, unique=True)
    added_by = db.ReferenceField("User")