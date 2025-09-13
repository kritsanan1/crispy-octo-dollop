import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }],
    });

    return NextResponse.json({
      success: true,
      data: completion.choices[0].message,
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message || "Something went wrong",
    });
  }
}
