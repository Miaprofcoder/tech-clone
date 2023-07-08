const registerFormEl = document.getElementById("registerForm");

const register = async (event) => {
  event.preventDefault();
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  if (username && password) {
    const response = await axios.post("/api/user/register", {
      username,
      password,
    });

    if (response.status === 200) {
      alert("Account Registered!");
      window.location.replace("/");
    }
  } else alert("Please input a valid username & password.");
}
registerFormEl.addEventListener("submit", register);