import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import router from "./components/Routes";
import BookMarksProvider from "./providers/BookMarksProvider";
import UserProvider from "./providers/UserProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookMarksProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </BookMarksProvider>
  </StrictMode>
);
