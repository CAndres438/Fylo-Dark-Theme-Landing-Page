import React from 'react'
import { Link, makeStyles} from '@material-ui/core'

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.container}>
        <img src="https://res.cloudinary.com/daalu/image/upload/v1650218497/Recursos_Dark/logo_hroazh.svg" alt='logo' className={classes.logo}/>
        <div className={classes.box}>
            <Link className={classes.link}>Freatures</Link>
            <Link className={classes.link}>Team</Link>
            <Link className={classes.link}>Sign In</Link>
        </div>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%%',  
        padding: '1rem 0',      
    },
    box: {
        display: 'flex'
    },
    container: {
        width: '98%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    link: {
        color: 'hsl(0, 0%, 100%)',
        fontWeight: '700',
        marginRight: theme.spacing(1)
    },
    logo: {
        width: '80px',
        height: '30px'
    }

}))

export default Navbar