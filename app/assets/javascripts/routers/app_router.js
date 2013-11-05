SavedPages.AppRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "u": "showUnread",
  },
  
  showUnread: function() {
    var unreadView = new SavedPages.Views.Unread({
      collection: SavedPages.bookmarks
    });      
    
    this._swapView(unreadView);
  },
  
  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
  
  
});