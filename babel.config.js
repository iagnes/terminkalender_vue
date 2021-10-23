// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset'
//   ]
// }

module.export = {
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: "core-js@3",
      },
    ],
  ],
};