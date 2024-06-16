import React from 'react'
import styles from './page.module.sass'
import Header from './components/header'

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.root}>
        <h1>
          The place where
          {' '}
          <span className={styles.idea}>idea</span>
          {' '}
          blinks.
        </h1>
        <p>
          <span className={styles.domain}>zeithrold.dev</span>
          {' '}
          is Zeithrold's development zone.
        </p>
        <p>Still under construction, stay tuned!</p>
        <p>This page is a brunch of next in zeithrold.dev, you can access it from <a href='https://next.zeithorld.dev'>next.zeithrold.dev</a></p>
      </main>
    </>
  )
}
