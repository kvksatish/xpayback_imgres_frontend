import { Box, Button, Image, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import FileSaver from 'file-saver';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AllImages = () => {
    const [data, setdata] = useState([])
    const [load, setload] = useState(false)

    useEffect(() => {
        setload(true)
        let token = sessionStorage.getItem('token');
        axios.get(`https://xpayback-imgres-backend.vercel.app/getallimgs`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            console.log(res)
            setdata(res.data)
            setload(false)
        })
    }, [])

    const downloadFile = (url, name) => {
        FileSaver.saveAs(url, name);
    };

    const navigate = useNavigate()
    return (<>
        <Box minH={"100vh"} backgroundColor={"#00535c"} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} >

            <Button p={"0.5rem"} borderRadius={"0.5rem"} cursor={"pointer"} onClick={() => navigate('/dashboard')} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} m={"0.5rem"} >Upload New Image</Button>

            {
                load && <Box color={"white"} >
                    <Spinner w={"10rem"} h={"10rem"} />
                </Box>
            }

            {
                !load && data.length == 0 &&

                <Box color={"white"} fontSize={"2rem"} >
                    No Images Found
                </Box>
            }
            <Box display={"flex"} w={"95%"} m={"auto"} flexWrap={"wrap"} justifyContent={"center"} >


                {
                    data?.map((ele) => {
                        console.log(ele, "ele");
                        return (
                            <Box key={ele.id} display={"flex"} flexWrap={"wrap"} justifyContent={"center"} >
                                {Array.isArray(ele.imgslinks) &&
                                    ele.imgslinks?.map((el) => {
                                        console.log(el);
                                        return (
                                            <Box
                                                key={el.id}
                                                backgroundColor="whiteAlpha.500"
                                                color="white"
                                                borderRadius="0.5rem"
                                                p="0.5rem"
                                                h="fit-content"
                                                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                                                m="0.5rem"
                                                border={"1px solid white"}
                                            >
                                                <Image
                                                    m="auto"
                                                    borderRadius="0.5rem"
                                                    cursor="pointer"
                                                    onClick={() => downloadFile(el?.secure_url, "image.jpg")}
                                                    src={el?.secure_url}
                                                />

                                                <Box m="0.2rem" >
                                                    <Box>Format: {el?.format}</Box>
                                                    <Box>Size: {el?.bytes / 1000} KB</Box>
                                                    <Box>height: {el?.height}</Box>
                                                    <Box>width: {el?.width}</Box>

                                                    <Box
                                                        cursor="pointer"
                                                        onClick={() => downloadFile(el?.secure_url, "image.jpg")}
                                                        my="0.4rem"
                                                        border="1px solid white"
                                                        textAlign="center"
                                                        borderRadius="0.2rem"
                                                    >
                                                        Secure Download
                                                    </Box>

                                                    <Box
                                                        cursor="pointer"
                                                        onClick={() => downloadFile(el?.url, "image.jpg")}
                                                        my="0.4rem"
                                                        border="1px solid white"
                                                        textAlign="center"
                                                        borderRadius="0.2rem"
                                                    >
                                                        Download
                                                    </Box>
                                                </Box>
                                            </Box>
                                        );
                                    })}
                            </Box>
                        );
                    })
                }
            </Box>
        </Box>
    </>)
}

export default AllImages