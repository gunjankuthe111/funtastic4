import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  useColorModeValue,
  InputRightElement,
  useToast,
  Container,
} from "@chakra-ui/react"


import AuthSlider from './AuthSlider'
import axios from 'axios';
import {useRouter} from "next/router"
const getData = async(payload) => {
  return axios.post("http://localhost:3000/api/login",payload);
}


function Login() {
  const router =  useRouter()
  const  [details,setDetails] = useState({email:"",password:""})
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const formBackGround = useColorModeValue("gray.300", "gray.900")

  const handleSubmit = async(e)=> {
    const data = await getData({...details})
    localStorage.setItem("token",JSON.stringify(data.data.token))
    if(data.data.token) router.push("/home")
  }

  return (
    <>
       <Container>
        <Box>
            <Flex
            height={"auto"}
            alignItems={"center"}
            justifyContent={"center"}
            background={formBackGround}
            >
            <Flex
            direction={"column"}
            // background={"gray.100"}
            background={formBackGround}
            p={10}
            rounded={6}
            position="relative"
            >
              <FormLabel> <Heading mb= {5} > Log in </Heading> </FormLabel>
              <Input placeholder='Enter your Email...'
              onChange={(e)=>{
                setDetails({...details,email:e.target.value})
              }}
               variant={"filled"}
               mb={3}
               type="email"
               />
            <InputGroup>
              <Input
              onChange={(e)=>{
                setDetails({...details,password:e.target.value})
              }}
              placeholder='********'
              variant={"filled"}
              type={show ? "text":"password"}
              mb={"6"}
              />

                     <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button> 
                      </InputRightElement>
                      </InputGroup> 

            

            <Button onClick={handleSubmit} colorScheme={"teal"}>Log in</Button>

            
            
            </Flex>
            </Flex>  
            <AuthSlider/> 
      </Box>
        </Container>
    </>
  )
}

 
 
 

export default Login