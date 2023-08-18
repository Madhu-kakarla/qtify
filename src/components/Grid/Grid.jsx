import React, { useState } from 'react';
import styles from "./Grid.module.css";
import { Box, CircularProgress, Tab } from '@mui/material';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const Grid = ({title, data, type, genres, tabStatus, handleTabs}) => {
	const [toggle, setToggle] = useState(true);
	switch(type) {
		case "albums": {
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
						</div> : <Carousel data={data} component={(item) => <Card data={item} type={type} key={item.id} />} />}
					</div> }
				</div>
			)
		}
		case "songs": {

			const handleChange = (ev, newVal) => {
				handleTabs(newVal)
			}

			return (
				<div className={styles.gridWrapper}>
					<div className={styles.gridHeader}>
						<h3>{title}</h3>
					</div>
					<div className={styles.tabs}>
						<TabContext value={tabStatus}>
							<Box>
								<TabList onChange={handleChange} aria-label='Song Filters' textColor='inherit' TabIndicatorProps={{style: {backgroundColor: "#34c94b"}}}>
									<Tab label="All" value="all" />
									{genres.map((ele) => {
										return (
											<Tab label={ele.label} value={ele.key} />
										)
									})}
								</TabList>
							</Box>
							<TabPanel value="all">
								{ data.length === 0 ? (
									<Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
										<CircularProgress />
									</Box>
								) : (
									<div className={styles.gridContainer}>
										{ <Carousel data={data} component={(item) => <Card data={item} type={type} key={item.id} />} />}
									</div>
								)}
							</TabPanel>
							{ genres.map((ele) => {
								return (
									<TabPanel value={ele.key}>
										{ <Carousel data={data} component={(item) => <Card data={item} type={type} key={item.id} />} />}
									</TabPanel>
								)
							})}
						</TabContext>
					</div>
				</div>
			)
		}
		default: return <></>
	}
}

export default Grid