import { getMovies } from "@/controller/movies";
import HomePage from "@/pages/HomePage";

export default function Home() {
  getMovies()
  return (
    <div>
      <HomePage/>
    </div>
  );
}