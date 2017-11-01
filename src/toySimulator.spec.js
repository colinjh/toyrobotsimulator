mocha.setup('bdd');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var toySimulator = require(['./src/toySimulator.js']);



describe('Toy Simulator Tests', function() {
  it('file should exist', function () {
    expect(toySimulator).to.exist
  });
  it('should be a function', function() {
    expect(toySimulator).to.be.a('function');
  });
  it('variables start as undefined', function() {
    should.equal(currentCompassPos, undefined);
    should.equal(current_x, undefined);
    should.equal(current_x, undefined);
  })
  it('max values should be 4', function() {
    should.equal(max_x, 4);
    should.equal(max_y, 4);
  })
});

describe('Demo Tests', function() {

  describe('Test A - PLACE 0,0,NORTH', function() {

    it('Robot should be facing north and placement true', function() {
      process.input('place 0,0,NORTH');
      expect(currentCompassPos).to.equal('NORTH');
      expect(current_x).to.equal(0);
      expect(current_y).to.equal(0);
      expect(placement).to.be.true;
    });
    it('it should move NORTH', function() {
      process.movement("MOVE");
      expect(current_y).to.equal(1);
    });
    it('it should REPORT 0,1,NORTH', function() {
      process.movement("REPORT");
      expect(current_x).to.equal(0);
      expect(current_y).to.equal(1);
      expect(currentCompassPos).to.equal('NORTH');
    });
  });

  describe('Test B - PLACE 0,0,NORTH', function() {

    it('Robot should be facing north and placement true', function() {
      process.input('place 0,0,NORTH');
      expect(currentCompassPos).to.equal('NORTH');
      expect(current_x).to.equal(0);
      expect(current_y).to.equal(0);
      expect(placement).to.be.true;
    });
    it('it should turn left facing WEST', function() {
      process.movement("LEFT");
      expect(currentCompassPos).to.equal('WEST');
    });
    it('it should REPORT 0,0,WEST', function() {
      process.movement("REPORT");
      expect(current_x).to.equal(0);
      expect(current_y).to.equal(0);
      expect(currentCompassPos).to.equal('WEST');
    });
  });

  describe('Test C - PLACE 1,2,EAST', function() {

    it('Robot should be facing east and placement true', function() {
      process.input('place 1,2,EAST');
      expect(currentCompassPos).to.equal('EAST');
      expect(current_x).to.equal(1);
      expect(current_y).to.equal(2);
      expect(placement).to.be.true;
    });
    it('it should move EAST', function() {
      process.movement("MOVE");
      expect(current_x).to.equal(2);
    });
    it('it should move EAST', function() {
      process.movement("MOVE");
      expect(current_x).to.equal(3);
    });
    it('it should turn left facing NORTH', function() {
      process.movement("LEFT");
      expect(currentCompassPos).to.equal('NORTH');
    });
    it('it should move NORTH', function() {
      process.movement("MOVE");
      expect(current_y).to.equal(3);
    });
    it('it should REPORT 3,3,WEST', function() {
      process.movement("REPORT");
      expect(current_x).to.equal(3);
      expect(current_y).to.equal(3);
      expect(currentCompassPos).to.equal('NORTH');
    });
  });

})

// mocha.run();
