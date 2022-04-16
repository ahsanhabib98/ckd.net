import React from 'react'

function SectionHeader({title, subText}) {
  return (
    <div className='section-header text-center mb-3'>
      <h1 className='mb-2'>{ title? title : "Title goes here" }</h1>
      {/* <p className=''>{ subText? subText : "Sub-Text goes here" }</p> */}
    </div>
  )
}

export default SectionHeader