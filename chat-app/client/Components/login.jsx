import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  InputRightElement,
  useToast,
  Container,
} from "@chakra-ui/react"

import {IoSunny, IoMoon} from "react-icons/io5"
import AuthSlider from './AuthSlider'

function Login() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const {toggleColorMode} = useColorMode()

  const [toggle, setToggle] = useState(false);

  const formBackGround = useColorModeValue("gray.300", "gray.900")

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
               variant={"filled"}
               mb={3}
               type="email"
               />
            <InputGroup>
              <Input
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

            

            <Button colorScheme={"teal"}>Log in</Button>

            
            
            </Flex>
            </Flex>  
            <AuthSlider/> 
      </Box>
        </Container>
    </>
  )
}

 
 
 

export default Login