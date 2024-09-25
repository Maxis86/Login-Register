import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palete: {
        primary:{
            main: '#262254'
        },
        secundary:{
            main: '#543884'
        },
        error:{
            main: red.A400
        }
    }
})