// Usage: router.get('/', asyncHandler(async (req, res) => { ... }))
// Any error thrown inside will be caught and passed to errorMiddleware

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
