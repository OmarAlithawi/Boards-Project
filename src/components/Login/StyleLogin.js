import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 5,
        marginRight: theme.spacing.unit * 5,
        [theme.breakpoints.up(400 + theme.spacing.unit * 5 * 2)]: {
            width: '30%',
            marginLeft: '60%',
            marginTop: 130,
        },
        textAlign: "center",
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: '#4476BD',
        marginLeft: '45%',
        marginBottom: '2%',
    },
    form: {
        marginTop: theme.spacing.unit ,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
        backgroundColor: '#6891C9',
        color: "white",
    },
    password: {
        color: '#98D396 !important',
    },
    newButtons: {
        fontSize: 11,
        marginTop: 30,
    }
    ,
    loginImage: {
        float: 'left',
        width: '40%',
        marginTop: '4%',
        marginLeft: '3%',
    },
}))

export default useStyles;