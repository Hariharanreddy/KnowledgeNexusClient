import { Spinner, VStack } from '@chakra-ui/react';
import React from 'react';

const Loader = ({ color = 'purple.500' }) => {
  return (
    <VStack h="100vh" justifyContent={'center'}>
      <div style={{ transform: 'scale(4)' }}>
        <Spinner
          thickness="1px"
          speed="1s"
          emptyColor="transparent"
          color={color}
          size="md"
        />
      </div>
    </VStack>
  );
};

export default Loader;
