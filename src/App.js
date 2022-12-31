import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, styled } from "@mui/material";


const BoxContainer = styled(Box)({
  display:'flex',
  justifyContent:'space-between',
  backgroundColor:"#f0f2f5",
  height:"100vh"
})
function App() {
  return (
    <div>
      <Navbar />
      <BoxContainer>
        <Sidebar />
        <Feed />
        <Rightbar />
      </BoxContainer>
    </div>
  );
}

export default App;
