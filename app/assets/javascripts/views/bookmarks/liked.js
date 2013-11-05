SavedPages.Views.Liked = Backbone.View.extend({
  template: JST["bookmarks/liked"],
  
  render: function() {
    var renderedContent = this.template({
      bookmarks: this.collection
    });
    
    this.$el.html(renderedContent);
    return this;
  }
});