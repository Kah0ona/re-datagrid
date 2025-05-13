goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.structs.PriorityQueue");
  goog.module.declareLegacyNamespace();
  const Heap = goog.require("goog.structs.Heap");
  class PriorityQueue extends Heap {
    enqueue(priority, value) {
      this.insert(priority, value);
    }
    dequeue() {
      return this.remove();
    }
  }
  exports = PriorityQueue;
  return exports;
});

//# sourceMappingURL=goog.structs.priorityqueue.js.map
