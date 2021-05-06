import React from 'react'

const CategoryItem = ({ category }) => {
  return (
    <li>{category.description} - Animals({category.animals?.length})</li>
  )
}

export default CategoryItem