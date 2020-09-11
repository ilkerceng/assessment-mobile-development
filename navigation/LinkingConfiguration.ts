import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Setur: {
            screens: {
              SeturScreen: 'one',
            },
          },
          Form: {
            screens: {
              FormScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
