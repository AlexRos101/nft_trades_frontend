import { makeStyles } from '@mui/styles';

const styles = (theme) => {
  return {
    toolBar: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1.5rem 6rem',
    },
    logo: {
      color: 'blue',
      cursor: 'pointer',
      maxHeight: '1.75rem',
    },
    link: {
      color: "#000",
      fontWeight: "700",
      fontSize: "1.2rem",
      marginRight: "2rem"
    },
    menuIcon: {
      color: '#000',
      border:'solid 1px #000', 
      color: '#000', 
      width: '40px',
      height: '40px',
    },
    heroBox: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(images/gradient.jpg)`,
      marginTop: '-90px',
      paddingTop: '90px',
    },
    gridContainer: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '1300px',
      padding: '50px',
    },
    title: {
      paddingBottom: '15px',
    },
    subtitle: {
      opacity: '0.4',
      paddingBottom: '30px',
    },
    largeImage: {
      width: '100%',
    },
    primaryButton: {
      margin: '16px',
      padding: '8px 32px',
      backgroundColor: '#8358ff',
      color: '#fff',
      borderRadius: '99px',
      boxShadow: "4px 5px 10px rgba(108,106,213,.25),inset 2px 2px 6px #a78df0,inset -5px -5px 10px #6336e4"
    },
    secondaryButton: {
      padding: '8px 32px',
      backgroundColor: '#fff',
      color: '#8358ff',
      borderRadius: '99px',
      boxShadow: "5px 5px 10px rgba(108,106,212,.25),inset 2px 2px 6px #eef1f9,inset -5px -5px 10px #dfe3ef;"
    },

    formContainer: {
      flexGrow: 1,
      padding: '10px',
      maxWidth: '700px',
      margin: '30px auto',
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
      },
    },
    form: {
      marginTop: '30px',
    },
    formHeading: {
      textAlign: 'center',
    },
    aboutUsContainer: {
      width: '100%',
      display: 'flex',
      minHeight: '400px',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '30px 0px 50px 0px',
    },
    aboutUsSubtitle: {
      opacity: '0.7',
      paddingBottom: '30px',
      fontSize: '18px',
    },
    sectionGridContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      minHeight: '500px',
    },
    sectionGridItem: {
      backgroundColor: '#f2f0f1',
      textAlign: 'center',
      padding: '30px',
      width: '200px',
      borderRadius: '10px',
      margin: '10px',
    },
    inputField: {
      marginBottom: '20px',
    },
    textArea: {
      width: '100%',
      marginBottom: '20px',
      fontSize: '16px',
      padding: '10px',
    },
    footerContainer: {
      display: 'flex',
      alignItems: 'center',
      miHeight: '10vh',
      padding: '20px',
      justifyContent: 'center',
      backgroundColor: '#f2f0f1',
      flexDirection: 'column',
    },
    footerText: {
      paddingBottom: '10px',
    },
    footerDate: {
      opacity: '0.4',
    },
    testimonialCard: {
      backgroundColor: '#fff',
      padding: '10px',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
    },
    testimonialStatement: {
      paddingBottom: '25px',
    },
    avatar: {
      marginRight: '10px',
    },
    testimonialPosition: {
      fontSize: '14px',
      opacity: '0.6',
    },
  };
};

const useStyles = makeStyles(styles);
export default useStyles;