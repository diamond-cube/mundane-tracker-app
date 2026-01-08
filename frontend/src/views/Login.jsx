import { Box, Button, Card, CardHeader, CardContent, TextField, Stack } from "@mui/material";
import { buttonStyle, textFieldStyle } from "../styles/styles";

export default function Login() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
        <Card
          sx={{
            mt: "25vh",
            padding: "1rem",
            boxShadow: "none",
            border: "1px solid #ccc",
            borderRadius: "2rem",
          }}
        >
          <CardHeader title="Sign in to Mundane Tracker" />
          <CardContent>
            <form>
              <Stack gap={2}>
                <TextField sx={textFieldStyle} type="text" label="Username" />
                <TextField sx={textFieldStyle} type="password" label="Password" />
                <Button sx={buttonStyle} variant="contained" size="large" type="submit">
                  Sign In
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
