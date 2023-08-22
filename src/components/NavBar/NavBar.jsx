import React from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import styles from "./NavBar.module.css";
import Search from '../SearchBar/Search';
import { useNavigate } from 'react-router-dom';

const NavBar = ({albums}) => {
	const navigate = useNavigate();
  const handleAutoComplete = (slug) => {
    navigate(`/album/${slug}`);
  }
  return (
    <nav className={styles.navbar}>
			<Logo />
			<Search placeholder="Search a album of your choice" albums={albums} handleAutoComplete={handleAutoComplete} />
			<Button text="Give Feedback" />
    </nav>
  )
}

export default NavBar