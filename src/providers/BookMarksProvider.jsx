/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const BookmarkContext = createContext(null);

const BookMarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  return (
    <BookmarkContext.Provider value={{ bookmarks, setBookmarks }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookMarksProvider;
