const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async () => {
  const response = await axios.post("/api/user/logout");

  if (response.status === 200) {
    alert("Logged out!");
    window.location.replace("/");
  };
});
