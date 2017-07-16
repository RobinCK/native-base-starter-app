import variable from './../variables/platform';

export default (variables = variable) => ({
  '.padder': {
    padding: variables.contentPadding,
  },
});
