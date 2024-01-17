import React from 'react'
import { MenuItems } from './menu-items/MenuItems'
import { Button } from '@mui/material'
import { Link, useNavigate} from 'react-router-dom';
import { ItemsListProps } from './ItemsListProps';

const ItemsList: React.FC<ItemsListProps> = ({ items }) => {
  return (
    <>
    {items.items.map((item,index)=>{
        return (
            <Button key={index} color="inherit" component={Link} to={`/${item.url}`} className="button">
            {item.title}
            </Button>
        )
    })}
    </>
  )
}

export default ItemsList
