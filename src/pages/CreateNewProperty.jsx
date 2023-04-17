import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import CreatePropertyForm from "../components/CreatePropertyForm";
import styles from "../css/CreateNewProperty.module.css";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

const CreateNewProperty = () => {
  const { loading } = useSelector((state) => state.manager);
  return (
    <Box className={styles.wrapper}>
      <Loading isLoading={loading} />
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
            <BreadcrumbLink href="#">Create new Property </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <CreatePropertyForm />
    </Box>
  );
};

export default CreateNewProperty;
