import React from 'react';
import './ListSelect.css';
/* MUI */
import { useTheme } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
/* Constants */


interface ListSelectInterface {
  activeOption: any,
  options: any,
  handleChange: (value: any) => void,
}


const ListSelect = ({activeOption, options, handleChange}: ListSelectInterface) => {
  const theme = useTheme();

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80,
         "*": {color: theme.palette.secondary.main}}}
      >
        <InputLabel id="demo-simple-select-autowidth-label">
          <span>Filter</span>
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={activeOption}
          onChange={handleChange}
          variant={"filled"}
          label="Age" sx={{
              "*": {
              color: theme.palette.secondary.main,
              outlineColor: theme.palette.secondary.main,
              borderColor: theme.palette.secondary.main,
            }
          }}
        >
          {
            options.map((item: any) => {
              return (
                <MenuItem value={item}><span>{item}</span></MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
    </div>
  );
}
export default ListSelect;