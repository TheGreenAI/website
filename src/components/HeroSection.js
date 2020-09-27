import React from "react";
// import { Link } from "gatsby";

import { Button, Container, Text, Div, Icon, Anchor } from "atomize";

import forest from "../images/forest.jpg";

class HeroSection extends React.Component {
  render() {
    return (
      <>
        <Div
          m={{ t: { xs: "3rem", lg: "5" } }}
          bgImg={forest}
          bgSize="cover"
          bgPos="center"
        >
          <Container>
            <Div
              tag="section"
              p={{ y: "3.5rem", t: { xs: "6rem", md: "10rem" } }}
              rounded="lg"
              m={{ t: "6rem", b: "2rem" }}
              d="flex"
              flexDir={{ xs: "column", lg: "row" }}
              justify="space-between"
              bgRepeat="no-repeat"
              h={{ xs: "600px", md: "900px", lg: "625px" }}
              minH={{ xs: "600px" }}
            >
              <Container d="flex" flexDir="column" align="center">
                <Text
                  tag="h1"
                  textAlign="center"
                  textSize="90px"
                  m={{ b: "4rem", t: "-5rem" }}
                >
                  Green AI
                </Text>
                <Text
                  tag="h2"
                  textWeight="400"
                  maxW="36rem"
                  textSize="subheader"
                  textAlign="center"
                  textColor="medium"
                  m={{ b: "2.5rem" }}
                  bg="white"
                  p="15px"
                  rounded="xl"
                >
                  Green AI is a startup, Lorem ipsum dolor sit amet, consectetur
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. also eric is
                  single etc.
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
                      Learn More
                    </Button>
                  </Anchor>
                  <Anchor href="https://youtu.be/Ee7eD6U0N04" target="_blank">
                    <Button
                      h="3rem"
                      w={{ xs: "100%", sm: "11rem" }}
                      bg="gray100"
                      hoverBg="gray500"
                      border="1px solid"
                      borderColor="gray600"
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
          </Container>
        </Div>
      </>
    );
  }
}

export default HeroSection;
