import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
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
