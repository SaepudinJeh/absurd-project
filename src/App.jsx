import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingText from "./loaders/LoadingText";
import Sertificate from "./pages/Sertificate";

const Intro = lazy(() => import("./pages/Intro"));
const BookStory = lazy(() => import("./pages/Book"));

function App() {
  return (
    <div className="scroll-smooth">
      <BrowserRouter>
        <Suspense fallback={<LoadingText />}>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/my-book" element={<BookStory />} />
            <Route path="/sertificate" element={<Sertificate />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
