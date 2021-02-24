import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/cesarramos95.png" alt="César Augusto"/>
      <div>
        <strong>César Augusto</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
        </p>
        <p>Level 1</p>
      </div>
    </div>
  )
}