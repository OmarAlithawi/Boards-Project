import { makeStyles } from "@material-ui/core/styles";

// Styling
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zndex: theme.zIndex.drawer + 1,
    background: "linear-gradient(45deg, #89f7fe 30%, #66a6ff 90%)",
    color: "white",
    height: 50,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  plusButtonInside: {
    color: "#2196f3",
  },
  icons: {
    color: "#66a6ff",
  },
}));

export default useStyles;
