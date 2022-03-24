import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const SectionTitle = () => {
    return (
        <Box >
            <Grid container>
                <Grid item xs={12} md={6} lg={4}>
                    <Typography component="h1" variant="h3">Movies</Typography>
                    <Box sx={{ fontWeight: 'bold', marginTop: 5 }}> Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.Popular on Netflix</Box>
                </Grid>
            </Grid>

        </Box>

    )
}

export default SectionTitle