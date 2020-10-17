import React from "react";

import { StyledLink } from "../../styles";

const Auth = () => {
  return (
    <div>
      <StyledLink href="/login" forwardedAs="/login">
        Log In
      </StyledLink>
      <StyledLink href="/signup" forwardedAs="/signup" chocolate>
        Sign Up
      </StyledLink>
    </div>
  );
};

export default Auth;
