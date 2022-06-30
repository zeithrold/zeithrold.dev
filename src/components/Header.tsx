import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  headerRoot: {
    border: 'solid',
    borderWidth: '0 0 1px 0',
    borderColor: '#e6e6e6',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: '24px',
  }
});

export default function Header() {
  const styles = useStyles();
  return (
    <div className={styles.headerRoot}>
      <span className={styles.headerTitle}>zeithrold.cloud</span>
    </div>
  );
}

