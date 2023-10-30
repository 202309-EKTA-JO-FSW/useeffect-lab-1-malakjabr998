import { useEffect, useState } from 'react'
import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [dogs, setDogs] = useState([])
   useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random/3")
    .then((response)=>response.json())
    .then((data)=>{
      setDogs(data.message)
    })
   }

   )
   return (
    <div className="card">
      
        <DogList dogs={DogList.breeds}/> 
      
      {/* <Form /> Uncomment <Form /> if you are going after the bonus */}
      {/* This page should receive the images array */}
      <DogList />
    </div>
  );
}

