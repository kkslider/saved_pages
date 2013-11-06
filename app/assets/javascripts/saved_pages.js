window.SavedPages = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // savedpages.store.bookmarks
    SavedPages.bookmarks = new SavedPages.Collections.Bookmarks();
    new SavedPages.AppRouter({
      $rootEl: $("#content")
    });
    Backbone.history.start();
    // SavedPages.bookmarks.fetch({
    //   success: function() {
    //     alert('hi');
    //     // console.log("success!");
    //     new SavedPages.AppRouter({
    //       $rootEl: $("#content")
    //     });
    //     Backbone.history.start();
    //   }
    // });
  }
};

$(document).ready(function(){
  SavedPages.initialize();
});
