from models import FeatureModel

# A wrapper class for all feature database code


class FeatureManager():

    # Set the user while creating this class (Required to call voteForFeature)
    def __init__(self, user=None):
        self.user = user

    def getAllFeatures(self):

        features = FeatureModel.query.order_by(FeatureModel.id)

        # Make a new array of feature data to be JSONified properly
        featuresJSON = []

        for feature in features:

            # While getting the feature, check if the user voted, or don't if no user was given
            if self.user:
                featuresJSON.append({"id": feature.id, "description": feature.description,
                                     "votes": feature.votes, "userVoted": self.user in feature.users_voted})

            else:
                featuresJSON.append({"id": feature.id, "description": feature.description,
                                     "votes": feature.votes, "userVoted": False})

        return featuresJSON

    # Pass in request data to add a new feature to the database
    def addFeature(self, data, db):
        if data == None or db == None:
            return f"Missing data or db"

        newDescription = data.get("description")
        new_feature = FeatureModel(description=newDescription)
        db.session.add(new_feature)
        db.session.commit()
        return f"Feature Request Added!"

    def voteForFeature(self, featureId, db):
        if (self.user == None):
            return f"User not set in feature manager"

        # Find the feature and check if the user voted for it prior
        feature = FeatureModel.query.filter_by(id=featureId).first()
        userHasVoted = self.user in feature.users_voted
        if userHasVoted:
            # Unvote
            feature.votes -= 1
            stringToReplace = feature.users_voted
            feature.users_voted = stringToReplace.replace(self.user+",", "")
        else:
            # Vote
            feature.votes += 1
            feature.users_voted += self.user+","

        db.session.commit()
