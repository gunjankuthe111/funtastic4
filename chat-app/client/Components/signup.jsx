import React, { useState } from 'react';
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Image,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  useToast,
  InputRightElement,
  Container,
} from "@chakra-ui/react"



const signUpInitValue = {
  name: "",
  email: "",
  password: "",
};



function signup() {

  const [signup, setSignup] = useState(signUpInitValue);

  const [pic, setPic] = useState()
  const [loading,setloading] = useState(false)
  const toast = useToast()

  const getData = async(payload) => {
    return axios.post("http://localhost:3000/api/signup",payload);
  }

  const handleSubmit = async(e)=> {
    // e.preventDefault();

    // if(signup.email == "" || signup.password == "" || signup.name == "") {
    //   return alert("please Fill the details.")
    // }
    const data = await getData({...signup})
  }

  const postDetails = (pics) => {
     setloading(true);
     if(pics== undefined){
       toast({
         title:"Please Select an image!",
         status: "warning",
         duration : 4000,
         isClosable: true,
         position:"top"
       })
       return;
     }
     if(pics.type == "image/jpeg" || pics.type == "image/png" ){
      const data = new FormData();
      data.append("file",pics)
      data.append("upload_preset","chat-app")
      data.append("cloud_name","dcyhiklos")
      fetch("",{
        method:"post",
        body : data,
      }).then((res) => res.json())
      .then(data => {
        setPic(data.url.toString());
        console.log(data.url.toString());
        setloading(false);

      }).catch((err) => {
        console.log(err)
        setloading(false)
      })
     } else {
      toast({
        title : "Please Select an Image!",
        status:"warning",
        duration:4000,
        isClosable:true,
        position:"top",
      })
      setloading(true)
      return;
     }
  }

  const handelChange = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };
  console.log(signup)

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <>
      <Container>
       
        <Box>
          {/* <ModalHeader background={formBackGround}>Modal Title</ModalHeader> */}
         
          <Box >
            <Box>
            <Box
            height={"auto"}
            alignItems={"center"}
            justifyContent={"center"}
           
            >
            <form onSubmit={handleSubmit}>
            <Flex
            direction={"column"}
            // background={"gray.100"}
           
            p={10}
            rounded={6}
            position="relative"
            >
              <Heading mb= {5} > Sign Up </Heading> 
              <FormLabel>Name</FormLabel>
              <Input placeholder='First Name'
               variant={"filled"}
               mb={3}
               type="text"
               name="name"
               onChange={handelChange}
               required
               />
               <FormLabel>Email</FormLabel>
              <Input placeholder='Enter your Email...'
               variant={"filled"}
               mb={3}
               onChange={handelChange}
               name="email"
               type="email"
               required

               />
         <FormLabel>Password</FormLabel>
         <InputGroup>
              <Input
              placeholder='********'
              variant={"filled"}
              type={show ? "text":"password"}
              mb={"6"}
              name="password"
              onChange={handelChange}
              required
              />
              <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button> 
                      </InputRightElement>
                      </InputGroup> 

                      <FormLabel>Upload your Picture</FormLabel>
              <Input
              type="file"
              p={1.5}
              accept="image/*"
              />       
              <br/>
            <Button onClick={handleSubmit}
            colorScheme={"teal"}
            isLoading = {loading}
            >Sign up</Button>
           
            
            </Flex>

           
            </form>
           

            </Box>
            {/* <Box>
                 <AuthSlider/>
              </Box> */}
            </Box>
          </Box>
          
          </Box>
       </Container>
    </>
  )     
 
}

 
 
 

export default signup