import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import BottomAppBar from "./components/BottomAppBar";
const App = (): JSX.Element => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar />
      내용
      <BottomAppBar />
    </main>
  );
};

export default App;

// node download
// prettier download
// eslint download
// default formatter - prettier
