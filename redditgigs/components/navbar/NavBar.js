import { Flex } from "@chakra-ui/react";
import Header from "./Header";

export function NavBar(props) {
  return (
    <Flex
      direction="column"
      align="center"
      m="0 auto"
      {...props}
    >
      <Header />
      {props.children}
    </Flex>
  );
}
