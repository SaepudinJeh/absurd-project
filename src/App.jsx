import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingText from "./loaders/LoadingText";

const Intro = lazy(() => import("./pages/Intro"));
const BookStory = lazy(() => import("./pages/Book"));
const Flower = lazy(() => import("./pages/Flower"));
const FlowerSecond = lazy(() => import("./pages/FlowerSecond"));
const Sertificate = lazy(() => import("./pages/Sertificate"));

function App() {
  return (
    <div className="scroll-smooth">
      <BrowserRouter>
        <Suspense fallback={<LoadingText />}>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/my-book" element={<BookStory />} />
            <Route path="/sertificate" element={<Sertificate />} />
            <Route path="/your-flowers" element={<Flower />} />
            <Route path="/your-flowers-part-2" element={<FlowerSecond />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
