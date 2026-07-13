var posts=["tech/58871.html","tech/28493.html","life/42815.html","recommends/98de12e.html","tech/1ef6d324.html","life/418.html","life/60749.html"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };