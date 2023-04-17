import React from "react";
import {
  Box,
  Text,
  Input,
  FormLabel,
  Select,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { addData } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../css/CreateNewProperty.module.css";
import { AiFillQuestionCircle } from "react-icons/ai";

const CreatePropertyForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addDataSuccess } = useSelector((state) => state.manager);

  const submit = (data) => {
    data.country = localStorage.getItem("country");
    addData(dispatch, data);
  };

  React.useEffect(() => {
    if (addDataSuccess) {
      navigate("/create_success");
    }
  }, [addDataSuccess]);

  return (
    <Box className={styles.outerbox}>
      <Box className={styles.innerbox}>
        <form onSubmit={handleSubmit(submit)}>
          <Flex className={styles.tag} alignItems={"center"}>
            Create new property &nbsp; <AiFillQuestionCircle />
          </Flex>
          <Text fontSize={"small"} margin="15px">
            Last Updated by Jesper Thikadon
          </Text>
          <hr />
          <FormControl isInvalid={errors.propertyName}>
            <FormLabel className={styles.prop}>Property Name</FormLabel>
            <Input
              placeholder="Property Name"
              id="propertyName"
              {...register("propertyName", {
                required: "Property Name is required",
              })}
              className={styles.input}
              width="95%"
            />
            <FormErrorMessage>{errors.propertyName?.message}</FormErrorMessage>
          </FormControl>
          <hr />

          <FormLabel className={styles.prop}>Property location</FormLabel>
          <Input
            isDisabled
            placeholder="Property Location"
            value={localStorage.getItem("country")}
            className={styles.input}
            width="95%"
          />
          <hr />

          <FormLabel className={styles.prop}>Property Address</FormLabel>
          <Box className={styles.addressWrapper}>
            <FormControl isInvalid={errors.street}>
              <Input
                placeholder="Street"
                id="street"
                {...register("street", { required: "Street name is required" })}
              />
              <FormErrorMessage>{errors.street?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.number}>
              <Input
                placeholder="No."
                id="number"
                {...register("number", { required: "Number is required" })}
              />
              <FormErrorMessage>{errors.number?.message}</FormErrorMessage>
            </FormControl>

            <Input placeholder="Add. info" />

            <FormControl isInvalid={errors.city}>
              <Input
                placeholder="City"
                id="city"
                {...register("city", { required: "City is required" })}
              />
              <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.zip}>
              <Input
                placeholder="Zip code"
                id="zip"
                {...register("zip", { required: "Zip code is required" })}
              />
              <FormErrorMessage>{errors.zip?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.latitude}>
              <Input
                placeholder="Latitude"
                id="latitude"
                {...register("latitude", { required: "Latitude is required" })}
              />
              <FormErrorMessage>{errors.latitude?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.longitude}>
              <Input
                placeholder="Longitude"
                id="longitude"
                {...register("longitude", {
                  required: "Longitude is required",
                })}
              />
              <FormErrorMessage>{errors.longitude?.message}</FormErrorMessage>
            </FormControl>
          </Box>
          <hr />
          <FormControl isInvalid={errors.type}>
            <FormLabel className={styles.prop}>Property type</FormLabel>
            <Select
              id="type"
              {...register("type", { required: "Property-type is required" })}
              className={styles.input}
              width="98%"
            >
              <option value="">Property type</option>
              <option value="Leasing">Leasing</option>
              <option value="Sale">Sale</option>
            </Select>
            <FormErrorMessage>{errors.type?.message}</FormErrorMessage>
          </FormControl>
          <hr />
          <FormControl isInvalid={errors.year}>
            <FormLabel className={styles.prop}>Construction year</FormLabel>
            <Select
              id="year"
              {...register("year", {
                required: "Contruction year is required",
              })}
              className={styles.input}
              width="98%"
            >
              <option value="">Construction Year</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </Select>
            <FormErrorMessage>{errors.year?.message}</FormErrorMessage>
          </FormControl>
          <hr />
          <FormControl
            isInvalid={errors.units || errors.available || errors.idle}
          >
            <FormLabel className={styles.prop} marginTop="5px">
              Units
            </FormLabel>
            <Input
              type="number"
              placeholder="Total Units"
              id="units"
              {...register("units", {
                required: "Units are required",
                min: {
                  value: 1,
                  message: "units value cannot be less than zero",
                },
              })}
              className={styles.input}
              marginBottom={"5px"}
              width="95%"
            />
            <FormErrorMessage>{errors.units?.message}</FormErrorMessage>
            <FormLabel className={styles.prop} marginTop="5px">
              Available Units
            </FormLabel>
            <Input
              type="number"
              placeholder="Available Units"
              id="available"
              className={styles.input}
              marginBottom={"5px"}
              width="95%"
              {...register("available", {
                required: "Available Units are required",
                min: {
                  value: 1,
                  message: "Atleast one unit should be available",
                },
              })}
            />
            <FormErrorMessage>{errors.available?.message}</FormErrorMessage>
            <FormLabel className={styles.prop} marginTop="5px">
              Idle
            </FormLabel>
            <Input
              type="number"
              placeholder="Idle Units"
              id="idle"
              className={styles.input}
              marginBottom={"5px"}
              width="95%"
              {...register("idle", {
                required: "Idle Units are required",
                min: { value: 0, message: "idle units cannot be negative" },
              })}
            />
            <FormErrorMessage>{errors.idle?.message}</FormErrorMessage>
          </FormControl>
          <Flex className={styles.bottomflex}>
            <Button onClick={() => navigate("/")}>CANCEL</Button>
            <Button type="submit">CREATE PROPERTY</Button>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

export default CreatePropertyForm;
