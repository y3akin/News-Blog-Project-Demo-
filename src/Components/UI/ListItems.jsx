import React from 'react'

const ListItems = ({list, className, onClick}) => {
  return (
    <li className={`font-rob font-normal text-[20px] text-textcol hover:font-medium cursor-pointer ${className}`} onClick={onClick}>{list}</li>
  )
}

export default ListItems
