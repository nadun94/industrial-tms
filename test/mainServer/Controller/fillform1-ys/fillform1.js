const request = require('supertest');
const app = require('../server.js');
//require super test and server.js




describe('POST /studentform1', function () {
this.timeout(15000);

it('respond with 201 created', function (done) {
this.timeout(15000);
setTimeout(done, 15000);
request(app)
.post('/studentform1')
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