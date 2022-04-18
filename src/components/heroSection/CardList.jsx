import React from 'react'
import CardItem from './CardItem'

function CardList({ data }) {
  // console.log(data)
  
  return (
     <>
      {data?.map(item =>
        <CardItem
          key={item.id}
          label={item.label}
          title={item.title}
          link={item.link}
          img_url={item.img_url}
        />)}
    </>
  )
}

export default CardList
