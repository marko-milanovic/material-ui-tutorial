import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          style={{
            fontSize: 18,
          }}
          startIcon={<SaveIcon />}
          endIcon={<SaveIcon />}
          size="large"
          variant="contained"
          color="primary"
        >
          Hello world
        </Button>
      </header>
    </div>
  );
};

export default App;
