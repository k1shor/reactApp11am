import { Box, Container, TextField, Typography, Button} from '@mui/material'
import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const Contact = () => {
    return (
        <>
            <Nav />
            <Typography variant="h4" align='center' className='my-3'>
                Contact
            </Typography>
            <Container className='mx-auto' sx={{ p: 0, width: '90%' }}>
                <Box boxShadow={3} p={5} borderRadius='10px'
                    sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    <Box sx={{ width: "50%", p: "20px" }} boxShadow={3}>
                        <Box>
                            <Typography variant='h5' color="secondary" >Our Store</Typography>
                            <Typography variant='h6' color="secondary">Kathmandu, Nepal</Typography>
                            <Typography variant='body' color="secondary">Phone: 9851012345</Typography><br />
                            <Typography variant='body' color="secondary">Email: info@ourstore.com</Typography>
                        </Box>
                        <Box>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.240403142384!2d85.31271265024448!3d27.709862782706413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193edf6bd2af%3A0x44ac26fce7c33d8c!2sDursikshya%20Education%20Network!5e0!3m2!1sen!2snp!4v1647844277885!5m2!1sen!2snp" height="350" style={{ "border": "0", width: "100%" }} allowfullscreen="" loading="lazy"></iframe>
                        </Box>
                    </Box>
                    <Box sx={{ width: "50%" }} pl={5}>
                        <Typography variant='h5' align='center' color='secondary' fontWeight='bold' sx={{ textDecoration: "underline" }}>
                            Contact form
                        </Typography>
                        <br/><br/>
                        <TextField variant='outlined' label='Email' multiline maxRows={1} fullWidth='true' required placeholder="enter email here" helperText="this is a required field" />
                        <br/><br/>
                        <TextField size='medium' variant='outlined' label='Subject' multiline maxRows={1} fullWidth='true' required placeholder="enter email here" />
                        <br/><br/>
                        <TextField size='medium' variant='outlined' label='Message' multiline maxRows={4} minRows={4} fullWidth='true' required placeholder="enter email here" /><br/><br/>

                        <Button variant='contained' fullWidth>Submit</Button>

                        
                    </Box>
                </Box>
            </Container>

            <Footer />
        </>
    )
}

export default Contact