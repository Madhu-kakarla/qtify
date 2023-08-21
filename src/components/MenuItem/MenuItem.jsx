import React from 'react';
import styles from './MenuItem.module.css';

const MenuItem = ({item, onSelect, ...props}) => {
	const handleClick = () => {
		onSelect(item)
	}
  return (
    <div className={styles.wrapper} {...props} onClick={handleClick}>
      <div className={styles.menuItemWrapper}>
				<div className={styles.menuLeft}>
					<div className={styles.imgConatiner}>
					<img src={item.image} alt={item.title} height="75" />
					</div>
					<div className={styles.menuDetails}>
						<h4>{item.title}</h4>
						<p>{item.songs[0].artists.join(',')}</p>
					</div>
				</div>
				<div className={styles.menuRight}>
					<h4>{`${item.follows} Follows`}</h4>
				</div>
			</div>
    </div>
  )
}

export default MenuItem