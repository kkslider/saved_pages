SavedPages.AppRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.$sidebarEl = options.$sidebarEl;
  },
  
  routes: {
    "u": "showUnread",
    "users/new": "newUser",
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
  
  showUnread: function() {
    var that = this;
    
    SavedPages.bookmarks.fetch({
      success: function(collection, model, options) {
        // alert('hi');
        var unreadView = new SavedPages.Views.Unread({
          collection: new Bookmarks(SavedPages.bookmarks.where({ is_archived: false }))
        });
        
        if ($("#sidebar").is(':empty')) {
          // loadSidebar();
          that.sidebarView = new SavedPages.Views.Sidebar();
          // var sidebarView = new SavedPages.Views.Sidebar();
          that.sidebarView.show();
          that.$sidebarEl.html(that.sidebarView.render().$el);
        }
        
        that._swapView(unreadView);
      }
    });
  },
  
  showLiked: function() {
    var that = this;
    SavedPages.bookmarks.fetch({
      success: function() {
        // alert('hi');
        var likedView = new SavedPages.Views.Liked({
          collection: new Bookmarks(SavedPages.bookmarks.where({ is_favorited: true }))
        });
        if ($("#sidebar").is(':empty')) {
          // loadSidebar();
          var sidebarView = new SavedPages.Views.Sidebar();
      
          that.$sidebarEl.html(sidebarView.render().$el);
        }
        
        that._swapView(likedView);
      }
    });
  },
  
  showArchive: function() {
    var that = this;
    SavedPages.bookmarks.fetch({
      success: function() {
        // alert('hi');
        var archiveView = new SavedPages.Views.Archive({
          collection: new Bookmarks(SavedPages.bookmarks.where({ is_archived: true }))
        });
        if ($("#sidebar").is(':empty')) {
          // loadSidebar();
          var sidebarView = new SavedPages.Views.Sidebar();
      
          that.$sidebarEl.html(sidebarView.render().$el);
        }
        
        that._swapView(archiveView);
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
    
    SavedPages.bookmarks.fetch({
      success: function() {
        // alert('hi');
        var editBookmarkView = new SavedPages.Views.EditBookmark({
          model: SavedPages.bookmarks.get(id)
        });
        if ($("#sidebar").is(':empty')) {
          // loadSidebar();
          var sidebarView = new SavedPages.Views.Sidebar();
      
          that.$sidebarEl.html(sidebarView.render().$el);
        }
        
        that._swapView(editBookmarkView);
      }
    });
  },
  
  // destroyBookmark: function(id) {
  //   var that = this;
  //   SavedPages.bookmarks.fetch({
  //     success: function() {
  //       // alert('hi');
  //       // var editBookmarkView = new SavedPages.Views.EditBookmark({
  //       //   model: SavedPages.bookmarks.get(id)
  //       // });
  //       if ($("#sidebar").is(':empty')) {
  //         // loadSidebar();
  //         var sidebarView = new SavedPages.Views.Sidebar();
  //     
  //         that.$sidebarEl.html(sidebarView.render().$el);
  //       }
  //       
  //       // that._swapView(editBookmarkView);
  //       var bookmark = SavedPages.bookmarks.get(id);
  //       bookmark.destroy({
  //         success:function() {
  //           alert("DESTROYED!");
  //         }
  //       });
  //     }
  //   });
  // },
  
  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
  
});