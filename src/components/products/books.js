import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250
  },
  media: {
    height: 100,
    paddingTop: "100%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant="h5"
            color="textSecondary"
          >
            {"50"}
          </Typography>
        }
        title="Las Crónicas de Narnia"
        subheader="Disponible"
      />
      <CardMedia
        className={classes.media}
        image="https://m.media-amazon.com/images/I/51xHnFQ4+yL._SY344_BO1,204,203,200_.jpg"
        title="Las Crónicas de Narnia"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="carrito">
          <AddShoppingCartIcon />
        </IconButton>
        {Array(4)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Bestias parlantes, hazañas heroicas y batallas épicas entre el bien
            y el mal te esperan en la clásica serie fantástica de C. S. Lewis,
            que lleva más de sesenta años encantando a los lectores.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
