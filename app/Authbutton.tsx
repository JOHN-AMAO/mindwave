"use client";
import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import React from "react";

const Button = () => {
  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };
  return (
    <>
      <button onClick={handleSignIn}>Log in</button>
      <button onClick={handleSignOut}>Log out</button>
    </>
  );
};

export default Button;
