import React from 'react'
import styles from "./page.module.css"

const Videos = () => {
  return (
    <>
<header className={styles.header}>
  <h1>Welcome to E-Learning Portal</h1>
</header>
<section className={styles.items}>
  <div className={styles.item}>
  <iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
  </div>
  <div className={styles.item}>
    <h2>Video list</h2>
    <div>
      <p>Video 1</p>
      <p>Video 2</p>
    </div>
  </div>
</section>
    </>
  )
}

export default Videos