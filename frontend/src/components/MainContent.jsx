import { Box } from "@mui/material";
import NavBar from "./NavBar";

export default function MainContent({ children }) {
  return (
    <>
      <NavBar />
      <Box className="content">{children}</Box>
    </>
  );
}
