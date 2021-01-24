from ..db import db
from flask_bcrypt import generate_password_hash, check_password_hash
from .campaign import Campaign

class User(db.Document):
    

    pseudo = db.StringField(required=True)
    email = db.StringField(required=True, unique=True)
    password = db.StringField(required=True, min_length=8)
    campaigns = db.ListField(db.ReferenceField('Campaign', reverse_delete_rule=db.PULL))

    # Hash Password before saving in /API/AUTH/SIGNUP
    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf-8')


    # Check Password hash before login in /API/AUTH/LOGIN
    def check_password_hash(self, password):
        return check_password_hash(self.password, password)

User.register_delete_rule(Campaign, 'added_by', db.CASCADE)