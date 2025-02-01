import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)', 
  '/sign-up(.*)', 
  '/',  
  '/products',
  '/products/(.*)',
  '/carts',
  '/about-us',
  '/category/(.*)',
  '/api/(.*)'
]);

export default clerkMiddleware(async (auth, request) => {
  const url = new URL(request.url);

  if (!isPublicRoute(request)) {
    await auth.protect();
  }

  // Custom logic to ensure `billing-summary` is accessed only via `cart` page
  if (url.pathname === '/billing-summary') {
    const referrer = request.headers.get('referer');
    if (!referrer || !referrer.includes('/carts')) {
      // Redirect to cart page if not coming from there
      return Response.redirect(new URL('/carts', request.url));
    }
  }
  // Custom logic to ensure `ordersuccess` is accessed only via `billing-summary` page
  if (url.pathname === '/success') {
    const referrer = request.headers.get('referer');
  
    if (!referrer) {
      // Redirect to carts page if no referrer is available
      return Response.redirect(new URL('/carts', request.url));
    }
  
    // Check if the referrer is either from billing-summary or stripe.com
    if (!referrer.includes('/billing-summary') && !referrer.includes('stripe.com')) {
      return Response.redirect(new URL('/carts', request.url));
    }
  }
  
  if (url.pathname === '/cancel' ) {
    const referrer = request.headers.get('referer');
    if (!referrer || !referrer.includes('stripe.com')) {
      // Redirect to billing-summary  page if not coming from there
      return Response.redirect(new URL('/', request.url));
    }
  }

});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
