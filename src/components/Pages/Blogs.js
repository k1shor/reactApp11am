import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { Typography, Box } from '@mui/material'
import './blogs.css'

const Blogs = () => {
    return (
        <>
            <Nav />

            <Typography variant="h4" className='blog text-center mt-3'>
                Blogs
            </Typography>

            <Box className='blogs_container' backgroundColor='skyblue' p={3}>
                <Box className='blog' display={'flex'} backgroundColor='white' p={3} borderRadius='10px'>
                    <Box className='blog-content' width='80%'>
                        <Box className='blog-title' >
                            <Typography variant='h5' fontWeight='bold'
                                sx={{ textDecoration: "underline" }}>Title
                            </Typography>
                        </Box>
                        <Box className='blog-text'>
                            <Typography variant='body1' px={5} align='justify'>
                            Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text
                            </Typography>
                        </Box>
                    </Box>
                    <Box className='blogger' width='20%'>
                        <Box className='blogger_image' width='100%' borderRadius='50%' overflow='hidden'>
                            <img src='./carousel_img/img3.jpeg' style={{"width":"100%"}}></img>
                        </Box>
                        <Box className='blogger_name'>
                            <Typography variant='h6' align='right'>-Blogger</Typography>
                            </Box>
                    </Box>
                </Box>


                <Box className='blog' display={'flex'} backgroundColor='white' p={3} borderRadius='10px'>
                    <Box className='blog-content' width='80%'>
                        <Box className='blog-title' >
                            <Typography variant='h5' fontWeight='bold'
                                sx={{ textDecoration: "underline" }}>Title
                            </Typography>
                        </Box>
                        <Box className='blog-text'>
                            <Typography variant='body1' px={5} align='justify'>
                            Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text Blog text
                            </Typography>
                        </Box>
                    </Box>
                    <Box className='blogger' width='20%'>
                        <Box className='blogger_image' width='100%' borderRadius='50%' overflow='hidden'>
                            <img src='./carousel_img/img3.jpeg' style={{"width":"100%"}}></img>
                        </Box>
                        <Box className='blogger_name'>
                            <Typography variant='h6' align='right'>-Blogger</Typography>
                            </Box>
                    </Box>
                </Box>
            </Box>

            <Footer />
        </>
    )
}

export default Blogs