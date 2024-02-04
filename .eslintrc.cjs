module.exports = {
  extends: ["universe", "universe/native", "universe/web", "universe/shared/typescript-analysis"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json"
      }
    }
  ],
  plugins: ["react-hooks", "simple-import-sort"],
  rules: {
    "import/order": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
  env: {
    node: true
  }
};
