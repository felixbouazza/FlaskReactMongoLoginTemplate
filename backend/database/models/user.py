from ..db import db
from flask_bcrypt import generate_password_hash, check_password_hash

class User(db.Document):
    pseudo = db.StringField(required=True, unique=True)
    email = db.StringField(required=True, unique=True)
    password = db.StringField(required=True, min_length=8)

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf-8')

    def check_password_hash(self, password):
        return check_password_hash(self.password, password)