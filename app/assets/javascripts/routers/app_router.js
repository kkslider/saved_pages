SavedPages.AppRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "u": "showUnread",
    "liked": "showLiked",
  },
  
  showUnread: function() {
    var unreadView = new SavedPages.Views.Unread({
      collection: new Bookmarks(SavedPages.bookmarks.where({ is_archived: false }))
    });      
    
    this._swapView(unreadView);
  },
  
  showLiked: function() {
    var likedView = new SavedPages.Views.Liked({
      collection: new Bookmarks(SavedPages.bookmarks.where({ is_favorited: true }))
    });
    
    this._swapView(likedView);
  },
  
  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
  
});