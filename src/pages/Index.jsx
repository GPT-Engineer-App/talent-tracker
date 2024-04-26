import { Box, Flex, Text, Button, VStack, HStack, Input, useColorModeValue, Image, IconButton } from "@chakra-ui/react";
import { FaPlus, FaSearch, FaSun, FaMoon, FaTrash } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");

  const candidates = [
    { id: 1, name: "John Doe", role: "Software Engineer", status: "Interviewing" },
    { id: 2, name: "Jane Smith", role: "Product Manager", status: "Applied" },
    { id: 3, name: "Alice Johnson", role: "Designer", status: "Offer" },
  ];

  return (
    <Box bg={bgColor} color={color} minH="100vh" p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={5}>
        <Text fontSize="2xl" fontWeight="bold">
          Candidate Tracker
        </Text>
        <IconButton icon={useColorModeValue(<FaMoon />, <FaSun />)} onClick={() => console.log("Toggle theme")} variant="outline" aria-label="Toggle theme" />
      </Flex>
      <VStack spacing={4} align="stretch">
        <HStack>
          <Input placeholder="Search candidates" />
          <IconButton icon={<FaSearch />} aria-label="Search" />
        </HStack>
        <Button leftIcon={<FaPlus />} colorScheme="blue">
          Add Candidate
        </Button>
        {candidates.map((candidate) => (
          <Flex key={candidate.id} p={4} boxShadow="md" borderRadius="md" align="center" justify="space-between">
            <VStack align="start">
              <Text fontWeight="bold">{candidate.name}</Text>
              <Text>{candidate.role}</Text>
              <Text fontSize="sm" color="gray.500">
                {candidate.status}
              </Text>
            </VStack>
            <IconButton icon={<FaTrash />} aria-label="Delete candidate" variant="ghost" />
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
