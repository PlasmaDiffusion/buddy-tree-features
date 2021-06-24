from flask_restful import Api, Resource, reqparse


class ApiHandler(Resource):
    def get(self):
        return {'test': "Hello world"}
