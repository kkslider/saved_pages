SavedPages.Views.EditBookmark = Backbone.View.extend({
  events: {
    "click input[type='submit']": "updateBookmark",
  },
  
  template: JST["bookmarks/edit"],
  
  render: function() {
    var renderedContent = this.template({
      bookmark: this.model,
      title: "Edit Article"
    });
    
    this.$el.html(renderedContent);
    return this;
  },
  
  updateBookmark: function(event) {
    event.preventDefault();
    
    var formData = $(event.target.form).serializeJSON();
    this.model.set(formData);
    this.model.save({}, {
      success: function() {
        Backbone.history.navigate("u", { trigger: true });
      }
    });
  }
  
});