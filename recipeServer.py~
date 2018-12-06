from app import app, db
from app.models import User, RecipeTable
import json

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'RecipeTable': RecipeTable}

def get_saved_recipes(user):
    u = User.query.filter_by(username=user).first()
    recipes = u.recipes.all()
    array = {}
    array.username = user
    for recipe in recipes:
        array.recipeList[recipe.id - 1].recipe_name = recipe.recipe_name
        array.recipeList[recipe.id - 1].image_url = recipe.image_url
        array.recipeList[recipe.id - 1].recipe_url = recipe.recipe_url

    return json.loads(array)


def save_recipe(user, name, image, url):
    u = User.query.filter_by(username=user).first()
    r = RecipeTable(recipe_name=name, image_url=image, recipe_url=url, savedby=u)
    db.session.add(r)
    db.session.commit()

def delete_recipe(user, name):
    u = User.query.filter_by(username=user).first()
    r = u.recipes.filter_by(recipe_name=name).first()
    db.session.delete(r)
    db.session.commit()
