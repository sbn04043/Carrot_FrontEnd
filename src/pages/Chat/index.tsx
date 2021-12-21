import { Grid, Typography, AppBar, Toolbar, Button } from "@mui/material";

const App = (): JSX.Element => {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#ffffff", color: "#000000" }}>
        <Toolbar>
          <Grid container>
            <Grid xs={1}>
              <Avatar variant="rounded" />
            </Grid>
            <Grid xs={9}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6">사가세요...</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">16000원</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={2}>
              <Button color="secondary" variant="outlined">
                거래 후기 남기기
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar position="fixed"></AppBar>
    </>
  );
};

export default index;
