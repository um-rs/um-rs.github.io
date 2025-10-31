var posts=["posts/b5b7f64d.html","posts/1.html","posts/f3a883b3.html","posts/a8c5676e.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };