const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;

      if (!error) resolve();
      else reject("Error : Something went wrong");
    }, 2000);
  });
}

createPost({ title: "Post three", body: "This is post three" })
  .then(getPosts)
  .catch((err) => console.log(err));

// Promise.all

const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve) => setTimeout(resolve, 2000, "Goodbye"));

const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())

console.log(promise3.then(output => console.log(output)))

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);

console.log("Hello", Promise.all([promise1, promise2, promise3]))

// // async/ await

async function init() {
  await createPost({ title: "Post three", body: "This is post three" });
  getPosts();
}

init();

// async/await with fetch

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = res.json();
  // data.then(data => console.log(data))
  // console.log("Hello", data);

  const data = await res.json();
  console.log(data);
}

fetchUsers();
