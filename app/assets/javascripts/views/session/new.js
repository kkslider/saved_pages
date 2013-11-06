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
    
    this.model.save({}, {
      success: function() {
        Backbone.history.navigate("/u", { trigger: true });
      }
    });
  }
  
  
});