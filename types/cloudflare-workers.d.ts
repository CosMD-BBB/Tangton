// The hosted Sites runtime provides this virtual module. Vercel never executes
// the unused D1 adapter, but Next.js still type-checks every project source file.
declare module "cloudflare:workers" {
  export const env: {
    // The concrete D1 type is supplied by the Cloudflare runtime at build time.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    DB?: any;
  };
}
