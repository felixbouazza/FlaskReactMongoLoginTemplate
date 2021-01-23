import json

from app import app
from .BaseCase import BaseCase

class UserTest(BaseCase):

    def test_get_login_user(self):

        # Given
        pseudo = "pseudoTest"
        email = "emailTest@emailtest.fr"
        password = "passwordTest"
        payload = json.dumps({
            "pseudo": pseudo,
            "email": email,
            "password": password
        })

        response = self.app.post("/api/auth/signup", headers={"Content-Type": "application/json"}, data=payload)
        response = self.app.post("/api/auth/login", headers={"Content-Type": "application/json"}, data=payload)

        # When 
        Authorization = "Bearer " + response.json['token']
        response = self.app.get("/api/user/profile", headers={"Authorization": Authorization})

        # Then
        data = json.loads(response.get_data())
        self.assertEqual(str, type(data["id"]))
        self.assertEqual(pseudo, data["pseudo"])
        self.assertEqual(email, data["email"])