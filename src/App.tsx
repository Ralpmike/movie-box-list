import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorite />} />
      {/* <div>
        <Home />
        <MovieCard
          movie={{
            src: "",
            alt: "",
            title: "Noah's Ark",
            description: "Bible story of Noah's Ark",
          }}
        />
      </div> */}
    </Routes>
  );
}

export default App;
