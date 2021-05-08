import { OrderedList } from '@chakra-ui/layout'
import React from 'react'
import CategoryItem from './CategoryItem'

const Categories = ({ categories }) => {
  return (
    <OrderedList>
      {categories.map(category => (<CategoryItem key={category.id} category={category} />))}
    </OrderedList>
  )
}

export default Categories