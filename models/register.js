import { register } from "../backend/controllers/user";

const handleRegister = async () => {
  try {
    // Make sure to call your API and handle responses properly
    await register({ email, fullName, username, password });
    navigation.navigate("Login");
  } catch (error) {
    console.error("Registration failed", error);
  }
};

module.exports = {
  handleRegister,
};
