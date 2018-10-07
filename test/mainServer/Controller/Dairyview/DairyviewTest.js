
//getting test packages from dependencies mainly we are getting chai
var chai = require('chai');
//we use chaihttp for test restapi requests.
var chaiHttp = require('chai-http');
var serverclass = require('../../../../mainServer/Controller/Dairyview/Dairyview.js');
var should = chai.should();

chai.use(ChaiHttp);

//checkin our get methods thet retun 200 status.
describe('Dairyviews', function () {
    it('should return every data', function (done) {
        chai.request(serverclass)
            .get('/internaltrainingsearch')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                done();
            })
    });

});
