"use client"

import MovieLittleSection from "./MovieLittleSection"
import NetflixSectionAddForm from "./NetflixSectionAddForm";
import { useState, useEffect } from "react";

const MovieSection = () => {
    const [annuaireHooks, setAnnuaireHooks] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch("/api/movies");
                if (!response.ok) throw new Error("Erreur lors du chargement des films");
                const data = await response.json();
                setAnnuaireHooks(data);
            } catch (error) {
                console.error(error);
                setAnnuaireHooks([]);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <header>
                <NetflixSectionAddForm annuaireHooks={annuaireHooks} setAnnuaireHooks={setAnnuaireHooks}/>
            </header>
            <div>
                <MovieLittleSection title="Tendance" data = {annuaireHooks}/>
            </div>
        </div>
    );
}

export default MovieSection