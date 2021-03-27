import React, { Fragment,useState } from 'react';
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
import '../css/custom.css'

const drawerWidth = 230;

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
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
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
        flexGrow: 1,
      },
      copyrighttext: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Roboto Mono',
        background: "rgb(0, 0, 0)",
        opacity: 0.3
      },
      footertexts: {
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Roboto Mono',
        fontSize:'20px'
      },
      officialtext: {
        color: '#ffffff',
        fontFamily: 'Roboto Mono',
        fontSize:'20px'
      },
      aboutcardroot: {
        maxWidth: "100%",
      },
      mediaimage: {
        height: "auto",
        width:"50%",
        padding: '25%',
        alignItems: 'center',
        borderRadius:'80%',
        justifyContent:'center',
        marginLeft:'25%' 
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
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const [subopen, setSubopen] = React.useState(false);

  const handleClick = () => {
    setSubopen(!subopen);
  };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    // slide function https://www.npmjs.com/package/material-auto-rotating-carousel

    const [handleOpen, setHandleOpen] = useState({ open: false });
    const handleslideclick = () => {
      setHandleOpen({ open: true });
    };
    const matches = useMediaQuery("(max-width:600px)");

    const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
        return (
          <div>
            {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
            <AutoRotatingCarousel
              label="Get started"
              open={handleOpen.open}
              onClose={() => setHandleOpen({ open: false })}
              onStart={() => setHandleOpen({ open: false })}
              autoplay={true}
              mobile={isMobile}
              style={{ position: "absolute" }}
            >
              <Slide
                media={
                  <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
                }
                mediaBackgroundStyle={{ backgroundColor: red[400] }}
                style={{ backgroundColor: red[600] }}
                title="This is a very cool feature"
                subtitle="Just using this will blow your mind."
              />
              <Slide
                media={
                  <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
                }
                mediaBackgroundStyle={{ backgroundColor: blue[400] }}
                style={{ backgroundColor: blue[600] }}
                title="Ever wanted to be popular?"
                subtitle="Well just mix two colors and your are good to go!"
              />
              <Slide
                media={
                  <img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
                }
                mediaBackgroundStyle={{ backgroundColor: green[400] }}
                style={{ backgroundColor: green[600] }}
                title="May the force be with you"
                subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
              />
            </AutoRotatingCarousel>
    </div>
  );
};

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

    // /////////////////////   about Modal function

    const openmodelabout = () => {
    return(<Fragment>
      <button 
            type="button" 
            class="btn btn-primary" 
            data-toggle="modal" 
            data-target="#exampleModalLong">
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
        );
      }

// ///////////////////  expand card function

const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    
    return (
        <Fragment>
          <div className={classes.root}>
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
                <Typography className={classes.titlestyle} variant="h5" noWrap>
                    ART Gallery
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
                    <AccountCircleIcon style={{fontSize:"35px"}} />
                  </IconButton>
                  </Tooltip>

                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
                }}
            >
                <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
                </div>
                <Divider />
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

                    {/* <ListItem button>
                      <ListItemIcon>
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText onClick={handleClick} primary="Category" />
                      {subopen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <ListItem>
                    <Collapse in={subopen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <ColorLensIcon />
                          </ListItemIcon>
                          <ListItemText primary="Portrait Sketchings" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <CameraAltIcon />
                          </ListItemIcon>
                          <ListItemText primary="Photography" />
                        </ListItem>
                      </List>
                    </Collapse>
                    </ListItem> */}

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
            </Drawer>
            <main className={classes.content}>
              <Toolbar id="back-to-top-anchor" />
                <Container className="pb-4" style={{backgroundColor:"#EEECEB"}}>
               
     

        {/* --------------------------------Heading part----------------------------- */}
        
                  <div className="container-fluid pt-4">
                      <div className="card">
                          <div className="shadow-lg p-3  bg-white rounded">
                              <h3 className="text-left">My Profile</h3>
                          </div>                
                      </div>
                  </div>

        {/* ------------------------------------------------------------------------- */}
            <div className="container-fluid pt-4">
                <Card className={classes.aboutcardroot}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          S
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title="Sanath S Karanth"
                      subheader="March 30, 2021"
                    />
                    <CardMedia
                      className={classes.mediaimage}
                      // className="rounded-circle myimg mt-3"
                      image="./images/Sanath.jpg"
                      title="Paella dish"
                    />
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
                        <Typography paragraph>About Me</Typography>
                        <Typography paragraph>
                          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                          minutes.
                        </Typography>
                        <Typography paragraph>
                          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                          heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                          browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                         
                        </Typography>
                        
                      </CardContent>
                    </Collapse>
                  </Card>
                </div>   

      {/* ------------------------------------------------------------------------- */}
                </Container>
                <div className={classes.footerroot}>
                <footer className={classes.headergradient}>
                        
                <Grid container xs={12} spacing={0}>
                            <Grid style={{marginTop: '2%'}} item xs={6}>
                              <Grid>
                              <Typography  className={classes.footertexts}  noWrap>
                              Social Media Links
                              </Typography>
                              </Grid>
                              <Grid container
                                direction="row"
                                justify="center"
                                alignItems="center" 
                                style={{marginTop: '4%'}} >
                                <Grid style={{marginRight: '8%'}} >
                                <a href="http://www.gmail.com" target="_blank" className="btn-floating btn-fb mx-1">
                                <i  className="fab fa-google-plus-g" 
                                    style={{color:'white',fontSize:"20px"}}></i>
                                </a>
                                </Grid>
                                <Grid style={{marginRight: '8%'}} >
                                <a href="http://www.facebook.com" target="_blank" className="btn-floating btn-gplus mx-1">
                                <i className="fa fa-facebook" 
                                    style={{color:'white',fontSize:"20px"}}></i>
                                </a>
                                </Grid>
                                <Grid style={{marginRight: '8%'}} >
                                <a href="http://www.linkedin.com" target="_blank" className="btn-floating btn-li mx-1">
                                <i className="fa fa-linkedin-square" 
                                    style={{color:'white',fontSize:"20px"}}></i>
                                </a>
                                </Grid>
                            </Grid>
                            </Grid>
                            <Grid style={{marginTop: '2%'}} item xs={6}>
                                <Grid>
                                <Typography className={classes.officialtext}  noWrap>
                                Official Details
                                </Typography>
                                </Grid>
                                    <Grid container
                                    direction="column"
                                    // justify="center"
                                    // alignItems="center" 
                                    style={{marginTop: '2%'}} >
                                    <Grid  style={{margin: '1%'}} >
                                    <BusinessCenterIcon  style={{color:'white',fontSize:"20px",marginRight:'10px'}} />
                                    <span  
                                        style={{color:'white',fontSize:"15px",fontFamily:"Roboto Mono"}}>Associate Software Engineer
                                    </span>
                                    </Grid>
                                    <Grid style={{margin: '1%'}} >
                                    <MailIcon  style={{color:'white',fontSize:"20px",marginRight:'10px'}} />
                                    <span  
                                        style={{color:'white',fontSize:"15px",fontFamily:"Roboto Mono"}}>sanathsk97@gmail.com
                                    </span>
                                    </Grid>
                                    <Grid style={{margin: '1%'}} >
                                    <PhoneIcon style={{color:'white',fontSize:"20px",marginRight:'10px'}} />
                                    <span  
                                        style={{color:'white',fontSize:"15px",fontFamily:"Roboto Mono"}}>+91 94496 85219
                                    </span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid style={{marginTop: '2%'}} className={classes.copyrighttext}>© 2021 Copyright:
                        <a href="https://mdbootstrap.com/"> Karanthartgallery.com</a>
                        </Grid>
                    </footer>
                </div>
                <ScrollTop {...props}>
                  <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                  </Fab>
                </ScrollTop>
                
            </main>
            </div>
            
          
        </Fragment>
    )
}

export default AboutPage;