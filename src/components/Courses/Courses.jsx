import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/course';
import toast from 'react-hot-toast';
import { addToPlaylist } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';
import { RiLoginCircleFill } from "react-icons/ri"
import { FaEye } from "react-icons/fa"

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <VStack
      className="course"
      alignItems={['center', 'flex-start']}
      boxShadow={"md"}
      p={"4"}
      borderRadius={"2xl"}>
      <Image src={imageSrc} mb={"4"} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />

      <HStack>
        <Text
          fontWeight={'bold'}
          children={'Creator -'}
        />

        <Text
          fontFamily={'body'}
          textTransform="Capitalize"
          children={creator}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
      />

      <Heading
        size="xs"
        children={`Views - ${views}`}
      />

      <Stack direction={['column', 'row']} justifyContent={"flex-start"} alignItems="center" >
        <Link to={`/course/${id}`}>
          <Button colorScheme={'purple'} size='sm' leftIcon={<FaEye />}>Watch Now</Button>
        </Link>
        <Button
          isLoading={loading}
          variant={'outline'}
          colorScheme={'purple'}
          size='sm'
          onClick={() => addToPlaylistHandler(id)}
          leftIcon={<RiLoginCircleFill />}
        >
          Add
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();


  const addToPlaylistHandler = async couseId => {
    await dispatch(addToPlaylist(couseId));
    dispatch(loadUser());
  };

  const categories = [
    'All Courses',
    'Web development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  const { loading, courses, error, message } = useSelector(
    state => state.course
  );

  function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  const debouncedGetAllCourses = debounce((category, keyword) => {
    dispatch(getAllCourses(category, keyword));
  }, 400);


  useEffect(() => {

    if (category === "All Courses") {
      setCategory("");
    }

    // dispatch(getAllCourses(category, keyword));
    debouncedGetAllCourses(category, keyword);

    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [category, keyword, dispatch, error, message]);

  return (
    <Container minH={'95vh'} maxW="90%" paddingY={'8'}>
      <Heading children="Available Courses" mb={'8'} mt={"12"} />

      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type={'text'}
        focusBorderColor="purple.500"
      />

      <HStack
        overflowX={'auto'}
        paddingY="8"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {courses.length > 0 ? (
          courses.map(item => (
            <Course
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          ))
        ) : (
          <Heading mt="4" children="Courses Not Found" />
        )}
      </Stack>
    </Container>
  );
};

export default Courses;
