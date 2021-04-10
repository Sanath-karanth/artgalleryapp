import React, { Fragment,useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import '../css/main.css'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import NotesIcon from '@material-ui/icons/Notes';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import HomeIcon from '@material-ui/icons/Home';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import BlurLinearIcon from '@material-ui/icons/BlurLinear';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import anime from "animejs";
import TextTransition, { presets } from "react-text-transition";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Switch from '@material-ui/core/Switch';
import ToggleButton from '../common/ToggleButton'
import '../css/aboutstyle.css'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BrushIcon from '@material-ui/icons/Brush';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
 
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },

  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
  headergradientD: {
    background: "linear-gradient(to right,rgb(0, 0, 0), rgb(106, 133, 182));"
  },
  headergradientR: {
    background: "linear-gradient(to right,rgb(0, 0, 0), rgb(241, 40, 100));" 
  },
  headergradientG: {
    background: "linear-gradient(to right,rgb(0, 0, 0), rgb(42, 230, 123));" 
  },
  headergradientB: {
    background: "linear-gradient(to right,rgb(0, 0, 0), rgb(45, 32, 223));" 
  },
  titlestyle: {
    fontFamily: 'Roboto Mono',
    fontWeight:'bold',
    flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  backroot: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  footerroot: {
      display: 'flex',
      // flexGrow: 1,
      position: 'static',
      left: 0,
      bottom: 0,
      width:'100%'
    },
    copyrighttext: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#ffffff',
      fontFamily: 'Roboto Mono',
      background: "rgb(0, 0, 0)",
      opacity: 0.3
    },
   
    officialtext: {
      color: '#ffffff',
      fontFamily: 'Roboto Mono',
      fontSize:'20px'
    },
  dralist: {
    width: 250,
  },
  fulldraList: {
    width: 'auto',
  },
  aboutcardroot: {
    maxWidth: "100%",
  },
  // mediaimage: {
  //   height: "auto",
  //   width:"50%",
  //   padding: '25%',
  //   alignItems: 'center',
  //   borderRadius:'80%',
  //   justifyContent:'center',
  //   marginLeft:'25%' 
  // },
  mediaimage: {
    height: "auto",
    width:"50%",
    padding: '25%',
    alignItems: 'center',
    borderRadius:'80%',
    justifyContent:'center',
    marginLeft:'25%',
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
  },
  mediaimageOpen: {
    transform: 'rotate(360deg)',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const AboutPage = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [ancher, setAncher] = useState('left');

  const [togglestatus, setTogglestatus] = useState(false);
  const [headgradient, setHeadgradient] = useState('linear-gradient(to right,rgb(0, 0, 0), rgb(106, 133, 182))');
  const [togglemaincolor, setTogglemaincolor] = useState('#EEECEB');
  const [headertogglecolor, setHeadertogglecolor] = useState('bg-light');
  const [headertextcolor, setHeadertextcolor] = useState('#000000');
  const [allbuttoncolor, setAllbuttoncolor] = useState('btn-dark');
  const [cardcolor, setCardcolor] = useState('bg-light');
  const [cardshadowcolor, setCardshadowcolor] = useState('shadow-lg');
  const [cardheadcolor, setCardheadcolor] = useState('#5D6D7E');
  const [alltextcolor, setAlltextcolor] = useState('#000000');
  const [allbuttontextcolor, setAllbuttontextcolor] = useState('#FFFFFF');

  const [gradient1, setGradient1] = useState(classes.headergradientD);

  const togglechange = () => {
    if(togglestatus == true) {
      setTogglestatus(false);
      setTogglemaincolor('#EEECEB');
      setHeadertogglecolor('bg-light');
      setHeadertextcolor('#000000');
      setCardcolor('bg-light');
      setCardshadowcolor('shadow-lg');
      setAllbuttoncolor('btn-dark');
      setAllbuttontextcolor('#FFFFFF');
      setCardheadcolor('#5D6D7E');
      setAlltextcolor('#000000');
      }
      else
      {
      setTogglestatus(true);
      setTogglemaincolor('#000000');
      setHeadertogglecolor('bg-dark');
      setHeadertextcolor('#FFFFFF');
      setCardcolor('bg-dark');
      setCardshadowcolor('');
      setAllbuttoncolor('btn-light');
      setAllbuttontextcolor('#000000');
      setCardheadcolor('#FFFFFF');
      setAlltextcolor('#FFFFFF');
      } 
  }
 
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [opengradient, setOpengradient] = useState(false);

  const handleClickgradient = () => {
    setOpengradient(!opengradient);
  };

  const [radiovalue, setRadiovalue] = useState('Gradient 1');
  const gradientselect = (event) => {
    console.log(event.target.value);
    setRadiovalue(event.target.value);
    if(event.target.value === 'GradientD')
    {
      setGradient1(classes.headergradientD);
    }
    else if(event.target.value === 'GradientR')
    {
      setGradient1(classes.headergradientR);
    }
    else if(event.target.value === 'GradientG')
    {
      setGradient1(classes.headergradientG);
    }
    else if(event.target.value === 'GradientB')
    {
      setGradient1(classes.headergradientB);
    }
 }

  const Drawerlist = (ancher) => (
    <div
      className={clsx(classes.dralist, {
        [classes.fulldraList]: ancher === 'left',
      })}
      role="presentation"
    >
        <List>
            <ListItem button>
              <Tooltip title="Home">
              <ListItemIcon>
                   <Link to="/" style={{color:"#000000", textDecoration:"none"}}>
                      <HomeIcon />
                    </Link>
                 </ListItemIcon>
                </Tooltip>
                <Link to="/" style={{color:"#000000", textDecoration:"none"}}>
                          <ListItemText primary='Home' />
                </Link>
            </ListItem>

            <ListItem button>
                <Tooltip title="Arts works">
                  <ListItemIcon>
                      <ColorLensIcon />
                  </ListItemIcon>
                  </Tooltip>
                <ListItemText onClick={handleDrawerClose} primary="Portrait Sketchings" />
            </ListItem>

            <ListItem button>
                <Tooltip title="Photography">
                      <ListItemIcon onClick={handleDrawerClose}>
                  <CameraAltIcon />
                  </ListItemIcon>
                  </Tooltip>
                <ListItemText onClick={handleDrawerClose} primary='Photography' />
              </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button onClick={handleClickgradient}>
                        <Tooltip title="Header Footer Theme">
                          <ListItemIcon>
                              <BrushIcon style={{color:"#000000"}} />
                          </ListItemIcon>
                        </Tooltip>
                          <ListItemText primary='Gradient Theme' />
                          {opengradient ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                      <Collapse in={opengradient} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItem button className={classes.nested}>
                                <RadioGroup aria-label="gradient" 
                                            name="gradient 1"
                                            value={radiovalue} 
                                            onChange={value => gradientselect(value)}>
                                  <FormControlLabel value="GradientD" control={<Radio />} label="Default Gradient" />
                                  <FormControlLabel value="GradientR" control={<Radio />} label="Red Gradient" />
                                  <FormControlLabel value="GradientG" control={<Radio />} label="Green Gradient" />
                                  <FormControlLabel value="GradientB" control={<Radio />} label="Blue Gradient" />
                                </RadioGroup>
                          </ListItem>
                        </List>
                      </Collapse>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <Tooltip title="About">
                          <ListItemIcon>
                            <Link to="/about" style={{color:"#000000", textDecoration:"none"}}>
                              <AccountCircleIcon />
                            </Link>
                          </ListItemIcon>
                        </Tooltip>
                          <Link to="/about" style={{color:"#000000", textDecoration:"none"}}>
                          <ListItemText primary='About' />
                          </Link>
                    </ListItem>
                </List>
    </div>
  );

    ////////////////   back to top function

    function ScrollTop(props) {
      const { children, window } = props;
      const classes = useStyles();
      // Note that you normally won't need to set the window ref as useScrollTrigger
      // will default to window.
      // This is only being set here because the demo is in an iframe.
      const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
      });

      const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      };

      return (
        <Zoom in={trigger}>
          <div onClick={handleClick} role="presentation" className={classes.backroot}>
            {children}
          </div>
        </Zoom>
      );
    }

    ScrollTop.propTypes = {
      children: PropTypes.element.isRequired,
      /**
       * Injected by the documentation to work in an iframe.
       * You won't need it on your project.
       */
      window: PropTypes.func,
    };

    ScrollTop.propTypes = {
      children: PropTypes.element.isRequired,
      /**
       * Injected by the documentation to work in an iframe.
       * You won't need it on your project.
       */
      window: PropTypes.func,
    };

          /////////////////////  Heading Animation
      
          const paraanimation = () => {
            var textWrapper = document.querySelector('.paradesp');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            
            anime.timeline({loop: true})
            .add({
              targets: '.paradesp .letter',
              scale: [4,1],
              opacity: [0,1],
              translateZ: 0,
              easing: "easeOutExpo",
              duration: 950,
              delay: (el, i) => 70*i
            }).add({
              targets: '.paradesp',
              opacity: 0,
              duration: 1000,
              easing: "easeOutExpo",
              delay: 1000
            });
        }
  
        const artgalleryanimation = () => {
          
          anime.timeline({loop: true})
          .add({
            targets: '.artanimation .word',
            scale: [14,1],
            opacity: [0,1],
            easing: "easeOutCirc",
            duration: 1500,
            delay: (el, i) => 800 * i
          }).add({
            targets: '.artanimation',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          });
      }

      
      
      // ///////////////////  expand card function
      
      const [expanded, setExpanded] = React.useState(false);
      const [imgexpand, setImgexpanded] = React.useState(false);
      const [imgshow, setImgshow] = React.useState(false);
      
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };
        const handleimageclick = () => {
          // setImgexpanded(!imgexpand);
          // setImgshow(true);
          if(imgexpand == true) {
            setImgexpanded(false);
            setImgshow(false);
            }
            else
            {
              setImgexpanded(true);
              setImgshow(true);
            } 
        };
    
    useEffect(() => {
      // paraanimation();
      artgalleryanimation();
      }, []);

  return (
        <Fragment >
          <CssBaseline />
            <AppBar
                  position="fixed"
                  className={clsx(classes.appBar, {
                  [classes.appBarShift]: open,
                  })}
              >
                  <Toolbar className={gradient1}>
                  <Tooltip title="Menu">
                  <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="start"
                      className={clsx(classes.menuButton, {
                      [classes.hide]: open,
                      })}
                    >
                      <MenuIcon style={{fontSize:"30px"}}/>
                        </IconButton>
                        </Tooltip>
                        <Typography className='artanimation'
                        style={{ fontFamily: 'Roboto Mono',
                        fontWeight:'bold',
                        flexGrow: 1}} 
                        variant="h5" noWrap>
                          <span className='word'>ART</span> 
                          <span className='word'>Gallery</span>
                        </Typography>
                        <Tooltip title="About">
                          <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            edge="end"
                            // onClick={handleMenu}
                            color="inherit"
                            >
                              <ToggleButton
                                  className="mr-4" 
                                  onChange={togglechange} 
                                  defaultChecked={togglestatus} />
                          
                            <AccountCircleIcon style={{fontSize:"35px"}} />
                          </IconButton>
                    </Tooltip>

                  </Toolbar>
              </AppBar>
                <SwipeableDrawer
                  anchor={ancher}
                  open={open}
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                >
                <Drawerlist anchorvalue={ancher} />
                </SwipeableDrawer>

           
              <Toolbar id="back-to-top-anchor" />

              
                <div className='pb-4' style={{backgroundColor:togglemaincolor}}>
            {/* ----------------------------------------Heading part--------------------------------- */}
            
            <div className={classes.root}>
            <div className="container-fluid">
                    <div className={`card  mt-5 shadow-lg ${headertogglecolor}`}>
                      <div className="row no-gutters">
                        <div className="card-body">
                            <h3 style={{ color: headertextcolor}} 
                                className="headanimate text-left">About Me
                            </h3>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
                
            {/* ------------------------------------------------------------------------- */}
            
          {/* ------------------------------------------------------------------------- */}
          <div className="container pt-4">
                <Card className={classes.aboutcardroot}>
                    <CardHeader
                      avatar={
                        <a href="http://www.gmail.com" style={{textDecoration:'none'}} target="_blank">
                          <Avatar aria-label="recipe" className={classes.avatar}>
                          S
                        </Avatar></a>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title="Sanath S Karanth"
                      subheader="March 30, 2021"
                    />
                    <div>
                      { imgshow ? 
                    <CardMedia
                          className={clsx(classes.mediaimage, {
                            [classes.mediaimageOpen]: imgexpand,
                          })}
                          onClick={handleimageclick}
                          onMouseOver={handleimageclick}
                          aria-expanded={imgexpand}
                          aria-label="show more"
                          image="./images/Sanath2.jpg"
                          title="Paella dish" />
                          :
                          <CardMedia
                          className={clsx(classes.mediaimage, {
                            [classes.mediaimageOpen]: imgexpand,
                          })}
                          onClick={handleimageclick}
                          onMouseOver={handleimageclick}
                          aria-expanded={imgexpand}
                          aria-label="show more"
                          image="./images/Sanath.jpg"
                          title="Paella dish" />
                        }
                    </div>
                    <CardContent>
                    <p class="card-text paraquote">
                        <i class="fas fa-quote-left p-2"></i> 
                        To succeed in all your pursuits, remove doubts and develop your confidence.
                        <i class="fas fa-quote-right p-2"></i>
                    </p>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <h5 paragraph>Sanath S Karanth</h5>
                        <p className='paradesp mt-2'>
                        Associate Software Engineer
                        <p className='paradesp mt-2'>
                          Contact - +919449685219
                          <p className='paradesp mt-2'>
                          Shimoga - 577205
                        </p>
                        </p>
                        </p>
                       
                       
                      </CardContent>
                    </Collapse>
                  </Card>
                </div>   

      {/* ------------------------------------------------------------------------- */}
        
          </div>  

                <div className={clsx(classes.footerroot),(gradient1)}>
                <div className="footer-dark">
                            <footer>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-2 item">
                                            {/* <h3>Services</h3>
                                            <ul>
                                                <li><a href="#">Web design</a></li>
                                                <li><a href="#">Development</a></li>
                                                <li><a href="#">Hosting</a></li>
                                            </ul> */}
                                        </div>
                                        <div className="col-sm-6 col-md-4 item">
                                            <h3>About</h3>
                                            <ul>
                                                <li>
                                                 <h4 style={{fontFamily:"Roboto Mono"}}>Sanath S Karanth</h4>
                                                </li>
                                                <li className='mt-3'>
                                                  <a>
                                                    <BusinessCenterIcon style={{color:'white',fontSize:"20px",marginRight:'10px'}} />
                                                    <span  
                                                        style={{color:'white',fontSize:"15px",fontFamily:"Roboto Mono"}}>Associate Software Engineer
                                                    </span>
                                                    </a>
                                                </li>
                                                <li className='mt-2'>
                                                  <a href="#">
                                                  <MailIcon  style={{color:'white',fontSize:"20px",marginRight:'10px'}} />
                                                    <span  
                                                        style={{color:'white',fontSize:"15px",fontFamily:"Roboto Mono"}}>sanathsk97@gmail.com
                                                    </span>
                                                  </a>
                                                </li>
                                                <li className='mt-2'>
                                                  <a>
                                                  <PhoneIcon style={{color:'white',fontSize:"20px",marginRight:'10px'}} />
                                                    <span  
                                                        style={{color:'white',fontSize:"15px",fontFamily:"Roboto Mono"}}>+91 94496 85219
                                                    </span>
                                                  </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 item text">
                                            <h3>Art Gallery</h3>
                                            <p className="footerdesp">Art is a creative activity that expresses imaginative or technical skill. 
                                              It produces a product, an object. 
                                              Art is a diverse range of human activities in creating visual,
                                               performing artifacts, and expressing the author's imaginative mind. 
                                               The product of art is called a work of art, for others to experience.</p>
                                        </div>
                                        <div className="col item social">
                                          <a href="http://www.gmail.com" target="_blank">
                                            <i  className="fab fa-google-plus-g" style={{color:'white',fontSize:"20px"}}></i>
                                          </a>
                                          <a href="http://www.facebook.com" target="_blank">
                                            <i  className="fa fa-facebook" style={{color:'white',fontSize:"20px"}}></i>
                                          </a>
                                          <a href="http://www.linkedin.com" target="_blank">
                                            <i  className="fa fa-linkedin-square" style={{color:'white',fontSize:"20px"}}></i>
                                          </a>
                                          </div>
                                    </div>
                                    <p className="copyright">© 2021 Copyright karanthartgallery.com</p>
                                </div>
                            </footer>
                        </div>
                </div>
                <ScrollTop {...props}>
                  <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                  </Fab>
                </ScrollTop>
          </Fragment>
  );
}
export default AboutPage;