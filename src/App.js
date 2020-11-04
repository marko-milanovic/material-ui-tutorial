import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
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
