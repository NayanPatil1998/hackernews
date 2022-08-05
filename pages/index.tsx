import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Container } from "../Components/Container";
import HomeSection from "../Components/HomeSection";
import Navbar from "../Components/Navbar";

const Home: NextPage = () => {
  return (
    <Container>
      <Navbar />
      <HomeSection />
    </Container>
  );
};

export default Home;
