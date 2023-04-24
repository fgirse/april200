
import Link from 'next/link';

const Button = ({name, path}) => {
  return (
    
    
        <button type='button' className='text-[1.33rem] bg-[{color}] text-gray-50  lg-justify-between relative mx-auto mb-5 mt-6 flex w-52 flex-row items-center justify-center gap-x-3 rounded-lg border border-white px-4 py-2 font-sans font-medium transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110 hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:text-3xl lg:mb-20 lg:flex lg:w-80 lg:flex-row lg:items-center lg:text-2xl xl:mt-2'>{name}</button>
      
    
  )
}

export default Button;

