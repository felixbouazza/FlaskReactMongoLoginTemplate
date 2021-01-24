import sys
sys.path.append("..")

from flask import Response, request
from database.models.user import User
from database.models.campaign import Campaign
from flask_restful import Resource
from flask_jwt_extended import jwt_required, get_jwt_identity

class CampaignsApi(Resource):

    @jwt_required
    def get(self):
        user_id = get_jwt_identity()
        campaigns = Campaign.objects(added_by=user_id).to_json()
        return Response(campaigns, mimetype="application/json", status=200)

    @jwt_required
    def post(self):
        user_id = get_jwt_identity()
        body = request.get_json()
        user = User.objects.get(id=user_id)
        campaign = Campaign(**body, added_by=user)
        campaign.save()
        user.update(push__campaigns=campaign)
        return Response(Campaign.objects(added_by=user_id).to_json(), mimetype="application/json", status=200)


class CampaignApi(Resource):
    
    @jwt_required
    def get(self, id):
        user_id = get_jwt_identity()
        return Response(Campaign.objects.get_or_404(id=id, added_by=user_id).to_json(), mimetype="application/json", status=200)

    @jwt_required
    def put(self, id):
        user_id = get_jwt_identity()
        campaign = Campaign.objects.get(id=id, added_by=user_id)
        body = request.get_json()
        Campaign.objects.get_or_404(id=id).update(**body)
        return Response(Campaign.objects(added_by=user_id).to_json(), mimetype="application/json", status=200)


    @jwt_required
    def delete(self, id):
        user_id = get_jwt_identity()
        campaign = Campaign.objects.get(id=id, added_by=user_id)
        campaign.delete()
        return Response(Campaign.objects(added_by=user_id).to_json(), mimetype="application/json", status=200)

