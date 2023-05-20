import {
    Avatar,
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { RiSecurePaymentFill } from 'react-icons/ri';
  import { Link } from 'react-router-dom';
  import introVideo from '../../assets/videos/intro.mp4';
  import termsAndCondition from '../../assets/docs/termsAndCondition';
  
  const Founder = () => (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'} boxShadow='2xl' mb={"10px"}>
      <VStack>
        <Avatar
          src="https://avatars.githubusercontent.com/Hariharanreddy"
          boxSize={['40', '48']}
        />
        <Text children="Co-Founder" opacity={0.7} />
      </VStack>
  
      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']} >
        <Heading children="Hariharan Reddy" size={['md', 'xl']} />
        <Text
          textAlign={['center', 'left']}
          children={`As a Full Stack Developer with expertise in the MERN stack, I am passionate about
           developing highly efficient and user-friendly web applications. My proficiency
           in MongoDB, Express, React, and Node.js allows me to build applications that are both scalable and effective.`}
        />
      </VStack>
    </Stack>
  );
  
  const VideoPlayer = () => (
    <Box boxShadow='md'>
      <video
        autoPlay
        loop
        muted
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}
      ></video>
    </Box>
  );
  
  const TandC = ({ termsAndCondition }) => (
    <Box boxShadow='md' p={"4"}>
      <Heading
        size={'md'}
        children="Terms & Condition"
        textAlign={['center', 'left']}
        my="4"
      />
  
      <Box h="sm" p="4" overflowY={'scroll'}>
        <Text
          fontFamily={'heading'}
          letterSpacing={'widest'}
          textAlign={['center', 'left']}
        >
          {termsAndCondition}
        </Text>
        <Heading
          my="4"
          size={'xs'}
          children="Refund only applicable for cancellation within 7 days."
        />
      </Box>
    </Box>
  );

  const About = () => {
    return (
      <Container maxW={'container.lg'} padding="8" mt={"2em"}>
        <Heading children="About Us" textAlign={['center', 'left']} mx="12" mb="6"/>
        <Founder />
        <Stack my="8" direction={['column', 'row']} alignItems="center" padding={'8'} boxShadow='2xl'>
          <Text fontFamily={'cursive'} my="8" textAlign={['center', 'left']} fontSize={"lg"} >
          Our platform offers video streaming services,
           including exclusive premium courses that are only accessible to users with a premium membership.
          </Text>
  
          <Link to="/subscribe">
            <Button variant={'ghost'} colorScheme="purple">
              Checkout Our Plan
            </Button>
          </Link>
        </Stack>
  
        <VideoPlayer />
  
        <TandC termsAndCondition={termsAndCondition} />
  
        <HStack my="4" p={'4'}>
          <RiSecurePaymentFill />
          <Heading
            size={'xs'}
            fontFamily="sans-serif"
            textTransform={'uppercase'}
            children={'Payment is secured by Razorpay'}
          />
        </HStack>
      </Container>
    );
  };
  
  export default About;