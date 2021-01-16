"use strict";

module.exports = function (nodecg) {
  nodecg.Replicant("countdownDate", {
    defaultValue: new Date("Jun 11, 2001 00:00:00").getTime(),
  });
  nodecg.Replicant("countdownLabel", { defaultValue: "Start" });
};
