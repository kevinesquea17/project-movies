import React, { useEffect } from 'react'

const categories = ['Action', 'Comedy'];

const Filter = ({categoryActive, setCategoryActive, setFiltered, filtered}) => {

    useEffect(() => {
        if(categoryActive === 'All'){
            setFiltered(filtered);
            return;
        }

        const filter = filtered.filter(movie => movie.category == categoryActive);
        setFiltered(filter)
    }, [categoryActive])

    return (
        <div className='flex items-center space-x-4 mb-8'>
            <p onClick={() => setCategoryActive('All')} className={`${categoryActive == 'All' ? 'font-bold bg-primary text-white' : 'border border-primary text-primary font-normal'} p-2 px-4 rounded text-sm`}>All</p>
            {categories.map((category, index) => (
                <p onClick={() => setCategoryActive(category)} key={index} className={`${categoryActive == category ? 'font-bold bg-primary text-white' : 'border border-primary text-primary font-normal'} p-2 px-4 rounded text-sm`}>{category}</p>
            ))}
        </div>
    )
}

export default Filter