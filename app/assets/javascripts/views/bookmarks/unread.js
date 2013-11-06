SavedPages.Views.Unread = Backbone.View.extend({
  template: JST["bookmarks/unread"],
  
  render: function() {
    var renderedContent = this.template({
      bookmarks: this.collection,
      user: this.collection.current_user
    });
    // $("#sidebar").html("<span>hellooo</span>");
    this.$el.html(renderedContent);
    return this;
  }
  
});