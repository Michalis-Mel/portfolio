import React from "react";
import { Grid, Cell } from "react-mdl";

const Education = ({ id, school, link, description, grade, year }) => {
  return (
    <Grid>
      <Cell col={4}>
        <p className="year">{year}</p>
      </Cell>
      <Cell col={7}>
        {link ? (
          <a href={link} target="_blank">
            <h4 className="school">{school}</h4>
          </a>
        ) : (
          <h4 className="school">{school}</h4>
        )}
        <p>{description}</p>
        {grade && <p>Grade: {grade}</p>}
      </Cell>
    </Grid>
  );
};

export default Education;
