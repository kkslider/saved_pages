SavedPages.Views.Sidebar = Backbone.View.extend({
  template: JST["static/sidebar"],  
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },
  
  show: function(pageType) {
    $('#' + pageType + '_link').css("background-color", "#333333");
    $('#' + pageType + '_link').css("color", "#FFFFFF");
    // alert('hello');
    
  }
});