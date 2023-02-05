import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { display } from '@mui/system';

const Boarding = () => {
    return (
        <React.Fragment>
            <Grid
            container
            spacing={0}
            direction="column"
            flexDirection="wrap"
            alignItems="center"
            justifyContent="center"
            style={{
                minHeight: '100vh',
            }}>
                <div style={{ width: '55%', display: 'flex', flexDirection: 'row-reverse', justifyContent: 'end' }}>
                    <Typography
                        variant="p"
                        sx={{
                            mt:10,
                            mb: 5,
                            display: { xs: 'flex', md: 'flex' },
                            fontWeight: 200,
                            fontStyle: 'italic',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                        }}
                    >
                        Diseño y Desarrollo Web Front-end
                    </Typography>
                </div>
                <div style={{ width: '55%', display: 'flex', justifyContent: 'end' }}>
                    <Typography
                        variant="h1"
                        sx={{
                            mb:5,
                            display: { xs: 'flex', md: 'flex' },
                            justifyItems: 'start',
                            fontSize: 52,
                            fontWeight: 200,
                            textDecoration: 'none',
                        }}
                    >
                        Portfolio
                    </Typography>
                </div>
                <div style={{ width: '55%', display: 'flex', justifyContent: 'end' }}>
                    <Typography
                        variant="p"
                        sx={{
                            mr: 2,
                            mt: 10,
                            display: { xs: 'flex', md: 'flex' },
                            height: 233,
                            width: 250,
                            fontSize: 12,
                            fontWeight: 200,
                            textAlign: 'right',
                            textDecoration: 'none',
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                    <Box
                        component="img"
                        sx={{
                            height: 250,
                            width: 350,
                            maxHeight: { xs: 150, sm: 180, md: 210 },
                            maxWidth: { xs: 200, sm: 230, md: 280 },
                        }}
                        alt="The house from the offer."
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                    />
                </div>
        </Grid>
        </React.Fragment >
    )
}

export default Boarding
