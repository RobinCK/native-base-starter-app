import variable from './../variables/platform';

export default (variables = variable) => ({
  color: variables.textColor,
  fontSize: variables.fontSizeH2,
  lineHeight: variables.lineHeightH2,
});
