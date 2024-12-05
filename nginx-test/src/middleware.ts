// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const secret = process.env.SECRET_TOKEN;
  const forwardedSecret = request.headers.get('x-forwarded-secret');

  /* 本番環境と開発環境の分岐用のフラグ */
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd && forwardedSecret !== secret) {
    // 本番環境の場合forwardedSecretを検証し、一致しない場合は403
    return new NextResponse('Forbidden', { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
