SavedPages.Views.Unread = Backbone.View.extend({
  template: JST["bookmarks/unread"],
  
  render: function() {
    var renderedContent = this.template({
      bookmarks: this.collection
    });
    
    this.$el.html(renderedContent);
    return this;
  }
  
});