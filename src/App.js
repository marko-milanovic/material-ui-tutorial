import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CheckboxExample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox',
          }}
        />
      }
      label="Testing checkbox"
    />
  );
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CheckboxExample />
        <ButtonGroup variant="contained">
          <Button startIcon={<SaveIcon />} color="primary">
            Save
          </Button>
          <Button startIcon={<DeleteIcon />} color="secondary">
            Discard
          </Button>
        </ButtonGroup>
      </header>
    </div>
  );
};

export default App;
