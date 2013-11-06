Bookmarks = SavedPages.Collections.Bookmarks = Backbone.Collection.extend({
  model: SavedPages.Models.Bookmark,
  
  url: "/u",
  
  setCurrentUser: function(user) {
    this.current_user = new SavedPages.Models.User(user);
  },
  
  parse: function(response, options) {
    this.setCurrentUser(response.current_user);
    delete response.current_user
    
    return response.bookmarks
  }
  
  
});