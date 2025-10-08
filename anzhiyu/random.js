var posts=["posts/98de12e.html","posts/1ef6d324.html","posts/28493.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };