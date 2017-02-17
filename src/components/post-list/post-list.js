define(['knockout', 'text!./post-list.html'], function(ko, templateMarkup) {

  function PostList(params) {
    var self = this;
    self.posts = ko.observableArray();

    self.getPosts = function(){
      return[{
        id:1,
        title:'swag',
        img:'./images/coole-socke.png',
        date:'14.02.2017'
      },
      {
        id:2,
        title:'blablablaabla',
        img:'./images/coole-socke.png',
        date:'12.02.2017'
      },
      {
        id:3,
        title:'whuuhuhuhuhuhu',
        img:'./images/coole-socke.png',
        date:'10.02.2017'
      }]
    };
    self.posts(self.getPosts());
    console.log(self.posts());
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  PostList.prototype.dispose = function() { };

  return { viewModel: PostList, template: templateMarkup };

});
