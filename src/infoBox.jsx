import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import AcUnitSharpIcon from "@mui/icons-material/AcUnitSharp";
import ThunderstormSharpIcon from "@mui/icons-material/ThunderstormSharp";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import { Component } from "react";

export default function InfoBox({ weatherInfo }) {
  const veryColdImage =
    "https://images.unsplash.com/photo-1670993746085-316c7f04cb2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const coldImage =
    "https://plus.unsplash.com/premium_photo-1729600139856-4482ccd2347b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const hotImage =
    "https://plus.unsplash.com/premium_photo-1688804790068-4a0978939cd0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const imageToShow =
    weatherInfo.temp < 0
      ? veryColdImage
      : weatherInfo.temp < 25
      ? coldImage
      : hotImage;

  const iconToShow =
    weatherInfo.temp < 15 ? (
      <AcUnitSharpIcon />
    ) : weatherInfo.temp < 25 ? (
      <ThunderstormSharpIcon />
    ) : (
      <LocalFireDepartmentSharpIcon />
    );

  return (
    <Card className="weather-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={imageToShow}
          alt="Weather illustration"
        />
        <CardContent className="weather-content">
          <Typography gutterBottom variant="h5" component="h5">
            {weatherInfo.city} {iconToShow}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Current Temperature: {weatherInfo.temp}&deg;C</p>
            <p>Maximum Temperature: {weatherInfo.maxTemp}&deg;C</p>
            <p>Minimum Temperature: {weatherInfo.minTemp}&deg;C</p>
            <p>
              Weather Description: <strong>{weatherInfo.weather}</strong>
            </p>
            <p>
              Feels Like: <strong>{weatherInfo.feelsLike}&deg;C</strong>
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
