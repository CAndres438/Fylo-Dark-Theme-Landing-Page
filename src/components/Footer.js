import React from 'react'
import { Link, makeStyles, Typography } from '@material-ui/core';
import FormCard from './FormCard';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormCard />
      <img className={classes.logo} src="https://res.cloudinary.com/cortiz/image/upload/v1650218497/Recursos_Dark/logo_hroazh.svg" alt='Logo' width='200px'/>
      <div className={classes.contactContainer}>
        <div className={classes.contactNormal}>
        <div className={classes.contactBox}>
        <img src="https://res.cloudinary.com/cortiz/image/upload/v1650218496/Recursos_Dark/icon-location_wfv1ix.svg" className={classes.icon} alt="location"/>
          <Typography>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</Typography>
        </div>
          
        </div>
        <div className={classes.contactBox}>
          <img src="https://res.cloudinary.com/cortiz/image/upload/v1650218496/Recursos_Dark/icon-phone_t9iwt4.svg" className={classes.icon} alt="iconPhone"/>
          <Typography>Lorem Ipsum</Typography>
        </div>
        <div className={classes.contactBox}>
          <img src="https://res.cloudinary.com/cortiz/image/upload/v1650218496/Recursos_Dark/icon-email_jke1tf.svg" className={classes.icon} alt="iconEmail"/>
          <Typography>Lorem Ipsum</Typography>
        </div>
        <div className={classes.paginationBpx}>
          <Link className={classes.linkStyled}>About Us</Link>
          <Link className={classes.linkStyled}>Jobs</Link>
          <Link className={classes.linkStyled}>Press</Link>
          <Link className={classes.linkStyled}>Blog</Link>
        </div>
        <div className={classes.paginationBpx}>
          <Link className={classes.linkStyled}>Contact Us</Link>
          <Link className={classes.linkStyled}>Terms</Link>
          <Link className={classes.linkStyled}>Privacy</Link>
        </div>
      </div>
      </div>

  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'hsl(216, 53%, 9%)',
        color: 'hsl(0, 0%, 100%)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: theme.spacing(24),
        padding: theme.spacing(4)
    },
    contactContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, auto)',
      gap: theme.spacing(4),
      marginTop: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        gridTemplateColumns: '1fr',
      }
    },
    contactBox: {
      display: 'flex',
      gap: theme.spacing(2)
    },
    paginationBpx: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1)
    },
    contactNormal: {
      display: 'flex',
      flexDirection: 'column'
    },
    linkStyled: {
      textDecoration: 'none',
      color: 'hsl(0, 0%, 80%)',
      fontSize: '1.1rem',
      cursor: 'pointer'
    },
    icon: {
      width: '20px',
      height: '20px'
    },
    logo: {
      width: '140px',
      height: '60px'
    }
}))

export default Footer;
