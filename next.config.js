module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  async redirects() {
    return [
      {
        source: "/encode",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
