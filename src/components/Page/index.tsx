import React from "react";
import { PageProps } from "./types";
import { Container } from "./styled";

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  )
}

export default Page