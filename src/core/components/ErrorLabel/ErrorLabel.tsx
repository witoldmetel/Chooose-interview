import { BiErrorAlt } from 'react-icons/bi';
import { Box, Heading, Icon } from '@chakra-ui/react';

export const ErrorLabel = () => {
  return (
    <Box textAlign="center" py={10} px={6} h="100vh">
      <Icon as={BiErrorAlt} fontSize={55} color="red.500" />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Something went wrong
      </Heading>
    </Box>
  );
};
