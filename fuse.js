const { FuseBox, WebIndexPlugin, QuantumPlugin } = require("fuse-box");

const plugins = [
  WebIndexPlugin({
    template: "./src/index.html",
  }),
  process.env.NODE_ENV === "production" &&
    QuantumPlugin({
      uglify: true,
      treeshake: true,
      bakeApiIntoBundle: "app",
    }),
];

const fuse = FuseBox.init({
  target: "browser@es5",
  homeDir: "src",
  output: "dest/$name.js",
  cache: false,
  sourceMaps: true,
  tsConfig: "./tsconfig.json",
  plugins,
});

fuse.dev();
fuse
  .bundle("app")
  .instructions(">index.tsx")
  .watch();
fuse.run();
