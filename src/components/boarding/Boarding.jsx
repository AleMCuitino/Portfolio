import React from 'react';
import Ale from '../../assets/images/Ale1grey.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
                <div style={{ width: '50%', display: 'flex', flexDirection: 'row-reverse', justifyContent: 'end' }}>
                    <Typography
                        variant="p"
                        sx={{
                            mb: 2.5,
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
                <Box 
                    sx={{ 
                        width: '50%', 
                        display: 'flex', 
                        justifyContent: 'end' }}>
                    <Typography
                        variant="h1"
                        sx={{
                            mb:2.5,
                            display: { xs: 'flex', md: 'flex' },
                            justifyItems: 'start',
                            fontSize: 52,
                            fontWeight: 200,
                            textDecoration: 'none',
                        }}
                    >
                        Portfolio
                    </Typography>
                </Box>
                <Box sx={{ 
                    width: '50%', 
                    display: 'flex', 
                    flexDirection: {xs:'column-reverse', sm:'column-reverse', md: 'row', lg:'row', xl:'row'},
                    justifyContent: 'end', 
                    alignItems: 'flex-end' }}>

                    <Typography
                        variant="p"
                        sx={{
                            mt: { xs: 2, sm: 2, md: 0, lg: 0, xl:0 },
                            mr: { xs: 0, sm: 0, md: 2, lg: 2, xl:3 },
                            display: { xs: 'flex', md: 'flex' },
                            height: 250,
                            width: 250,
                            fontSize: 14,
                            fontWeight: 200,
                            textAlign: 'right',
                            textDecoration: 'none',
                            alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'flex-end' }
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                    <Box
                        component="img"
                        sx={{
                            height: 350,
                            width: 350,
                            maxHeight: { xs: 150, sm: 180, md: 250, xl:450 },
                            maxWidth: { xs: 150, sm: 180, md: 250, xl:450 },
                            display: { xs: 'flex', md: 'flex' },
                        }}
                        alt="The house from the offer."
                        src={Ale}
                    />
                </Box>
        </Grid>
        </React.Fragment >
    )
}

export default Boarding
