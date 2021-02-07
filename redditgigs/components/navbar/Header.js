import React from "react";
import Link from 'next/link'
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Logo from "./Logo";
import { AiOutlineClose as CloseIcon, AiOutlineMenu as MenuIcon } from "react-icons/ai";


const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};


const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={6}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="100px"
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/how">How It works </MenuItem>
          <MenuItem to="/faetures">Features </MenuItem>
          <MenuItem to="/pricing">Pricing </MenuItem>
          <MenuItem to="/signup" isLast>
            <Button>
              Create Account
            </Button>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;