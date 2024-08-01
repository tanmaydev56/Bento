import React from 'react'
import styles from "./paralax.module.css"
const paralax = () => {
  return (
    <>
   <section className={styles.about}>
<img src="src/assets/planet-04.png" alt="" />
   </section>
    <section className={styles.photo1}>
      <img className='h-[100vh] w-full' src="src/assets/planet-05.png" alt="" />
   </section>
    <section className={styles.photo2}>
      <img src="src/assets/planet-06.png" alt="" />
   </section>
   <section className={styles.photo3}>
    <img src="src/assets/planet-07.png" alt="" />
    </section>
   </>
  )
}

export default paralax
