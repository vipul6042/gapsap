import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./loginpage.css";
import { Button, ButtonGroup, Box } from "@chakra-ui/react";
import Login from "../componets/login";

const Loginpage = () => {
  return (
    <div className="sectio">
      <div className="background">
        <div className="shape"></div>
        <form>
          <h3>GapSap</h3>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <ButtonGroup gap={4}>
              <Button variant="solid">login</Button>
              <Button variant={"outline"} color={"white"}>Sign up</Button>
            </ButtonGroup>
          </Box>
          <Login/>
        </form>
        <div className="shape"></div>
      </div>
    </div>
  );
};

export default Loginpage;
