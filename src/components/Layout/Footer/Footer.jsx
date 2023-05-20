import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Rights Reserved" color={'white'} size="md"/>
          <Heading
            fontFamily={'body'}
            size="sm"
            children="@Hariharan Reddy"
            color={'purple.400'}
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
        {/* target blank says that when link is clicked new tab is opened  */}
          <a href="#" target={'blank'}>
            <TiSocialYoutubeCircular />
          </a>
          <a href="#" target={'blank'}>
            <TiSocialInstagramCircular />
          </a>
          <a href="#" target={'blank'}>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;