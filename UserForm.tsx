"use client";  // Ensures this is a Client Component

import { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    experience: "",
    location: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    console.log("User Data:", formData);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{
        display: "flex", 
        flexDirection: "column", 
        gap: "10px", 
        width: "100%", 
        maxWidth: "300px", 
        margin: "auto", 
        marginTop: "20px"
      }}
    >
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" required />
      <input type="text" name="profession" value={formData.profession} onChange={handleChange} placeholder="Enter Profession" required />
      <input type="text" name="experience" value={formData.experience} onChange={handleChange} placeholder="Enter Experience (Years)" required />
      <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Enter Location" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password" required />
      <button type="submit">Submit</button>
    </form>
  );
}
