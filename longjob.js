/* The longjob object */

/** longjob have labels */
var label = "default";

/**
 * The command that we run. It is either the shell command, or
 * a database command
 */
var command = "";

/** the time that the process started  */
var startedAt = null;

/** the time that the process ended */
var endedAt = null;

/**
 * The result text we expect to get. Things will be cached into files probably.
 */
var resultText = "";

function Longjob() {
  this.startedAt = new Date();
}

Longjob.prototype.setLabel = function (lb) {
  this.label = lb;
};

Longjob.prototype.getLabel = function() {
  return this.label;
};

Longjob.prototype.getCommand = function () {
  return this.command;
};

Longjob.prototype.setCommand = function (cmd){
  this.command = cmd;
};

Longjob.prototype.setStartTime = function (startT) {
  this.startedAt = startT;
};

Longjob.prototype.getStartTime = function () {
  return this.startedAt;
};

Longjob.prototype.getEndTime = function () {
  return this.endedAt;
};

Longjob.prototype.setEndTime = function (endT) {
  this.endedAt = endT;
};

module.exports = Longjob;
