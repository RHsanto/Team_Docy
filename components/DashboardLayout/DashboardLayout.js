/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import BookSharpIcon from '@mui/icons-material/BookSharp';
import MarkEmailUnreadSharpIcon from '@mui/icons-material/MarkEmailUnreadSharp';
const drawerWidth = 240

function DashboardLayout(props) {
  const { window, children } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <div className="text-center mt-10 mb-4">
            <div className="flex justify-center">
              <img
                src="https://live-production.wcms.abc-cdn.net.au/fc430b3393844cd39c05f28ab9d41de2?impolicy=wcms_crop_resize&cropH=1612&cropW=2418&xPos=7&yPos=0&width=862&height=575"
                className="h-20 w-20 mb-3 rounded-full  p-2 object-cover"
                alt="Admin logo"
              />
            </div>
            <h3 className="text-lg font-bold">Admin</h3>
            <p>admin@gmail.com</p>
          </div>
      <Divider />
      <List sx={{ml:1}}>
        <Link href="/">
          <a>
            <ListItem button>
              <ListItemText> <HomeSharpIcon/> Home</ListItemText>
            </ListItem>
          </a>
        </Link>
        <Link href="/adminDashboard">
          <a>
            <ListItem button>
              <ListItemText><DashboardSharpIcon/> Dashboard</ListItemText>
            </ListItem>
          </a>
        </Link>
        <Link href="/adminDashboard/manageUsers">
          <a>
            <ListItem button>
              <ListItemText><ManageAccountsSharpIcon/> Manage Users</ListItemText>
            </ListItem>
          </a>
        </Link>
        <Link href="/adminDashboard/manageBlogs">
          <a>
            <ListItem button>
              <ListItemText><BookSharpIcon/> Manage Blogs</ListItemText>
            </ListItem>
          </a>
        </Link>
        <Link href="/adminDashboard/emails">
          <a>
            <ListItem button>
              <ListItemText> <MarkEmailUnreadSharpIcon/> Messages</ListItemText>
            </ListItem>
          </a>
        </Link>
      </List>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div>{children}</div>
      </Box>
    </Box>
  )
}

DashboardLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default DashboardLayout
