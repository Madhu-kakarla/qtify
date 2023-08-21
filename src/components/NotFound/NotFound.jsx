import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
			<h1>Oops! You seem to be lost.</h1>
			<p>Here are some helpful links:</p>
			<Link to="/">Home</Link>
		</div>
  )
}

export default NotFound