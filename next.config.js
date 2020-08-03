module.exports = {
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
