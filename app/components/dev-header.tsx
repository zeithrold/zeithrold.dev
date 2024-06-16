import styles from './dev-header.module.sass'

export default function DevHeader({ homepage }: { homepage?: boolean }) {
  return (
    <div className={styles.header}>
      <span className={styles.text}>A zeithrold.dev project</span>
      {homepage ? null : <a href="https://zeithrold.dev" className={styles.link}>Home</a>}
    </div>
  )
}
