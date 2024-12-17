let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");

let posts = JSON.parse(localStorage.getItem("posts")) || [];
const currentUser = JSON.parse(localStorage.getItem("current_user"));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Note cannot be blank";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};

let savePosts = () => {
  localStorage.setItem("posts", JSON.stringify(posts)); // Save posts array to localStorage
};

let acceptData = () => {
  const createdAt = new Date(); // Add timestamp for the new post
  const post = { text: input.value, createdAt, user: currentUser.email };
  posts.push(post); // Add new post to the array
  input.value = ""; // Clear input field
  savePosts();
  showPosts();
};

let showPosts = () => {
  console.log("posts", posts);
  const postsDOM = document.getElementById("posts");
  postsDOM.innerHTML = ""; // Clear previous posts
  posts.forEach((post, index) => {
    if (post.user === currentUser.email) {
      const postDOM = document.createElement("div");
      postDOM.className = `post id-${index}`;
      postDOM.innerHTML = `
      <p>${post.text}</p>
      <span class="options">
      <span>${timeAgo(post.createdAt)}</span>
      <i onClick="editPost(${index})" class="fas fa-edit"></i>
      <i onClick="deletePost(${index})" class="fas fa-trash-alt"></i>
      </span>
      `;
      postsDOM.appendChild(postDOM);
    }
  });
};

let editPost = (index) => {
  const post = posts[index];
  input.value = post.text; // Load post text into the input for editing
  deletePost(index); // Delete the old post so the updated one can replace it
};

let deletePost = (index) => {
  posts.splice(index, 1); // Remove the post from the array
  savePosts();
  showPosts(); // Refresh the displayed posts
};

function timeAgo(date) {
  const dateObj = new Date(date);
  const now = new Date();
  const seconds = Math.floor((now - dateObj) / 1000); // Difference in seconds

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  }

  const days = Math.floor(hours / 24);
  return `${days} day${days === 1 ? '' : 's'} ago`;
}


showPosts();
