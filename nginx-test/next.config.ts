/* 公開時のサブディレクトリ */
const SUB_DIRECTORY = process.env.BASE_PATH;

/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV == "production";

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  basePath: isProd ? SUB_DIRECTORY : "",
  assetPrefix: isProd ? SUB_DIRECTORY : "",
  publicRuntimeConfig: {
    basePath: isProd ? SUB_DIRECTORY : "",
  },
  images: {
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig