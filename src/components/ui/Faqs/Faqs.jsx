import React from 'react'
import { FaAngleDown} from "react-icons/fa";
const Faqs = ({className, que,ans}) => {
  return (
    <div className={className}>
      <details className=' shadow-2xl rounded-2xl  '>
        <summary className=' cursor-pointer list-none flex justify-between text-3xl m-4'>{que}<FaAngleDown className='mx-2 mt-3 text-xl opacity-70' /></summary><hr></hr>
        <li className='list-none text-2xl m-4'>{ans}</li>
      </details>
  
    </div>
  )
}

export default Faqs
