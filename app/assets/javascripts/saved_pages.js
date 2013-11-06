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
    SavedPages.current_user = JSON.parse($("#bootstrapped_user_json").html()).current_user.email;
    alert(JSON.stringify(SavedPages.current_user));
    Backbone.history.start();
  }
};


$(document).ready(function(){
  SavedPages.initialize(); 
});
