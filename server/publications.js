Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('comments', function() {
  return Comments.find();
<<<<<<< HEAD
});
=======
})
>>>>>>> 59b62f5981857cfdab6fcd1ea1b4f548b06790a5
