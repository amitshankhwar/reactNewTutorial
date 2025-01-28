import React, { useState, lazy, Suspense } from "react";
// import UserProfile from "./UserProfile";

// Lazy load the UserProfile component
const UserProfile = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./UserProfile")), 3000); // 3 seconds delay
    })
);

const Login = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./Login")), 5000); // 3 seconds delay
    })
);

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      {/* Use Suspense to show a fallback while the component is being loaded */}

      <Suspense fallback={<div>Loading Profile...</div>}>
        <UserProfile />
      </Suspense>
      <Suspense fallback={<div>Loading Profile...</div>}>
        <Login />
      </Suspense>
    </div>
  );
}

export default Dashboard;
