import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/system';

const url = 'http://localhost:8000/api/proyectos/'

const Work = () => {

    const [elementos, setElementos] = useState([]);

    useEffect(() => {
        getAllElements();
    }, [])

    const getAllElements = async () => {
        const response = await axios.get(`${url}/proyectos`);
        setElementos(response.data);
    }

    useEffect(() => {
        const getElementsById = async () => {
            const response = await axios.get(`${url}${id}`)
            setTitle(response.data.title);
            setSubtitle(response.data.subtitle);
            setImage(response.data.image);
            setDescription(response.data.description);
            setLinkRepo(response.data.linkRepo);
            setLinkDemo(response.data.linkDemo);
        }
        getElementsById();
    }, [])

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            flexDirection="wrap"
            alignItems="center"
            justifyContent="center"
            style={{
                minHeight: '100vh',
            }}
        >
            <Box sx={{
                        display: "flex",
                        alignItems:"center",
                        justifyContent:"start",
                        width: 750,
                        maxHeight: { xs: 200, sm: 250, md: 300, xl: 380 },
                        maxWidth: { xs: 250, sm: 350, md: 550, xl: 850 },
                        mt:10,
                        mb:5
                    }}
            >
                <Typography 
                    variant="h2" 
                    sx={{
                        display: "flex",
                        alignItems:"center",
                        justifyContent:"start",
                        fontSize: 18,
                        fontWeight: 300, 
                        textTransform: 'uppercase',
                        fontStyle: 'italic',
                    }}
                    >
                    / Proyectos
                </Typography>
            </Box>

            {
                elementos.map((elemento) => (
                    <Card
                        sx={{
                            mb: 5,
                            height: 350,
                            width: 750,
                            maxHeight: { xs: 200, sm: 250, md: 300, xl: 380 },
                            maxWidth: { xs: 250, sm: 350, md: 550, xl: 850 }
                        }}>

                        <CardActionArea 
                            key={elemento.id}
                            component={Link} 
                            to= {elemento.id}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image={elemento.image}
                                alt={elemento.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" 
                                sx={{
                                    fontSize: 16,
                                    fontWeight: 600, 
                                    }}>
                                    {elemento.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {elemento.subtitle}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))
            }
        </Grid>
    );
}

export default Work;