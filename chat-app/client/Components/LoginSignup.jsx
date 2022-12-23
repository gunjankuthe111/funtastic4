import { Box,Wraper, Container, Tab, TabList, TabPanel, TabPanels, Tabs, useColorMode, useColorModeValue,Text, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import Login from './login'
import Signup from './signup'
import {IoSunny, IoMoon} from "react-icons/io5"
function LoginSignup() {
    const [account, setAccount] = useState("Login");
    
    const toggleAccount = () => {
            account == "Login" ? setAccount("Signup") : setAccount("Login");
          };

  const {toggleColorMode} = useColorMode()

  const [toggle, setToggle] = useState(false);

  const formBackGround = useColorModeValue("gray.300", "gray.900")
  return (
    <div>
        <Container p={4}   maxW="xl" centerContent>
        <Box
        d="flex"
        justifyContent="center"
        p={3}
       
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        background={formBackGround}
      >
        <Text  fontSize="4xl" fontFamily="Work sans" textAlign={"center"}>
          Chat App
        </Text>
        </Box>
            <Box     w="100%"    borderWidth="1px" >
            <Tabs background={formBackGround} isFitted variant="soft-rounded">
                
                     <Flex justifyContent={"space-between"} w={"80%"}
                     margin={"auto"}
                     > 

                    {/* { */}
                         {/* account=="Login"? ( */}
                        <TabList width={"50%"} mb="1em">
                             <Tab   variant={"filled"}>Login</Tab>
                         </TabList>
                         {/* ):( */}
                    
                    
                         <TabList width={"50%"} mb="1em">
                             <Tab   variant={"filled"}>Signup</Tab>
                         </TabList>
                         {/* ) */}
                    {/* } */}
                    
                    </Flex> 
                    
                    
                
                <TabPanels>
                <TabPanel>
                    <Login/>
                </TabPanel>
                <TabPanel>
                    <Signup/>
                    {/* <ChakraSignup/> */}
                </TabPanel>
                </TabPanels>
            </Tabs>
            </Box>
            <Box
              position={"absolute"}
              top={5}
              right={5}
              cursor={"pointer"}
              onClick = {() => {
                toggleColorMode();
                setToggle(!toggle)
              }}
              >
              {toggle ? <IoSunny/>: <IoMoon/> }
              </Box>
        </Container>
    </div>
  )
}

export default LoginSignup