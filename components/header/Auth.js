import React, { useContext } from "react";
import styled from "styled-components";
import FirebaseContext from "../../context/firebase/FirebaseContext";

import { StyledLink } from "../../styles";
import { mixins } from "../../styles/index";

const StyledAuthContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button`
  ${mixins.smallButton};
`;

const Auth = () => {
  const { user, firebase } = useContext(FirebaseContext);

  return (
    <StyledAuthContainer>
      {user ? (
        <>
          <p>{user.displayName}</p>

          <StyledButton onClick={() => firebase.logout()}>Log out</StyledButton>
        </>
      ) : (
        <>
          <StyledLink href="/login" forwardedAs="/login">
            Log In
          </StyledLink>
          <StyledLink href="/signup" forwardedAs="/signup" chocolate>
            Sign Up
          </StyledLink>
        </>
      )}
    </StyledAuthContainer>
  );
};

export default Auth;
