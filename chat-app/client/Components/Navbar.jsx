
import Link from 'next/link'
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Center,
  Text,
} from '@chakra-ui/react';

import { AiFillHome,AiFillMessage } from 'react-icons/ai';

 function Navbar() {
  return (
    <>
      <Box boxShadow='md' px={4} mb={"30px"} bg={"gray.100"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontFamily={"sans-serif"}>
            <Text fontSize={"20px"}> C H A T A P P</Text>
            </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
               <Link href={"/home"}>
                <AiFillHome fontSize={"30px"}/>
                </Link>
                <Link href={"/chat"}>
                <AiFillMessage fontSize={"30px"}/>
                </Link>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;