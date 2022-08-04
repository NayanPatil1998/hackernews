import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Container } from "../Components/Container";
import Navbar from "../Components/Navbar";

const Home: NextPage = () => {
  return <Container>
    <Navbar />
  </Container>;
};

export default Home;
