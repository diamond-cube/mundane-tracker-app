import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  const buttonStyle = {
    borderRadius: "1rem",
    boxShadow: "none",
  };

  const cards = [
    {
      title: "Anime",
      description: "List of all the animes you've watched",
      onClick: () => {
        nav("/anime");
      },
    },
    {
      title: "Manga",
      description: "List of all the mangas you've read",
      onClick: () => {
        nav("/manga");
      },
    },
    {
      title: "Movies",
      description: "List of all the movies you've watched",
      onClick: () => {
        nav("/movies");
      },
    },
  ];
  return (
    <>
      <Grid container justifyContent={"center"} gap={2}>
        {cards.map((c) => (
          <Card>
            <CardHeader
              title={
                <span>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                    onClick={c.onClick}
                  >
                    {c.title}
                  </Button>
                </span>
              }
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                {c.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </>
  );
}
