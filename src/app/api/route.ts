import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ a: 1, b: 2, c: 3 });
};
