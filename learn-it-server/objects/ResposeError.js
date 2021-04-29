module.exports = class ResposeError{
  error = true;
  constructor(errorMessage) {
    this.message = errorMessage;
  }
}