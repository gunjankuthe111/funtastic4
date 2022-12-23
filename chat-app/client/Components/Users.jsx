import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/context";
const Users = ({user}) => {
    const {openedUser, setOpenedUser } = useContext(AppContext);
  return (
    <Flex onClick={()=>{
        
        setOpenedUser({...openedUser,...user})
    }} gap='15px' p="5px 15px" bg="gray.300" alignItems="center">
      <Box h='30px' w='30px'>
        <Image w='100%' h='100%' borderRadius='50%' src={user.profile} alt='img'/>
      </Box>
      <Box>{user.name}</Box>
    </Flex>
  );
};

export default Users;
