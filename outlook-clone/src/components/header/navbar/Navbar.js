import React from 'react'
import Icon from './Icon/Icon'
import Search from './search/Search'
import NavList from './navlist/NavList'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Icon className={'fa-solid fa-list-ul Icon'} />
        <Search />
        <NavList />
    </div>
  )
}

export default Navbar