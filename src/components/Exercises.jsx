import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "./../Utils/fetchExData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercises = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercises - exercisesPerPage;
  const currenExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercises
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exxercisesData = [];
      if (bodyPart === "all") {
        exxercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exxercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exxercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <>
      <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="10px" p="20px">
        <Typography variant="h3" mb="46px">
          Showing Results
        </Typography>
        <Stack
          direction="row"
          sx={{ gap: { lg: "110px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {currenExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </Stack>
        <Stack mt="100px" alignItems="center">
          {exercises.length > 9 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            ></Pagination>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default Exercises;
