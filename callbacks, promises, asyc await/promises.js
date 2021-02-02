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
  }, 1000);
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

// createPosts({title: 'Post Three', body: 'This is post three'})
//   .then(getPosts)
//   .catch(error => console.error(error));

//Async-await it's way to handle responses
async function init() {
  //await wait for async processor action to complete
  await createPosts({title: 'Post Three', body: 'This is post three'})//waiting this to get done before we move on and call getPosts() function

  getPosts();
}

init();


/*
//Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Goodbye'));
const promise4 = fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json())

Promise.all([promise1,promise2,promise3, promise4])
  .then(result => console.log(result))
  .catch(err => console.error(err))

*/

