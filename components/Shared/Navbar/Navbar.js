import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: '#1e1f26', minHeight: '100vh', color: 'white' }}
    >
      <Link href="/">
        <a className="flex justify-center py-4">
          <img src="https://i.ibb.co/KspLSX3/docy-logo.png" alt="" />
        </a>
      </Link>
      <Divider style={{ backgroundColor: 'white' }} />
      <List>
        <Link href="/">
          <ListItem button>
            <ListItemText>
              <span>Home</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem button>
            <ListItemText>
              <span>Documentation</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem button>
            <ListItemText>
              <span>Forum</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem button>
            <ListItemText>
              <span>Pages</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem button>
            <ListItemText>
              <span>Blog</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem button>
            <ListItemText>
              <span>Get Docy</span>
            </ListItemText>
          </ListItem>
        </Link>
      </List>
    </Box>
  )
  return (
    <div>
      <header
        // style={{ backgroundColor: '#dc354500' }}
        style={{ backgroundColor: '#1e1f26' }}
        className="body-font absolute w-full text-gray-400"
      >
        <div className="container mx-auto flex justify-between p-5 ">
          <Link href="/">
            <a className="flex justify-center">
              <img src="https://i.ibb.co/KspLSX3/docy-logo.png" alt="" />
            </a>
          </Link>
          <nav className="navbar-parent">
            <Link href="/">
              <a className="link-item">
                <span>Home</span>
                <span className="link-hover left-1/2 h-0.5 w-0"></span>
                <span className="link-hover right-1/2 h-0.5 w-0"></span>
              </a>
            </Link>
            <Link href="/">
              <a className="link-item">
                <span>Documentation</span>
                <span className="link-hover left-1/2 h-0.5 w-0"></span>
                <span className="link-hover right-1/2 h-0.5 w-0"></span>
              </a>
            </Link>
            <Link href="/">
              <a className="link-item">
                <span>Forum</span>
                <span className="link-hover left-1/2 h-0.5 w-0"></span>
                <span className="link-hover right-1/2 h-0.5 w-0"></span>
              </a>
            </Link>
            <Link href="/">
              <a className="link-item">
                <span>Pages</span>
                <span className="link-hover left-1/2 h-0.5 w-0"></span>
                <span className="link-hover right-1/2 h-0.5 w-0"></span>
              </a>
            </Link>
            <Link href="/">
              <a className="link-item">
                <span>Blog</span>
                <span className="link-hover left-1/2 h-0.5 w-0"></span>
                <span className="link-hover right-1/2 h-0.5 w-0"></span>
              </a>
            </Link>
            <Link href="/">
              <a className="title-btn">Get Docy</a>
            </Link>
          </nav>
          <div className="flex flex-wrap items-center justify-center text-base md:ml-auto lg:hidden">
            <React.Fragment key="left">
              <Button onClick={toggleDrawer('left', true)}>
                <MenuIcon />
              </Button>
              <Drawer
                anchor="left"
                open={state['left']}
                onClose={toggleDrawer('left', false)}
              >
                {list('left')}
              </Drawer>
            </React.Fragment>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
