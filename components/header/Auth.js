import React from "react";

import { StyledLink } from "../../styles";

const Auth = () => {
  return (
    <div>
      <StyledLink href="/login" forwardedAs="/post/abc">
        Log In
      </StyledLink>
      <StyledLink href="/signup" forwardedAs="/post/abc" chocolate>
        Sign Up
      </StyledLink>
    </div>
  );
};

export default Auth;
