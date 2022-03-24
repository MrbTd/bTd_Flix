import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom'
import { getStorageValue } from '../../configs/useLocalStorage'
import { img_500 } from '../../configs/ServicesRequest';




function MovieDetails() {
    const data = getStorageValue()
    const { id, genre } = useParams()


    const dataFind = data[`${genre}`].find((n: { id: number }) => n.id === Number(id))
    console.log(`${img_500}${dataFind.backdrop_path}))`);

    return (
        <Paper
            sx={{
                height: "99vh",
                position: 'relative',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url(${img_500}${dataFind.backdrop_path})`,
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container
                direction="column"
                justifyContent="center"
                sx={{ height: "100vh" }}
            >
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Box component="h1" sx={{ color: "#EBCF9C" }}>{dataFind.original_name || dataFind.original_title}</Box>
                        <Box component="p" sx={{ color: "gray", }}>{dataFind.release_date} | vote: {dataFind.vote_count} | {genre} </Box>
                        <Box component="p" sx={{ maxWidth: 800 }}>{dataFind.overview}  </Box>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}


export default MovieDetails;





