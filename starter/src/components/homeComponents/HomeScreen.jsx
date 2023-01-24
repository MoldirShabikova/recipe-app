import React from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import { useState, useEffect } from 'react'

const HomeScreen = () => {  
  const [recipes, setRecipes] = useState([])


  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        setRecipes(res.data)
        console.log(res.data)
      })
}

  useEffect(() => {
   getRecipes()
  },[])


  return (
    <div>
      <AdBanner />
      
    </div>
  )
}

export default HomeScreen