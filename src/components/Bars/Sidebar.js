import React from 'react';
import { Drawer, Toolbar, List, Divider, ListItem, ListItemIcon, ListItemText, IconButton} from "@material-ui/core";
import DashboardIcon from '@material-ui/icons/Dashboard';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import Appbar from './Appbar';
import useStyles from './StyleBars'



export default function Sidebar(){
  const classes = useStyles();
    return (
      <div className={classes.root}>
        <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}}>
          <Appbar />
          <Toolbar className={classes.toolbar} />
          <List>
            {['Dashboard', 'Starred'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <DashboardIcon className={classes.icons} /> : 
                  <GradeRoundedIcon className={classes.icons} />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          
          <IconButton className={classes.plusButton} style={{ backgroundColor: 'transparent' }} >
            <AddCircleRoundedIcon className={classes.plusButtonInside} />
          </IconButton>

          {/* Here will be the created project names/lists  by user  */}
          <List>
            {['React Project', 'JavaScript', 'TypeScript As...'].map((text) => (
              <ListItem button key={text}>
                <ListItemIcon> <LabelImportantIcon className={classes.icons} /> </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
}
