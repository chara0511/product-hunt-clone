import styled from "styled-components";
import styles from "../styles/Home.module.css";

const Title = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Title>Start</Title>
    </div>
  );
}
