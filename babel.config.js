module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          extensions: [".ts", ".tsx"],
          root: ["./app"],
          alias: {
            _components: "./app/components/index.ts",
            _routes: "./app/routes/index.ts",
            _screens: "./app/screens/index.ts",
          },
        },
      ],
    ],
  };
};
