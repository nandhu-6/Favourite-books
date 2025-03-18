import { createContext, useState } from "react";

// Create the context
const BookContext = createContext();

function BookContextProvider({ children }) {
    const [books, setBooks] = useState([
        { id: 1, title: "The Alchemist", author: "Paulo Coelho", isFavorite: false },
        { id: 2, title: "The Kite Runner", author: "Khaled Hosseini", isFavorite: false },
        { id: 3, title: "The Monk Who Sold His Ferrari", author: "Robin Sharma", isFavorite: false },
        { id: 4, title: "The Fault in Our Stars", author: "John Green", isFavorite: false },
        { id: 5, title: "Atomic Habits", author: "James Clear", isFavorite: false },
        { id: 6, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", isFavorite: false },
        { id: 7, title: "The Psychology of Money", author: "Morgan Housel", isFavorite: false },
        { id: 8, title: "Can't Hurt Me", author: "David Goggins", isFavorite: false },
        { id: 9, title: "Sapiens", author: "Yuval Noah Harari", isFavorite: false },
        { id: 10, title: "The 5 AM Club", author: "Robin Sharma", isFavorite: false },

    ]);

    // Function to toggle favorite status
    //bookId is passed from clicking add book button
    const toggleFavorite = (bookId) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id === bookId ? { ...book, isFavorite: !book.isFavorite } : book
            )
        );
    };

    return (
        <BookContext.Provider value={{ books, toggleFavorite }}>
            {children}
        </BookContext.Provider>
    );
}

export default BookContextProvider
export { BookContext }
