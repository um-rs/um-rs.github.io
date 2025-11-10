var posts=["posts/1acea302.html","posts/f3a883b3.html","posts/11e210a8.html","posts/b5b7f64d.html","posts/1.html","posts/a8c5676e.html","posts/6ad3431c.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };