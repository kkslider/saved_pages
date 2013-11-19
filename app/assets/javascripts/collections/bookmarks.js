Bookmarks = SavedPages.Collections.Bookmarks = Backbone.Collection.extend({
  model: SavedPages.Models.Bookmark,
  
  url: "/u",  
  
  parse: function(response) {
    this.page = response.page;
    this.total_pages = response.total_pages;
    return response.models;
  }
});