import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Carousel() {

    const [randomMeal, setRandomMeal] = useState({})

    useEffect(() => {
        const fetchRandomFood = async () => {
            try {
                
                const response =  await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
                setRandomMeal(response.data.meals)
            } catch (error) {
                toast.error(error)
            }
        }

        fetchRandomFood()

    }, [])
  return (
    <>



<div class="grid gap-4 p-6">
    <div>
        <img class="h-auto max-w-full rounded-lg" src={randomMeal && randomMeal[0]?.strMealThumb} alt="" />
    </div>
</div>
    </>
  )
}
