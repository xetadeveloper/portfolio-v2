import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = { images: { domains: ['images.ctfassets.net'] } };

export default withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(nextConfig);
