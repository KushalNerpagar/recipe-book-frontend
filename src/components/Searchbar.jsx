import React from 'react';

const Searchbar = ({ searchQuery, setSearchQuery, onSearch }) => {
    return (
        <div className='mt-6 w-full p-4 flex justify-center'>
            <div className='flex justify-center items-center w-[80%] h-[130px] space-x-4 bg-white shadow-xl rounded-lg p-4'>
                <input
                    type='text'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder='Search by recipe or author name...'
                    className='border border-orange-400 w-[60%] h-[50px] rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm'
                />
                <button
                    onClick={onSearch}
                    className='cursor-pointer bg-gradient-to-r from-orange-300 to-orange-500 text-white p-3 rounded-lg w-[90px] font-semibold transition duration-300 ease-in-out transform hover:scale-90 hover:bg-orange-400 shadow-md'
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Searchbar;
