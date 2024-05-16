import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import ResponsiveTypography from './ResponsiveText';


const drawerWidth = 240;

const DrawerAppBar = ({pages}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{backgroundColor: '#fff1e4', color: '#464038', height: '100vh'}}>
      <Typography className="font-freeman" variant="h6" sx={{ py: 2, pl: 2}}>
        SSA - Menu
      </Typography>
      <Divider />
      <List>
        {Object.keys(pages).map((key) => {
          if(key === 'home') return null
          const { name, path, Icon } = pages[key]
          return <ListItem key={key} disablePadding>
            <ListItemButton component="a" href={path}>
              <Icon/>
              <ListItemText sx={{ml: '10px'}} primary={name}/>
            </ListItemButton>
          </ListItem>
        })}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: 'flex', height: '64px' }}>
      <AppBar component="nav" sx={{backgroundColor: '#fff1e4', color: '#464038'}}>
        <Toolbar>
          <Link to={'/home'} style={{textDecoration: "none", color: "inherit"}}>
            <div style={{display: 'flex', alignItems: "center"}}>
              <div style={{height: '48px', marginRight: '10px'}}>
                <LogoIcon />
              </div>
              <ResponsiveTypography className="font-freeman" mdText="Sadhan Sangha Ashram" xsText="Sadhan Sangha" variant="h6" component="div"/>
            </div>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            {Object.keys(pages).map((key) => {
              if(key === 'home') return null
              const { name, path, Icon } = pages[key]
              return <Link to={path}>
                <Button key={name} sx={{ color: '#464038', textTransform: 'Capitalize', ml: "5px" }} startIcon={<Icon style={{ color: '#bea894' }}/>}>
                  {name}
                </Button>
              </Link>
            })}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block', md: 'none', textWrap: "nowrap" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor='right'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
