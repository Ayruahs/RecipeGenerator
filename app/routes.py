from app import app, db
from app.forms import LoginForm, RegistrationForm
from flask import render_template, flash, redirect, url_for, request, jsonify
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, RecipeTable
from werkzeug.urls import url_parse
from sqlalchemy.exc import IntegrityError

def get_saved_recipes(user):
    u = User.query.filter_by(username=user).first()
    recipes = u.recipes.all()
    array = {}
    array['username'] = user
    array['recipeList'] = []
    for recipe in recipes:
        recipe_object = {}
        recipe_object['recipe_name'] = recipe.recipe_name
        recipe_object['image_url'] = recipe.image_url
        recipe_object['recipe_url'] = recipe.recipe_url
        #array['recipeList'][recipeList[recipe.id - 1][recipe_name]] = recipe.recipe_name
        #array['recipeList'][recipeList[recipe.id - 1][image_url]] = recipe.image_url
        #array['recipeList'][recipeList[recipe.id - 1][recipe_url]] = recipe.recipe_url
        array['recipeList'].append(recipe_object)

    print(array)

    return array


def save_recipe(user, name, image, url):
    u = User.query.filter_by(username=user).first()
    r2 = u.recipes.filter_by(recipe_url=url).first()
    if r2 is not None and r2.recipe_url == url:
        return "Already Saved"
    r = RecipeTable(recipe_name=name, image_url=image, recipe_url=url, savedby=u)
    db.session.add(r)
    db.session.commit()
    return "Recipe Saved"

def delete_recipe(user, name):
    u = User.query.filter_by(username=user).first()
    r = u.recipes.filter_by(recipe_url=name).first()
    if r is None or r.recipe_url != name:
        return "Recipe doesn't exist"
    db.session.delete(r)
    db.session.commit()
    return "Recipe Deleted"


@app.route('/')
@app.route('/index')
@login_required
def index():
    #user = {'username': 'Rishabh'}
    posts = [
        {
            'author': {'username': 'John'},
            'body': 'Beautiful day in Portland!'
        },
        {
            'author': {'username': 'Susan'},
            'body': 'This Recipe is good!'
        }
    ]
    return render_template('index.html', title='Home', posts=posts)

@app.route('/login/<username>&<password>', methods = ['GET', 'POST'])
def login(username, password):
    if current_user.is_authenticated:
        return "Log Out First"
        #return redirect(url_for('index'))
    #form = LoginForm()
    #if form.validate_on_submit():
    user = User.query.filter_by(username=username).first()
    if user is None or not user.check_password(password):
        print("Invalid username or password")
        return "Invalid Username or Password"
    #    #flash('Login requested for user {}, remember_me={}'.format(
    #    #    form.username.data, form.remember_me.data))
    #        flash('Invalid username or password')
    #        return redirect(url_for('login'))
    login_user(user, remember=False)
    return "Logged In"
    #    next_page = request.args.get('next')
    #    if not next_page or url_parse(next_page).netloc != '':
    #        next_page = url_for('index')
    #    return redirect(next_page)
    #return render_template('login.html', title = 'Sign In', form=form)
    #return request.args.get('username', None)

@app.route('/logout')
def logout():
    logout_user()
    #return redirect(url_for('index'))
    return "Logged Out"

@app.route('/register/<username>&<password>', methods=['GET', 'POST'])
def register(username, password):
    if current_user.is_authenticated:
        #return redirect(url_for('index'))
        return "Logout First"
    #form = RegistrationForm()
    #if form.validate_on_submit():
    try:
        user = User(username=username)
        user.set_password(password)
        db.session.add(user)
        db.session.commit()
    except IntegrityError:
        return "Username Taken"
    return "Account Created"
    #    flash('Congratulations, you are now a registered user!')
    #    return redirect(url_for('login'))
    #return render_template('register.html', title='Register', form=form)

@app.route('/getRecipes')
def getRecipes():
    if current_user.is_authenticated == False:
        return "Login First"
    return jsonify(get_saved_recipes(current_user.username))

@app.route('/saveRecipe/<recipe_name>&<image_url>&<recipe_url>')
def saveRecipe(recipe_name, image_url, recipe_url):
    if current_user.is_authenticated == False:
        return "Login First"
    return save_recipe(current_user.username, recipe_name, image_url, recipe_url)

@app.route('/deleteSavedRecipe/<recipe_url>')
def deleteRecipe(recipe_url):
    if current_user.is_authenticated == False:
        return "Login First"
    return delete_recipe(current_user.username, recipe_url)
