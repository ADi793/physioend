import axios from "axios";

async function signIn(user) {
  const { data: userData } = await axios.post(
    "https://myphysio.digitaldarwin.in/api/login/",
    user
  );
  localStorage.setItem("user", JSON.stringify(userData));
}

function signOut() {
  localStorage.removeItem("user");
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export default {
  signIn,
  signOut,
  getCurrentUser,
};
