import React from "react";
import { Grid, Cell } from "react-mdl";

const Education = ({ id, school, link, description, grade, year }) => {
  return (
    <Grid>
      <Cell col={7}>
        <p className="year">{year}</p>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
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
