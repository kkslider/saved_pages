SavedPages.Views.Save = Backbone.View.extend({
  template: JST["static/save"],
  
  render: function() {
    var renderedContent = this.template();
    
    this.$el.html(renderedContent);
    return this;
  }
});