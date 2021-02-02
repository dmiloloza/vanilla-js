const posts = [
  {
    title: 'Post One',
    body: 'This is post One'
  },
  {
    title: 'Post Two',
    body: 'This is post Two'
  }
];

function getPosts() {
  //acting like server with set timeout
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output
  }, 3000);
}

function createPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve(console.log('Success'));
      } else {
        reject('Error: Something went wrong');
      }
    }, 1000)
  })
}

createPosts({title: 'Post Three', body: 'This is post three'})
  .then(getPosts)
  .catch(error => console.error(error));
