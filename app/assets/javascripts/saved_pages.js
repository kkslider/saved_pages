window.SavedPages = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // savedpages.store.bookmarks
    SavedPages.bookmarks = new SavedPages.Collections.Bookmarks();
    new SavedPages.AppRouter({
      $rootEl: $("#content"),
      $sidebarEl: $("#sidebar")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  SavedPages.initialize();
});
