const loginAuthBtn = document.getElementById("navLoginBtn");

const authLoginStatus = async () => {
  const response = await fetch("/api/user/auth").then((data) => data.json());

  if (response.message === "Logged In") {
    loginAuthBtn.textContent = response.username;
    loginAuthBtn.setAttribute("href", "/dashboard");
    return;
  } else {
    loginAuthBtn.textContent = "Login";
    loginAuthBtn.setAttribute("href", "/login");
    return;
  }
};

authLoginStatus();
