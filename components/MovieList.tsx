import { Divider, Card, CardContent, Grid } from "@mui/material"
import Image from "next/image"

export const MovieList = ({movie}) => {
  const movieImage = movie.Poster;

  const defaultMoviePoster = "https://m.media-amazon.com/images/M/MV5BYmJmNzU0NTgtOGM5Ni00MWJiLTgwZmMtNDIyNjYzZDAzNzI5XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg"

  const renderImage = () => {

  }

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div data-aos="fade-up">
            <Card className="card">
              <CardContent>
                <Image
                  src={ movieImage === "N/A" ? defaultMoviePoster : movieImage} loading={"lazy"} width={200} height={290}
                  alt={`title: ${movie.Title}`}
                />
                  <div>{movie.Title}</div>
                  <div>{movie.Year}</div>
              </CardContent>
              <Divider />
            </Card>
          </div>
        </Grid>
      </Grid>
    </>
  )
}
