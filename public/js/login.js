const loginFormEl = document.getElementById("loginForm");

const login = async (event) => {
  event.preventDefault();
  const username = document.getElementById("inputUsername").value;
  const password = document.getElementById("inputPassword").value;

  if (username && password) {
    const response = await axios.post("/api/user/login", {
      username,
      password,
    });

    if (response.status === 200) {
      alert("Account Logged In!");
      window.location.replace("/");
    }
  } else alert("Username or password invalid!");
};

loginFormEl.addEventListener("submit", login);
