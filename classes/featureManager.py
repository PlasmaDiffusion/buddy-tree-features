from models import FeatureModel

# A wrapper class for all feature database code


class FeatureManager():

    def __init__(self, user=-1):
        self.user = user

    def getAllFeatures(self):

        features = FeatureModel.query.order_by(FeatureModel.id)

        # Make a new array of feature data to be JSONified properly
        featuresJSON = []

        for feature in features:
            print(feature.description)

            # Also check if the user voted, or check for nothing if no user was given
            if self.user:
                featuresJSON.append({"id": feature.id, "description": feature.description,
                                     "votes": feature.votes, "userVoted": self.user in feature.usersVoted})

            else:
                featuresJSON.append({"id": feature.id, "description": feature.description,
                                     "votes": feature.votes, "userVoted": False})

        return featuresJSON

    def addFeature(self, data, db):
        newDescription = data.get("description")
        new_feature = FeatureModel(description=newDescription)
        db.session.add(new_feature)
        db.session.commit()
        return f"Feature Request Added!"
