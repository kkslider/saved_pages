Bookmarks = SavedPages.Collections.Bookmarks = Backbone.Collection.extend({
  model: SavedPages.Models.Bookmark,
  
  url: "/u",  
  
  comparator: function (bookmark) {
    return - new Date(Date.parse(bookmark.get('created_at'))).getTime();
  },
  
  parse: function(response) {
    this.page = response.page;
    this.total_pages = response.total_pages;
    return response.models;
  }
});