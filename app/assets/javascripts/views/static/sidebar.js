SavedPages.Views.Sidebar = Backbone.View.extend({
  events: {
    "mouseover a": "mouseOverNav",
    "mouseout a": "mouseOutNav",  
  },
  
  
  template: JST["static/sidebar"],  
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },
  
  show: function(pageType) {
    if (SavedPages.currentNav) {
      $('#' + SavedPages.currentNav).css('background-color', '#222222');
      $('#' + SavedPages.currentNav).css('color', '#999999');
      $('#' + SavedPages.currentNav).children('span').eq(0).css('color', '#999999');
    }
    $('#' + pageType + '_link').css('background-color', '#333333');
    $('#' + pageType + '_link').css('color', '#ffffff');
    $('#' + pageType + '_link').children('span').eq(0).css('color', '#ffffff');
    SavedPages.currentNav = pageType + "_link"
    // alert('hello');
  },
  
  mouseOverNav: function() {
    if ($(event.target).attr("id") == SavedPages.currentNav) {
      return;
    }
    $(event.target).css('background-color', '#ca2017');
    $(event.target).css('color', '#ffffff');
    $(event.target).children('span').eq(0).css('color', '#ffffff');
  },
  
  mouseOutNav: function() {
    if ($(event.target).attr("id") == SavedPages.currentNav) {
      return;
    }
    $(event.target).css('background-color', '#222222');
    $(event.target).css('color', '#999999');
    $(event.target).children('span').eq(0).css('color', '#999999');
  }
  
  
  
});