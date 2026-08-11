import { NextResponse, type NextRequest } from "next/server";

const languageByPrefix: Record<string, string> = {
  en: "en",
  my: "my",
  hi: "hi",
  zh: "zh-CN",
};

export function proxy(request: NextRequest) {
  const firstSegment = request.nextUrl.pathname.split("/").filter(Boolean)[0] ?? "";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-tangton-language", languageByPrefix[firstSegment] ?? "th");
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
