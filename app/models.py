from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    #email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    recipes = db.relationship('RecipeTable', backref='savedby', lazy='dynamic')

    def set_password(self, password):
    

    def check_password(self, password):

    def __repr__(self):
        return '<User {}>'.format(self.username)

class RecipeTable(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    recipe_name = db.Column(db.String(200), index=True)
    image_url = db.Column(db.String(300))
    recipe_url = db.Column(db.String(300))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<RecipeTable {}>'.format(self.recipe_name)
