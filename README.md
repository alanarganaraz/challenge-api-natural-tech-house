# API Challenge Natural Tech House

## Install and run Api and Test

```python

Should use Node >= v14

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

First of all, you should run the API with the following command:

npm start

Then, to make sure that API it's working correctly, you can run this request

curl --location 'http://localhost:3000/ping'

This request should return "pong"


Here I have an example of CURL with a valid API KEY to make a request successfully.

curl --location 'http://localhost:3000/api/pokemon/all?limit=1' \
--header 'api-key: nE5X9dKc8JbH3Y2WqRfPzA1t'

Request should return:

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
docker run -p 3000:3000 alanarganaraz/challenge-api-natural-tech-house:2.0



## Docker pull image for test app (npm test)
docker pull alanarganaraz/challenge-test-natural-tech-house

## Then, you must run that image
docker run -p 3000:3000 alanarganaraz/challenge-test-natural-tech-house:2.0

Finally, you can run the test and start the API using Docker.

```

## Swagger documentation can be found at

```python
  http://localhost:3000/api/v1/docs
```

## Postman documentation and requests can be found inside the project

