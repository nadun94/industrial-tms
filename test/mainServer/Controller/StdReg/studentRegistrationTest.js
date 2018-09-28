const request = require('supertest');
const app = require('../server.js');




// describe('GET /login', function () {
// it('respond with json containing a list of all users', function (done) {
// request(app)
// .get('/users')
// .set('Accept', 'application/json')
// .expect('Content-Type', /json/)
// .expect(200, done);
// });
// });



describe('POST /stddetreg', function () {
this.timeout(15000);
let data = {
    "stdid": "IT16541182",
    "name": "Chandira Jayasekara",
    "nic": "952590545V",
    "address": "Hansavilla",
    "tel": "123456789",
    "company": "J-Tech",
    "intern_position": "Intern",
    "intern_duration": "9",
    "status": "true"
}
it('respond with 201 created', function (done) {
this.timeout(15000);
setTimeout(done, 15000);
request(app)
.post('/stddetreg')
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