var UntestedView;

module.exports = UntestedView = Backbone.View.extend({

  initialize: function () {
    this._private = "private"
    this.methodA();
    this.methodB();
    this.methodC();
    return this;
  },

  methodA: function () {
    console.log( this._private );
  },

  methodB: function () {
    console.log( this._private );
  },

  render: function () {
    generateViewHtml();
    appendViewToDom();
  }
});
