const mocha = require('mocha')
const expect = require('chai').expect

describe('My comp of JavScript basics is solid', () => {

    //use it to prove statments that support the describe
    it('and this proves my JS Awesomeness', () => {
        expect('This be a string').to.be.a('string');
        expect({name: 'Daniel Guerrero', statement: 'see i told you'}).to.be.an('object');
        expect(null).to.be.a('null');
        expect(undefined).to.be.an('undefined');
        expect([]).to.be.an('array').that.is.empty;
        expect([1,2,3,4,5]).to.be.an('array').that.includes(5);
        expect('Daniel Guerrero').to.not.be.an('array')
        expect({name: 'Daniel Guerrero', statement: 'see i told you', model: 'coder'}).to.have.a.property('model');
        expect({owner: 'Daniel Guerrero', make: 'tesla', model: 'cybertruck'}).to.include({make: 'tesla', model: 'cybertruck'});
    })

})
