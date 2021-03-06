# SeoIdeasApplication

An application who store all my seo script ideas with front-end dashboard

## Technologies

- __Back-end__ - FLASK
- __Front-end__ - REACT
- __Database__  - MONGODB

## Prerequisite

##### Python

```sh
python3 --version
// Python 3.8.5
```
##### Node
```sh
node --version
// v15.6.0
```
##### NPM
```sh
npm --version
// 7.4.0
```

##### MongoDB
```sh
mongod --version
// db version v4.4.1
```

##### Postman

To test our API

##### Robo3t

Database Visualization

## Installation

##### Frontend

```sh
cd frontend/ && npm install 
```

##### Backend

```sh
cd backend/ 
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

##### Database

```sh
mkdir bdd
```

## Start

##### Frontend

```sh
cd frontend/
npm start
```

##### Backend

Inside your backend directory :
- Create a .env file
- define 3 items:
    - FLASK_APP="./app.py"
    - FLASK_ENV="development"
    - JWT_SECRET_KEY = 'your JWT SECRET KEY'


```sh
cd backend/ 
source venv/bin/activate
export APPLICATION_SETTINGS=./.env
flask run
```

##### Database

```sh
mongo --dbpath="bdd"
```

You can now open your Postman and ROBO3T Application

## Testing

Comments this line in app.py to use test BDD

```py
app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost:27017/seoapplication'
}
```

And run test ( verify you're in venv)

```sh
python -m unitest --buffer
```
