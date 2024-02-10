import React from 'react';
import { Box,  Stack, Typography } from "@mui/material";
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises , equipmentExercises}) => {
  return (
    <>
    <Box sx={{mt:{lg:'100px' , xs:'0'}}}>
      <Typography variant="h3" mb={8}>
        Exercises That target the same {" "} <span style={{ color: "#ff2625", textTransform: "capitalize" }}>Muscle</span> {" "}miscle group
      </Typography>
      <Stack direction="row" sx={{p:'2' , position:'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> 
        :<Loader></Loader>}
      </Stack>

      <Typography variant="h3" mb={8} mt={15}>
        Exercises That target the same {" "} <span style={{ color: "#ff2625", textTransform: "capitalize" }}>equipments</span> 
      </Typography>
      <Stack direction="row" sx={{p:'2' , position:'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> 
        : <Loader></Loader>}

      </Stack>


    </Box>
    </>
    
  )
}

export default SimilarExercises;




{/* <Typography variant="h4" mb="33px">
Watch{" "}
<span style={{ color: "#ff2625", textTransform: "capitalize" }}>
  {name}
</span>{" "}
exercise videos
</Typography> */}