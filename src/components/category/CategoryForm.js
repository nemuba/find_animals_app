import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCategoryFetch } from '../../store/fetch_actions/category'

const CategoryForm = () => {
  const [category, setCategory] = useState({ description: "" })
  const categoryRef = useRef()
  const dispatch = useDispatch()

  const changeCategory = (e) => {
    setCategory({ description: e.target.value })
  }

  const handleSubmit = () => {
    dispatch(addCategoryFetch(category))
    categoryRef.current.value = ""
  }

  return (
    <>
      <h1>Add category</h1>
      <input
        ref={categoryRef}
        type="text"
        name="description"
        id="description"
        placeholder="Enter Category"
        onChange={e => changeCategory(e)}
      />
      <br />
      <br />
      <button
        onClick={handleSubmit}
      >
        Add category
      </button>
    </>
  )
}

export default CategoryForm