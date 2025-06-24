import { connexion } from "@/tools/database"
import { NextResponse } from "next/server"

export const GET = async () => {
    try{
        const[result, fields] = await connexion.query("SELECT * FROM movies;")
        return NextResponse.json(result)
    }
    catch(err){
        return err
    }
}

export const POST = async (req) => {
  try {
    const body = await req.json();
    
    const [result] = await connexion.execute(
      "INSERT INTO movies (titre, url, idCategory) VALUES (?, ?, ?)",
      [body.titre, body.url, body.categorie_id]
    );
    
    return Response.json({
      message: "Film ajouté avec succès",
      movie: body
    }, { status: 201 });

  } catch (error) {
    console.error("Erreur dans la route POST /api/movies:", error);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}