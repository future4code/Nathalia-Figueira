
import { fade, makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
     
    },

    toolbar:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight:'2%',
    
    },

    logoButtonImg:{
        width: '20vw',
        maxWidth: '200px',
        
    },

    divSearchELogin:{
        width: '60vw',
        minWidth:'240px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25
            ),
      },
      marginLeft: 0,
      width: '40%',
      minWidth:'140px',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '40%',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingRight: 0,
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '90%',
      
    },
  }));