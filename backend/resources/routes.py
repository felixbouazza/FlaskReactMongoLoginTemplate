from .auth import SignupApi, LoginApi
from .user import UserApi

def initialize_routes(api):

    # AUTH
    api.add_resource(SignupApi, '/api/auth/signup')
    api.add_resource(LoginApi, '/api/auth/login')

    # USER
    api.add_resource(UserApi, '/api/user/profile')
