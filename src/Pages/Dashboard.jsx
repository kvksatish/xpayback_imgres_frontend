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
import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ChakraProvider, Input } from '@chakra-ui/react';
import { m } from 'framer-motion';



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

export default function Dashboard() {
  const navigate = useNavigate()
  const [load, setload] = React.useState(false)
  const [searcher, setsearcher] = React.useState({
    "status": "",
    "type": "",
    "ol": ""
  })
  const [data, setdata] = React.useState([])

  React.useEffect(() => {
    setload(true)
    let token = sessionStorage.getItem('token');
    let date = ""
    if (searcher?.ol) {
      date = new Date(searcher?.ol)?.toISOString()
    }

    axios.get(`https://spacexbackend.vercel.app/dashboard?type=${searcher?.type}&original_launch=${date}&status=${searcher?.status}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res, searcher)
      setdata(res.data)
      setload(false)
    })
  }, [searcher])



  return (
    <ThemeProvider theme={theme}>
      <Box container component="main" sx={{
        height: 'auto', backgroundImage: 'url(https://sxcontent9668.azureedge.us/cms-assets/assets/Homepage_Starlink_SLC_40_Desktop_cac54ee8bd.jpg)', backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: "center",
        flexWrap: "wrap"

      }}>


        <Box color={"white"} fontFamily={"monospace"} fontSize={"2.2rem"} p={"2rem"}   >
          <Box width={"100%"}>
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

          </Box>
          Making life multiplanetary.
        </Box>

        <Box sx={{
          background: "rgba( 255, 255, 255, 0 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 5px )",
          borderRadius: "0.2rem",
          margin: "3rem",
          p: "0.5rem",
          border: "1px solid rgba( 255, 255, 255, 0.5)"
        }} >

          <Box color={"white"} fontFamily={"monospace"} fontSize={"2rem"} p={"0.5rem"}   >

            Explore Our Missions
          </Box>
          <Box display={"f"} m={"0.5rem"} width={"20rem"}  >

            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              id="demo-simple-select"
              margin='1rem'
              label="Status"
              fullWidth
              onChange={(e) => setsearcher({ ...searcher, status: e.target.value })}
            >
              <MenuItem value={"active"}>active</MenuItem>
              <MenuItem value={"retired"}>retired</MenuItem>
              <MenuItem value={"destroyed"}>destroyed</MenuItem>
              <MenuItem value={"unknown"}>unknown</MenuItem>
              <MenuItem value={""}>None</MenuItem>
            </Select>




            <InputLabel sx={{ mt: "0.5rem" }} id="demo">Type</InputLabel>
            <Select
              labelId="demo"
              id="demo"
              fullWidth
              label="type"
              onChange={(e) => setsearcher({ ...searcher, type: e.target.value })}
            >
              <MenuItem value={"Dragon 1.0"}>Dragon 1.0</MenuItem>
              <MenuItem value={"Dragon 1.1"}>Dragon 1.1</MenuItem>
              <MenuItem value={"Dragon 2.0"}>Dragon 2.0</MenuItem>
              <MenuItem value={""}>None</MenuItem>
            </Select>

            <ChakraProvider>
              <div style={{ color: "white", marginTop: "0.5rem" }} >
                Original Launch
              </div>
              <Input onChange={(e) => setsearcher({ ...searcher, ol: e.target.value })} mb={"1rem"} size={"lg"} color={"white"} borderRadius={"sm"} type='datetime-local' />
            </ChakraProvider>

          </Box>

        </Box>

      </Box>
      <Box container component="main" sx={{
        height: '100vh', backgroundImage: 'url(https://sxcontent9668.azureedge.us/cms-assets/assets/SES_18_19_presssite_DSC_2850_417e27436e.jpg)', backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflowY: "scroll",

      }}>


        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", height: "100vh", width: "90%", m: "auto", fontFamily: "monospace" }} >

          {
            load ?
              <Box width={"100%"} display={"flex"} m={"2rem"} justifyContent={"center"}  >
                <CircularProgress size={"10rem"} /></Box> :






              data && data.length != 0 && data.map((ele) => {
                return <Box sx={{
                  color: "white", width: "20rem", p: "1rem", m: "1rem", background: "rgba( 255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 2px )",
                  borderRadius: "0.2rem",
                  border: "1px solid rgba( 255, 255, 255, 0.18 )"
                }} >
                  <Box display={"flex"} justifyContent={"space-between"} >
                    <Box>
                      Capsule Id
                    </Box>
                    <Box>{
                      ele.capsule_id
                    }</Box>
                  </Box>

                  <Box display={"flex"} justifyContent={"space-between"} >
                    <Box>
                      Capsule Serial
                    </Box>
                    <Box>{
                      ele.capsule_serial
                    }</Box>
                  </Box>





                  <Box display={"flex"} justifyContent={"space-between"} >
                    <Box>
                      Landings
                    </Box>
                    <Box>{
                      ele.landings
                    }</Box>
                  </Box>

                  <Box display={"flex"} justifyContent={"space-between"} >
                    <Box>
                      Original Launch Date
                    </Box>
                    <Box>{
                      new Date(ele.original_launch).toLocaleDateString()
                    }</Box>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"} >
                    <Box>
                      Original Launch Time
                    </Box>
                    <Box>{
                      new Date(ele.original_launch).toLocaleTimeString()
                    }</Box>
                  </Box>





                  <Box display={"flex"} justifyContent={"space-between"} >
                    <Box>
                      Original Launch Unix
                    </Box>
                    <Box>{
                      ele.original_launch_unix
                    }</Box>
                  </Box>


                  <Box display={"flex"} justifyContent={"space-between"} >
                    <Box>
                      Reuse Count
                    </Box>
                    <Box>{
                      ele.reuse_count
                    }</Box>
                  </Box>


                  <Box display={"flex"} justifyContent={"space-between"} >
                    <Box>
                      Status
                    </Box>
                    <Box>{
                      ele.status
                    }</Box>
                  </Box>

                  <Box display={"flex"} justifyContent={"space-between"} >
                    <Box>
                      Type
                    </Box>
                    <Box>{
                      ele.type
                    }</Box>
                  </Box>


                  <Box display={"flex"} justifyContent={"space-between"} my={"0.5rem"} p={"0.5rem"} border={"1px solid white"} borderRadius={"0.2rem"} flexWrap={"wrap"} >
                    <Box>
                      Details
                    </Box>
                    <Box>{
                      ele.details
                    }</Box>
                  </Box>
                  Missions
                  <Box sx={{ display: "flex", flexWrap: "wrap" }} >
                    {
                      ele.missions && ele.missions.length != 0 && ele.missions.map((el) => {
                        return <Box m={"0.5rem"} >
                          <Box>{el.flight}</Box>
                          <Box>{el.name}</Box>
                        </Box>
                      })
                    }

                  </Box>

                </Box>
              })

          }
        </Box>
      </Box>



    </ThemeProvider >
  );
}





// capsule_id
// : 
// "dragon1"
// capsule_serial
// : 
// "C104"
// details
// : 
// null
// landings
// : 
// 1
// missions
// : 
// [{…}]
// original_launch
// : 
// "2013-03-01T19:10:00.000Z"
// original_launch_unix
// : 
// 1362165000
// reuse_count
// : 
// 0
// status
// : 
// "unknown"
// type
// : 
// "Dragon 1.0"








// missions
// : 
// Array(3)
// 0
// : 
// flight
// : 
// 22
// name
// : 
// "CRS-6"
// [[Prototype]]
// : 
// Object
// 1
// : 
// {name: 'CRS-13', flight: 51}
// 2
// : 
// {name: 'CRS-18', flight: 82}