const loginFormEl = document.getElementById("loginForm");

const login = async (event) => {
  event.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  if (username && password) {
    try {
      const response = await axios.post("/api/user/login", {
        username,
        password,
      });

      if (response.status === 200) {
        alert("Account Logged In!");
        window.location.replace("/");
      }
    } catch (err) {
      alert("Username or password invalid!");
      window.location.reload();
    }
  } else alert("Username or password invalid!");
};

loginFormEl.addEventListener("submit", login);
