var Model = require( "./model" );

var expect = chai.expect;

var model;

var body = $("body");

beforeEach(function() {
  model = new Model({
    firstName: "John",
    lastName: "Doe",
    age: 30
  });
});

describe("Model", function() {
  it("Should be a function", function () {
    expect(Model).to.be.a("function");
  });
});

describe("Model instances", function() {
  it("Should be an instance of Model", function() {
    expect(model).to.be.instanceof(Model);
  })
  it("Should have a firstName property", function() {
    expect(model.get("firstName")).to.exist;
    return expect(model.get("firstName")).to.equal("John");
  });
  it("Should have a lastName property", function() {
    expect(model.get("lastName")).to.exist;
    return expect(model.get("lastName")).to.equal("Doe");
  });
  it("Should have an age property", function() {
    expect(model.get("age")).to.exist;
    return expect(model.get("age")).to.equal(30);
  });
  return it("Should have a working fullName method", function() {
    var fn;
    expect(model.fullName).to.be.a("function");
    fn = model.fullName();
    return expect(fn).to.equal("John Doe");
  });
});
