import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  headerRoot: {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
  },
  headerText: {
    fontSize: '15px',
  },
  headerLink: {
    composes: '$headerText',
    color: 'white',
    textDecoration: 'underline',
  }
});

export interface DevCommonHeaderProps {
  // If the page is not zeithrold.dev then show a link to the home page.
  homepage?: boolean;
}

export default function DevCommonHeader({ homepage }: DevCommonHeaderProps) {
  const styles = useStyles();
  return (
    <div className={styles.headerRoot}>
      <span className={styles.headerText}>A zeithrold.dev project</span>
      {homepage ? null : <a href="https://zeithrold.dev" className={styles.headerLink}>Home</a>}
    </div>
  );
}


