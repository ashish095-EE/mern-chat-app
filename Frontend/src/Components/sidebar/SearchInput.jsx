import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <form action="" className="flex items-center gap-2 p-2">
        <input type="text" placeholder="Search.." className="input input-bordered rounded-full" />
        <button className="btn btn-circle bg-sky-500 text-white">
            
            <FaSearch />
        </button>

    </form>
  )
}

export default SearchInput
