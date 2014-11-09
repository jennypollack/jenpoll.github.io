console.clear();
String.prototype.log = function () {
  console.log(this.toString());
};