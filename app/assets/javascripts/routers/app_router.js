SavedPages.AppRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "u": "showUnread",
    "users/new": "newUser",
    "liked": "showLiked",
    "archive": "showArchive",
  },
  
  newUser: function() {
    var newUserView = new SavedPages.Views.NewUser();
    this._swapView(newUserView);
  },
  
  showUnread: function() {
    SavedPages.bookmarks.fetch({
      success: function() {
        alert('hi');
      }
    });
    
    var unreadView = new SavedPages.Views.Unread({
      collection: new Bookmarks(SavedPages.bookmarks.where({ is_archived: false }))
    });      
    // 
    // if ($("#sidebar").length === 0) {
    //   showSidebar();
    // }
    
    this._swapView(unreadView);
  },
  
  showLiked: function() {
    var likedView = new SavedPages.Views.Liked({
      collection: new Bookmarks(SavedPages.bookmarks.where({ is_favorited: true }))
    });
    
    this._swapView(likedView);
  },
  
  showArchive: function() {
    var archiveView = new SavedPages.Views.Archive({
      collection: new Bookmarks(SavedPages.bookmarks.where({ is_archied: true }))
    });
    
    this._swapView(archiveView);
  },
  
  // showSidebar: function() {
  //   var sidebarView = new SavedPages.Views.Sidebar();
  //   
  //   
  //   this.$sidebarEl.html(sidebarView).before($("#content"));
  //   // this.$sidebarEl.html(sidebarView);
  // },
  // 
  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
  
});