from flask import Flask
from flask_restful import Api
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from database.db import initialize_db
from resources.routes import initialize_routes
from flask_cors import CORS
from resources.errors import errors

app = Flask(__name__)


app.config.from_envvar("APPLICATION_SETTINGS")

api = Api(app, errors=errors)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
cors = CORS(app)

# COMMENT THIS LINE WHEN TESTING
app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost/seoapplication'
}

initialize_db(app)
initialize_routes(api)

if __name__ == "__main__":
    app.run()