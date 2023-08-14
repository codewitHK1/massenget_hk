/** @format */

import React, { useEffect } from "react";
import {
  Box,
  Container,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      history.push("/chats");
    }
  }, [history]);

  return (
    <Container maxW={"xl"} height="100%" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="gray.200"
        w="100%"
        m="5px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize="xl"
          fontFamily="work sans"
          color="black"
          fontWeight="bold"
        >
          Massenger_Lite_by@HK
        </Text>
      </Box>
      <Box
        w="100%"
        p={4}
        backgroundColor="rgba(230,230,230)"
        border="rgba(255,255,255)"
        borderRadius="0px 50px 0px 50px"
        boxShadow="15px 15px 20px 5px rgba(119,119,119,0.5),
        -11px -5px 20px 5px rgba(255,255,255,0.8),
        inset 8px 1px 20px 5px rgba(119,119,119,0.5),
          inset -5px -5px 20px 5px rgba(255,255,255,0.8) "
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em" className="input">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">SignUP</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
