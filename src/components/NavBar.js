import React from "react";
import PropTypes from "prop-types";
import {
  Div,
  Image,
  Container,
  Button,
  Anchor,
} from "atomize";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMobileHeaderMenu: false,
    };
  }

  toggleHeaderMenu = (value) => {
    this.setState({ showMobileHeaderMenu: value });

    setTimeout(() => {
      window.scrollTo(0, window.scrollY + 1);
    }, 400);
  };

  render() {
    const { showMobileHeaderMenu } = this.state;

    return (
      <>
        <Div
          tag="header"
          pos="fixed"
          top="0"
          transition
          left="0"
          right="0"
          zIndex="100"
          p={{ y: { xs: "1.5rem", md: "1rem" } }}
        >
          <Div
            pos="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="white"
            opacity="1"
            zIndex="-1"
          ></Div>
          <Container d="flex" align="center" justify="space-between">
            <Div cursor="pointer">
              <Image
                // src={logo}
                alt="atomize design system logo"
                h="18px"
                w="auto"
              />
            </Div>

            {/* Icon For Mobile */}

            <Div
              d={{ xs: "flex", md: "none" }}
              flexDir="column"
              onClick={() => this.toggleHeaderMenu(!showMobileHeaderMenu)}
            >
              <Div
                h="2px"
                w="1rem"
                bg="black"
                rounded="lg"
                style={{
                  transform: `translateY(${
                    showMobileHeaderMenu ? "1" : "-2"
                  }px)rotate(${showMobileHeaderMenu ? "135" : "0"}deg)`,
                }}
                transition
              ></Div>
              <Div
                h="2px"
                w="1rem"
                bg="black"
                rounded="lg"
                style={{
                  transform: `translateY(${
                    showMobileHeaderMenu ? "-1" : "2"
                  }px)rotate(${showMobileHeaderMenu ? "45" : "0"}deg)`,
                }}
                transition
              ></Div>
            </Div>

            {/* Links for Desktop */}
            <Div
              d="flex"
              onClick={() => this.toggleHeaderMenu(false)}
              bg={{ xs: "white", md: "transparent" }}
              align={{ xs: "strech", md: "center" }}
              flexDir={{ xs: "column", md: "row" }}
              pos={{ xs: "absolute", md: "static" }}
              p={{
                t: { xs: "6rem", md: "0" },
                b: { xs: "2rem", md: "0" },
                x: { xs: "1.5rem", md: "0" },
              }}
              top="0"
              left="0"
              right="0"
              zIndex={{ xs: "-1", md: "0" }}
              shadow={{ xs: "4", md: "0" }}
              opacity={{
                xs: showMobileHeaderMenu ? "1" : "0",
                md: "1",
              }}
              transform={{
                xs: `translateY(${showMobileHeaderMenu ? "0" : "-100%"})`,
                md: "none",
              }}
              transition
            >
              <Anchor
                m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                textWeight="500"
                textColor="medium"
                hoverTextColor="black"
                transition
                // onClick={() => scrollTo("#features")}
              >
                About
              </Anchor>

              <Anchor
                // href="https://github.com/proksh/atomize"
                // target="_blank"
                m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                textWeight="500"
                textColor="medium"
                hoverTextColor="black"
                transition
              >
                Feautres
              </Anchor>

              <Anchor
                // href="http://atomizedesign.com"
                // target="_blank"
                m={{ r: "2.5rem", b: { xs: "4rem", md: "0" } }}
                textWeight="500"
                textColor="medium"
                hoverTextColor="black"
                transition
              >
                Github
              </Anchor>
              <Button
                bg="white"
                hoverBg="gray500"
                textColor="medium"
                textSize="15px"
                w={{ xs: "100%", sm: "13rem" }}
                rounded="lg"
                style={{ letterSpacing: "-0.5px" }}
                border="1px solid"
                borderColor="black"
                hoverBorderColor="info900"
              >
                Sign Up For Early Access
              </Button>
            </Div>
          </Container>
        </Div>
      </>
    );
  }
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
};

NavBar.defaultProps = {
  siteTitle: ``,
};

export default NavBar;