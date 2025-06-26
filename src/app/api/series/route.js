import { connexion } from "@/tools/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const [result] = await connexion.query("SELECT * FROM series;");
    return NextResponse.json(result);
  } catch (err) {
    console.error("Erreur dans la route GET /api/series:", err);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json();

    const [result] = await connexion.execute(
      "INSERT INTO series (titre, url, idCategory) VALUES (?, ?, ?)",
      [body.titre, body.url, body.categorie_id]
    );

    return Response.json(
      {
        message: "Série ajoutée avec succès",
        serie: body
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur dans la route POST /api/series:", error);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
