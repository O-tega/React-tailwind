import React from 'react';

const ImageList =({imageList})=>{
    console.log(imageList)

    const image = imageList.map(({alt_description, description, id, urls})=>{
        return( 
            <div className='flex justify-center hover:shadow-md shadow-blue-900 my-10 md:my-0'>
                <div className='w-full'>
                    <img src={urls.regular} alt={description} key={id} className='w-full h-52 rounded object-cover hover:object-scale-down' />
                    <h1 className='text-xs text-center py-3 text-blue-700'>{alt_description}</h1>
                </div>
            </div>
            
            )
    })
    return (
        <div className='flex justify-center'>
        <div className='w-4/5 md:grid grid-cols-3 gap-x-3 gap-y-4 '>
            {image}
        </div>
        </div>
    )
}


export default ImageList;
