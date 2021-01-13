import React from "react";
import { Grid, Cell } from "react-mdl";

const Education = ({ id, school, description, grade, year }) => {
  return (
    <Grid>
      <Cell col={4}>
        <p className="year">{year}</p>
      </Cell>
      <Cell col={7}>
        <h4 className="school">{school}</h4>
        <p>{description}</p>
        {grade && <p>Grade: {grade}</p>}
      </Cell>
    </Grid>
  );
};

export default Education;
