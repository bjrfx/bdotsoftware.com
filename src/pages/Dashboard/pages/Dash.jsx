import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { mainListItems, secondaryListItems } from './listItems';
import Deposits from './Deposit';
import AccountMenu from './AccountMenu';

const drawerWidth = 240;

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
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  })
);

const defaultTheme = createTheme();

export default function Dash({ profileName, serviceRequests }) {
  const [open, setOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('Dashboard');

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar sx={{ pr: '24px' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              {profileName}'s Dashboard
            </Typography>
            <AccountMenu profileName={profileName} />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems(handleMenuItemClick)}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems(handleMenuItemClick)}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflowY: 'auto', // Ensure content scrolls
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {selectedMenuItem === 'Dashboard' && (
                <>
                  {/* Deposits */}
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
                      <Deposits />
                    </Paper>
                  </Grid>

                  {/* Service Requests - Switch to Card Layout for responsiveness */}
                  <Grid item xs={12}>
                    <Typography variant="h6">Service Requests</Typography>
                    <Grid container spacing={3}>
                      {serviceRequests.map((request, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <CardContent>
                              <Typography variant="subtitle1">
                                <strong>Name:</strong> {request.name}
                              </Typography>
                              <Typography variant="subtitle1">
                                <strong>Email:</strong> {request.email}
                              </Typography>
                              <Typography variant="subtitle1">
                                <strong>Phone:</strong> {request.phone}
                              </Typography>
                              <Typography variant="subtitle1">
                                <strong>Service Type:</strong> {request.serviceType}
                              </Typography>
                              <Typography variant="subtitle1">
                                <strong>Estimated Budget:</strong> {request.budget}
                              </Typography>
                              <Typography variant="subtitle1">
                                <strong>Comments:</strong> {request.comments}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </>
              )}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}