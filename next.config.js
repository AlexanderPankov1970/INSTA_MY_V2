/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "www.nftgators.com",
      "images.pexels.com",
      "www.pinterest.com",
      "i.pravatar.cc",
      "unsplash.com",
      "www.pexels.com",
      "stock.adobe.com",
      "images.unsplash.com",
      "plus.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
