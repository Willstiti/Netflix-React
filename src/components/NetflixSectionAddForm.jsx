"use client";

import { useState, useEffect } from "react";

const NetflixSectionAddForm = ({ annuaireHooks, setAnnuaireHooks }) => {
    const [categories, setCategories] = useState([]);
    const [temp, setTemp] = useState({ titre: "", url: "", categorie_id: "" });

    const onChangeInput = (event) => {
        setTemp({ ...temp, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("/api/categories");
                const data = await res.json();
                setCategories(data);
            } catch (error) {
                console.error("Erreur lors du chargement des catégories :", error);
            }
        };
        fetchCategories();
    }, []);

    const onSubmitForm = async (event) => {
        event.preventDefault();
        const { titre, url, categorie_id } = temp;

        if (titre && url && categorie_id) {
            setAnnuaireHooks([...annuaireHooks, temp]);
            try {
                const response = await fetch("/api/movies", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(temp),
                });

                if (!response.ok) throw new Error("Échec de l'ajout");

                const result = await response.json();
                console.log("Ajout en DB réussi :", result);
            } catch (error) {
                console.error("Erreur API :", error);
                alert("Erreur lors de l'ajout en base. Donnée ajoutée seulement localement.");
            }
        } else {
            alert("Tous les champs doivent être remplis !");
        }
    };

    return (
        <div className="p-6 bg-gray-900 border border-white rounded-lg">
            <h1 className="text-center text-white text-xl font-bold mb-4 underline">
                Ajouter un Film / Album
            </h1>
            <form onSubmit={onSubmitForm} className="space-y-4">
                <div className="flex flex-col">
                    <label className="text-white mb-1">Titre du Film</label>
                    <input 
                        type="text" 
                        name="titre" 
                        onChange={onChangeInput}
                        className="bg-gray-800 text-white border border-gray-600 rounded-md p-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-white mb-1">Image URL</label>
                    <input 
                        type="text" 
                        name="url" 
                        onChange={onChangeInput} 
                        className="bg-gray-800 text-white border border-gray-600 rounded-md p-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-white mb-1">Catégorie</label>
                    <select
                        name="categorie_id"
                        onChange={onChangeInput}
                        value={temp.categorie_id}
                        className="bg-gray-800 text-white border border-gray-600 rounded-md p-2"
                    >
                        <option value="">-- Choisir une catégorie --</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.nom}
                            </option>
                        ))}
                    </select>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition"
                >
                    Ajouter
                </button>
            </form>
        </div>
    );
};

export default NetflixSectionAddForm;