from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class FeatureModel(db.Model):
    __tablename__ = 'feature_table'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String())
    votes = db.Column(db.Integer())

    # String that contains users who upvoted the feature separated by a ,
    usersVoted = db.Column(db.String())

    def __init__(self, description):
        self.description = description
        self.votes = 0
        self.users_voted = ""

    def __repr__(self):
        return f"{self.description}:{self.votes}"
