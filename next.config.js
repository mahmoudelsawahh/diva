const advancedHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.divanice.com',
        port: '3011',

      },
    ],
      domains :  ['api.divanice.com']
  },
  transpilePackages: ["@mui/system", "@mui/material", "@mui/icons-material"],
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}'
    },
    '@material-ui/core/': {
      transform: '@material-ui/core/{{member}}'
    },
    '@material-ui/lab/': {
      transform: '@material-ui/lab/{{member}}'
    },
    '@material-ui/icons/?(((\\w*)?/?)*)': {
      transform: '@material-ui/icons/{{ matches.[1] }}/{{member}}'
    }
  },
}

module.exports = nextConfig

