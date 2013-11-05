window.SavedPages = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    SavedPages.bookmarks = new SavedPages.Collections.Bookmarks();
    
  }
};

$(document).ready(function(){
  SavedPages.initialize();
});
