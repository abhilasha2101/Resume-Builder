import React from 'react'
import styles from "./Header.module.css";
import resumeSvg from "../../assets/resume.svg"

function header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Creat a <span>Resume</span> that stands out! 
          </p>
        <p className={styles.heading}>
          Land the job you deserve. <span>It's Free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  )
}

export default header
