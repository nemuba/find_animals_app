import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Categories from '../../components/category/Categories'
import CategoryForm from '../../components/category/CategoryForm'
import { listAllCategoryFetch } from '../../store/fetch_actions/category'

const ListAllCategory = () => {
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listAllCategoryFetch())
  }, [dispatch])

  return (
    <div>
      <Link to="/">Home</Link>
      <CategoryForm />

      <h1>List all categories</h1>
      <ul>
        {
          categories.length ? (<Categories categories={categories} />) : (<li>Category not found.</li>)
        }
      </ul>
    </div>
  )
}

export default ListAllCategory