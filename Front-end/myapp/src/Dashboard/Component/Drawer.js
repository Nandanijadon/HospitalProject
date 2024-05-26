import React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import HealingIcon from '@mui/icons-material/Healing';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InputBase from '@mui/material/InputBase';
import ListItemText from '@mui/material/ListItemText';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ScienceIcon from '@mui/icons-material/Science';
import WorkIcon from '@mui/icons-material/Work';
import MasksIcon from '@mui/icons-material/Masks';
import BadgeIcon from '@mui/icons-material/Badge';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { Container } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Charts from './Charts';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
import LogoIcon from './Logo';


const drawerWidth = 240;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const icons = [
    <SpaceDashboardIcon sx={{ color: '#f4f8fc', fontSize: '22px' }} />,
    <MeetingRoomIcon sx={{ color: '#f4f8fc', fontSize: '20px' }} />,
    <BadgeIcon sx={{ color: '#f4f8fc', fontSize: '20px' }} />,
    <FolderSharedIcon sx={{ color: '#f4f8fc', fontSize: '20px' }} />,
    <ScienceIcon sx={{ color: '#f4f8fc', fontSize: '20px' }} />,
    <ApartmentIcon sx={{ color: '#f4f8fc', fontSize: '20px' }} />,
    <WorkIcon sx={{ color: '#f4f8fc', fontSize: '20px' }} />,
    <MasksIcon sx={{ color: '#f4f8fc', fontSize: '20px' }} />,
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#1e293b' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ backgroundColor: '#1e293b' }}>
          {/* <HealingIcon sx={{color:'white'}}/> */}
<img src='data:image/jpeg;base64,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'   style={{ maxWidth: '100%', height: 'auto' }} // Add this style
  alt="Your Logo"></img>
          <IconButton onClick={handleDrawerClose} sx={{ backgroundColor: '#1e293b', color: 'white' }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        
        <List sx={{ backgroundColor: '#1e293b', color: '#f5f5f5' }}>
          {['Dashboard', 'Rooms', 'Employee', 'Employee profile', 'Lab', 'Department', 'All mail', 'Patient'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 65,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    color:'black'
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',

                    '&:hover': {
                      backgroundColor:'black'
                    }
                  }}
                >
                  {icons[index % icons.length]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ minWidth: 100, backgroundColor: '#a7f3d0',boxShadow: 7, }}>
              <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  <MasksIcon sx={{ fontSize: '200%', borderRadius: '50%', color: '#1e293b' }} /> Total patient
                </Typography>
                <Typography variant="h5" component="div">
                  2500+
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ minWidth: 100 , backgroundColor: '#fde68a',boxShadow: 7}}>
              <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  <FactCheckIcon sx={{ fontSize: '170%', borderRadius: '50%', color: '#1e293b' }} /> Total Appointment
                </Typography>
                <Typography variant="h5" component="div">
                  350+
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ minWidth: 100, backgroundColor: '#fecaca',boxShadow: 7 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  <HealingIcon sx={{ fontSize: '170%', borderRadius: '50%', color: '#1e293b' }} /> Total Surgery
                </Typography>
                <Typography variant="h5" component="div">
                  1500+
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ minWidth: 100, backgroundColor: '#d9f99d' ,boxShadow: 7}}>
              <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  <AccountBalanceIcon sx={{ fontSize: '170%', borderRadius: '50%', color: '#1e293b' }} /> Total Revenue
                </Typography>
                <Typography variant="h5" component="div">
                  $122500
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Charts />

      </Box>
    </Box>
  );
}

export default Sidebar;
