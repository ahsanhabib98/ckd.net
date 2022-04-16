import React from 'react'

function CardItem({label, title, link, img_url, b_radious}) {
  return (
    <a className={`card-item p-4 d-flex align-items-end ${b_radious ? b_radious : ""}`} href={link} target="_blank" rel="noopener noreferrer" style={{background: `url(${img_url})`}}>
      <div className="text-container">
        <label className="text-white">{label}</label>
        <h4 className="text-white">{title}</h4>
      </div>
    </a>
  )
}

export default CardItem
