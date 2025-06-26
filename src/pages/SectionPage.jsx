"use client";

import Header from "@/components/Layout/Header";
import MediaSection from "@/components/MediaSection";
import NetflixSectionAddForm from "@/components/NetflixSectionAddForm";
import { useEffect, useState } from "react";

const SectionPage = ({ type }) => {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch(`/api/${type}`);
        if (!response.ok) throw new Error("Erreur lors du chargement des données");
        const data = await response.json();
        setMediaList(data);
      } catch (error) {
        console.error(error);
        setMediaList([]);
      }
    };
    fetchMedia();
  }, [type]);

  return (
    <div className="content">
      <Header />
      <main className="categories-content">
        <NetflixSectionAddForm annuaireHooks={mediaList} setAnnuaireHooks={setMediaList} type={type} />
        <MediaSection title={type === "movies" ? "Films tendance" : "Séries tendance"} data={mediaList} />
      </main>
    </div>
  );
};

export default SectionPage;