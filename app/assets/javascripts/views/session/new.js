SavedPages.Views.NewSession = Backbone.View.extend({
  events: {
    "click input[type='submit']": "submit"
  },
  
  template: JST["session/new"],
  
  render: function() {
    var renderedContent = this.template();
    
    this.$el.html(renderedContent);
    return this;
  },
  
  submit: function(event) {
    event.preventDefault();
    
    var attrs = $(event.target.form).serializeJSON();
    
    this.model.set(attrs);
    var that = this;
    this.model.save({}, {
      success: function() {
        SavedPages.current_user = that.model.get("user").email
        $("#user").html(SavedPages.current_user);
        Backbone.history.navigate("/u", { trigger: true });
      }
    });
  }
  
  
});