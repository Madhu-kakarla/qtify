import React from 'react'
import LogoImage from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' title='Home'><img src={LogoImage} alt='Logo' width={67} /></Link>
  )
}

export default Logo