import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdHomeWork, MdOutlineHomeWork } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FcSettings } from "react-icons/fc";

const Navbar = () => {
  return (
    <Box className={styles.wrapper}>
      <Text className={styles.header}>Properties</Text>
      <Flex flexDirection={"column"}>
        <Text className={styles.head}>General</Text>
        <Link className={styles.link}>
          <Flex alignItems={"center"}>
            {" "}
            <HiOutlineSquares2X2 /> &nbsp; Control center
          </Flex>
        </Link>
        <Link to="/" className={styles.link}>
          <Flex alignItems={"center"}>
            <MdHomeWork /> &nbsp; Properties
          </Flex>
        </Link>

        <Link className={styles.link}>
          <Flex alignItems={"center"}>
            <MdOutlineHomeWork /> &nbsp; My activities{" "}
          </Flex>
        </Link>
        <Link className={styles.link}>
          <Flex alignItems={"center"}>
            <IoIosNotifications /> &nbsp; Notification
          </Flex>{" "}
        </Link>
        <Link className={styles.link}>
          {" "}
          <Flex alignItems={"center"}>
            <FcSettings /> &nbsp; Customization
          </Flex>{" "}
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
