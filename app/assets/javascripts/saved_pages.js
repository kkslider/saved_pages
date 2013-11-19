window.SavedPages = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    SavedPages.bookmarks = new SavedPages.Collections.Bookmarks();
    
    new SavedPages.AppRouter({
      $rootEl: $("#content"),
      $sidebarEl: $("#sidebar")
    });
    if (JSON.parse($("#bootstrapped_user_json").html()).current_user !== null) {
      SavedPages.current_user = JSON.parse($("#bootstrapped_user_json").html()).current_user.email;
    }
    
    Backbone.history.start();
  }
};


$(document).ready(function(){
  SavedPages.initialize(); 
});
