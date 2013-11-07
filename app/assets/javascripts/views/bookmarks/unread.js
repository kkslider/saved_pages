SavedPages.Views.Unread = Backbone.View.extend({
  events: {
    "mouseover div.bookmark": "mouseOverBookmark",
    "mouseout div.bookmark": "mouseOutBookmark",
  },
  
  template: JST["bookmarks/unread"],
  
  render: function() {
    var renderedContent = this.template({
      bookmarks: this.collection
    });
    // $("#sidebar").html("<span>hellooo</span>");
    this.$el.html(renderedContent);
    return this;
  },
  
  mouseOverBookmark: function(event) {
    $(event.currentTarget).css('background-color', '#fafafa');
    // $(event.currentTarget).find("a").css('color', '#ba0f06');
    $("a", event.currentTarget).css('color', '#ba0f06');
  },
  
  mouseOutBookmark: function(event) {
    $(event.currentTarget).css('background-color', '#ffffff');
    // $(event.currentTarget).find("a").css('color', '#000000');
    $("a", event.currentTarget).css('color', '#000000');
    
  }
  
});