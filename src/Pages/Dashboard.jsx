import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ChakraProvider, Input, Button, Box, Image, Spinner } from '@chakra-ui/react';
import FileResizer from 'react-image-file-resizer';
import { useState } from 'react';
import FileSaver from 'file-saver';



export default function Dashboard() {
  const navigate = useNavigate()

  const [file, setFile] = React.useState(null);

  const [imglist, setimglist] = useState(null)

  const [load, setload] = useState(false)

  async function handleFileUpload(event) {
    setFile(null)
    setload(true)
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const res = await resizeFile(selectedFile)
      console.log(res, "img")
      setFile(res)
    }

    setload(false)
  };

  const resizeFile = (file) =>
    new Promise((resolve) => {
      FileResizer.imageFileResizer(
        file,
        600,
        600,
        "JPEG",
        50,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  function handleUpload(event) {
    setimglist([])
    setload(true)

    event.preventDefault()
    let token = sessionStorage.getItem('token');
    axios.post('https://xpayback-imgres-backend.vercel.app/dashboard', { image: file }, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(response => {
        setimglist(response.data)
        console.log(response.data);
        setload(false)
      })
      .catch(error => {
        console.error(error);
        setload(false)
      });
  };



  return (<div style={{ backgroundColor: "#00535c", height: "100vh" }}>
    <ChakraProvider>
      <Box backgroundColor={"#00535c"} display={"flex"} flexDir={"column"} alignItems={"center"} >



        <Box backgroundColor={"whiteAlpha.500"} color={"white"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} width={"90%"} m={"auto"} my={"3rem"} borderRadius={"0.5rem"} p={"2rem"} >
          <form onSubmit={handleUpload}>
            <Input isDisabled={load} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} display={"flex"} p={"0.3rem"} flexDir={"row"} type='file' onChange={handleFileUpload} />
            <Button isDisabled={load || !file} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} mt={"0.5rem"} variant={"outline"} type="submit">Upload</Button>
          </form>
          <Button onClick={() => navigate('/allimgs')} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} mt={"0.5rem"} variant={"outline"} >All Uploads</Button>
        </Box>
        {
          load && <Box color={"white"} >
            <Spinner w={"10rem"} h={"10rem"} />
          </Box>
        }
        {
          imglist && imglist.length != 0 &&

          <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}  >

            <Box backgroundColor={"whiteAlpha.500"} color={"white"} borderRadius={"0.5rem"} p={"0.5rem"} h={"fit-content"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} m={"0.5rem"}  >

              <Image m={"auto"} borderRadius={"0.5rem"} cursor={"pointer"} onClick={() => FileSaver.saveAs(imglist?.result2?.secure_url, "image.jpg")} src={imglist?.result2?.secure_url} />

              <Box m={"0.2rem"} >
                <Box>Format: {imglist?.result2?.format}</Box>
                <Box>Size: {imglist?.result2?.bytes / 1000} KB</Box>
                <Box>height: {imglist?.result2?.height}</Box>
                <Box>width: {imglist?.result2?.width}</Box>

                <Box cursor={"pointer"} onClick={() => FileSaver.saveAs(imglist?.result2?.secure_url, "image.jpg")} my={"0.4rem"} border={"1px solid white"} textAlign={"center"} borderRadius={"0.2rem"} >Secure Download
                </Box>


                <Box cursor={"pointer"} onClick={() => FileSaver.saveAs(imglist?.result2?.url, "image.jpg")} my={"0.4rem"} border={"1px solid white"} textAlign={"center"} borderRadius={"0.2rem"} >Download
                </Box>


              </Box>
            </Box>









            <Box backgroundColor={"whiteAlpha.500"} color={"white"} borderRadius={"0.5rem"} p={"0.5rem"} h={"fit-content"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} m={"0.5rem"}  >

              <Image m={"auto"} borderRadius={"0.5rem"} cursor={"pointer"} onClick={() => FileSaver.saveAs(imglist?.result3?.secure_url, "image.jpg")} src={imglist?.result3?.secure_url} />

              <Box p={"0.5rem"} >
                <Box>Format: {imglist?.result3?.format}</Box>
                <Box>Size: {imglist?.result3?.bytes / 1000} KB</Box>
                <Box>height: {imglist?.result3?.height}</Box>
                <Box>width: {imglist?.result3?.width}</Box>

                <Box cursor={"pointer"} onClick={() => FileSaver.saveAs(imglist?.result3?.secure_url, "image.jpg")} my={"0.4rem"} border={"1px solid white"} textAlign={"center"} borderRadius={"0.2rem"} >Secure Download
                </Box>


                <Box cursor={"pointer"} onClick={() => FileSaver.saveAs(imglist?.result3?.url, "image.jpg")} my={"0.4rem"} border={"1px solid white"} textAlign={"center"} borderRadius={"0.2rem"} >Download
                </Box>


              </Box>
            </Box>








            <Box backgroundColor={"whiteAlpha.500"} color={"white"} borderRadius={"0.5rem"} p={"0.5rem"} h={"fit-content"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} m={"0.5rem"}  >

              <Image m={"auto"} borderRadius={"0.5rem"} cursor={"pointer"} onClick={() => FileSaver.saveAs(imglist?.result1?.secure_url, "image.jpg")} src={imglist?.result1?.secure_url} />

              <Box p={"0.2rem"} >
                <Box>Format: {imglist?.result1?.format}</Box>
                <Box>Size: {imglist?.result1?.bytes / 1000} KB</Box>
                <Box>height: {imglist?.result1?.height}</Box>
                <Box>width: {imglist?.result1?.width}</Box>

                <Box cursor={"pointer"} onClick={() => FileSaver.saveAs(imglist?.result1?.secure_url, "image.jpg")} my={"0.4rem"} border={"1px solid white"} textAlign={"center"} borderRadius={"0.2rem"} >Secure Download
                </Box>


                <Box cursor={"pointer"} onClick={() => FileSaver.saveAs(imglist?.result1?.url, "image.jpg")} my={"0.4rem"} border={"1px solid white"} textAlign={"center"} borderRadius={"0.2rem"} >Download
                </Box>


              </Box>
            </Box>




          </Box>
        }
      </Box>
    </ChakraProvider>
  </div>);
}
