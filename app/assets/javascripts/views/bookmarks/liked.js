SavedPages.Views.Liked = Backbone.View.extend({
  events: {
    "mouseover .bookmark_row": "mouseOverBookmark",
    "mouseout .bookmark_row": "mouseOutBookmark",
    "click .like_bookmark": "likeBookmark",
    "click .archive_bookmark": "archiveBookmark",
    "click .delete_bookmark": "deleteBookmark",
    "click .share_bookmark": "shareBookmark",
    "mouseover a.glyphicon_link": "mouseOverIcon",
    "mouseout a.glyphicon_link": "mouseOutIcon",
  },
  
  template: JST["bookmarks/liked"],
  
  render: function() {
    var renderedContent = this.template({
      bookmarks: this.collection
    });
    
    this.$el.html(renderedContent);
    return this;
  },
  
  mouseOverBookmark: function(event) {
    $(event.currentTarget).css('background-color', '#fafafa');
    $("a", event.currentTarget).css('color', '#ba0f06');
    $(".options", event.currentTarget).show();
  },
  
  mouseOutBookmark: function(event) {
    $(event.currentTarget).css('background-color', '#ffffff');
    $("a", event.currentTarget).css('color', '#000000');
    $(".options", event.currentTarget).hide();
  },
  
  likeBookmark: function(event) {
    event.preventDefault();
    var bookmarkId = $(event.currentTarget).attr("data-bookmark-id");
    var bookmark = SavedPages.bookmarks.get(bookmarkId);
    bookmark.like();
    var that = $(event.currentTarget);
    $(event.currentTarget).effect({ effect: "puff", complete: function() {
      that.fadeIn();
      
      var heart = that.children('span').eq(0)
      
      heart.toggleClass("heartToggle");
      if (heart.hasClass("heartToggle")) {
        heart.attr("title", "Unfavorite")
      } else {
        heart.attr("title", "Favorite")
      }
    }});
  },
  
  
  deleteBookmark: function(event) {
    event.preventDefault();
    var response = confirm("Are you sure you want to permanently delete this article?");
    if (response) {
      var bookmarkId = $(event.currentTarget).attr("data-bookmark-id");
      var bookmark = SavedPages.bookmarks.get(bookmarkId);
      bookmark.destroy();
      $(event.target).parents().eq(5).hide("slide", { direction: "up" });
    }
  },
  
  shareBookmark: function(event) {
    event.preventDefault();
    var bookmarkId = $(event.currentTarget).parents().eq(4).children().eq(0).attr("data-bookmark-id");
    var bookmark = SavedPages.bookmarks.get(bookmarkId);
    var bookmarkTitle = bookmark.get("title");
    var bookmarkURL = bookmark.get("url");
    window.location.href = "mailto:?subject=" + bookmarkTitle + "&body=" + bookmarkTitle + "%0D%0A" + bookmarkURL + 
      "%0D%0A%0D%0A" + "(via SavedPages)";
  },
  
  mouseOverIcon: function(event) {
    $(event.target).css('color', '#333333');
  },
  
  mouseOutIcon: function(event) {
    if ($(event.currentTarget).hasClass("heartToggle")) {
          $(event.target).css('color', '#c10000')
        } else {
          $(event.target).css('color', '#999999'); 
        }
  }
});