import { IoIosSearch } from "react-icons/io"
import '../../atoms/button-style.scss'
import { useState } from "react";

interface SearchBarProps {
  action: (description: string) => void;
}

export function SearchBar({ action }: SearchBarProps) {
  const [description, setDescription] = useState("")

  const hadleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    action(description)
  }
  return (
    <form className="bg-white px-2 flex flex-row gap-2 rounded-[5px]" onSubmit={(e) => hadleSubmit(e)}>
      <input type="text" name="" id="" 
        placeholder="Limite de produção para..." 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}/>
      <button className="btn" data-type="submit">
        <IoIosSearch />
      </button>
    </form>
  )
}