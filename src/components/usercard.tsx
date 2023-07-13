import { Result } from '@/types'
import Image from 'next/image'
import React from 'react'


const UserCard = (props: Result) => {
    return (
        <div
            key={props.id.value}
            className='bg-black/[0.05] hover:bg-black/[0.09] hover:shadow-2xl hover:cursor-pointer p-4 rounded-lg shadow-xl  w-full lg:w-[620px]'>
            <div className='flex flex-col  lg:flex-row justify-between items-start md:items-center'>
                <div className='flex gap-2'>

                    <Image
                        src={props.picture.medium}

                        priority
                        className=' rounded-full border-teal-400 border-2'
                        width={50} height={50} alt={`image for ${props.name.first}`} />
                    <h3 className='text-[2rem] text-neutral-700 mr-3'>
                        <>
                            {props.name.first} {props.name.last}
                        </>
                    </h3>
                </div>

                <p className='mt-2 md:mt-0 bg-white w-fit h-fit px-4  rounded-full text-green-500'>&#x2022; Available</p>
            </div>
            <div className='mt-4  border-red-300'>


                <div className='flex gap-8  text-neutral-500'>

                    <p className=''><b>

                        Phone:&ensp;
                    </b>
                        {props.cell}
                    </p>
                    <p> <b>
                        Age: &ensp;
                    </b>
                        {props.dob.age}
                    </p>
                </div>
                <p className='mt-1 text-neutral-500'><b>Location:</b>  {props.location.city},  {props.location.country}</p>
                <p className='mt-1 text-neutral-500'><b>Gender:</b>   {props.gender}</p>
            </div>
            <div className='bg-teal-400 p-2 px-4 rounded-lg w-fit mt-4 hover:cursor-pointer hover:bg-teal-300 text-white '>Hire User</div>
        </div>
    )
}

export default UserCard