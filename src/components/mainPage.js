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
import TeaxtAnimation from '../common/textanimation';
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
  // const [headgradient, setHeadgradient] = useState('linear-gradient(to right,rgb(0, 0, 0), rgb(106, 133, 182))');
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
          <TeaxtAnimation />
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

               {/* ----------------------------------------SlideShow part--------------------------------- */}

                <div className={classes.root}>
                  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
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

             <div className="container pt-4">
                  <div className={`card mb-2 shadow-lg ${cardcolor}`}>
                    <div className="row no-gutters">
                        <div className="col-md-5 flip-card">  
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <h1 className="mt-4">Indian Culture Map</h1> 
                                <p className="card-text paradate" 
                                style={{color:"#000000"}}>Art Creation Date:<small className="text-primary"> 20-08-2018</small></p>
                                  <p>Touch or hover to see</p>
                                </div>
                                <div className="flip-card-back">
                                <img  src="./images/art/indiamap.jpg" 
                                        style={{height:'500px'}} 
                                        className={`card-img p-3 ${cardshadowcolor}`} 
                                        alt="image"></img>
                                </div>
                            </div>
                        </div>  
                        <div className="col-md-7">
                        <div className="card-body">
                            <h4 style={{color:cardheadcolor}}>Indian Culture Map</h4>
                            <p className="card-text paraquote" style={{color:alltextcolor}}>
                                <i className="fas fa-quote-left p-2"></i> 
                                India is the cradle of the human race, the birthplace of human speech, the mother of history, the grandmother of legend, and the great grand mother of tradition. Our most valuable and most artistic materials in the history of man are treasured up in India only!.
                                <i className="fas fa-quote-right p-2"></i>
                            </p>
                            <p className="card-text indiamaptext" 
                                style={{color:alltextcolor}}>The Indian culture, often labeled as an amalgamation of several various cultures, spans across the Indian subcontinent and has been influenced and shaped by a history that is several thousand years old. India is the birthplace of Hinduism, Buddhism, Jainism, Sikhism, and other religions.</p>
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

              <div className="container pt-4">
              <div className={`card mb-2 shadow-lg ${cardcolor}`}>
                  <div className="row no-gutters">
                      <div className="col-md-8">
                      <div className="card-body">
                      <h4 style={{color:cardheadcolor}} 
                              className="card-title">Indian Army Soldier
                          </h4>
                          <p className="card-text paraquote"
                             style={{color:alltextcolor}}>
                              <i className="fas fa-quote-left p-2"></i> 
                              To other countries, I may go as a tourist, but to India, I come as an Indian Solider. — Indian Army.
                              <i className="fas fa-quote-right p-2"></i>
                          </p>
                          <p className="card-text armymantext" 
                                style={{color:alltextcolor}}>
                                  <span className="text-wrapper">
                                    <span className="letters">The Indian Army is the land-based branch and the largest component of the Indian Armed Forces. The President of India is the Supreme Commander of the Indian Army, and its professional head is the Chief of Army Staff, who is a four-star general.</span>
                                  </span>
                                  
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
                      <div className="col-md-4 flip-card">  
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <h1 className="mt-4">Indian Army Soldier</h1> 
                                <p className="card-text paradate" 
                                style={{color:alltextcolor}}>Art Creation Date:<small className="text-primary"> 30-08-2018</small></p>
                                  <p>Touch or hover to see</p>
                                </div>
                                <div className="flip-card-back">
                                <img src="./images/art/armyman.jpg" 
                                      style={{height:'500px'}} 
                                      className={`card-img p-3 ${cardshadowcolor}`}  
                                      alt="image"></img>
                                </div>
                            </div>
                        </div> 
                  </div>
                  </div>
              </div>
              
        {/* ------------------------------------------------------------------------- */}

         {/* --------------------------Double Joker card ---------------------- */} 

        <div className="container pt-4">
        <div className="row mb-2">
            <div className="col-sm-6">
              <div className={`card p-2 mt-2 mb-2 shadow-lg ${cardcolor}`}>
                <img src="./images/art/jokerpositive.jpg" 
                     style={{width:"100%",height:'auto'}} 
                     className="card-img-top" 
                     alt="image"></img>
                <div className="card-body">
                  <h4 className="card-title" style={{color:cardheadcolor}}>Positive shade Sketch</h4>
                  <p className="card-text paradesp"
                     style={{color:alltextcolor}}>Positive space refers to the shape of an object. Look around your room. Every object that you are looking at is creating positive space. Don’t worry about the patterns or details of the item, just focus on the shape of the object.</p>
                  
                  <p className="card-text paradate" 
                                style={{color:alltextcolor}}>Art Creation Date:<small className="text-primary"> 09-08-2020</small></p>
                              <a href="https://www.artinstructionblog.com/an-introduction-to-negative-drawing-with-mike-sibley"  
                                target="_blank" 
                                className={`btn ${allbuttoncolor}`}>
                                  <p className="card-text aboutbuttontext" 
                                      style={{color:allbuttontextcolor}}>About this art</p>
                              </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className={`card p-2 mt-2 mb-2 shadow-lg ${cardcolor}`}>
                <img src="./images/art/jokernegative.jpg" 
                     style={{width:"100%",height:'auto'}} 
                     className="card-img-top" 
                     alt="image"></img>
                <div className="card-body">
                  <h4 className="card-title" style={{color:cardheadcolor}}>Negative shade Sketch</h4>
                  <p className="card-text paradesp"
                     style={{color:alltextcolor}}>Negative space refers to the shape around an object. It can be much harder to look at an object and see the space around it. Look around the room for an object up against a wall and try to focus on the shape created on the wall around the object.</p>
                 
                  <p className="card-text paradate" 
                     style={{color:alltextcolor}}>Art Creation Date:
                     <small className="text-primary"> 09-08-2020</small>
                  </p>
                              <a href="https://www.artinstructionblog.com/an-introduction-to-negative-drawing-with-mike-sibley"  
                                target="_blank" 
                                className={`btn ${allbuttoncolor}`}>
                                  <p className="card-text aboutbuttontext" 
                                      style={{color:allbuttontextcolor}}>About this art</p>
                              </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* ------------------------------------------------------------------------- */}

      {/* -------------------------- Triple Army cards---------------------- */}

      <div className="container pt-4 pb-2">
        <div className="card-deck">
            <div className={`card mt-2 shadow-lg ${cardcolor}`}>
                <img src="./images/art/pulwama.jpg" 
                     style={{width:"100%"}} 
                     className="card-img-top" 
                     alt="card 1"></img>
                <div className="card-body">
                <h4 className="card-title" style={{color:cardheadcolor}}>Pulvama Attack</h4>
                <p className="card-text paradesp"
                   style={{color:alltextcolor}}>Pulwama attack is one of the deadliest terror attacks in Jammu and Kashmir in which 40 Central Reserve Police Force (CRPF) personnel were martyred. The Pulwama attack happened on February 14, 2019, when a Jaish suicide bomber rammed a vehicle carrying over 100 kg of explosives into their bus in Pulwama district.</p>
                </div>
                <div className="card-footer">
                  <p className="card-text paradate" 
                    style={{color:alltextcolor}}>Art Creation Date:
                    <small className="text-primary"> 11-03-2019</small>
                  </p>
                </div>
            </div>
            <div className={`card mt-2 shadow-lg ${cardcolor}`}>
                <img src="./images/art/armygunhat.jpg" 
                     style={{width:"100%"}} 
                     className="card-img-top" 
                     alt="card 2"></img>
                <div className="card-body">
                <h4 className="card-title" style={{color:cardheadcolor}}>Indian Army Weapon AK-47</h4>
                <p className="card-text paradesp"
                   style={{color:alltextcolor}}>The AK-47 203 is the latest and most advanced version of the AK-47 rifle, which will replace the Indian Small Arms System (INSAS) 5.56x45 mm assault rifle.</p>
                </div>
                <div className="card-footer">
                <p className="card-text paradate" 
                    style={{color:alltextcolor}}>Art Creation Date:
                    <small className="text-primary"> 20-04-2020</small>
                  </p>
                </div>
            </div>
            <div className={`card mt-2 shadow-lg ${cardcolor}`}>
            <img src="./images/art/bodybuilder.jpg" 
                 style={{width:"100%"}} 
                 className="card-img-top" 
                 alt="card 2"></img>
                <div className="card-body">
                <h4 className="card-title" style={{color:cardheadcolor}}>Indian Army Fitness</h4>
                <p className="card-text paradesp"
                   style={{color:alltextcolor}}>The minimum acceptable height for Male candidate is 157.5 cms. For women candidate's minimum acceptable height is 152 cms. For Gorkhas and individuals belonging to hills of North Eastern region of India, Garhwali and Kumaon, the Minimum acceptable height will be 5 cms less.</p>
                </div>
                <div className="card-footer">
                <p className="card-text paradate" 
                    style={{color:alltextcolor}}>Art Creation Date:
                    <small className="text-primary"> 28-05-2017</small>
                  </p>
                </div>
            </div>
            </div>
        </div>

         {/* ------------------------------------------------------------------------- */}

         {/* -------------------------- Single Sniper gun card ---------------------- */}

         <div className="container pt-4">
            <div className={`card mb-2 shadow-lg ${cardcolor}`}>
            <div className="row">
                <div className="col-md-6">
                <div className="card-body">
                    <h4 className="card-title" style={{color:cardheadcolor}}>Indian army Sniper</h4>
                    <p className="card-text paraquote" style={{color:alltextcolor}}>
                        <i className="fas fa-quote-left p-2"></i> 
                        The enemy are only 50 yards from us. We are heavily outnumbered. We are under devastating fire. I shall not withdraw an inch but will fight to our last man and our last round. — Indian Army.
                        <i className="fas fa-quote-right p-2"></i>
                    </p>
                    <p className="card-text paradesp"
                       style={{color:alltextcolor}}>New Delhi: Elite units of the Indian Army, equipped with deadly new sniper rifles, have been deployed along the Line of Control with Pakistan after special training from American and Italian experts. Sources in the Army told ThePrint that units carrying the Beretta . 338 Lapua Magnum Scorpio TGT and the Barrett </p>
                    <p className="card-text paradate" 
                     style={{color:alltextcolor}}>Art Creation Date:
                     <small className="text-primary"> 02-05-2018</small>
                  </p>
                    <a href="https://en.wikipedia.org/wiki/List_of_equipment_of_the_Indian_Army"  
                                target="_blank" 
                                className={`btn ${allbuttoncolor}`}>
                                  <p className="card-text aboutbuttontext" 
                                      style={{color:allbuttontextcolor}}>About Indian Military</p>
                    </a>
                  </div>
                  </div>
                  <div className="col-md-6">
                  <img src="./images/art/pubggun.jpg" 
                      style={{width:"100%"}}
                      className={`card-img p-2 ${cardshadowcolor}`} 
                      alt="card 2"></img>
                  </div>
              </div>
              </div>
          </div>

         {/* ------------------------------------------------------------------ */}

          {/* --------------------------Double sachin and yash cards ---------------------- */}

          <div className="container pt-4">
            <div className="row">
                <div className="col-sm-6">
                  <div className={`card p-2 mt-2 mb-2 shadow-lg ${cardcolor}`}>
                    <img src="./images/art/sachintendulkar.jpg" 
                        style={{width:"100%",height:'450px'}} 
                        className="card-img-top" 
                        alt="image"></img>
                    <div className="card-body">
                      <h4 className="card-title" style={{color:cardheadcolor}}>Sachin Tendulkar Sketch</h4>
                      <p className="card-text paradesp"
                        style={{color:alltextcolor}}>Sachin Ramesh Tendulkar is an Indian former international cricketer who served as captain of the Indian national team.</p>
                      
                      <p className="card-text paradate" 
                                    style={{color:alltextcolor}}>Art Creation Date:
                                    <small className="text-primary"> 06-07-2017</small></p>
                                  <a href="https://en.wikipedia.org/wiki/Sachin_Tendulkar"  
                                    target="_blank" 
                                    className={`btn ${allbuttoncolor}`}>
                                      <p className="card-text aboutbuttontext" 
                                          style={{color:allbuttontextcolor}}>About</p>
                                  </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className={`card p-2 mt-2 mb-2 shadow-lg ${cardcolor}`}>
                    <img src="./images/art/yash.jpg" 
                        style={{width:"100%",height:'450px'}} 
                        className="card-img-top" 
                        alt="image"></img>
                    <div className="card-body">
                      <h4 className="card-title" style={{color:cardheadcolor}}>Actor Yash Sketch</h4>
                      <p className="card-text paradesp"
                        style={{color:alltextcolor}}>Naveen Kumar Gowda, known by the stage name Yash, is an Indian film actor who works in Kannada cinema.</p>
                    
                      <p className="card-text paradate" 
                        style={{color:alltextcolor}}>Art Creation Date:
                        <small className="text-primary"> 10-01-2018</small>
                      </p>
                        <a href="https://en.wikipedia.org/wiki/Yash_(actor)"  
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

         {/* ------------------------Triple God cards-------------------------------- */}

         <div className="container pt-4 pb-2">
            <div className="card-deck">
                <div className={`card mt-2 shadow-lg ${cardcolor}`}>
                    <img src="./images/art/hanuman.jpg" 
                        style={{width:"100%"}} 
                        className="card-img-top" 
                        alt="card 1"></img>
                    <div className="card-body">
                    <h4 className="card-title" style={{color:cardheadcolor}}>God Hanuman</h4>
                    <p className="card-text paradesp"
                      style={{color:alltextcolor}}>Hanuman (/ˈhʌnʊˌmɑːn/; Sanskrit: हनुमान्, IAST: Hanumān) is a Hindu god and divine vanara companion of the god Rama. Hanuman is one of the central characters of the Hindu epic Ramayana. Hanuman is also son of the wind-god Vayu.
                    </p>
                    </div>
                    <div className="card-footer">
                      <p className="card-text paradate" 
                        style={{color:alltextcolor}}>Art Creation Date:
                        <small className="text-primary"> 20-04-2017</small>
                      </p>
                    </div>
                </div>
                <div className={`card mt-2 shadow-lg ${cardcolor}`}>
                    <img src="./images/art/ram.jpg" 
                        style={{width:"100%"}} 
                        className="card-img-top" 
                        alt="card 2"></img>
                    <div className="card-body">
                    <h4 className="card-title" style={{color:cardheadcolor}}>Lord Sri Ram</h4>
                    <p className="card-text paradesp"
                      style={{color:alltextcolor}}>Rama (or Ramacandra) is the seventh avatar of the Hindu god Vishnu. Lord Rama, considered by many Hindus to be based on an historical figure, is perhaps the most virtuous hero from Hindu mythology and he, along with his wife Sita, are a picture of purity and marital devotion.
                    </p>
                    </div>
                    <div className="card-footer">
                    <p className="card-text paradate" 
                        style={{color:alltextcolor}}>Art Creation Date:
                        <small className="text-primary"> 23-06-2019</small>
                      </p>
                    </div>
                </div>
                <div className={`card mt-2 shadow-lg ${cardcolor}`}>
                <img src="./images/art/shiva.jpg" 
                    style={{width:"100%"}} 
                    className="card-img-top" 
                    alt="card 2"></img>
                    <div className="card-body">
                    <h4 className="card-title" style={{color:cardheadcolor}}>Lord Shiva</h4>
                    <p className="card-text paradesp"
                      style={{color:alltextcolor}}>Shiva (or Siva) is one of the most important gods in the Hindu pantheon and, along with Brahma and Vishnu, is considered a member of the holy trinity (trimurti) of Hinduism.
                    </p>
                    </div>
                    <div className="card-footer">
                    <p className="card-text paradate" 
                        style={{color:alltextcolor}}>Art Creation Date:
                        <small className="text-primary"> 15-08-2017</small>
                      </p>
                    </div>
                </div>
            </div>
        </div>

         {/* ------------------------------------------------------------------------- */}

         {/* -------------------------Single Eye Pencil card --------------------------*/}

         <div className="container pt-4">
            <div className={`card mb-2 shadow-lg ${cardcolor}`}>
            <div className="row">
                <div className="col-md-6">
                  <img src="./images/art/eye.jpg" 
                        style={{width:"100%"}}
                        className={`card-img p-2 ${cardshadowcolor}`} 
                        alt="card 2">
                    </img>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h4 className="card-title" style={{color:cardheadcolor}}>Emotional Eye Tears</h4>
                      <p className="card-text paraquote" style={{color:alltextcolor}}>
                          <i className="fas fa-quote-left p-2"></i> 
                          When someone is crying, of course, the noble thing to do is to comfort them. But if someone is trying to hide their tears, it may also be noble to pretend you do not notice them.
                          <i className="fas fa-quote-right p-2"></i>
                      </p>
                      <p className="card-text paradesp"
                        style={{color:alltextcolor}}>The value of crying may be more about the social response it prompts than its physiological effects,” says Lauren Bylsma, PhD, University of Pittsburgh. Dr. Bylsma has conducted multiple studies on crying and found that people were more likely to feel better after crying if they received social support during their tears.
                      </p>
                      <p className="card-text paradate" 
                      style={{color:alltextcolor}}>Art Creation Date:
                      <small className="text-primary"> 02-05-2020</small>
                      </p>
                        <a href="https://en.wikipedia.org/wiki/Tears"  
                          target="_blank" 
                          className={`btn ${allbuttoncolor}`}>
                          <p className="card-text aboutbuttontext" 
                            style={{color:allbuttontextcolor}}>About Tears
                          </p>
                        </a>
                    </div>
                  </div>
              </div>
              </div>
          </div>

          {/* ------------------------------------------------------------------------- */}

          {/* -------------------------Double glassdrop and Om sketch cards -----------*/}

          <div className="container pt-4">
        <div className="row mb-2">
            <div className="col-sm-6">
              <div className={`card p-2 mt-2 mb-2 shadow-lg ${cardcolor}`}>
                <img src="./images/art/glassdrop.jpg" 
                     style={{width:"100%",height:'600px'}} 
                     className="card-img-top" 
                     alt="image"></img>
                <div className="card-body">
                  <h4 className="card-title" style={{color:cardheadcolor}}>Water scarcity and poverty</h4>
                  <p className="card-text paradesp"
                     style={{color:alltextcolor}}>India's water crisis is often attributed to lack of government planning, increased corporate privatization, industrial and human waste and government corruption. In addition, water scarcity in India is expected to worsen as the overall population is expected to increase to 1.6 billion by year 2050.
                  </p>
                  
                  <p className="card-text paradate" 
                                style={{color:alltextcolor}}>Art Creation Date:<small className="text-primary"> 31-03-2018</small></p>
                              <a href="https://en.wikipedia.org/wiki/Water_scarcity"  
                                target="_blank" 
                                className={`btn ${allbuttoncolor}`}>
                                  <p className="card-text aboutbuttontext" 
                                      style={{color:allbuttontextcolor}}>About Water scarcity</p>
                              </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className={`card p-2 mt-2 mb-2 shadow-lg ${cardcolor}`}>
                <img src="./images/art/omm.jpg" 
                     style={{width:"100%",height:'600px'}} 
                     className="card-img-top" 
                     alt="image"></img>
                <div className="card-body">
                  <h4 className="card-title" style={{color:cardheadcolor}}>Om Sketch</h4>
                  <p className="card-text paradesp"
                     style={{color:alltextcolor}}>Om is a mantra that is traditionally chanted at the beginning and end of yoga sessions. With roots in Hinduism, When pronounced correctly, it sounds more like "AUM" and consists of four syllables: A, U, M, and the silent syllable. The meaning and connotations of Om vary between the diverse schools within and across the various traditions.</p>
                 
                  <p className="card-text paradate" 
                     style={{color:alltextcolor}}>Art Creation Date:
                     <small className="text-primary"> 02-05-2020</small>
                  </p>
                              <a href="https://en.wikipedia.org/wiki/Om"  
                                target="_blank" 
                                className={`btn ${allbuttoncolor}`}>
                                  <p className="card-text aboutbuttontext" 
                                      style={{color:allbuttontextcolor}}>About</p>
                              </a>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* --------------------------------------------------------------------------*/}

          {/* -----------------------Triple joker hrithik wolworine cards---------------*/}

          <div className="container pt-4 pb-2">
            <div className="card-deck">
                <div className={`card mt-2 shadow-lg ${cardcolor}`}>
                    <img src="./images/art/jokerface.jpg" 
                        style={{width:"100%"}} 
                        className="card-img-top p-2" 
                        alt="card 1"></img>
                    <div className="card-body">
                    <h4 className="card-title" style={{color:cardheadcolor}}>Joker Paint</h4>
                    <p className="card-text paradesp"
                      style={{color:alltextcolor}}>The Joker is a supervillain created by Bill Finger, Bob Kane, and Jerry Robinson who first appeared in the debut issue of the comic book Batman (April 25, 1940), published by DC Comics. Credit for the Joker's creation is disputed.
                    </p>
                    </div>
                    <div className="card-footer">
                      <p className="card-text paradate" 
                        style={{color:alltextcolor}}>Art Creation Date:
                        <small className="text-primary"> 28-05-2020</small>
                      </p>
                    </div>
                </div>
                <div className={`card mt-2 shadow-lg ${cardcolor}`}>
                    <img src="./images/art/hrithik.jpg" 
                        style={{width:"100%"}} 
                        className="card-img-top p-2" 
                        alt="card 2"></img>
                    <div className="card-body">
                    <h4 className="card-title" style={{color:cardheadcolor}}>Hrithik Roshan Portrait Sketch</h4>
                    <p className="card-text paradesp"
                      style={{color:alltextcolor}}>Hrithik Roshan is an Indian actor known for his work in Hindi films. As a child, he made uncredited appearances in three films directed by his maternal grandfather, J. Om Prakash, the first of which was in Aasha (1980). In 1986, Roshan played the adopted son of Rajinikanth's character in Prakash's crime drama Bhagwaan Dada.
                    </p>
                    </div>
                    <div className="card-footer">
                    <p className="card-text paradate" 
                        style={{color:alltextcolor}}>Art Creation Date:
                        <small className="text-primary"> 26-09-2020</small>
                      </p>
                    </div>
                </div>
                <div className={`card mt-2 shadow-lg ${cardcolor}`}>
                <img src="./images/art/wolworine.jpg" 
                    style={{width:"100%"}} 
                    className="card-img-top p-2" 
                    alt="card 2"></img>
                    <div className="card-body">
                    <h4 className="card-title" style={{color:cardheadcolor}}>Wolworine Pencil Sketch</h4>
                    <p className="card-text paradesp"
                      style={{color:alltextcolor}}>Wolverine (birth name: James Howlett;[1] alias: Logan and Weapon X) is a fictional character appearing in American comic books published by Marvel Comics, mostly in association with the X-Men.
                    </p>
                    </div>
                    <div className="card-footer">
                    <p className="card-text paradate" 
                        style={{color:alltextcolor}}>Art Creation Date:
                        <small className="text-primary"> 04-04-2017</small>
                      </p>
                    </div>
                </div>
            </div>
        </div>

          {/* --------------------------------------------------------------------------*/}

          {/* -------------------------- Single Love bird card ------------------------ */} 

            <div className="container pt-4">
                <div className={`card shadow-lg ${cardcolor}`}>
                  <div className="row no-gutters">
                      <div className="col-md-4">
                        <img src="./images/art/lovebird.jpg" 
                            style={{width:"100%"}}  
                            className="card-img p-3" 
                            alt="image">
                        </img>
                      </div>
                      <div className="col-md-8">
                      <div className="card-body">
                          <h4 className="card-title" style={{color:cardheadcolor}}>Love Birds</h4>
                          <p className="card-text paraquote" style={{color:alltextcolor}}>
                              <i className="fas fa-quote-left p-2"></i> 
                              The Love bird is one hundred percent faithful to his mate-who is locked into the same cage.
                              <i className="fas fa-quote-right p-2"></i>
                          </p>
                          <p className="card-text paradesp" 
                            style={{color:alltextcolor}}>A lovebird might be one of the smaller parrot species available as a companion pet, but this bird is inquisitive and seemingly always on the go.</p>
                          <p className="card-text paradate" 
                            style={{color:alltextcolor}}>Art Creation Date:
                            <small className="text-primary"> 04-04-2017</small>
                          </p>
                          <a href="https://en.wikipedia.org/wiki/Lovebird"  
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

          {/* -------------------------- Single aloneman card ------------------------- */} 

            <div className="container pt-4">
                <div className={`card shadow-lg ${cardcolor}`}>
                  <div className="row no-gutters">
                      <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title" style={{color:cardheadcolor}}>Alone Life</h4>
                            <p className="card-text paraquote" style={{color:alltextcolor}}>
                                <i className="fas fa-quote-left p-2"></i> 
                                Sometimes, you need to be alone. Not to be lonely, but to enjoy your time being yourself.
                                <i className="fas fa-quote-right p-2"></i>
                            </p>
                            <p className="card-text paradesp" 
                              style={{color:alltextcolor}}>Loneliness can be normal, and is only an indicator of underlying disease when feelings become excessive, all-consuming and interfere with daily living.
                            </p>
                            <p className="card-text paradate" 
                              style={{color:alltextcolor}}>Art Creation Date:
                              <small className="text-primary"> 08-08-2017</small>
                            </p>
                            <a href="https://www.pinterest.com/aleclock/feeling-alone/"  
                                target="_blank" 
                                className={`btn ${allbuttoncolor}`}>
                                  <p className="card-text aboutbuttontext" 
                                    style={{color:allbuttontextcolor}}>About
                                  </p>
                            </a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <img src="./images/art/aloneman.jpg" 
                            style={{width:"100%"}}  
                            className="card-img p-3" 
                            alt="image">
                        </img>
                      </div>
                  </div>
                </div>
            </div>

          {/* ------------------------------------------------------------------------- */}

          {/* -------------------------- Single RedEye card ------------------------ */} 

            <div className="container pt-4">
                <div className={`card shadow-lg ${cardcolor}`}>
                  <div className="row no-gutters">
                      <div className="col-md-4">
                        <img src="./images/art/redeye.jpg" 
                            style={{width:"100%"}}  
                            className="card-img p-3" 
                            alt="image">
                        </img>
                      </div>
                      <div className="col-md-8">
                      <div className="card-body">
                          <h4 className="card-title" style={{color:cardheadcolor}}>RedEye Color Sketch</h4>
                          <p className="card-text paraquote" style={{color:alltextcolor}}>
                              <i className="fas fa-quote-left p-2"></i> 
                              We get high to get by, hot dogs no rib eyes, with tears dripped from red eyes, where ends don't meet the dealines.
                              <i className="fas fa-quote-right p-2"></i>
                          </p>
                          <p className="card-text paradesp" 
                            style={{color:alltextcolor}}>Red eyes are usually caused by allergy, eye fatigue, over-wearing contact lenses, or common eye infections such as pink eye (conjunctivitis).
                          </p>
                          <p className="card-text paradate" 
                            style={{color:alltextcolor}}>Art Creation Date:
                            <small className="text-primary"> 08-03-2018</small>
                          </p>
                          <a href="https://www.healthline.com/health/eye-redness"  
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

          {/* -------------------------- Single Racing card ------------------------- */} 

            <div className="container pt-4">
                <div className={`card shadow-lg ${cardcolor}`}>
                  <div className="row no-gutters">
                      <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title" style={{color:cardheadcolor}}>Racing</h4>
                            <p className="card-text paraquote" style={{color:alltextcolor}}>
                                <i className="fas fa-quote-left p-2"></i> 
                                  My prince charming doesn’t ride a horse he rides wheelies.
                                <i className="fas fa-quote-right p-2"></i>
                            </p>
                            <p className="card-text paradesp" 
                              style={{color:alltextcolor}}>In sport, racing is a competition of speed, against an objective criterion, usually a clock or to a specific point. A race may be run continuously to finish or may be made of several segments called heats, stages or legs.
                            </p>
                            <p className="card-text paradate" 
                              style={{color:alltextcolor}}>Art Creation Date:
                              <small className="text-primary"> 10-09-2017</small>
                            </p>
                            <a href="https://en.wikipedia.org/wiki/Racing#:~:text=In%20sport%2C%20racing%20is%20a,or%20to%20a%20specific%20point.&text=A%20race%20may%20be%20run,same%20course%20at%20different%20times."  
                                target="_blank" 
                                className={`btn ${allbuttoncolor}`}>
                                  <p className="card-text aboutbuttontext" 
                                    style={{color:allbuttontextcolor}}>About Racing
                                  </p>
                            </a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <img src="./images/art/racebike.jpg" 
                            style={{width:"100%"}}  
                            className="card-img p-3" 
                            alt="image">
                        </img>
                      </div>
                  </div>
                </div>
            </div>

          {/* ------------------------------------------------------------------------- */}

          {/* -----------------------Triple joker hrithik wolworine cards---------------*/}

          <div className="container pt-4 pb-2">
            <div className="card-deck">
                <div className={`card mt-2 shadow-lg ${cardcolor}`}>
                    <img src="./images/art/bottle.jpg" 
                        style={{width:"100%"}} 
                        className="card-img-top p-2" 
                        alt="card 1"></img>
                    <div className="card-body">
                    <h4 className="card-title" style={{color:cardheadcolor}}>Bottle Pencil Sketch</h4>
                    <p className="card-text paradesp"
                      style={{color:alltextcolor}}>This sketch may serve a number of purposes: it might record something that the artist sees, it might record or develop an idea for later use.
                    </p>
                    </div>
                    <div className="card-footer">
                      <p className="card-text paradate" 
                        style={{color:alltextcolor}}>Art Creation Date:
                        <small className="text-primary"> 05-06-2019</small>
                      </p>
                    </div>
                </div>
                <div className={`card mt-2 shadow-lg ${cardcolor}`}>
                    <img src="./images/art/egle.jpg" 
                        style={{width:"100%"}} 
                        className="card-img-top p-2" 
                        alt="card 2"></img>
                    <div className="card-body">
                    <h4 className="card-title" style={{color:cardheadcolor}}>Egle Bird Sketch</h4>
                    <p className="card-text paradesp"
                      style={{color:alltextcolor}}>Eagle is the common name for many large birds of prey of the family Accipitridae. Most of the 60 species of eagle are from Eurasia and Africa.
                    </p>
                    </div>
                    <div className="card-footer">
                    <p className="card-text paradate" 
                        style={{color:alltextcolor}}>Art Creation Date:
                        <small className="text-primary"> 01-08-2017</small>
                      </p>
                    </div>
                </div>
                <div className={`card mt-2 shadow-lg ${cardcolor}`}>
                <img src="./images/art/singlebird.jpg" 
                    style={{width:"100%"}} 
                    className="card-img-top p-2" 
                    alt="card 2"></img>
                    <div className="card-body">
                    <h4 className="card-title" style={{color:cardheadcolor}}>Sparrow Pencil Sketch</h4>
                    <p className="card-text paradesp"
                      style={{color:alltextcolor}}>A sparrow is a member of the genus Passer. They are small passerine birds which belong to the family Passeridae. They are also known as old-world sparrows.
                    </p>
                    </div>
                    <div className="card-footer">
                    <p className="card-text paradate" 
                        style={{color:alltextcolor}}>Art Creation Date:
                        <small className="text-primary"> 30-12-2019</small>
                      </p>
                    </div>
                </div>
            </div>
        </div>

          {/* --------------------------------------------------------------------------*/}

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