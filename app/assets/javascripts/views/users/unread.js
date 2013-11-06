SavedPages.Views.Unread = Backbone.View.extend({
  template: JST["users/unread"],
  
  render: function() {
    var renderedContent = this.template({
      bookmarks: this.collection
    });
    
    this.$el.html(renderedContent);
    return this;
  }
  
});