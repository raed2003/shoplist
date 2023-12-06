import React from 'react'
import ShopCart from './ShopCart'

function Shoplist({props}) {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
   {props.map(Element=><ShopCart product={Element}/>)}
    </div>
  )
}

export default Shoplist