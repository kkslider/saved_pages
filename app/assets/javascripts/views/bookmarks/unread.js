SavedPages.Views.Unread = Backbone.View.extend({
  events: {
    "mouseover .bookmark_row": "mouseOverBookmark",
    "mouseout .bookmark_row": "mouseOutBookmark",
    "click .like_bookmark": "likeBookmark",
    "click .archive_bookmark": "archiveBookmark",
    "click .delete_bookmark": "deleteBookmark",
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
  },
  
  archiveBookmark: function(event) {
    event.preventDefault();
    var bookmarkId = $(event.currentTarget).attr("data-bookmark-id");
    var bookmark = SavedPages.bookmarks.get(bookmarkId);
    bookmark.archive_this();
    
    $(event.target).parent().parent().parent().parent().parent().parent().hide("slide", 
      { direction: "right" });
  },
  
  deleteBookmark: function(event) {
    event.preventDefault();
    var response = confirm("Are you sure you want to permanently delete this article?");
    if (response) {
      var bookmarkId = $(event.currentTarget).attr("data-bookmark-id");
      var bookmark = SavedPages.bookmarks.get(bookmarkId);
      alert(bookmarkId);
      // alert(bookmark);
      // bookmark.destroy({
      //   success: function(model, response) {
      //     
      //     $(event.target).parent().parent().parent().parent().parent().parent().hide("slide", { direction: "up" });
      //     Backbone.history.navigate("/", { trigger: true });
      //   }
      // });
      bookmark.destroy();
      $(event.target).parent().parent().parent().parent().parent().parent().hide("slide", { direction: "up" });
    }
  }
  
});