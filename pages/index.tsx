import { Link, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Container } from "../Components/Container";
import HomeSection from "../Components/HomeSection";
import Navbar from "../Components/Navbar";

const Home: NextPage = () => {
  return (
    <Container>
      <Navbar />
      <HomeSection />
      <Text position="absolute" bottom="2" right="4" >Made with ♥ by <Link color="green" fontWeight="bold" href="https://www.nayanpatil.site" isExternal>Nayan patil</Link></Text>
    </Container>
  );
};

export default Home;
