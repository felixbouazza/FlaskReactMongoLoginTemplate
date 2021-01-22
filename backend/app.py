from flask import Flask
from flask_restful import Api
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from database.db import initialize_db
from resources.routes import initialize_routes
from flask_cors import CORS

app = Flask(__name__)


app.config["MONGODB_SETTINGS"] = {
    "host": "mongodb://localhost:27017/seoapplication"
}

app.config.from_envvar("APPLICATION_SETTINGS")

api = Api(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
cors = CORS(app)

initialize_db(app)
initialize_routes(api)

if __name__ == "__main__":
    app.run()