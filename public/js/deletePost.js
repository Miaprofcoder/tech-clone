const deletePostBtn = document.getElementById("deletePostBtn");

const deletePost = async () => {
  const deletePostId = document.getElementById("userPost").dataset.id;
  const deletedPost = await axios.delete(`/api/posts/delete/${deletePostId}`);

  if (deletedPost.status === 200) {
    alert("Post deleted!");
    window.location.replace("/");
  }
};

deletePostBtn.addEventListener("click", deletePost);
