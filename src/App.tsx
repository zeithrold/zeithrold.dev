import React from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import CloudCommonHeader from './components/CloudCommonHeader';
import Header from './components/Header';
import ZeithroldProvider from './components/ZeithroldProvider';

const useStyles = createUseStyles({
  appRoot: {
    padding: '10px',
  },
  appIdeaText: {
    color: '#ffa64d'
  },
  appDomainText: {
    color: '#0073e6',
    fontWeight: 'bold',
  }
});

export default function App() {
  const styles = useStyles();
  const { t, i18n } = useTranslation(['homepage', 'common']);
  return (
    <React.StrictMode>
      <ZeithroldProvider>
        <CloudCommonHeader homepage={true}></CloudCommonHeader>
        <Header></Header>
        <div className={styles.appRoot}>
          <h1>The place where <span className={styles.appIdeaText}>idea</span> blinks.</h1>
          <p><span className={styles.appDomainText}>zeithrold.cloud </span>is Zeithrold's development zone.</p>
          <p>Still under construction, stay tuned!</p>
        </div>
      </ZeithroldProvider>
    </React.StrictMode>
  );
}