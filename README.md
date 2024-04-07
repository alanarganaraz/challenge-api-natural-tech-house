# API Challenge Natural Tech House

## Install and run Api and Test

```python
# Install
npm install

# Run the app
npm start

# Run the tests
npm test

## NOTE: "npm start" or "npm test" may vary depending on OS, i recommend use DOCKER to run app or test

```

## Steps to use API

```python

You can use localhost instance, or deploy instance.

To make sure that API it's working correctly, you can run this request

curl --location 'https://challenge-api-natural-tech-house.onrender.com/ping'

This request should return "pong"



Here I have an example CURL with a valid APIKEY to make a request successfully.

LOCALHOST:
curl --location 'http://localhost:3000/api/pokemon/all?limit=1' \
--header 'api-key: nE5X9dKc8JbH3Y2WqRfPzA1t'

DEPLOYED:
curl --location 'https://challenge-api-natural-tech-house.onrender.com/api/pokemon/all?limit=1' \
--header 'api-key: nE5X9dKc8JbH3Y2WqRfPzA1t'

Both request should return:

[
    {
        "id": 1,
        "name": "bulbasaur",
        "height": 7,
        "weight": 69,
        "type": [
            "grass",
            "poison"
        ],
        "abilities": [
            "overgrow",
            "chlorophyll"
        ],
        "stats": {
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "special-attack": 65,
            "special-defense": 65,
            "speed": 45
        }
    }
]

```


## Steps to pull docker image for "npm start" - "npm test" and how to run it
```python

# Docker pull image for start app (npm start)
docker pull alanarganaraz/challenge-api-natural-tech-house

# Then, you must run that image
docker run -p 3000:3000 alanarganaraz/challenge-api-natural-tech-house



## Docker pull image for test app (npm test)
docker pull alanarganaraz/challenge-test-natural-tech-house

## Then, you must run that image
docker run -p 3000:3000 alanarganaraz/challenge-api-test

```

## Swagger documentation can be found at

```python

  LOCAL
  http://localhost:3000/api/v1/docs

  DEPLOYED
  https://challenge-api-natural-tech-house.onrender.com/api/v1/docs

```

## Postman documentation and requests can be found inside the project

