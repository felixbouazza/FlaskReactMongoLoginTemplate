from .auth import SignupApi, LoginApi
from .user import UserApi
from .campaignResource import CampaignsApi, CampaignApi

def initialize_routes(api):

    #CAMPAIGN
    api.add_resource(CampaignsApi, '/api/campaigns')
    api.add_resource(CampaignApi, "/api/campaign/<id>")
    
    # AUTH
    api.add_resource(SignupApi, '/api/auth/signup')
    api.add_resource(LoginApi, '/api/auth/login')

    # USER
    api.add_resource(UserApi, '/api/user/profile')

