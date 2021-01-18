import React from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

const Skills = ({ skill, progress }) => {
  return (
    <Grid>
      <Cell col={12}>
        <div
          className="progressBox"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p>{skill}</p>
          <ProgressBar
            className="progress"
            buffer={progress}
            progress={progress}
          />
        </div>
      </Cell>
    </Grid>
  );
};

export default Skills;
