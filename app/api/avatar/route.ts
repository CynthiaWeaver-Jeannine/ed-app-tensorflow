import { getJWTPayload } from "@/app/util/auth";
import { sql } from "@/db";
//
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const jwtPayload = await getJWTPayload();
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename")!;

//   const blob = await put(filename, request.body!, {
//     access: "public",
//   });

  await sql("update users set avatar = $1 where id = $2", [
    
    jwtPayload.sub,
  ]);

  return NextResponse.redirect("/me");
}