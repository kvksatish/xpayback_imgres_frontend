import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.spacex.com/">
        SpaceX
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function LoginPage() {
  const navigate = useNavigate()
  const [load, setload] = React.useState(false)
  const handleSubmit = (event) => {
    event.preventDefault();
    setload(true)
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const password = data.get('password')
    console.log(email, password)

    axios.post('https://spacexbackend.vercel.app/login', {
      email,
      password,
    }).then((res) => {
      alert(res.data)
      setload(false)
      if (res.data.token) {
        sessionStorage.setItem('token', res.data.token);
        navigate("/dashboard")
        console.log({
          email,
          password,
          res
        });
      }
    }).catch((res) => {
      alert("invalid credentials")
      setload(false)
      console.log({
        res,
        email,
        password,
      });
    });
  };
  //hdrfhrxfdghfxgh
  return (
    <ThemeProvider theme={theme}>
      <Box container component="main" sx={{
        height: '100vh', backgroundImage: 'url(https://sxcontent9668.azureedge.us/cms-assets/assets/Homepage_Desktop_5ebdeb0c6c.webp)', backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Box sx={{
          background: "none",
          width: "fit-content", marginX: "auto", p: "1rem", m: "1rem",
          boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: " blur( 5px )", border: "2px solid rgba( 255, 255, 255, 0.18 )", borderRadius: "0.2rem"

        }} component={Paper} elevation={6} square>

          <svg version="1.1" style={{ fill: "#ffffff" }} x="0px" y="0px" viewBox="0 0 400 50">
            <title>SpaceX Logo</title>
            <g class="letter_s">
              <path class="fill-white" d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5
          c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"></path>
            </g>
            <g class="letter_p">
              <path class="fill-white" d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4
          c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"></path>
            </g>
            <g class="letter_a">
              <polygon class="fill-white" points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3 	"></polygon>
            </g>
            <g class="letter_c">
              <path class="fill-white" d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
          c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"></path>
            </g>
            <g class="letter_e">
              <polygon class="fill-white" points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5 	"></polygon>
              <rect class="fill-white" x="219.9" y="18.6" width="41.9" height="5.4"></rect>
            </g>
            <g class="letter_x">
              <path class="fill-white" d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"></path>
              <path class="fill-white" d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z"></path>
            </g>
            <g class="letter_swoosh">
              <path class="fill-white" d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"></path>
            </g>
          </svg>



          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Box mt='2.5rem' >

              <Box fontFamily={"monospace"} fontSize={"1.5rem"} >
                Sign In
              </Box>

              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                {
                  load ?
                    <Box width={"100%"} display={"flex"} justifyContent={"center"}  >
                      <CircularProgress /></Box> :

                    <Button
                      disabled={load}
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    > Sign In
                    </Button>
                }

                <Grid container>

                  <Grid item>

                    <div style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => navigate('/signup')} >
                      {"Don't have an account? Sign Up"}
                    </div>

                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box></Box>
          </Box>

        </Box>
      </Box>



    </ThemeProvider>
  );
}