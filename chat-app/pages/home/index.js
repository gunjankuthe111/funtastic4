import React from 'react'
import Profile from '../../client/Components/Profile'
import { Box,Button,Flex, Input, InputGroup, InputLeftElement, Text,} from '@chakra-ui/react'
import { CgProfile } from 'react-icons/cg';
import { CiVideoOn,CiLocationArrow1 } from 'react-icons/ci';
import { GrGallery } from 'react-icons/gr';
import Navbar from '../../client/Components/Navbar';
const home = () => {
  return (
    <Box>
      <Navbar/>
        <Flex gap={"20px"} w={"100%"} >
          <Box w={"25%"} boxShadow='md' bg={"gray.100"}>
          <Profile/>
          </Box>
          <Box w={"50%"} h={"500px"} boxShadow='md' bg={"gray.100"} p={"30px"}>
              <Box mt={"30px"}>
              <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<CgProfile color='gray.300' />}
                />
                   <Input placeholder='share something' />
                </InputGroup>
              </Box>
              <Box w={"80%"} m={"auto"} mt={"20px"}>
               <Flex  gap={"10px"}>
               <Button leftIcon={<GrGallery />} >
                 Photos
                </Button>
                <Button leftIcon={<CiVideoOn />} >
                 Videos
                </Button>
                <Button leftIcon={<CiLocationArrow1 />} >
                 Location
                </Button>
                <Button colorScheme='green'>Share</Button>
               </Flex>
              </Box>
          </Box>
          <Box w={"25%"} h={"500px"} boxShadow='md' bg={"gray.100"}>
                <Text fontSize={"30px"} mt={"30px"} textAlign={"center"} fontWeight={"bold"}>Trend For You</Text>
          </Box>
        </Flex>
    </Box>
  )
}

export default home;