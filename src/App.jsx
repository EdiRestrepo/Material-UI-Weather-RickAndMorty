import { Button, Container, Typography, Box, Grid, TextField, Card, CardMedia, CardContent, Skeleton } from '@mui/material'
import { Agriculture, Air } from '@mui/icons-material'
import { Product } from './components/Product'
import { BluuCard } from './components/BluuCard'
import { Navbar } from './components/navbar/Navbar'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import { useEffect, useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { Character } from './components/Character'
import { CharacterSkeleton } from './components/CharacterSkeleton'

const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=49fb16b29e814245933193631233006&q=`

const navLinks = [
  {
    title: "Home",
    path: "/",
    icon: <InboxIcon />

  },
  {
    title: "Login",
    path: "/login",
    icon: <DraftsIcon />
  },
  {
    title: "Register",
    path: "/register",
    icon: <MenuIcon />
  },
]
function App() {

  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  })
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temp: "",
    condition: "",
    icon: "",
    conditionText: "",

  })

    const onSubmit = async e => {
    e.preventDefault();
    console.log("submit");
    setLoading(true);
    setError({
      error: false,
      message: "",
    })
    try {
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" }
      const response = await fetch(`${API_WEATHER}${city}`);
      const data = await response.json();
      if (data.error) throw { message: data.error.message }
      console.log(data);
      setWeather({
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        condition: data.current.condition.code,
        icon: data.current.condition.icon,
        conditionText: data.current.condition.text,
      })

    } catch (e) {
      console.log(e)
      setError({
        error: true,
        message: e.message
      })
    } finally {
      setLoading(false);
    }
  }

  const [characters, setCharacters] = useState([]);
  const [loading2, setLoading2] = useState(true);

  useEffect(()=>{
    getData();
  },[])

  const fakePromise = () => new Promise((resolve)=>setTimeout(resolve,3000))

  const getData = async () => {
    try{
      await fakePromise()
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const data = await response.json();
      setCharacters(data.results)
      console.log(characters)
    }catch(error){
      console.log(error)

    }finally{
      setLoading2(false);
    }
  }

  return (
    <>
      <Container
        maxWidth="xs"
        sx={{ mt: 2 }}>
        <Typography
          variant='h3'
          component="h1"
          align='center'
          gutterBottom>
          Weather App
        </Typography>
        <Box
          sx={{ display: "grid", gap: 2 }}
          component="form"
          autoComplete='off'
          onSubmit={onSubmit}>
          <TextField
            id="city"
            label="Ciudad"
            variant='outlined'
            size="small"
            required
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={error.error}
            helperText={error.message} />
          <LoadingButton
            type='submit'
            variant='contained'
            loading={loading}
            loadingIndicator="Cargando...">
            Buscar
          </LoadingButton>
        </Box>

        {weather.city && (
          <Box sx={{
            mt: 2,
            display: "grid",
            gap: 2,
            textAlign: "center"
          }}>
            <Typography variant='h4' component="h2">
              {weather.city}, {weather.country}
            </Typography>
            <Box
              component="img"
              alt={weather.conditionText}
              src={weather.icon}
              sx={{ margin: "0 auto" }}
            />
            <Typography variant='h5' component="h3">
              {weather.temp}°C
            </Typography>
            <Typography variant='h6' component="h4">
              {weather.conditionText}
            </Typography>
          </Box>
        )}

        <Typography
          textAlign="center"
          sx={{ mt: 2, fontSize: "10px" }}>

          Powered by:{""}
          <a
            href='https//www.weatherapi.com/'
            title='Weather API'>
            WeatherAPI.com
          </a>

        </Typography>
        {/* <Product/> */}
        {/* <BluuCard/> */}

        {/* <Navbar navLinks={navLinks}/>
      <Container sx={{mt:5}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Container> */}

        {/* <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </Grid>
        <Grid item xs={6} sm={12} md={4}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </Grid>
        <Grid item xs={6} sm={12} md={12}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </Grid>
      </Grid> */}

        {/* <Container maxWidth="xs" >
    <Container sx={{ border: 2, boxShadow: 3, pb: 2 }} >
      <h1>App</h1>
      <Typography variant='h1' component='h2'>Titulo 1</Typography>
      <Typography variant='body1' textAlign='center'>Titulo 2</Typography>
      <Button variant='outlined' color='error' startIcon={<Agriculture/>}>Mi primer Boton</Button>
      <Button variant='contained' color='success' endIcon={<Air/>}>Mi segundo Boton</Button>
      <Box sx={{border:2, p:5,borderColor:"peru"}}>Es un contenedor</Box> */}
      </Container>
      <hr />
      <br />
      <Typography variant='h3' textAlign="center" mb={3}>Rick and Morty</Typography>
      <Container
        maxWidth="sm">
        <Box sx={{display: "grid", gap:2, maxWidth:250, mx: "auto"}}>
          {loading2 
            ? Array.from(new Array(3)).map((_, index)=><CharacterSkeleton key={index}/>)
            : characters.map((character)=>
              <Character
                key={character.id}
                name={character.name}
                image={character.image}/>
            )}  
        </Box>
      </Container>
    </>
  )
}

export default App