const createPostFormEl = document.getElementById("createPostForm");

const createPost = async (event) => {
  event.preventDefault();
  const title = document.getElementById("postTitleInput").value;
  const content = document.getElementById("postContentInput").value;

  const response = await axios.post("/api/posts/create", {
    title,
    content,
  });
  if (response.status === 200) {
    alert('Post created!');
    window.location.replace('/')
  }
};

createPostFormEl.addEventListener("submit", createPost);
