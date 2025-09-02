import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security headers (backup for static routes)
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // Block known malicious user agents
  const userAgent = request.headers.get('user-agent') || '';
  const maliciousPatterns = [
    /bot.*scraper/i,
    /malicious/i,
    /hack/i,
    /exploit/i
  ];

  if (maliciousPatterns.some(pattern => pattern.test(userAgent))) {
    return new NextResponse('Access Denied', { status: 403 });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};