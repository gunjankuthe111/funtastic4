import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Text, Textarea, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import Navbar from '../../client/Components/Navbar';
import Users from '../../client/Components/Users';
import { useContext } from "react";
import { AppContext } from "../../client/context/context";
import {useEffect} from "react";
import io from "socket.io-client";

let socket;
const chat = () => {
  const [message,setMessage] = useState("")
  const {openedUser } = useContext(AppContext);
  const [state,setState] = useState([])
  const [friends,setFriends] = useState([])
  const [text,setText] = useState("")
  const handlechange =(e)=>{
    setText(e.target.value)
  }

  const getData = async(payload) => {
    return axios.get(`http://localhost:3000/api/search?query=${payload}`);
  }


  const handleSubmit= async(e)=>{
    e.preventDefault()
    const data = await getData(text)
    setFriends([...data.data])

  }
  const haddleFriend = (user)=>{
    setState([...state,user])
  }

  useEffect(() => {
    fetch("/api/socket").finally(() => {
         socket = io();

    //   socket.on("connect", () => {
    //     socket.emit("hello",2);
    //   });
    socket.on("getMessage",(m)=>{
        console.log(m)
    })
    });

  }, [])


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
                <form onSubmit={handleSubmit}>
                   <Input onChange={handlechange} bg={"white"} placeholder='search user' />
                </form>
                </InputGroup>
                <Box id ="suggest">
                {friends.map((ele)=><Text onClick={()=>{
                  haddleFriend(ele)
                  setFriends([])
                }} key={ele._id}>{ele.name}</Text>)}
                </Box>
                <VStack>
                {state.map((ele)=><Users user={ele}/>)}
                </VStack>
           </Box>
        </Box>

        <Box 
        bgImage={"https://media.istockphoto.com/id/1314920827/vector/green-japanese-paper-with-cross-hatching-pattern.jpg?s=612x612&w=0&k=20&c=iYqfesCWkMYrGhm2kjA-kc2Nl3ohZHlk_Q03z8quntQ="}
         position={"relative"} 
         w={"70%"} h={"500px"}
         textAlign="center"
         pt="20px"
         boxShadow='lg'>
          <Text>
            {openedUser.name}
          </Text>
         <Box position={"absolute"} display={"flex"} gap={"15px"} p={"20px"}  bottom={0} w={"100%"}>
         <Textarea onChange={({target})=>setMessage(target.value)} bg={"white"} placeholder='Message' />
        <Button onClick={()=> socket.emit("sendMessage",message)} colorScheme='green'>Send</Button>
         </Box>
        </Box>
        </Flex>
    </Box>
  )
}

export default chat

