var blogTemplate = document.querySelector('#blog-card');
var blogContainer = document.querySelector('.row');

axios.get('http://localhost:3000/api/blogs').then(function(response) {
  var blogs = response.data;
  console.log(blogs);

  blogs.forEach(function(blog) {
    var blogClone = blogTemplate.content.cloneNode(true);

    blogClone.querySelector('.blog-name').innerText = blog.name;
    blogClone.querySelector('.blog-description').innerText = blog.description;


    blogContainer.appendChild(blogClone)



  });



});