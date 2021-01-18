import React from "react";
import { Grid, Cell } from "react-mdl";

const Experience = ({ place, title, year, id }) => {
  return (
    <Grid>
      <Cell col={8}>
        <p className="year">{year}</p>
        <h4>{place}</h4>
        <p>{title}</p>
      </Cell>
    </Grid>
  );
};

export default Experience;
