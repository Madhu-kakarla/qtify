import React, { useState } from 'react';
import styles from "./Grid.module.css";
import { Box, CircularProgress } from '@mui/material';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';

const Grid = ({title, data, type}) => {
	// console.log("Data from grid", data);
	const [toggle, setToggle] = useState(true);
	const handleToggle = () => {
		setToggle(!toggle)
	}
	return (
		<div className={styles.gridWrapper}>
			<div className={styles.gridHeader}>
				<h3>{title}</h3>
				<h4 className={styles.toggleText} onClick={handleToggle}>{ toggle ? "Show All" : "Collapse All" }</h4>
			</div>
			{ data.length === 0 ? (
				<Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
					<CircularProgress />
				</Box>
			) : <div className={styles.gridContainer}>
				{!toggle ? <div className={styles.wrapper}>
				{
					data.map(item => <Card data={item} type={type} key={item.id} />)
				}
				</div> : <Carousel data={data} component={(item) => <Card data={item} type={type} />} />}
			</div> }
		</div>
	)
}

export default Grid