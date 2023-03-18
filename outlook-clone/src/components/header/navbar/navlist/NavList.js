import React from 'react'
import ListItem from './ListItem/ListItem'
import './navlist.css'

const NavList = () => {
  return (
    <ul>

      <ListItem className={"fa-brands fa-instagram"}/>
      <ListItem className={"fa-solid fa-calendar-check"}/>
      <ListItem className={"fa-solid fa-gear"}/>
      <ListItem className={"fa-solid fa-question"} />
      <ListItem className={"fa-regular fa-comment"}/>
      <ListItem className={"fa-solid fa-user"}/>

    </ul>
  )
}

export default NavList