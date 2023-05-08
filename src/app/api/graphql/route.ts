import { NextRequest } from "next/server";
import { handler } from "../../../lib/apollo";

export function GET(request: NextRequest) {
  return handler(request);
}

export function POST(request: NextRequest) {
  return handler(request);
}

export function PATCH(request: NextRequest) {
  return handler(request);
}

export function DELETE(request: NextRequest) {
  return handler(request);
}

export function OPTIONS(request: NextRequest) {
  return handler(request);
}
