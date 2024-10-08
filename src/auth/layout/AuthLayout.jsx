import { Grid, Typography} from '@mui/material'

export const AuthLayout = ({ children, title='' }) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            {/* Caja */}
            <Grid item
                className='box-shadow'
                xs={3} // tamaño de la caja
                sx={{ 
                    width: {sm:450},
                    backgroundColor: 'white', 
                    padding: 3,
                    borderRadius: 2 
                }} // estilo de la caja      
            >
                <Typography variant='h5' sx={{ mb: 1 }}>{title}</Typography>
            
                    {children}
            
            </Grid>
        </Grid>
    )
}
