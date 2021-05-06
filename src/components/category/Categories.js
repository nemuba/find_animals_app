import React from 'react'
import CategoryItem from './CategoryItem'

const Categories = ({ categories }) => {
  return (
    <ul>
      {categories.map(category => (<CategoryItem key={category.id} category={category} />))}
    </ul>
  )
}

export default Categories