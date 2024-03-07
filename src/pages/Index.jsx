import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Text, Image, Select, FormControl, FormLabel, RadioGroup, Radio, HStack } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaUserPlus, FaCalendarPlus, FaPlus } from "react-icons/fa";

const Index = () => {
  // State to manage the number of participants
  const [numberOfParticipants, setNumberOfParticipants] = useState("alone");

  return (
    <Container maxW="container.md" py={10}>
      <Stack spacing={6} alignItems="center">
        <Heading as="h1" size="xl">
          Event Matcher
        </Heading>
        <Text fontSize="lg">Connect and participate in local events around you.</Text>
        <Image src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwZXZlbnRzfGVufDB8fHx8MTcwOTgxNzk1N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="City Events" borderRadius="md" />
        <Stack direction={["column", "row"]} spacing={4}>
          <Button colorScheme="blue" leftIcon={<FaUserPlus />}>
            Membership Login
          </Button>
          <Button colorScheme="teal" leftIcon={<FaMapMarkerAlt />}>
            Browse Events
          </Button>
        </Stack>
        <Heading as="h2" size="md">
          Create or Join an Event
        </Heading>
        <Stack spacing={4} width="100%">
          <Button leftIcon={<FaCalendarPlus />} colorScheme="pink" width="100%">
            Participate in an Event
          </Button>
          <Button leftIcon={<FaPlus />} colorScheme="purple" width="100%">
            Create a New Event
          </Button>
          <FormControl>
            <FormLabel>Event Type</FormLabel>
            <Select placeholder="Select event type">
              <option value="concert">Concert</option>
              <option value="exhibition">Exhibition</option>
              <option value="match">Match</option>
              <option value="meal">Outdoor Meal</option>
              <option value="drinks">After-work Drinks</option>
              <option value="party">Party</option>
              <option value="meeting">Business Meeting</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Number of Participants</FormLabel>
            <RadioGroup onChange={setNumberOfParticipants} value={numberOfParticipants}>
              <HStack spacing={4}>
                <Radio value="alone">Alone</Radio>
                <Radio value="one-two-friends">With 1-2 Friends</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <Button colorScheme="green" width="100%">
            Submit Event
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Index;
