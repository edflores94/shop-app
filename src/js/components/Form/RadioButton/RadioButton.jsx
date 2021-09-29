import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButton(props) {
  const [value, setValue] = useState("English");
  const { options } = props;

  const handleChange = event => {
    setValue(event.target.value);
    props.handleChange(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        <b>Change language</b>
      </FormLabel>
      <Divider />
      <RadioGroup aria-label="gender" name="controlled-radio-buttons-group" value={value} onChange={handleChange}>
        {options &&
          options.map((element, key) => {
            return (
              <FormControlLabel
                value={element.value}
                control={<Radio color="primary" checked={props.language == element.value} />}
                label={element.title}
              />
            );
          })}
      </RadioGroup>
    </FormControl>
  );
}
