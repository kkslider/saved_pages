SavedPages.Views.Sidebar = Backbone.View.extend({
  template: JST["static/sidebar"],
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});