import { Flex } from "@chakra-ui/react";
import "./App.css";
import CreateNewProperty from "./pages/CreateNewProperty";
import AllRoutes from "./routes/AllRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Flex justifyContent={"space-evenly"}>
        {" "}
        <Navbar /> <AllRoutes />
      </Flex>
    </div>
  );
}

export default App;
