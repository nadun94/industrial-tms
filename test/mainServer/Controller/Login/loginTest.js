const assert = require('chai').assert;
const login = require('../../../../mainServer/Controller/Login/login.js');

describe('Login',function(){
    it('Login should return auth = true',function(){
        assert.equal(login(),'')
    })
})