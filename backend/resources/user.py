from flask import Response, request
from database.models.user import User
from flask_restful import Resource
from flask_jwt_extended import jwt_required, get_jwt_identity


class UserApi(Resource):

    # Get User Profile 
    # Require JWT Token
    @jwt_required
    def get(self):
        user_id = get_jwt_identity()
        user = User.objects.get_or_404(id=user_id)
        return {
            "id": user_id,
            "pseudo": user.pseudo,
            "email": user.email
        }, 200
