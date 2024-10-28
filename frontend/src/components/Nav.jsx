
import React from 'react';
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Nav = () => {
    const { isLoggedIn } = useAuth();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{backgroundColor:'teal'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        BLoGs
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</NavLink>
                            </MenuItem>
                            {isLoggedIn ? (
                                <>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <NavLink to="/Contents" style={{ textDecoration: 'none', color: 'inherit' }}>Contents</NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <NavLink to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>LogOut</NavLink>
                                    </MenuItem>
                                </>
                            ) : (
                                <>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <NavLink to="/Register" style={{ textDecoration: 'none', color: 'inherit' }}>Sign Up</NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <NavLink to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</NavLink>
                                    </MenuItem>
                                </>
                            )}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                         BLoGs
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} /> {/* This box takes up the remaining space */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button color="inherit" component={NavLink} to="/contact">Contact</Button>
                        {isLoggedIn ? (
                            <>
                                <Button color="inherit" component={NavLink} to="/Contents">Contents</Button>
                                <Button color="inherit" component={NavLink} to="/logout">LogOut</Button>
                            </>
                        ) : (
                            <>
                                <Button color="inherit" component={NavLink} to="/Register">Sign Up</Button>
                                <Button color="inherit" component={NavLink} to="/login">Login</Button>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Nav;
