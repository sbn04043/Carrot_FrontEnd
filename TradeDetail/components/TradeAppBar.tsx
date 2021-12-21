import {Grid, Typography, AppBar, Toolbar, Button} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from"@mui/icons-material/Favorie";

type TradeType = {
  price: number;
  isAdjustable: boolean;
  isInterest: boolean;
};

const TradeAppBar = (props: TradeType): JSX.Element => {
  const { price, isAdjustable, isInterest } = props;

  return(
      <AppBar
      position = "fixed"
      color = "primary"
      sx={{ top: "auto", bottom: 0, backgroundColor: "@ffffff"}}
      >
          <Toolbar>

          </Toolbar>
  );
};
//기존 앱바 지우고 트레이드 앱바 사용