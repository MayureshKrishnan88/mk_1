"use client";  // Ensures this is a Client Component

import SearchBar from "./components/SearchBar";
import UserForm from "./components/UserForm";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <SearchBar />
      <UserForm />
    </div>
  );
}
