import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Public routes mein home page '/' aur aur bhi routes ko add kar sakte hain
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)', 
  '/sign-up(.*)', 
  '/',  
  '/products',
  '/products/(.*)',
  '/carts',
  '/about-us',
  '#ceramic',
  '/cutlery',
  '/tableware',
  '/chairs',
  '/Tables',

])

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
