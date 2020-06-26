import { makeStyles } from "@material-ui/core/styles";

// Styling
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundImage: 'url("../home/brushed-alum.png")',
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
  textField : {
    width: '130px',
    margin: '10px auto 30px 40px',
  },
  projectNameInputContainer: {
    marginTop: '10px',
  },
}));

export default useStyles;
