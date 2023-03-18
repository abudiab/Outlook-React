import React from 'react'
import Icon from '../navbar/Icon/Icon'
import Button from './Button/Button'
import ToolbarIcon from './ToolbarIcon/ToolbarIcon'

import './toolbar.css'

const Toolbar = () => {
  return (
    <div className='Toolbar'>
        
        <Icon className={"fa-solid fa-bars icon"}/>
        <Button />
        <ToolbarIcon className={"fa-solid fa-trash"} content='Trash'/>
        <ToolbarIcon className={"fa-solid fa-box-archive"} content='Archive'/>
        <ToolbarIcon className={"fa-solid fa-ban"} content='Junk'/>
        <ToolbarIcon className={"fa-solid fa-broom"} content='Sweep'/>
        <ToolbarIcon className={"fa-solid fa-folder-plus"} content='Move to'/>
        <ToolbarIcon className={"fa-solid fa-location-arrow"} content='Categories'/>
        <ToolbarIcon className={"fa-regular fa-clock"} content='Snooze'/>
        <div className='LastIcon'>
         <ToolbarIcon className={"fa-solid fa-rotate-left"} content=' Undo'/>
        </div>
        
    </div>
  )
}

export default Toolbar