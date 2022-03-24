import { Box, Container, ThemeProvider } from '@mui/material'
import React, { useEffect } from 'react'
import Header from './components/Header'
import SectionTitle from './components/SectionTitle'
import { theme } from './configs/OveridesTheme'
import './App.css'
import { useDispatch } from 'react-redux'
import { handleGetGenreMovie, handleGetPopularMovie } from './configs/ServicesRequest'
import { handleActionGet } from './redux/actionReducer'
import { TypeReducer } from './redux/typeReduce'
import GenreMovies from './components/GenreMovies'
import { BrowserRouter, Route, Routes, useMatch, useParams } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'

const Home = () => {
  return (
    <>
      <div className="background" />
      <Container maxWidth="xl" sx={{ paddingTop: "100px", color: "white" }}>
        <SectionTitle />
        <GenreMovies />
      </Container>
    </>
  )
}
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    handleGetPopularMovie()
      .then(results => dispatch(handleActionGet(results.data.results, TypeReducer.INITIALIZE)))
      .catch(err => console.log(err))

    handleGetGenreMovie("10749")
      .then(results => dispatch(handleActionGet(results.data.results, TypeReducer.INITIALIZE_ROMANCE)))
      .catch(err => console.log(err))

    handleGetGenreMovie("16")
      .then(results => dispatch(handleActionGet(results.data.results, TypeReducer.INITIALIZE_ANIMATION)))
      .catch(err => console.log(err))

    handleGetGenreMovie("35")
      .then(results => dispatch(handleActionGet(results.data.results, TypeReducer.INITIALIZE_COMEDY)))
      .catch(err => console.log(err))

    handleGetGenreMovie("99")
      .then(results => dispatch(handleActionGet(results.data.results, TypeReducer.INITIALIZE_DOCUMENTARY)))
      .catch(err => console.log(err))

    handleGetGenreMovie("10751")
      .then(results => dispatch(handleActionGet(results.data.results, TypeReducer.INITIALIZE_FAMILY)))
      .catch(err => console.log(err))

    handleGetGenreMovie("27")
      .then(results => dispatch(handleActionGet(results.data.results, TypeReducer.INITIALIZE_HORROR)))
      .catch(err => console.log(err))

    handleGetGenreMovie("878")
      .then(results => dispatch(handleActionGet(results.data.results, TypeReducer.INITIALIZE_SCIENCE_FICTION)))
      .catch(err => console.log(err))

    handleGetGenreMovie("10770")
      .then(results => dispatch(handleActionGet(results.data.results, TypeReducer.INITIALIZE_SERIE)))
      .catch(err => console.log(err))

    handleGetGenreMovie("53")
      .then(results => dispatch(handleActionGet(results.data.results, TypeReducer.INITIALIZE_TRILLER)))
      .catch(err => console.log(err))



  }, [])


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Box component="div" sx={{ minHeight: '100vh', backgroundColor: '#181818' }}>
          <Routes>
            <Route path="/movie_details/:id/:genre" element={<MovieDetails />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App