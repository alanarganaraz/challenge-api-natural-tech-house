const app = require('../src/index')
const chai = require('chai')
const chaiHttp = require('chai-http')
const it = require('mocha').it
const describe = require('mocha').describe

chai.use(chaiHttp)

describe('GET /files/list', () => {
  it('should return 200 and content-type header with JSON match', async () => {
    const res = await chai.request(app).get('/files/list')
    chai.expect(res).to.have.status(200)
    chai.expect(res.header['content-type']).to.match(/application\/json/)
  })

  it('should return 200 and match with property files', async () => {
    const res = await chai.request(app).get('/files/list')
    chai.expect(res).to.have.status(200)
    chai.expect(res).to.have.property('files')
  })

  it('should return 404 in request /files/lists', async () => {
    const res = await chai.request(app).get('/files/lists')
    chai.expect(res).to.have.status(404)
  })
})

describe('GET /files/data', () => {
  it('should return 200 and content-type header with JSON match', async () => {
    const res = await chai.request(app).get('/files/data')
    chai.expect(res).to.have.status(200)
    chai.expect(res.header['content-type']).to.match(/application\/json/)
  })

  it('should return 404 with an msg property with name File not found.', async () => {
    const res = await chai.request(app).get('/files/data?fileName="test9999')
    chai.expect(res).to.have.status(404)
    chai.expect(res.body).to.have.property('msg').equal('File not found.')
  })
})
