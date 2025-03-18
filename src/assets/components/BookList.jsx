import { useState, useContext } from "react";
import { BookContext } from "./BookContextProvider";

function BookList() {
    const { books, toggleFavorite } = useContext(BookContext);
    return (<div className="bg-[#FFEAE9]  flex justify-center items-center w-full max-w-[90vw] md:max-w-2xl m-auto rounded-xl py-2 md:py-6 px-2">
        <div className="">
            {books.map((book) => (
                <li className="flex justify-between items-center my-3 gap-8 text-[#293D3C] text-sm md:text-xl" key={book.id}>
                    <p>"<strong>{book.title}</strong>" by {book.author}</p>
                    <button className={`bg-[#293D3C] text-white text-[3vh] rounded-4xl px-1.5 py-1.5 ${book.isFavorite ? "cursor-not-allowed" : "cursor-pointer"}`} onClick={() => toggleFavorite(book.id)} disabled={book.isFavorite}> {book.isFavorite ? "❤️" : "🤍"} </button>
                </li>
            ))}

        </div>

    </div>)
}

export default BookList;