import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ForumIcon from "@mui/icons-material/Forum";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";

type MenuType = {
  title: string;
  icon: JSX.Element;
};

const MenuStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column",
  padding: "10px 5px",
};

const BottomAppBar = (): JSX.Element => {
  const menuItems: MenuType[] = [
    {
      title: "홈",
      icon: <HomeIcon />,
    },
    {
      title: "동네생활",
      icon: <AccessibilityNewIcon />,
    },
    {
      title: "내 근처",
      icon: <LocationOnIcon />,
    },
    {
      title: "채팅",
      icon: <ForumIcon />,
    },
    {
      title: "나와 당근",
      icon: <AccountCircleIcon />,
    },
  ];

  return (
    <Grid container>
      {menuItems.map((item: MenuType): JSX.Element => {
        return (
          <Grid item xs key={item.title}>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                size="large"
                disableElevation
                style={MenuStyle}
              >
                {item.icon}
                {item.title}
              </Button>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BottomAppBar;
