import json

from app import app
from .BaseCase import BaseCase

class LoginTest(BaseCase):

    def test_successful_login(self):

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

        # When
        response = self.app.post("/api/auth/login", headers={"Content-Type": "application/json"}, data=payload)

        # Then

        self.assertEqual(str, type(response.json['token']))
        self.assertEqual(200, response.status_code)


    def test_successful_signup(self):
        #Given
        payload = json.dumps({
            "pseudo": "pseudoTest",
            "email": "emailTest@emailtest.fr",
            "password": "passwordTest"
        })

        #When
        response = self.app.post("/api/auth/signup", headers={'Content-Type': "application/json"}, data=payload)

        #Then
        self.assertEqual(str, type(response.json['id']))
        self.assertEqual(200, response.status_code)
