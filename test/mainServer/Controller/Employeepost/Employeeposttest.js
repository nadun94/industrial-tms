//getting test packages from dependencies mainly we are getting chai
var chai = require('chai');
//we use chaihttp for test restapi requests.
var chaiHttp = require('chai-http');
var serverclass = require('../../../../mainServer/studentsupervisercontroler/studentsupervisercontroler.js');
var should = chai.should();

chai.use(ChaiHttp);

it('should add a SINGLE blob on /blobs POST', function(done) {
  chai.request(server)
    .post('/blobs')
    .send({'name': 'Java', 'lastName': 'Script'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('SUCCESS');
      res.body.SUCCESS.should.be.a('object');
      res.body.SUCCESS.should.have.property('name');
      res.body.SUCCESS.should.have.property('lastName');
      res.body.SUCCESS.should.have.property('_id');
      res.body.SUCCESS.name.should.equal('Java');
      res.body.SUCCESS.lastName.should.equal('Script');
      done();
    });
});