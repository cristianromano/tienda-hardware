import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "./Item.module.css";
import { Link } from "react-router-dom";

export const Item = ({ items }) => {
  return (
    <Card className={styled.containerItem}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={items.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {items.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {items.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to={`/ItemDetail/${items.id}`} style={{ textDecoration: "none" }}>
          <Button size="small">Detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
