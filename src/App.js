import React,{useCallback, useState} from "react";
import {Card,CardContent,Grid,Button}from "@mui/material"

function App() {
const[clr, setClr]=useState("");


  return (

    <Card sx={{bgcolor:"lightgoldenrodyellow",fontSize:50,textAlign:"center",color:clr}}>
           <CardContent>
    <Grid container spacing={1} >
      <Grid item xs={12}>
        
              {clr}
           
              </Grid>
      
    
        <Grid item xs={4}>
          <Button onClick={()=>setClr("ORANGE")} variant="contained" color="warning" fullWidth>
            ORANGE
          </Button>
           </Grid>
      
           <Grid item xs={4}>
          <Button onClick={()=>setClr("GREEN")} variant="contained" color="warning" fullWidth>
            GREEN
          </Button>
           </Grid>

           <Grid item xs={4}>
          <Button onClick={()=>setClr("PURPLE")} variant="contained" color="warning" fullWidth>
            PURPLE
          </Button>
           </Grid>
      
           <Grid item xs={4}>
          <Button onClick={()=>setClr("BLACK")} variant="contained" color="warning" fullWidth>
            BLACK
          </Button>
           </Grid>


           <Grid item xs={4}>
          
           </Grid>


           <Grid item xs={4}>
          <Button onClick={()=>setClr("DARK BLUE")} variant="contained" color="warning" fullWidth>
            DARK BLUE
          </Button>
           </Grid>

           <Grid item xs={4}>
          <Button onClick={()=>setClr("GRAY")} variant="contained" color="warning" fullWidth>
            GRAY
          </Button>
           </Grid>

           <Grid item xs={4}>
          <Button onClick={()=>setClr("MAROON")} variant="contained" color="warning" fullWidth>
            MAROON
          </Button>
           </Grid>

           <Grid item xs={4}>
          <Button onClick={()=>setClr("VIOLET")} variant="contained" color="warning" fullWidth>
            VIOLET
          </Button>
           </Grid>

      

    

    </Grid>
    </CardContent>
              </Card>
  )
}

export default App;
