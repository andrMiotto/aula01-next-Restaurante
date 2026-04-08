import { NextResponse } from 'next/server';

export function middleware(request) {
  // 1. Buscamos um cookie chamado 'auth_token' (simulando login)
  const token = request.cookies.get('auth_token')?.value;

  // 2. Se o usuário tentar acessar o /admin e NÃO tiver o token
  if (request.nextUrl.pathname.startsWith('/admin') && !token) {
    // Redirecionamos para a página de login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 3. Se estiver tudo ok, ele segue viagem
  return NextResponse.next();
}

// 4. Configuramos quais rotas o middleware deve vigiar
export const config = {
  matcher: '/admin/:path*', // Protege /admin e qualquer sub-rota (editar, novo, etc.)
};