import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

import Layout from '../components/Layout';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  chips: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Todo Application.
        </Typography>
        <Typography component="p">
          This is an example of using Next Js for React Server rendering
          applications.
        </Typography>
      </Paper>

      <div className={classes.chips}>
        <Chip
          icon={<DoneIcon fontSize="small" />}
          label="Next Js"
          color="secondary"
          variant="outlined"
        />
        <Chip
          icon={<DoneIcon fontSize="small" />}
          label="React"
          color="secondary"
          variant="outlined"
        />
        <Chip
          icon={<DoneIcon fontSize="small" />}
          label="Express"
          color="secondary"
          variant="outlined"
        />
        <Chip
          icon={<DoneIcon fontSize="small" />}
          label="Node Js"
          color="secondary"
          variant="outlined"
        />
        <Chip
          icon={<DoneIcon fontSize="small" />}
          label="Mongoose"
          color="secondary"
          variant="outlined"
        />
        <Chip
          icon={<DoneIcon fontSize="small" />}
          label="Material UI"
          color="secondary"
          variant="outlined"
        />
        <Chip
          icon={<DoneIcon fontSize="small" />}
          label="ESLint"
          color="secondary"
          variant="outlined"
        />
      </div>
    </Layout>
  );
};

export default Home;
