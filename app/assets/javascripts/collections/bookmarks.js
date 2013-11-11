Bookmarks = SavedPages.Collections.Bookmarks = Backbone.Collection.extend({
  model: SavedPages.Models.Bookmark,
  
  url: "/u",  
  
  comparator: function (bookmark) {
    return - new Date(Date.parse(bookmark.get('created_at'))).getTime();
  }
});