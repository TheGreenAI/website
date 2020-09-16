import React from "react";
// import { Link } from "gatsby";

import {
  Button,
  Container,
  Text,
  Div,
  Icon,
  Anchor,
  Image,
} from "atomize";

import forest from "../images/forest.jpg";

class HeroSection extends React.Component {
  render() {
    return (
      <>
        <Div tag="section" p={{ t: { xs: "6rem", md: "10rem" } }}>
          <Container d="flex" flexDir="column" align="center">
            <Text
              tag="h1"
              textWeight="500"
              textAlign="center"
              textSize="90px"
              m={{ b: "4rem" }}
            >
              Green AI
            </Text>
            <Text
              tag="h2"
              textWeight="400"
              maxW="36rem"
              textSize="subheader"
              textAlign="center"
              //   fontFamily="secondary"
              textColor="medium"
              m={{ b: "2.5rem" }}
            >
              Green AI is a startup, working to
            </Text>

            <Div
              d="flex"
              w="100%"
              justify="center"
              flexDir={{ xs: "column", sm: "row" }}
            >
              <Anchor href="">
                <Button
                  h="3rem"
                  w={{ xs: "100%", sm: "11rem" }}
                  bg="info700"
                  hoverBg="info800"
                  rounded="lg"
                  m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                >
                  Get Started Now
                </Button>
              </Anchor>
              <Anchor href="">
                <Button
                  h="3rem"
                  w={{ xs: "100%", sm: "11rem" }}
                  bg="transparent"
                  hoverBg="gray400"
                  border="1px solid"
                  borderColor="gray600"
                  //   hoverBorderColor="gray800"
                  rounded="lg"
                  p={{ l: "0.5rem", r: "1rem" }}
                  textColor="medium"
                  prefix={
                    <Icon
                      name="Play"
                      size="18px"
                      m={{ r: "0.5rem" }}
                      color="black400"
                    />
                  }
                >
                  Watch Video
                </Button>
              </Anchor>
            </Div>
          </Container>
        </Div>

        <Div
          // bg={{ xs: "gray200", md: "white" }}
          m={{ t: { xs: "3rem", lg: "5" } }}
        >
          <Container>
            <Image
              src={forest}
              rounded="lg"
              p={{ y: "3.5rem" }}
              d="flex"
              flexDir={{ xs: "column", lg: "row" }}
              justify="space-between"
            />
          </Container>
        </Div>
      </>
    );
  }
}

export default HeroSection;
