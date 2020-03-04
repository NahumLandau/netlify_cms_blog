const {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD} = require("next/constants");

module.exports = phase => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";

  return {
    webpack: cfg => {
      cfg.module.rules.push({
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        options: {mode: ["react-component"]}
      });
      return cfg;
    },
    env: {
      BASE_URL: (() => {
        if (isDev) return "http://localhost:1337";
        return "http://localhost:1337";
      })()
    }
  };
};
