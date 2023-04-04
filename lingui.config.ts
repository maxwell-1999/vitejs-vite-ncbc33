export default {
  compileNamespace: 'ts',
  locales: ['en', 'ru'],
  sourceLocale: 'en',
  catalogs: [
    {
      path: 'src/locales/{locale}/messages',
      include: ['<rootDir>/src/**/*.tsx'],
      exclude: ['**/node_modules/**'],
    },
  ],
  format: 'po',
};
