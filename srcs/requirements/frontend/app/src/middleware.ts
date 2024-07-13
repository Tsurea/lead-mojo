import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(req: NextRequest) {
	let response = NextResponse.next()
	const sessionCookie = req.cookies.get('access_token');
	if (!sessionCookie && (req.url.includes("/profile") || req.url.includes("/admin") || req.url.includes('/result') || req.url.includes('/pricing'))) {
		return NextResponse.redirect(new URL('/auth/login', req.url))
	}
	return response
}

export const config = {
    matcher: [
		"/profile/:path*",
		"/admin/:path*",
		"/auth/:path*",
		"/result/:path*",
		"/pricing/:path*"
	]
}
