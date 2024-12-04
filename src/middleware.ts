import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJWT } from "./lib/session";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("auth")?.value;

  if (!token) {
    if (req.nextUrl.pathname !== "/auth") {
      return NextResponse.redirect(new URL("/auth", req.url));
    }
    return NextResponse.next();
  }

  const isValid = await verifyJWT(token);
  if (!isValid) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  if (req.nextUrl.pathname === "/auth") {
    return NextResponse.redirect(new URL("/auth/nextProtected", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/nextProtected", "/auth"],
};
