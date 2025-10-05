var posts=["2025/09/29/比较便宜的VPS推广之CloudCone/","2025/09/27/没有服务器，如何用github创建自己的Hexo的博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };