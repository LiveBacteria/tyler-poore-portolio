import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  surface: {
    ...theme.surface,
    margin: theme.spacing(1),
    width: theme.spacing(64),
    height: theme.spacing(64),
  },
  // text: theme.typography,
}));

const ProjectCard = ({ state, dispatch }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.surface}>
      <h1 className={classes.text}>Content</h1>
    </Paper>
  );
};

export default ProjectCard;
