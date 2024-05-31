import * as React from 'react';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';

export default function SimpleGrow(icon) {

  return (
    <Box>
      <Box>
        <div>
            {icon.map((item, index) =>
                <Grow
                key={index}
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {...(true ? { timeout: Number(Number(index + 1) + '00') } : {})}
                >
                <div>{item}</div>
                </Grow>
            )}
        </div>
      </Box>
    </Box>
  );
}
