"use client";

import { useState } from "react";

const CategorieAddForm = () => {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");


  const onSubmitCategory = async (e) => {
    e.preventDefault();
    if (!newCategoryName) {
      alert("Le nom de la catégorie ne peut pas être vide !");
      return;
    }

    try {
      const response = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom: newCategoryName }),
      });

      if (!response.ok) throw new Error("Échec de l'ajout");

      const result = await response.json();
      setCategories([...categories, result.category]);
      setNewCategoryName("");
      alert("Catégorie ajoutée !");
    } catch (error) {
      console.error("Erreur POST catégorie :", error);
      alert("Erreur lors de l'ajout de la catégorie.");
    }
  };

  return (
    <div className="p-6 bg-gray-900 border border-white rounded-lg">
      <hr className="my-6 border-gray-700" />
      <div className="p-4 bg-gray-800 border border-gray-600 rounded-lg">
        <h2 className="text-white text-lg font-semibold mb-2">Ajouter une Catégorie</h2>
        <form onSubmit={onSubmitCategory} className="flex space-x-2">
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="Nom de la catégorie"
            className="flex-1 bg-gray-700 text-white p-2 rounded"
          />
          <button
            type="submit"
            className="home-button text-white px-4 py-2 rounded"
          >
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
};

export default CategorieAddForm;