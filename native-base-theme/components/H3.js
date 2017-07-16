import variable from './../variables/platform';

export default (variables = variable) => ({
  color: variables.textColor,
  fontSize: variables.fontSizeH3,
  lineHeight: variables.lineHeightH3,
});
