import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Button,
  Flex,
  Text,
  Select,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";

import { ArrowUpDownIcon } from "@chakra-ui/icons";
import React from "react";
import { getData } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";
import styles from "../css/Properties.module.css";
import Loading from "../components/Loading";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

const Properties = () => {
  const dispatch = useDispatch();
  const { data, length } = useSelector((state) => state.manager);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(3);
  const [type, setType] = React.useState("");
  const [prop, setProp] = React.useState("");
  const [tog, setTog] = React.useState(false);
  const [sort, setSort] = React.useState("");
  const [ord, setOrd] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    getData(dispatch, page, limit, type, prop, sort, ord);
  }, [page, limit, type, tog, sort, ord]);

  const { loading } = useSelector((state) => state.manager);

  return (
    <Box className={styles.wrapper}>
      <Loading isLoading={loading} />
      <Text className={styles.header}>Properties</Text>
      <Text className={styles.sub}>Lorem ipsum dolor sit.</Text>
      <Box className={styles.outer}>
        <Flex className={styles.topflex}>
          <Flex>
            <Input
              placeholder="Search Property Here..."
              type="search"
              value={prop}
              onChange={(e) => setProp(e.target.value)}
              borderRightRadius={"0px"}
            />
            <Button
              onClick={() => {
                setPage(1);
                setTog(!tog);
              }}
              borderLeftRadius={"0px"}
              fontSize={"25px"}
            >
              <BiSearch />
            </Button>
          </Flex>
          <Popover>
            <PopoverTrigger>
              <Button>
                <IoMdAdd /> &nbsp; Add Property
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>Choose Country</PopoverHeader>
              <PopoverBody>
                <Box>
                  <Text
                    _hover={{ bg: "skyblue" }}
                    onClick={() => {
                      localStorage.setItem("country", "Sweden");
                      navigate("/create_property");
                    }}
                  >
                    Swedan
                  </Text>
                  <Text
                    _hover={{ bg: "skyblue" }}
                    onClick={() => {
                      localStorage.setItem("country", "Denmark");
                      navigate("/create_property");
                    }}
                  >
                    Denmark
                  </Text>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Projects</Th>
                <Th width="15%">
                  <Select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    fontSize={"15px"}
                  >
                    <option value="">TYPE</option>
                    <option value="Leasing">Leasing</option>
                    <option value="Sale">Sale</option>
                  </Select>
                </Th>
                <Th>
                  Units &nbsp;
                  <span
                    onClick={() => {
                      setSort("units");
                      setOrd(!ord);
                    }}
                  >
                    <ArrowUpDownIcon />
                  </span>
                </Th>
                <Th>
                  Availability &nbsp;
                  <span
                    onClick={() => {
                      setSort("available");
                      setOrd(!ord);
                    }}
                  >
                    <ArrowUpDownIcon />
                  </span>
                </Th>
                <Th>
                  Idleness &nbsp;
                  <span
                    onClick={() => {
                      setSort("idle");
                      setOrd(!ord);
                    }}
                  >
                    {" "}
                    <ArrowUpDownIcon />
                  </span>
                </Th>
                <Th>Units Overview</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data.map((el) => {
                  return (
                    <Tr key={el.id}>
                      <Td>
                        <Flex>
                          <img
                            src="https://images.adsttc.com/media/images/6286/ac71/03d0/a701/6541/0bf1/newsletter/yellow-foot-residential-building-oa-lab_6.jpg?1652993321"
                            alt="property"
                            width={"25%"}
                          />
                          <Box margin="5px">
                            <Text>{el.propertyName}</Text>
                            <Text>{el.street}</Text>
                            <Text>{el.city}</Text>
                          </Box>
                        </Flex>
                      </Td>
                      <Td>{el.type}</Td>
                      <Td>{el.units}</Td>
                      <Td>
                        {el.available} units |{" "}
                        {Math.ceil((el.available / el.units) * 100)}%
                      </Td>
                      <Td>
                        {el.idle} units |{" "}
                        {Math.ceil((el.idle / el.units) * 100)}%
                      </Td>
                      <Td>
                        <Button>10</Button>
                        <Button>22</Button>
                        <Button>33</Button>
                        <Button>48</Button>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex className={styles.bottomflex}>
          <Text fontSize={"17px"}>
            showing {Math.min(limit, length)} out of {length} rows
          </Text>
          <Pagination
            page={page}
            length={length}
            limit={limit}
            setPage={setPage}
          />
          <Select
            value={limit}
            onChange={(e) => {
              setLimit(e.target.value);
              setPage(1);
            }}
            width="8%"
          >
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </Select>
        </Flex>
      </Box>
    </Box>
  );
};

export default Properties;
