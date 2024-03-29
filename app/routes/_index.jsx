import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
} from "@mui/material";

export const meta = () => {
  return [{ title: "New Remix App" }];
};
export default function Index() {
  return (
    <div style={{ height: "60%" }}>
      <Container maxWidth="sm" style={{ marginTop: "5%" }}>
        <Grid container spacing={12} sx={{ flexGrow: 1 }}>
          <Grid item xs={4} justifyContent="center">
            <Link
              href="/application/newApplication"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Card
                sx={{ width: 140, paddingLeft: "20px", paddingRight: "20px" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="document.png"
                  />
                  <CardContent>
                    <span className="justify-center">
                      <h2>Submit Application</h2>
                    </span>{" "}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={4} justifyContent="center">
            <Card
              sx={{ width: 150, paddingLeft: "20px", paddingRight: "20px" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="transaction.png"
                />
                <CardContent>
                  <span>
                    <h2>Submit Transaction</h2>
                  </span>{" "}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={4} justifyContent="center">
            <Card
              sx={{ width: 150, paddingLeft: "20px", paddingRight: "20px" }}
            >
              <CardActionArea>
                <CardMedia component="img" height="200" image="lookup.png" />
                <CardContent>
                  <span>
                    <h2>Lookup Account</h2>
                  </span>{" "}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
