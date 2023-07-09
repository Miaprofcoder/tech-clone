const updatePostBtn = document.getElementById("submitPostUpdate");

const updatePost = async () => {
  const updatedTitle = document.getElementById("updateTitleInput").value;
  const updatedContent = document.getElementById("updateContentInput").value;
  const updatePostId = document.getElementById("userPost").dataset.id;
  const updatedPost = await axios.put(`api/posts/update/${updatePostId}`, {
    title: updatedTitle,
    content: updatedContent,
  });
  if (updatedPost.status === 200) {
    alert("Post updated!");
    window.location.reload();
    console.log(updatedPost);
  } else {
    alert("There was an error updating your post!");
    console.log(updatedPost);
  }
};

updatePostBtn.addEventListener("click", updatePost);
