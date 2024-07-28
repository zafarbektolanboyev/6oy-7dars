import React, {useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card'

function Home() {
  const [products, setProduct] = useState([])

  async function getDataApi(url){
    try{
      const resp = await fetch(url)
      let data = []
      if(resp.status === 200){
        data = await resp.json()
      }
      return data
    }catch(error){
      console.log(error)
    }
  }
  useEffect(function(){
    getDataApi("https://cars-pagination.onrender.com/products")
      .then(data => {
        setProduct(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', gap:'30px', justifyContent:'center', marginTop:'50px'}}>
      {
        products.length > 0 && products.map(function(product, index){
          return <Card key = {index} data = {product}></Card>
        })
      }
    </div>
  )
}

export default Home
