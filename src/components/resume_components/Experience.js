import React from "react";
import { Grid, Cell } from "react-mdl";

const Experience = ({ place, title, year, id }) => {
  return (
    <Grid>
      <Cell col={4}>
        <p className="year">{year}</p>
      </Cell>
      <Cell col={8}>
        <h4>{place}</h4>
        <p>{title}</p>
      </Cell>
    </Grid>
  );
};

export default Experience;
