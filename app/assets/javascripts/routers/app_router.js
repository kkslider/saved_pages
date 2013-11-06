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
  },
  // 
  // var loadSidebar: function() {
  //   var sidebarView = new SavedPages.Views.Sidebar();
  //     
  //     
  //   this.$sidebarEl.html(sidebarView.render().$el);
  //   // this.$sidebarEl.html(sidebarView);
  // },
  
  newUser: function() {
    var newUserView = new SavedPages.Views.NewUser();
    this._swapView(newUserView);
  },
  
  showUnread: function() {
    var that = this;
    SavedPages.bookmarks.fetch({
      success: function() {
        // alert('hi');
        var unreadView = new SavedPages.Views.Unread({
          collection: new Bookmarks(SavedPages.bookmarks.where({ is_archived: false }))
        });      
        if ($("#sidebar").is(':empty')) {
          // loadSidebar();
          var sidebarView = new SavedPages.Views.Sidebar();
      
          that.$sidebarEl.html(sidebarView.render().$el);
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
    
    // var likedView = new SavedPages.Views.Liked({
    //   collection: new Bookmarks(SavedPages.bookmarks.where({ is_favorited: true }))
    // });
    
    // this._swapView(likedView);
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
    
    // var archiveView = new SavedPages.Views.Archive({
    //   collection: new Bookmarks(SavedPages.bookmarks.where({ is_archived: true }))
    // });
    // 
    // this._swapView(archiveView);
  },
  
  newSession: function() {
    var newSession = new SavedPages.Models.Session();
    var newSessionView = new SavedPages.Views.NewSession({
      model: newSession
    });
    
    this._swapView(newSessionView);
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