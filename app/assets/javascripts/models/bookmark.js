SavedPages.Models.Bookmark = Backbone.Model.extend({
  urlRoot: "/bookmarks",
  
  like: function() {
    this.get("is_favorited") === true ? this.set("is_favorited", false) : this.set("is_favorited", true);
    this.save({}, {
      success: function() {
        // alert("nice!");
        // Backbone.history.navigate("/", { trigger: true });
      }
    })
  },
  
  archive_this: function() {
    this.get("is_archived") === true ? this.set("is_archived", false) : this.set("is_archived", true);
    this.save();
  },
  
  
  
});