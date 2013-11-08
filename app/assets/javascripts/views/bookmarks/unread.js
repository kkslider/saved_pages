SavedPages.Views.Unread = Backbone.View.extend({
  events: {
    "mouseover .bookmark_row": "mouseOverBookmark",
    "mouseout .bookmark_row": "mouseOutBookmark",
    "click #like_bookmark": "likeBookmark",
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
    $(".options", event.currentTarget).show();
  },
  
  mouseOutBookmark: function(event) {
    $(event.currentTarget).css('background-color', '#ffffff');
    // $(event.currentTarget).find("a").css('color', '#000000');
    $("a", event.currentTarget).css('color', '#000000');
    $(".options", event.currentTarget).hide();
  },
  
  likeBookmark: function(event) {
    event.preventDefault();
    var bookmarkId = $(event.currentTarget).attr("data-bookmark-id");
    var bookmark = SavedPages.bookmarks.get(bookmarkId);
    bookmark.like();
    // $(event.currentTarget).toggle("puff");
    var that = $(event.currentTarget);
    $(event.currentTarget).effect({ effect: "puff", complete: function() {
      that.fadeIn();
    }});
    
  }
  
});