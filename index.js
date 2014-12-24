module.exports = function(fn) {
  return function(ctx) {
    return fn.apply(ctx, Array.prototype.slice.call(arguments, 1))
  }
}
