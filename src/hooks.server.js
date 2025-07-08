/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // Get the response
  const response = await resolve(event);
  
  // Check if this is an error page
  if (event.route.id === '+error') {
    // Add no-cache headers
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('Surrogate-Control', 'no-store');
  }
  
  return response;
}
