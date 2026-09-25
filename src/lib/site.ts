// Set NEXT_PUBLIC_SITE_URL once you have a custom domain. On Vercel, the
// production URL is picked up automatically until then.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
