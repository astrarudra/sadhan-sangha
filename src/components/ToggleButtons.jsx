import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const ToggleButtons = ({selected, list, onChange, label = "Albums"}) => {
  const handleChange = (_, userSelect) => {
    if (userSelect !== null && userSelect !== selected) onChange(userSelect);
  }
  return (
    <ToggleButtonGroup
      color="primary"
      value={selected}
      exclusive
      onChange={handleChange}
      ariel-label={label}
    >
        {list.map((item, i) => {
            return <ToggleButton key={item.key} value={item.key} sx={{textTransform: 'capitalize'}} color="success" size="large"> 
              {item.value}
              </ToggleButton>
        })}
    </ToggleButtonGroup>
  );
}
