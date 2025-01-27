import React from 'react';
import { Component } from 'react';
import fetch from 'cross-fetch';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, makestyles } from '@material-ui/core/styles';

function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }
  
export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
      await sleep(1e3); 
      const countries = await response.json();

      if (active) {
        setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);


  const useStyles = makeStyles(theme => ({
      TextField : {
          border: "3px solid #002f34"
      
    }
}));

const classes = useStyles()


return (
    <Autocomplete
    
    id="asynchronous-demo"
    style={{ width: 300 }}
    open={open}
    onOpen={() => {
        setOpen(true);
    }}
    onClose={() => {
        setOpen(false);
    }}
    getOptionSelected={(option, value) => option.name === value.name}
    getOptionLabel={(option) => option.name}
    options={options}
    loading={loading}
    renderInput={(params) => (
        <TextField
        className = {classes.TextField}
        {...params}
        placeholder="Select Country"
        data-shrink = "False"
        
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}


