import { Button, CardActions, CardContent, Grid, Icon, Typography, Container } from '@mui/material'
import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

const About = () => {
    return (
        <>
            <Nav />

            <Typography variant="h4" className='text-center'>
                About Us
            </Typography>
<Container className='mx-auto'>
            <Grid container justifyContent={'space-evenly'} >
                <Grid item xs={4} className='bg-primary text-center'>
                    <Card className='p-2'>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/carousel_img/img1.jpg"
                            alt="admin"
                        />
                        <CardContent>
                            <Typography variant="h6" color="secondary"> Admin </Typography>
                            <Typography variant="body" color="secondary"> Mr. ABC</Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined">
                                <Icon>home</Icon>Portfolio<FacebookIcon/></Button>
                                <Icon>facebook</Icon>
                                <Icon color="secondary">person</Icon>
                        </CardActions>

                    </Card>

                </Grid>
                <Grid item xs={4}>
                    <Card className='p-2'>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/carousel_img/img1.jpg"
                            alt="admin"
                        />
                        <CardContent>
                            <Typography variant="h6" color="secondary"> Admin </Typography>
                            <Typography variant="body" color="secondary"> Mr. ABC</Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined">Portfolio</Button>
                        </CardActions>

                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className='p-2'>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/carousel_img/img1.jpg"
                            alt="admin"
                        />
                        <CardContent>
                            <Typography variant="h6" color="secondary"> Admin </Typography>
                            <Typography variant="body" color="secondary"> Mr. ABC</Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined">Portfolio</Button>
                        </CardActions>

                    </Card>
                </Grid>

            </Grid>


            </Container>


            

            <Footer />
        </>
    )
}

export default About