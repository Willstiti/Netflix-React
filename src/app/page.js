import { getMovies } from "@/controller/movies";
import MovieSection from "@/components/MovieSection";

export default function Home() {
  getMovies()
  return (
    <div>
      <MovieSection/>
    </div>
  );
}
