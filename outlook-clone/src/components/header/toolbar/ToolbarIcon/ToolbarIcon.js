import React from 'react'
import './toolbaricon.css'

const ToolbarIcon = ({className , content}) => {
  return (

    <button className="btn"><i className={className}></i> {content}</button>
  )
}

export default ToolbarIcon