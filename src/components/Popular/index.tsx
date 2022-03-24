import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import CardImage from '../../CustomComponent/CardImage'

interface PropsMovie {
    label: string;
    db: [],
    search: string
}
const Popular = ({ label, db, search }: PropsMovie) => {

    return (

        <Box sx={{ marginTop: 5 }}>
            <Box component='p'>{label}</Box>
            <Grid container
                direction="row"
                flexWrap="nowrap"
                overflow="auto"
            >
                {db && db.map((item: any) => <CardImage search={search} description={item.original_name || item.original_title} url={item.backdrop_path} id={item.id} />)}
            </Grid>
        </Box>
    )
}

export default Popular