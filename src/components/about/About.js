import React from "react";
import Appbar from "../bars/Appbar";
import "../../index.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import clsx from 'clsx'; //to give multiple class names


const useStyles = makeStyles({
  table: {
    width: 'auto',
  },
  paper: {
    width: '180px',
    float: 'left',
    margin: '0 10px 0 0',
    marginTop: '56px',
  },
  paper2: {
    marginLeft: '20px',
  },
  socialIcons: {
    color: '#393e44',
    padding: '8px'
  },
  socialIconsElif: {
    color: '#393e44',
    padding: '8px',
  },
  iconHolder: {
    marginLeft: '15px',
  }
  
});


export default function About() {

  const classes = useStyles();

  return (
    <div className="aboutPage">
      <Appbar />
      <div className="aboutUsGif">
      <img src={require('./contact.png')} className="programmers" alt="programmers" />
      </div>
      <div className="aboutUsText">
        <h2>Who are we?</h2>
        <span className="textOfWhoWeAre">
          We are web designers/developers based in Istanbul,Turkey. 
          We build scalable intelligent web & mobile applications that
          simplify people's lives. <br/> <br/>
          We do not miss any opportunity to communicate with 
          industry experts and to get new knowledge and perspectives of tech collaborations.
        </span>
        <div>
        <TableContainer component={Paper} className={classes.paper}>
          <Table className={classes.table} aria-label="caption table" align="center">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Avatar alt="Elif" className="avatar-img-1" src="https://media-exp1.licdn.com/dms/image/C4D03AQGX8bqY_KfYPA/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=-o4HZEZDDqiYBbuOp-73409aqmNchLm7Ddl32j2xl0w" />
                  Elif Tabak Chorghay</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell > 
                    <IconButton className={clsx(classes.socialIconsElif, classes.iconHolder)} size="small"
                      href="https://www.linkedin.com/in/eliftabak/" target="_blank" >
                      <LinkedInIcon /> 
                  </IconButton>
                    <IconButton className={classes.socialIconsElif} size="small"
                      href="https://github.com/eliftabak" target="_blank" >
                    <GitHubIcon /> 
                  </IconButton>
                </TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} className={clsx(classes.paper, classes.paper2)}>
          <Table className={classes.table} aria-label="caption table" align="center">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Avatar alt="Omar" className="avatar-img-2" src="https://media-exp1.licdn.com/dms/image/C5603AQGCA-bMbh-QIg/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=KuBroTg98TQEtDPReYD5eeVIht-VsifpgJRjWBMvbkc" />
                Omar Alithawi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell> 
                  <IconButton className={classes.socialIcons} size="small"
                      href="https://www.linkedin.com/in/omar-alithawi-1646701a4/" target="_blank" >
                    <LinkedInIcon /> 
                  </IconButton>
                  <IconButton className={classes.socialIcons} size="small"
                      href="https://github.com/OmarAlithawi" target="_blank" >
                    <GitHubIcon /> 
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        </div>

      </div>
    </div>
  );
}