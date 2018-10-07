const request = require('supertest');
const app = require('../server.js');
//require super test and server.js



//post test for form 6
describe('POST /fill-formI6', function () {
this.timeout(15000);
let data = {}
it('respond with 201 created', function (done) {
this.timeout(15000);
setTimeout(done, 15000);
request(app)
.post('/fill-formI6')
.send(data)
.set('Accept', 'application/json')
.expect('Content-Type', /json/)
.expect(200)
.end((err) => {
if (err) return done(err);
done();
});
});
});