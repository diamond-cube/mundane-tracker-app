import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Pie from "../components/Graphs/Pie";

export default function Home() {
  const nav = useNavigate();
  const buttonStyle = {
    borderRadius: "1rem",
    boxShadow: "none",
  };

  const cards = [
    {
      id: 1,
      title: "Total Tracked",
      value: 100,
      color: "primary",
    },
    {
      id: 2,
      title: "Completed",
      value: 50,
      color: "success",
    },
    {
      id: 3,
      title: "Currently Tracking",
      value: 25,
      color: "warning",
    },
    {
      id: 4,
      title: "On Hold",
      value: 25,
      color: "error",
    },
  ];
  const pieData = [
    { value: 10, name: "Movies" },
    { value: 8, name: "Manga" },
    { value: 3, name: "Anime" },
  ];
  return (
    <>
      <Stack gap={5}>
        <Grid container justifyContent={"center"} gap={2}>
          {cards.map((card) => (
            <Card
              sx={{
                width: "18rem",
                boxShadow: "none",
                border: "1px solid #e0e0e0",
                borderRadius: "1rem",
              }}
              key={card.id}
            >
              <CardActionArea sx={{ height: "100%" }}>
                <CardContent sx={{ height: "100%" }}>
                  <Typography variant="body2" color="text.secondary">
                    {card.title}
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    {card.value}
                  </Typography>
                  <LinearProgress value={card.value} variant="determinate" color={card.color} />
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>

        <Stack direction={"row"} justifyContent={"center"} gap={2}>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h5" mt={4} mb={2}>
              My Progress
            </Typography>
            <Card
              sx={{
                height: "21rem",
                boxShadow: "none",
                border: "1px solid #e0e0e0",
                borderRadius: "1rem",
              }}
            >
              <CardActionArea sx={{ p: 2, height: "100%" }}>
                <Stack gap={3}>
                  <Box>
                    <Typography variant="h6" paddingX={2}>
                      Movies
                    </Typography>
                    <CardContent>
                      <LinearProgress
                        variant="determinate"
                        value={70}
                        sx={{ height: 10, borderRadius: 5 }}
                      />
                    </CardContent>
                  </Box>
                  <Box>
                    <Typography variant="h6" paddingX={2}>
                      Anime
                    </Typography>
                    <CardContent>
                      <LinearProgress
                        variant="determinate"
                        value={50}
                        sx={{ height: 10, borderRadius: 5 }}
                        color="success"
                      />
                    </CardContent>
                  </Box>
                  <Box>
                    <Typography variant="h6" paddingX={2}>
                      Manga
                    </Typography>
                    <CardContent>
                      <LinearProgress
                        variant="determinate"
                        value={20}
                        sx={{ height: 10, borderRadius: 5 }}
                        color="warning"
                      />
                    </CardContent>
                  </Box>
                </Stack>
              </CardActionArea>
            </Card>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h5" mt={4} mb={2}>
              Library Stats
            </Typography>
            <Card
              sx={{
                height: "21rem",
                boxShadow: "none",
                border: "1px solid #e0e0e0",
                borderRadius: "1rem",
              }}
            >
              <CardActionArea sx={{ p: 2, height: "100%" }}>
                <Pie data={pieData} />
              </CardActionArea>
            </Card>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
