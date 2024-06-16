import styles from './header.module.sass'

export default function Header() {
  return (
    <div className={styles.header}>
      <span className={styles.title}>zeithrold.dev</span>
    </div>
  )
}
