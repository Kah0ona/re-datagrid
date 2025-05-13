goog.loadModule(function(exports) {
  function throwException(exception) {
    goog.global.setTimeout(() => {
      throw exception;
    }, 0);
  }
  "use strict";
  goog.module("goog.async.throwException");
  goog.module.declareLegacyNamespace();
  exports = throwException;
  return exports;
});

//# sourceMappingURL=goog.async.throwexception.js.map
