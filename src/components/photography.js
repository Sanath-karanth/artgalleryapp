import React, { Fragment,useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import '../css/main.css'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Tooltip from '@material-ui/core/Tooltip';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PhoneIcon from '@material-ui/icons/Phone';
import anime from "animejs";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import FeedbackIcon from '@material-ui/icons/Feedback';
import BrushIcon from '@material-ui/icons/Brush';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ToggleButton from '../common/ToggleButton';
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
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const MainPage = (props) => {
  const classes = useStyles();
  
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
    if(togglestatus === true) {
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
      <Link to="/" style={{color:"#000000", textDecoration:"none"}}>
          <ListItem onClick={handleDrawerClose} button>
            <Tooltip title="Home">
                <ListItemIcon>
                    <HomeIcon onClick={handleDrawerClose} />
                </ListItemIcon>
              </Tooltip>
            <ListItemText onClick={handleDrawerClose} primary='Home' />
          </ListItem>
      </Link>

          <Link to="/portrait" style={{color:"#000000", textDecoration:"none"}}>
          <ListItem onClick={handleDrawerClose} button>
              <Tooltip title="Arts works">
                <ListItemIcon>
                    <ColorLensIcon onClick={handleDrawerClose} />
                </ListItemIcon>
                </Tooltip>
                <ListItemText onClick={handleDrawerClose} primary="Portrait Sketchings" />
          </ListItem>
          </Link>

          <Link to="/photography" style={{color:"#000000", textDecoration:"none"}}>
            <ListItem onClick={handleDrawerClose} button>
                <Tooltip title="Photography">
                      <ListItemIcon>
                  <CameraAltIcon onClick={handleDrawerClose} />
                  </ListItemIcon>
                  </Tooltip>
                <ListItemText onClick={handleDrawerClose} primary='Photography' />
              </ListItem>
            </Link>
            
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
                <Link to="/about" style={{color:"#000000", textDecoration:"none"}}>
                    <ListItem onClick={handleDrawerClose} button>
                        <Tooltip title="About">
                          <ListItemIcon>
                              <AccountCircleIcon onClick={handleDrawerClose} />
                          </ListItemIcon>
                        </Tooltip>
                          <ListItemText onClick={handleDrawerClose} primary='About' />
                    </ListItem>
                </Link>
              </List>
  </div>
);

    ////////////////   back to top function

    function ScrollTop(props) {
      const { children, window } = props;
      const classes = useStyles();
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
      window: PropTypes.func,
    };

    ScrollTop.propTypes = {
      children: PropTypes.element.isRequired,
      window: PropTypes.func,
    };

          /////////////////////  Heading Animation
  
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
    
    useEffect(() => {
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
                            <Link to="/feedback" style={{color:"#ffffff", textDecoration:"none"}}>
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

              
            <div style={{backgroundColor:togglemaincolor}}>


           {/* ----------------------------Photography heading--------------------------*/}

          
              <div className="container-fluid pt-4">
                      <div className={`card shadow-lg ${headertogglecolor}`}>
                        <div className="row no-gutters">
                          <div className="card-body">
                              <h3 style={{ color: headertextcolor}} 
                                  className="headanimate text-left">Photography
                              </h3>
                      </div>
                    </div>
                  </div>
                </div>

        {/* --------------------------------------------------------------------------*/}

        {/* ---------------------------------Single Beach card --------------------------*/}

        <div className="container pt-4">
            <div className={`card mb-2 shadow-lg ${cardcolor}`}>
            <div className="row">
                <div className="col-md-6">
                  <img src="./images/photography/beach.jpg" 
                        style={{width:"100%",height:'auto'}}
                        className={`card-img p-2 ${cardshadowcolor}`} 
                        alt="card 2">
                    </img>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h4 className="card-title" style={{color:cardheadcolor}}>Beach</h4>
                      <p className="card-text paraquote" style={{color:alltextcolor}}>
                          <i className="fas fa-quote-left p-2"></i> 
                          At the beach, life is different. Time doesn’t move hour to hour but mood to moment. We live by the currents, plan by the tides and follow the sun.
                          <i className="fas fa-quote-right p-2"></i>
                      </p>
                      <p className="card-text paradesp"
                        style={{color:alltextcolor}}>A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock, such as sand, gravel, shingle, pebbles, etc, or biological sources, such as mollusc shells or coralline algae.
                      </p>
                      <p className="card-text paradate" 
                      style={{color:alltextcolor}}>Art Creation Date:
                      <small className="text-primary"> 08-08-2017</small>
                      </p>
                        <a href="https://en.wikipedia.org/wiki/Beach"  
                          target="_blank" 
                          className={`btn ${allbuttoncolor}`}>
                          <p className="card-text aboutbuttontext" 
                            style={{color:allbuttontextcolor}}>About Beach
                          </p>
                        </a>
                    </div>
                  </div>
              </div>
              </div>
          </div>

          {/* ------------------------------------------------------------------------- */}

          {/* ---------------------------------Single Beach ride card ------------------*/}

          <div className="container pt-4">
            <div className={`card mb-2 shadow-lg ${cardcolor}`}>
            <div className="row">
                  <div className="col-md-6">
                    <div className="card-body">
                      <h4 className="card-title" style={{color:cardheadcolor}}>Beach Adventure</h4>
                      <p className="card-text paraquote" style={{color:alltextcolor}}>
                          <i className="fas fa-quote-left p-2"></i> 
                          To escape and sit quietly on the beach – that's my idea of paradise.
                      </p>
                      <p className="card-text paradesp"
                        style={{color:alltextcolor}}>At the beach, life is different. Time doesn’t move hour to hour but mood to moment. We live by the currents, plan by the tides and follow the sun.
                      </p>
                      <p className="card-text paradate" 
                      style={{color:alltextcolor}}>Art Creation Date:
                      <small className="text-primary"> 08-08-2017</small>
                      </p>
                        <a href="http://beachadventures.in/"  
                          target="_blank" 
                          className={`btn ${allbuttoncolor}`}>
                          <p className="card-text aboutbuttontext" 
                            style={{color:allbuttontextcolor}}>About
                          </p>
                        </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                  <img src="./images/photography/beachride.jpg" 
                        style={{width:"100%",height:'auto'}}
                        className={`card-img p-2 ${cardshadowcolor}`} 
                        alt="card 2">
                    </img>
                  </div>
              </div>
              </div>
          </div>

          {/* ------------------------------------------------------------------------- */}

          {/* ---------------------------------Sun Raise card --------------------------*/}

        <div className="container pt-4">
            <div className={`card mb-2 shadow-lg ${cardcolor}`}>
            <div className="row">
                <div className="col-md-7">
                  <img src="./images/photography/sunraise.jpg" 
                        style={{width:"100%",height:'auto'}}
                        className={`card-img p-2 ${cardshadowcolor}`} 
                        alt="card 2">
                    </img>
                  </div>
                  <div className="col-md-5">
                    <div className="card-body">
                      <h4 className="card-title" style={{color:cardheadcolor}}>Sun Rise</h4>
                      <p className="card-text paraquote" style={{color:alltextcolor}}>
                          <i className="fas fa-quote-left p-2"></i> 
                          If you want to be reminded of the love of the Lord, just watch the sunrise.
                          <i className="fas fa-quote-right p-2"></i>
                      </p>
                      <p className="card-text paradesp"
                        style={{color:alltextcolor}}>Sunrise (or sunup) is the moment when the upper limb of the Sun appears on the horizon in the morning.[1] The term can also refer to the entire process of the solar disk crossing the horizon and its accompanying atmospheric effects.
                      </p>
                      <p className="card-text paradate" 
                      style={{color:alltextcolor}}>Art Creation Date:
                      <small className="text-primary"> 08-08-2017</small>
                      </p>
                        <a href="https://en.wikipedia.org/wiki/Sunrise#:~:text=Sunrise%20(or%20sunup)%20is%20the,and%20its%20accompanying%20atmospheric%20effects."  
                          target="_blank" 
                          className={`btn ${allbuttoncolor}`}>
                          <p className="card-text aboutbuttontext" 
                            style={{color:allbuttontextcolor}}>About Sunrise
                          </p>
                        </a>
                    </div>
                  </div>
              </div>
              </div>
          </div>

          {/* ------------------------------------------------------------------------- */}

          {/* ---------------------------------Red rose card ---------------------------*/}

          <div className="container pt-4">
            <div className={`card mb-2 shadow-lg ${cardcolor}`}>
            <div className="row">
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title" style={{color:cardheadcolor}}>Red Rose</h4>
                      <p className="card-text paraquote" style={{color:alltextcolor}}>
                          <i className="fas fa-quote-left p-2"></i> 
                          The red rose whispers of passion, And the white rose breathes of love; O, the red rose is a falcon, And the white rose is a dove.
                      </p>
                      <p className="card-text paradesp"
                        style={{color:alltextcolor}}>A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars.They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.
                      </p>
                      <p className="card-text paradate" 
                      style={{color:alltextcolor}}>Art Creation Date:
                      <small className="text-primary"> 09-08-2018</small>
                      </p>
                        <a href="https://en.wikipedia.org/wiki/Rose"  
                          target="_blank" 
                          className={`btn ${allbuttoncolor}`}>
                          <p className="card-text aboutbuttontext" 
                            style={{color:allbuttontextcolor}}>About Red Rose
                          </p>
                        </a>
                    </div>
                  </div>
                  <div className="col-md-5">
                  <img src="./images/photography/redrose.jpg" 
                        style={{width:"100%",height:'auto'}}
                        className={`card-img p-2 ${cardshadowcolor}`} 
                        alt="card 2">
                    </img>
                  </div>
              </div>
              </div>
          </div>

          {/* ------------------------------------------------------------------------- */}

          {/* ---------------------------------Sun Set card --------------------------*/}

        <div className="container pt-4">
            <div className={`card mb-2 shadow-lg ${cardcolor}`}>
            <div className="row">
                <div className="col-md-7">
                  <img src="./images/photography/sunset.jpg" 
                        style={{width:"100%",height:'auto'}}
                        className={`card-img p-2 ${cardshadowcolor}`} 
                        alt="card 2">
                    </img>
                  </div>
                  <div className="col-md-5">
                    <div className="card-body">
                      <h4 className="card-title" style={{color:cardheadcolor}}>Sun Set</h4>
                      <p className="card-text paraquote" style={{color:alltextcolor}}>
                          <i className="fas fa-quote-left p-2"></i> 
                          Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.
                          <i className="fas fa-quote-right p-2"></i>
                      </p>
                      <p className="card-text paradesp"
                        style={{color:alltextcolor}}>Sunset, also known as sundown, is the daily disappearance of the Sun below the horizon due to Earth's rotation. As viewed from the Equator, the equinox Sun sets exactly due west in both Spring and Autumn.
                      </p>
                      <p className="card-text paradate" 
                      style={{color:alltextcolor}}>Art Creation Date:
                      <small className="text-primary"> 08-08-2017</small>
                      </p>
                        <a href="https://en.wikipedia.org/wiki/Sunset"  
                          target="_blank" 
                          className={`btn ${allbuttoncolor}`}>
                          <p className="card-text aboutbuttontext" 
                            style={{color:allbuttontextcolor}}>About SunSet
                          </p>
                        </a>
                    </div>
                  </div>
              </div>
              </div>
          </div>

          {/* ------------------------------------------------------------------------- */}

          {/* ---------------------------------Sun Shine card ---------------------------*/}

          <div className="container pt-4">
            <div className={`card mb-2 shadow-lg ${cardcolor}`}>
            <div className="row">
                  <div className="col-md-5">
                    <div className="card-body">
                      <h4 className="card-title" style={{color:cardheadcolor}}>Sun Shine</h4>
                      <p className="card-text paraquote" style={{color:alltextcolor}}>
                          <i className="fas fa-quote-left p-2"></i> 
                          We cannot endure to waste anything so precious as autumnal sunshine by staying in the house.
                      </p>
                      <p className="card-text paradesp"
                        style={{color:alltextcolor}}>Sunshine is a 2007 science fiction psychological thriller film directed by Danny Boyle and written by Alex Garland. Taking place in the year 2057, the story follows a group of astronauts on a dangerous mission.
                      </p>
                      <p className="card-text paradate" 
                      style={{color:alltextcolor}}>Art Creation Date:
                      <small className="text-primary"> 08-08-2017</small>
                      </p>
                        <a href="https://en.wikipedia.org/wiki/Sunshine_(2007_film)"  
                          target="_blank" 
                          className={`btn ${allbuttoncolor}`}>
                          <p className="card-text aboutbuttontext" 
                            style={{color:allbuttontextcolor}}>About SunShine
                          </p>
                        </a>
                    </div>
                  </div>
                  <div className="col-md-7">
                  <img src="./images/photography/sunshine.jpg" 
                        style={{width:"100%",height:'auto'}}
                        className={`card-img p-2 ${cardshadowcolor}`} 
                        alt="card 2">
                    </img>
                  </div>
              </div>
              </div>
          </div>

          {/* ------------------------------------------------------------------------- */}

          {/* -------------------------------Beach waves card --------------------------*/}

        <div className="container pt-4">
            <div className={`card mb-2 shadow-lg ${cardcolor}`}>
            <div className="row">
                <div className="col-md-7">
                  <img src="./images/photography/beachwaves.jpg" 
                        style={{width:"100%",height:'auto'}}
                        className={`card-img p-2 ${cardshadowcolor}`} 
                        alt="card 2">
                    </img>
                  </div>
                  <div className="col-md-5">
                    <div className="card-body">
                      <h4 className="card-title" style={{color:cardheadcolor}}>Ocean Waves</h4>
                      <p className="card-text paraquote" style={{color:alltextcolor}}>
                          <i className="fas fa-quote-left p-2"></i> 
                          The breaking of a wave cannot explain the whole sea or ocean.
                          <i className="fas fa-quote-right p-2"></i>
                      </p>
                      <p className="card-text paradesp"
                        style={{color:alltextcolor}}>Wind waves have a certain amount of randomness: subsequent waves differ in height, duration, and shape with limited predictability.
                      </p>
                      <p className="card-text paradate" 
                      style={{color:alltextcolor}}>Art Creation Date:
                      <small className="text-primary"> 08-08-2017</small>
                      </p>
                        <a href="https://en.wikipedia.org/wiki/Wind_wave"  
                          target="_blank" 
                          className={`btn ${allbuttoncolor}`}>
                          <p className="card-text aboutbuttontext" 
                            style={{color:allbuttontextcolor}}>About
                          </p>
                        </a>
                    </div>
                  </div>
              </div>
              </div>
          </div>

          {/* ------------------------------------------------------------------------- */}

          {/* ---------------------------------River Shore card ---------------------------*/}

          <div className="container pt-4 pb-4">
            <div className={`card mb-2 shadow-lg ${cardcolor}`}>
            <div className="row">
                  <div className="col-md-5">
                    <div className="card-body">
                      <h4 className="card-title" style={{color:cardheadcolor}}>River Shore</h4>
                      <p className="card-text paraquote" style={{color:alltextcolor}}>
                          <i className="fas fa-quote-left p-2"></i> 
                          Man cannot discover new oceans unless he has the courage to lose sight of the shore.
                      </p>
                      <p className="card-text paradesp"
                        style={{color:alltextcolor}}>A shore or a shoreline is the fringe of land at the edge of a large body of water, such as an ocean, sea, or lake. In physical oceanography, a shore is the wider fringe that is geologically modified by the action of the body of water past and present.
                      </p>
                      <p className="card-text paradate" 
                      style={{color:alltextcolor}}>Art Creation Date:
                      <small className="text-primary"> 08-08-2017</small>
                      </p>
                        <a href="https://en.wikipedia.org/wiki/Shore"  
                          target="_blank" 
                          className={`btn ${allbuttoncolor}`}>
                          <p className="card-text aboutbuttontext" 
                            style={{color:allbuttontextcolor}}>About
                          </p>
                        </a>
                    </div>
                  </div>
                  <div className="col-md-7">
                  <img src="./images/photography/rivershore.jpg" 
                        style={{width:"100%",height:'auto'}}
                        className={`card-img p-2 ${cardshadowcolor}`} 
                        alt="card 2">
                    </img>
                  </div>
              </div>
              </div>
          </div>

          {/* ------------------------------------------------------------------------- */}

          {/* --------------------------     footer part    --------------------------- */} 
      
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