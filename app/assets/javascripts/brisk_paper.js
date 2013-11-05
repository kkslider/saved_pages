window.SavedPages = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    SavedPages.bookmarks = new SavedPages.Collections.Bookmarks();
    
    SavedPages.bookmarks.fetch({
      success: function() {
        console.log("success!");
        new SavedPages.AppRouter({
          $rootEl: $("#content")
        });
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  SavedPages.initialize();
});
