goog.loadModule(function(exports) {
  function wrap(fn, name = "anonymous") {
    function wrappedFn(...args) {
      return consoleTask["run"](() => {
        return fn.call(this, ...args);
      });
    }
    if (!goog.DEBUG || !createTask) {
      return fn;
    }
    if (fn[assertExists(CONSOLE_TASK_SYMBOL)]) {
      return fn;
    }
    const consoleTask = createTask(fn.name || name);
    wrappedFn[assertExists(CONSOLE_TASK_SYMBOL)] = consoleTask;
    return wrappedFn;
  }
  "use strict";
  goog.module("goog.debug.asyncStackTag");
  goog.module.declareLegacyNamespace();
  const {assertExists} = goog.require("goog.asserts");
  const createTask = goog.DEBUG && goog.global.console && goog.global.console.createTask ? goog.global.console.createTask.bind(goog.global.console) : undefined;
  const CONSOLE_TASK_SYMBOL = createTask ? Symbol("consoleTask") : undefined;
  exports = {wrap};
  return exports;
});

//# sourceMappingURL=goog.debug.asyncstacktag.js.map
