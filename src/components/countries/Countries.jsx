import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Countries() {
  const [meals, setMeals] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`);
        setMeals(response.data.meals);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="flex flex-wrap justify-center gap-5 p-14">
      {meals.length !== 0 ? (
        meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              className="h-48 w-full object-cover object-center"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                {meal.strMeal}
              </h2>
            </div>
          </div>
        ))
      ) : (
        <div>Food not available</div>
      )}
    </div>
  );
}
