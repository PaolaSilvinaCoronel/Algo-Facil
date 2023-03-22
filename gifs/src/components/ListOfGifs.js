import React, {useEffect,useState} from "react"
import Gif from "./Gif"
import getGifs from "../service/getGifs"

export default function ListOfGifs({params})
const {keryword}= params
const [loading, setLoading]= useState(false)
const [gifs, setGifs]= useState([])
  
useEffect(function (){
    setLoading(true)
 getGifs({ keryword})
 .then(gifs=> setGifs(gifs))
 setLoading(false)
},[keryword])


    return <div>
     {
        gifs.map(({id, title, url}) =>
     <Gif
     id={id} 
     key={id}
     title={title}
     url={url} 
     />
     
   )
  } 
  </div>