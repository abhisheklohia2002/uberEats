import React from 'react'

const ApiData =async () => {
  try {
    const data_api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const res = await data_api.json();
    return res
  } catch (error) {
    
  }
}

export default ApiData
