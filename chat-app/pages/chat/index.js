import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Textarea } from '@chakra-ui/react'
import React from 'react'
import { CgProfile } from 'react-icons/cg';
import Navbar from '../../client/Components/Navbar';

const chat = () => {
  return (
    <Box>
        <Navbar/>
        <Flex w={"100%"} gap={"20px"}>
        <Box bgImage={"https://media.istockphoto.com/id/1314920827/vector/green-japanese-paper-with-cross-hatching-pattern.jpg?s=612x612&w=0&k=20&c=iYqfesCWkMYrGhm2kjA-kc2Nl3ohZHlk_Q03z8quntQ="} w={"30%"} h={"500px"} boxShadow='lg'>
           <Box p={"0px 50px"} mt={"30px"}>
           <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<CgProfile color='gray.300' />}
                />
                   <Input bg={"white"} placeholder='search user' />
                </InputGroup>
           </Box>
        </Box>

        <Box 
        bgImage={"https://media.istockphoto.com/id/1314920827/vector/green-japanese-paper-with-cross-hatching-pattern.jpg?s=612x612&w=0&k=20&c=iYqfesCWkMYrGhm2kjA-kc2Nl3ohZHlk_Q03z8quntQ="}
         position={"relative"} 
         w={"70%"} h={"500px"}
         boxShadow='lg'>
         <Box position={"absolute"} display={"flex"} gap={"15px"} p={"20px"}  bottom={0} w={"100%"}>
         <Textarea bg={"white"} placeholder='Message' />
        <Button colorScheme='green'>Send</Button>
         </Box>
        </Box>
        </Flex>
    </Box>
  )
}

export default chat