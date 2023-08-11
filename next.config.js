/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
    CLOUD_NAME: "dff6atn22",
    CLOUDINARY_API_KEY: "757483915447198",
    CLOUDINARY_API_SECRET: "KusElMhNOOu6NaVCAZsFshLX_CU",
    NEXTAUTH_SECRET:'1002542235',
    MONGO_URL: 'mongodb+srv://dani12ca12:Cielo151.@cluster0.bipzlxh.mongodb.net/soranyshop?retryWrites=true&w=majority',
    STRIPE_PUBLIC_KEY: "pk_test_51NZyHJIi7j384Bc118aCTVBGoTQYjVCZw6uxFG85Ih18KzAiIQ0PGw6Pkfadfon1rtLeohVpG6dWE37ODOFysIPM00srMJUVbu",
    STRIPE_PRIVATE_KEY: "sk_test_51NZyHJIi7j384Bc1DkiDvGxPIe8IldZOUgnLSl8S4NKvE8RlIul4AEcmzW20GDJ5tuVYA2mx5FmbWuFJdA4VlXuQ00rFjfznSD",
    STRIPE_WEBHOOK_SECRET: "whsec_53928a3ec0aba59d0a8b48de1648f84e37a219909350d39bcbcdf0e635feb141",
  },
  images: {
      domains: ["res.cloudinary.com"],
    }
}

module.exports = nextConfig
