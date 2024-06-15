export default {
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // this enables new JSX Transform
      },
    ],
  ],
  targets: {
    esmodules: true,
  },
};
