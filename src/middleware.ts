import { NextRequest } from "next/server";
import { handler } from "./lib/apollo";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/api/graphql") {
    return handler(request);
  }
}
