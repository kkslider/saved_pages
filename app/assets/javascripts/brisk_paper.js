window.SavedPages = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert("nice!");
    SavedPages.bookmarks = new SavedPages.Collections.Bookmarks();
    
    SavedPages.bookmarks.fetch({
      success: function() {
        alert("success!");
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
