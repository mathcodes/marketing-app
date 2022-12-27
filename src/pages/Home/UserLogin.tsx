// Create a login p=comoennt with AuthO and use it in the Home page

// Compare this snippet from src/pages/Home/UserLogin.js:
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function UserLogin() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex justify-center">
      <button
        className="bg-primary text-white font-bold py-2 px-4 rounded"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    </div>
  );
}

export default UserLogin;