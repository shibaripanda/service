import { Component } from 'react'
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'

const wrapperStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0, 
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
}

class Preloader extends Component {

  componentDidMount(){
    setTimeout(() => this.props.getModule(), 0)
  }
  componentWillUnmount(){}
  render() {
    return (
        <div style={wrapperStyle}> 
            <Box sx={{ display: 'flex' }}>
            <CircularProgress />
            </Box>
        </div>
    )
  }
}

export default Preloader