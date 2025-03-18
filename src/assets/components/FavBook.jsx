import { useState, useContext } from "react";
import { BookContext } from "./BookContextProvider";

function BookList() {


    const { books, toggleFavorite } = useContext(BookContext);
    const favBooks = books.filter((book) => book.isFavorite)



    return (<div className="bg-[#FFEAE9]  flex justify-center items-center w-full max-w-[90vw] md:max-w-2xl m-auto rounded-xl py-2 md:py-6 px-2">
        <div className="">
            {favBooks.length > 0 ? (
                <ul className="space-y-3">
                    {favBooks.map((book) => (
                        <li key={book.id} className="flex justify-between items-center my-3 gap-8 text-[#293D3C] text-sm md:text-xl">
                            <p>"<strong>{book.title}</strong>" by {book.author}</p>
                            <button
                                className="`bg-[#293D3C] text-white text-[3vh] rounded-4xl px-1.5 py-1.5 cursor-pointer"
                                onClick={() => toggleFavorite(book.id)}
                            >
                                ❌
                            </button>
                        </li>
                    ))}
                </ul>
            ) : 
            (
                <p className="text-center text-gray-600">No favourite books added yet.</p>
            )}
        </div>

    </div>)
}

export default BookList;