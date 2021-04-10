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
import ToggleButton from '../common/ToggleButton';
import FeedbackIcon from '@material-ui/icons/Feedback';
import '../css/custom.css'


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
  headergradient: {
    background: "linear-gradient(to right,rgb(0, 0, 0), rgb(106, 133, 182));"
    // background: "linear-gradient(to right,rgb(0, 0, 0), rgb(51, 8, 103));" 
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
}));

const MainPage = (props) => {
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
                  <ListItemIcon onClick={handleDrawerClose}>
                      <HomeIcon />
                  </ListItemIcon>
                </Tooltip>
              <ListItemText onClick={handleDrawerClose} primary='Home' />
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
            var textWrapper = document.querySelector('.paradescription');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            
            anime.timeline({loop: true})
            .add({
              targets: '.paradescription .letter',
              scale: [4,1],
              opacity: [0,1],
              translateZ: 0,
              easing: "easeOutExpo",
              duration: 950,
              delay: (el, i) => 70*i
            }).add({
              targets: '.paradescription',
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
            scale: [12,1],
            opacity: [0,1],
            easing: "easeOutCirc",
            duration: 1500,
            delay: (el, i) => 1000 * i
          }).add({
            targets: '.artanimation',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          });
      }

    const feedbackmodal = () => {

      return(<Fragment>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
          Launch demo modal
        </button>

        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </Fragment>
        )
    }
    
    useEffect(() => {
      paraanimation();
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
                  <Toolbar className={classes.headergradient}>
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
                        <Typography 
                                className='artanimation'
                                style={{ fontFamily: 'Roboto Mono',
                                fontWeight:'bold',
                                flexGrow: 1}} 
                                variant="h5" noWrap>
                          <span className='word'>ART</span> 
                          <span className='word'>Gallery</span>
                        </Typography>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            edge="end"
                            color="inherit">
                          <ToggleButton
                                    className="mr-2" 
                                    onChange={togglechange} 
                                    defaultChecked={togglestatus}>
                          </ToggleButton>
                        </IconButton>
                        <Tooltip title="Feedback">
                          <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            edge="end"
                            // onClick={feedbackmodal}
                            color="inherit"
                            >
                            <Link to="/" style={{color:"#ffffff", textDecoration:"none"}}>
                            <FeedbackIcon style={{fontSize:"30px"}}></FeedbackIcon>
                            </Link>
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

               {/* ----------------------------------------SlideShow part--------------------------------- */}

                <div className={classes.root}>
                  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="./images/banner/slider1.jpg" className="d-block  w-100" alt="slide 1"></img>
                            <div className="carousel-caption d-none d-md-block">
                                <h4 className="text-light">Portrait Sketching</h4>
                                <p className="text-light paracarousel">Portrait painting is a genre in painting, where the intent is to represent a specific human subject.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="./images/banner/slider2.jpg" className="d-block  w-100" alt="slide 2"></img>
                            <div className="carousel-caption d-none d-md-block">
                                <h4 className="text-light">Marker Sketching</h4>
                                <p className="text-light paracarousel">Art markers are used by illustrators, designers and artists to achieve a different result in artwork than you would normally see from using colored pencils or paints.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="./images/banner/slider3.jpg" className="d-block  w-100" alt="slide "></img>
                            <div className="carousel-caption d-none d-md-block">
                                <h4 className="text-light">Photography</h4>
                                <p className="text-light paracarousel">Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.</p>
                            </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                  </div>
                </div>

                {/* ------------------------------------------------------------------------- */}
                <div style={{backgroundColor:togglemaincolor}}>
            {/* ----------------------------------------Heading part--------------------------------- */}
            
            <div className={classes.root}>
            <div className="container-fluid">
                    <div className={`card  mt-5 shadow-lg ${headertogglecolor}`}>
                      <div className="row no-gutters">
                        <div className="card-body">
                            <h3 style={{ color: headertextcolor}} 
                                className="headanimate text-left">Portrait Arts and Sketchings
                            </h3>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
                
            {/* ------------------------------------------------------------------------- */}

             {/* --------------------------single Indian culture card---------------------- */}  


                <div className="container pt-5">
                <div className={`card mb-2 shadow-lg ${cardcolor}`}>
                  <div className="row no-gutters">
                      <div className="col-md-4">
                      <img src="./images/art/indiamap.jpg"
                           style={{width:"100%",height:'auto'}} 
                            className={`card-img p-3 ${cardshadowcolor}`} 
                            alt="image">      
                      </img>
                      </div>
                      <div className="col-md-8">
                      <div className="card-body">
                          <h4 style={{color:cardheadcolor}} 
                              className="card-title">Indian Culture Map
                          </h4>
                          <p className="card-text paraquote"
                             style={{color:alltextcolor}}>
                              <i className="fas fa-quote-left p-2"></i> 
                              India is the cradle of the human race, the birthplace of human speech, the mother of history, the grandmother of legend, and the great grand mother of tradition. Our most valuable and most artistic materials in the history of man are treasured up in India only!.
                              <i className="fas fa-quote-right p-2"></i>
                          </p>
                          <p className="card-text paradescription" 
                                style={{color:alltextcolor,fontFamily:'Century Gothic'}}>The Indian culture, often labeled as an amalgamation of several various cultures, spans across the Indian subcontinent and has been influenced and shaped by a history that is several thousand years old. India is the birthplace of Hinduism, Buddhism, Jainism, Sikhism, and other religions.</p>
                          <p className="card-text paradate" 
                                style={{color:alltextcolor}}>Art Creation Date:<small className="text-primary"> 20-08-2018</small></p>
                              <a href="https://en.wikipedia.org/wiki/India"  
                                target="_blank" 
                                className={`btn ${allbuttoncolor}`}>
                                  <p className="card-text aboutbuttontext" 
                                      style={{color:allbuttontextcolor}}>About India</p>
                              </a>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
          {/* ------------------------------------------------------------------------- */}

          {/* --------------------------Single Indian Army Soldier card ---------------------- */} 

              <div class="container pt-4">
              <div className={`card mb-2 shadow-lg ${cardcolor}`}>
                  <div class="row no-gutters">
                      <div class="col-md-8">
                      <div class="card-body">
                      <h4 style={{color:cardheadcolor}} 
                              className="card-title">Indian Army Soldier
                          </h4>
                          <p className="card-text paraquote"
                             style={{color:alltextcolor}}>
                              <i class="fas fa-quote-left p-2"></i> 
                              To other countries, I may go as a tourist, but to India, I come as an Indian Solider. — Indian Army.
                              <i class="fas fa-quote-right p-2"></i>
                          </p>
                          <p className="card-text paradesp" 
                                style={{color:alltextcolor}}>The Indian Army is the land-based branch and the largest component of the Indian Armed Forces. The President of India is the Supreme Commander of the Indian Army, and its professional head is the Chief of Army Staff, who is a four-star general.
                          </p>
                          <p className="card-text paradate" 
                                style={{color:alltextcolor}}>Art Creation Date:<small className="text-primary"> 30-08-2018</small></p>
                              <a href="https://en.wikipedia.org/wiki/Indian_Army"  
                                target="_blank" 
                                className={`btn ${allbuttoncolor}`}>
                                  <p className="card-text aboutbuttontext" 
                                      style={{color:allbuttontextcolor}}>About Indian Army</p>
                              </a>
                      </div>
                      </div>
                      <div class="col-md-4">
                      <img src="./images/art/armyman.jpg" 
                           style={{width:"100%",height:'auto'}} 
                           class={`card-img p-3 ${cardshadowcolor}`}  
                           alt="image"></img>
                      </div>
                  </div>
                  </div>
              </div>
              <div class="pb-4">

              </div>
        {/* ------------------------------------------------------------------------- */}

      {/* --------------------------       footer part    ------------------------------- */} 
      
                <div className={clsx(classes.footerroot),(classes.headergradient)}>
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
        {/* ------------------------------------------------------------------------- */} 
  
        </div>  
                <ScrollTop {...props}>
                  <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                  </Fab>
                </ScrollTop>
          </Fragment>
  );
}
export default MainPage;