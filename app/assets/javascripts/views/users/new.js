SavedPages.Views.NewUser = Backbone.View.extend({
  template: JST["users/new"],
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
  
});