import { useState } from "react";
import FormInput from "./FormInput";

function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    let newErrors = {};

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Login Successful 🎉");
    }
  };

  return (
    <div style={{ padding: "20px", width: "300px" }}>
      <h2>Login Form</h2>

      <FormInput
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
      />

      <FormInput
        label="Password"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        error={errors.password}
      />

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default App;
