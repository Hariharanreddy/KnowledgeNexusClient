import React from 'react'
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import "./home.css"
import vg from '../../assets/images/bg.svg';
import introVideo from '../../assets/videos/intro.mp4';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <section className='home'>
      <div className='container' >
        {/* stack is a div that is flex already, and direction gets column in phone and row in bigger screen */}
        <Stack
          mt={["3.5em", "0em"]}
          direction={["column", "row"]} 
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems="center"
          spacing={["26", "36"]}>

          {/* vstack is already vertical stack, always flex direction is column */}
          <VStack width={"full"} alignItems={["center", "flex-end"]} spacing="8">
            <Heading size={"3xl"}>
              <span style={{color: "#805ad5"}}>Unlock</span> Your Tech Potential
            </Heading>
            <Text
              fontSize={'2xl'}
              textAlign={['center', 'left']}
              fontFamily={"cursive"} 
            >
              Master <span style={{color: "#805ad5"}}>Industry-Relevant</span> Skills with Top Tech Veterans of India
            </Text>

            <Link to="/courses"> 
              <Button size={"lg"} colorScheme={"purple"} >Explore Now</Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={'xl'}
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>

      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'purple.400'}
          children="OUR BRANDS"
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <VStack className="container2">
        <Heading children={"Who are we ?"} mb={"6"}/>
        <video
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </VStack>
    </section>
  )
}

export default Home