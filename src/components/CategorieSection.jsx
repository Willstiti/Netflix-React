"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CategorieList = () => {
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error("Erreur de récupération des catégories :", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Supprimer cette catégorie ?")) return;

    try {
      const res = await fetch(`/api/categories/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Erreur suppression");

      setCategories(categories.filter((cat) => cat.id !== id));
    } catch (err) {
      console.error("Erreur suppression :", err);
    }
  };

  const startEdit = (id, currentName) => {
    setEditId(id);
    setEditName(currentName);
  };

  const handleUpdate = async (id) => {

    try {
      const res = await fetch(`/api/categories/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom: editName }),
      });

      if (!res.ok) throw new Error("Erreur mise à jour");

      setCategories(
        categories.map((cat) =>
          cat.id === id ? { ...cat, nom: editName } : cat
        )
      );
      setEditId(null);
      setEditName("");
    } catch (err) {
      console.error("Erreur update :", err);
    }
  };

  return (
    <div className="p-6 pt-6 bg-gray-900 border border-white rounded-lg">
      <h1 className="text-white text-xl font-bold mb-4">
        Liste des Catégories
      </h1>
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="flex items-center justify-between bg-gray-800 text-white p-3 my-2 rounded"
        >
          {editId === cat.id ? (
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="bg-gray-700 text-white p-2 rounded flex-1 mr-4"
            />
          ) : (
            <Link href={`/categories/${cat.id}`} className="flex-1 hover:underline text-white">
              {cat.nom}
            </Link>
          )}

          {editId === cat.id ? (
            <button
              onClick={() => handleUpdate(cat.id)}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mr-2"
            >
              Sauvegarder
            </button>
          ) : (
            <button
              onClick={() => startEdit(cat.id, cat.nom)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
            >
              Éditer
            </button>
          )}

          <button
            onClick={() => handleDelete(cat.id)}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
          >
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategorieList;