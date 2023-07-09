const commentForm = document.getElementById("createCommentForm");

const newComment = async (event) => {
  event.preventDefault();
  const post_id = document.getElementById("userPost").dataset.id;
  const comment = document.getElementById("commentContentInput").value;

  const createdComment = await axios.post("/api/comments/create", {
    comment,
    post_id,
  });

  if (createdComment.status === 200) {
    alert('Comment created!')
    window.location.reload(true);
  }
};

commentForm.addEventListener("submit", newComment);
