import { ListItem } from '@chakra-ui/layout'
import React from 'react'

const CategoryItem = ({ category }) => {
  return (
    <ListItem>{category.description} - Animals({category.animals?.length})</ListItem>
  )
}

export default CategoryItem