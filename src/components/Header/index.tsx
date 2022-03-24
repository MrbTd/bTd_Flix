import { AppBar, Box, Button, Container, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const Header = () => {
    const theme = useTheme()
    const matches = useMediaQuery('(min-width:874px)');

    return (
        <Box component="div" >
            <AppBar sx={{ backgroundColor: '#000000' }}>
                <Container maxWidth="xl">
                    <Toolbar >
                        <Typography variant={matches ? "h3" : "h5"} component="h1" sx={{
                            fontFamily: 'Bungee',
                            color: 'red',
                            fontWeight: 'bold',
                            cursor: 'pointer',

                        }} onClick={() => window.scroll(0, 0)}> bTd - FLIX</Typography>

                        {matches && <Box sx={{ marginLeft: "auto", fontSize: '15px' }} component="span">UNLIMITED TV SHOWS & MOVIES</Box>}
                        <Button variant="contained" sx={{
                            marginLeft: matches ? '20px' : 'auto',

                            backgroundColor: 'red',
                            '&:hover': {
                                backgroundColor: '#BF0000',
                                color: '#C9C9C9'
                            },
                        }}>JOIN NOW</Button>
                        <Button variant="outlined" sx={{
                            border: "1px solid white",
                            marginLeft: "15px",
                            color: 'white',
                            '&:hover': {
                                borderColor: '#C9C9C9',
                                color: '#C9C9C9'
                            },
                        }}>SIGN IN</Button>
                    </Toolbar>
                </Container>

            </AppBar>
        </Box>
    )
}

export default Header