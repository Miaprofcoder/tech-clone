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
      window.location.replace("/login");
    }
  } else alert("Enter Username or password.");
};

loginFormEl.addEventListener("submit", login);
