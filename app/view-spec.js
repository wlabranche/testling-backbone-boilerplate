var expect = chai.expect;

var Model = require( "./model" );
var View = require( "./view" );

var view;
var model;

var body = $("body");

beforeEach(function() {
  model = new Model({
    firstName: "John",
    lastName: "Doe",
    age: 30
  });
  view = new View({
    model: model
  });
  view.render();
  return body.append(view.$el);
});

afterEach(function() {
  return view.remove();
});

describe("View", function() {
  it("Should have a displayContents method", function() {
    return expect(view.displayContents).to.be.a("function");
  });
  it("Should have rendered correctly", function() {
    var td, tr;
    tr = $("tr");
    td = $("td");
    expect(tr.length).to.equal(2);
    return expect(td.length).to.equal(6);
  });
  return it("Should have working events", function() {
    $(".cell.first-name").click();
    expect(window.lastContent).to.equal("John");
    $(".cell.last-name").click();
    expect(window.lastContent).to.equal("Doe");
    $(".cell.age").click();
    return expect(window.lastContent).to.equal("30");
  });
});
