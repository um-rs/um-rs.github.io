var posts=["posts/a8c5676e.html","posts/f3a883b3.html","posts/1.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };