import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container minW="4xl" bg="#333" minH="100vh">
      <Flex
        flexDirection="column"
        h="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h1">This is the main heading</Heading>
        <Text p="15px">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quasi
          fugiat saepe tempore, inventore quisquam veniam perspiciatis sit,
          illum in, nulla deleniti magni dolores ut excepturi ab iure. Laborum,
          laudantium?
        </Text>
        <Button m="20px" variant="outline">
          Click Me
        </Button>
      </Flex>
    </Container>
  );
}
