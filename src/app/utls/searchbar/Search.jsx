"use client"
import { useRouter } from 'next/navigation';
const Search = ({ text }) => {
    let router = useRouter()
    const searchText = (e) => {
        e.preventDefault();
        let text = e.target.text.value;
        router.push(`/search?text=${text}`)
    }
    return (
        <form onSubmit={searchText} action='/search' title='search' className='w-full h-16 flex items-center justify-center gap-2 bg-white px-2 scale-90 sm:scale-100'>
            <input type="text" name="text" className='bg-white p-2 rounded w-full md:w-96 lg:w-2/6 outline-2 outline outline-black  focus:border-transparent focus:outline-indigo-400 ' required defaultValue={text} placeholder='Search for apps and games' />
            <button type='submit' className='bg-black hover:bg-indigo-400 px-2 sm:px-5 py-2 sm:py-2 text-white font-semibold rounded  '>Search</button>
        </form>
    );
};

export default Search;