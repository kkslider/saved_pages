SavedPages.AppRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.$sidebarEl = options.$sidebarEl;
  },
  
  routes: {
    "u/:page" : "showUnread",
    // "u?page=:page": "showUnread",
    "u": "showUnread",
    "users/new": "newUser",
    "liked/:page": "showLiked",
    "liked": "showLiked",
    "archive": "showArchive",
    "session/new": "newSession",
    "bookmarks/:id/edit": "editBookmark",
    // "bookmarks/:id": "destroyBookmark"
  },
  
  newUser: function() {
    var newUserView = new SavedPages.Views.NewUser();
    this._swapView(newUserView);
  },
  
  showUnread: function(pageNum) {
    $("#sidebar").show();
    $("#content").addClass("col-md-10");
    var that = this;
    pageNum = typeof pageNum !== "undefined" ? pageNum : 1
    
    SavedPages.bookmarks.fetch({
      remove: true,
      data: { page: pageNum, unread: true },
      success: function(collection, model, options) {
        var unreadView = new SavedPages.Views.Unread({
          collection: SavedPages.bookmarks
        });
        
        if ($("#sidebar").is(':empty')) {
          that.sidebarView = new SavedPages.Views.Sidebar();
          that.$sidebarEl.html(that.sidebarView.render().$el);
        }
        
        
        that._swapView(unreadView);
        that.sidebarView.show('unread');
      }
    });
  },
  
  showLiked: function(pageNum) {
    var that = this;
    pageNum = typeof pageNum !== "undefined" ? pageNum : 1
    
    SavedPages.bookmarks.fetch({
      remove: true,
      data: { page: pageNum, liked: true },
      success: function() {
        var likedView = new SavedPages.Views.Liked({
          collection: SavedPages.bookmarks
        });
        if ($("#sidebar").is(':empty')) {
          that.sidebarView = new SavedPages.Views.Sidebar();
      
          that.$sidebarEl.html(that.sidebarView.render().$el);
        }
        
        that._swapView(likedView);
        that.sidebarView.show('liked');
      }
    });
  },
  
  showArchive: function(pageNum) {
    var that = this;
    pageNum = typeof pageNum !== "undefined" ? pageNum : 1
    
    SavedPages.bookmarks.fetch({
      remove: true,
      data: { page: pageNum, archived: true },
      success: function() {
        var archiveView = new SavedPages.Views.Archive({
          collection: SavedPages.bookmarks
        });
        
        if ($("#sidebar").is(':empty')) {
          that.sidebarView = new SavedPages.Views.Sidebar();
      
          that.$sidebarEl.html(that.sidebarView.render().$el);
        }
        
        that._swapView(archiveView);
        that.sidebarView.show('archive');
      }
    });
  },
  
  newSession: function() {
    var newSession = new SavedPages.Models.Session();
    var newSessionView = new SavedPages.Views.NewSession({
      model: newSession
    });
    
    this._swapView(newSessionView);
  },
  
  editBookmark: function(id) {
    var that = this;
    var editBookmarkView = new SavedPages.Views.EditBookmark({
      model: SavedPages.bookmarks.get(id)
    });
    if ($("#sidebar").is(':empty')) {
      that.sidebarView = new SavedPages.Views.Sidebar();
  
      that.$sidebarEl.html(that.sidebarView.render().$el);
    }
    
    that._swapView(editBookmarkView);
  },
  
  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
  
});