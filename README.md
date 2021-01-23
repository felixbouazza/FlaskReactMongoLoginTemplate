# SeoIdeasApplication

An application who store all my seo script ideas with front-end dashboard

## Technologies

- __Back-end__ - FLASK
- __Front-end__ - REACT
- __Database__  - MONGODB

## Prerequisite

##### Python

```
python3 --version
// Python 3.8.5
```
##### Node
```
node --version
// v15.6.0
```
##### NPM
```
npm --version
// 7.4.0
```

##### MongoDB
```
mongod --version
// db version v4.4.1
```

##### Postman

To test our API

##### Robo3t

Database Visualization

## Installation

##### Frontend

```
cd frontend/ && npm install 
```

##### Backend

```
cd backend/ 
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

##### Database

```
mkdir bdd

```

## Start

##### Frontend

```
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


```
cd backend/ 
source venv/bin/activate
export APPLICATION_SETTINGS=./.env
flask run
```

##### Database

```
mongo --dbpath="bdd"

```

You can now open your Postman and ROBO3T Application