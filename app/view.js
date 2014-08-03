module.exports = Backbone.View.extend({
  initialize: function() {
    this.lastDisplayed = "";
  },

  tagName: "table",

  template: _.template("<tr>\n  <td>First Name</td>\n  <td>Last Name</td>\n  <td>Age</td>\n</tr>\n<tr>\n  <td class=\"cell first-name\"><%= firstName %></td>\n  <td class=\"cell last-name\"><%= lastName %></td>\n  <td class=\"cell age\"><%= age %></td>\n</tr>"),

  events: {
    "click .cell": "displayContents"
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  displayContents: function(evt) {
    this.lastDisplayed = evt.target.innerHTML;
  }

});
