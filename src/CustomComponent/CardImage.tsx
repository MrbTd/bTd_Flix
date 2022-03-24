import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { img_300 } from '../configs/ServicesRequest'

interface PropsMovie {
    url: string;
    description: string;
    id: number;
    search: string;
}
const CardImage = ({ url, description, id, search }: PropsMovie) => {

    return (
        <Link to={`/movie_details/${id}/${search}`} style={{ color: "white", textDecoration: "none" }} >

            <Grid item key={id}>
                <img className="img img-hover-zoom" style={{ width: "299px", height: "168px", cursor: 'pointer' }} src={`${img_300}${url}`} title={description} />
                <Box component="p" textAlign="center" sx={{ width: '70%', marginLeft: '15%' }}>{description}</Box>
            </Grid>
        </Link>


    )
}

export default CardImage 