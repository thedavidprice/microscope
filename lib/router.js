Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
<<<<<<< HEAD
  waitOn: function() { return [Meteor.subscribe('posts'), Meteor.subscribe('comments')];  }
=======
  waitOn: function() { 
    return [Meteor.subscribe('posts'), Meteor.subscribe('comments')];
  }
>>>>>>> 59b62f5981857cfdab6fcd1ea1b4f548b06790a5
});

Router.map(function() {
  this.route('postsList', {path: '/'});
  
  this.route('postPage', {
    path: '/posts/:_id',
    waitOn: function() {
      return Meteor.subscribe('comments', this.params._id);    
    },
    data: function() { return Posts.findOne(this.params._id); }
  });

  this.route('postEdit', {
    path: '/posts/:_id/edit',
    data: function() { return Posts.findOne(this.params._id); }
  });
  
  this.route('postSubmit', {
    path: '/submit'
  });
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    
    this.stop();
  }
}

Router.before(requireLogin, {only: 'postSubmit'})
Router.before(function() { clearErrors() });
