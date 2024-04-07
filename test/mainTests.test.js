const app = require('../index')
const chai = require('chai')
const chaiHttp = require('chai-http')
const it = require('mocha').it
const config = require('../env.secrets.json')
const describe = require('mocha').describe

chai.use(chaiHttp)

describe('GET /api/pokemon/all', () => {
  it('should return 403 Unauthorized', async () => {
    const res = await chai.request(app)
      .get('/api/pokemon/all')

    chai.expect(res).to.have.status(403)
    chai.expect(res.header['content-type']).to.match(/application\/json/)
  })

  it('should return 401 Forbbiden sending a wrong apiKey', async () => {
    const apiKey = 'wrongApikey';
    const res = await chai.request(app)
      .get('/api/pokemon/all')
      .set('api-key', apiKey);

    chai.expect(res).to.have.status(401)
    chai.expect(res.header['content-type']).to.match(/application\/json/)
  })

  it('should return 200 with a valid apiKey', async () => {
    const apiKey = config.apiKey;
    const expectedResponse = [
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
    const res = await chai.request(app)
      .get('/api/pokemon/all?limit=1')
      .set('api-key', apiKey);

    chai.expect(res).to.have.status(200)
    chai.expect(res.header['content-type']).to.match(/application\/json/)
    chai.expect(res.body).to.deep.equal(expectedResponse);

  })
})

describe('GET /api/pokemon/name?pokemonName={pokemonName}', () => {
  it('should return 403 Unauthorized', async () => {
    const res = await chai.request(app)
      .get('/api/pokemon/name?pokemonName=pikachu')

    chai.expect(res).to.have.status(403)
    chai.expect(res.header['content-type']).to.match(/application\/json/)
  })

  it('should return 401 Forbbiden sending a wrong apiKey', async () => {
    const apiKey = 'wrongApikey';
    const res = await chai.request(app)
      .get('/api/pokemon/name?pokemonName=pikachu')
      .set('api-key', apiKey);

    chai.expect(res).to.have.status(401)
    chai.expect(res.header['content-type']).to.match(/application\/json/)
  })

  it('should return 404 not found sending a wrong pokemon name', async () => {
    const apiKey = config.apiKey;
    const res = await chai.request(app)
      .get('/api/pokemon/name?pokemonName=pikachussss')
      .set('api-key', apiKey);

    chai.expect(res).to.have.status(404)
    chai.expect(res.header['content-type']).to.match(/application\/json/)
  })

  it('should return 200 with a valid apiKey', async () => {
    const apiKey = config.apiKey;
    const expectedResponse = {
      "id": 25,
      "name": "pikachu",
      "height": 4,
      "weight": 60,
      "type": [
          "electric"
      ],
      "abilities": [
          "static",
          "lightning-rod"
      ],
      "stats": {
          "hp": 35,
          "attack": 55,
          "defense": 40,
          "special-attack": 50,
          "special-defense": 50,
          "speed": 90
      }
  };
    const res = await chai.request(app)
      .get('/api/pokemon/name?pokemonName=pikachu')
      .set('api-key', apiKey);

    chai.expect(res).to.have.status(200)
    chai.expect(res.header['content-type']).to.match(/application\/json/)
    chai.expect(res.body).to.deep.equal(expectedResponse);
  })
})

describe('GET /api/pokemon/type?pokemonType={pokemonType}', () => {
  it('should return 403 Unauthorized', async () => {
    const res = await chai.request(app)
      .get('/api/pokemon/type?pokemonType=pikachu')

    chai.expect(res).to.have.status(403)
    chai.expect(res.header['content-type']).to.match(/application\/json/)
  })

  it('should return 401 Forbbiden sending a wrong apiKey', async () => {
    const apiKey = 'wrongApikey';
    const res = await chai.request(app)
      .get('/api/pokemon/type?pokemonType=pikachu')
      .set('api-key', apiKey);

    chai.expect(res).to.have.status(401)
    chai.expect(res.header['content-type']).to.match(/application\/json/)
  })

  it('should return 404 not found sending a wrong type name', async () => {
    const apiKey = config.apiKey;
    const res = await chai.request(app)
      .get('/api/pokemon/type?pokemonType=electricssss')
      .set('api-key', apiKey);

    chai.expect(res).to.have.status(404)
    chai.expect(res.header['content-type']).to.match(/application\/json/)
  })

  it('should return 200 with a valid apiKey', async () => {
    const apiKey = config.apiKey;
    const res = await chai.request(app)
      .get('/api/pokemon/type?pokemonType=electric')
      .set('api-key', apiKey);

    chai.expect(res).to.have.status(200)
    chai.expect(res.header['content-type']).to.match(/application\/json/)
  })
})