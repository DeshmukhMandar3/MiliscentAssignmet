import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../redux/actions";
import styles from "../css/CreateNewPropsSuccess.module.css";

const CreateNewPropsSuccess = () => {
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    let Data = JSON.parse(localStorage.getItem("data")) || [];
    setData(Data);
    reset(dispatch);
  }, []);
  return (
    <Box className={styles.wrapper}>
      <div className={styles.topbox}>
        <h1 className={styles.header}>Create new property</h1>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          className={styles.breadcrumb}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Properties</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Create new Property</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Box className={styles.innerwrapper}>
        <Text className={styles.tag}>Created New Property Successfully</Text>
        <Box className={styles.box}>
          <Text>{data && data.propertyName}</Text>
          <Text>
            {data && data.country} | {data && data.street} {data && data.number}
            ,{data && data.zip} {data && data.city} | {data && data.type} |{" "}
            {data && data.year}
          </Text>
        </Box>
        <Flex className={styles.bottomflex}>
          <Button onClick={() => navigate("/")}>RETURN TO PROPERTIES</Button>{" "}
          <Button>EDIT PROPERTY</Button>{" "}
        </Flex>
      </Box>
    </Box>
  );
};

export default CreateNewPropsSuccess;
