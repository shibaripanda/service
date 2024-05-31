import React from "react"
import { MyInput } from "./UI/input/MyInput"

export const PostFilter = ({filter, setFilter, dropList}) => {

    return (

<div>
      <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query : e.target.value})}
          placeholder="Поиск..."
          options={dropList}
        />
      </div>
    )
}
