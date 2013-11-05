SavedPages.Views.Archive = Backbone.View.extend({
  template: JST["bookmarks/archive"],
  
  render: function() {
    var renderedContent = this.template({
      bookmarks: this.collection
    });
    
    this.$el.html(renderedContent);
    return this;
  }
});