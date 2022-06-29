import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@global': {
    body: {
      fontFamily: ['Noto Sans SC', 'sans-serif'].join(','),
    }
  }
});

export default function FontProvider({ children }) {
  useStyles();
  return (
    <>
      {children}
    </>
  )
}

