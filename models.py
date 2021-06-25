from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class FeatureModel(db.Model):
    __tablename__ = 'feature_table'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String())
    votes = db.Column(db.Integer())

    # Array that contains users(numbers) that voted. If the user isn't in the array, they didn't vote for it.
    usersVoted = db.Column(db.ARRAY(db.Integer()))

    def __init__(self, description):
        self.description = description
        self.votes = 0
        self.usersVoted = []

    def __repr__(self):
        return f"{self.description}:{self.votes}"
