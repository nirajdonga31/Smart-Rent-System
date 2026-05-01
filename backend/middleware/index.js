const {
  protect,
  authenticate,
  optionalAuthenticate,
  authorize,
  isPropertyHost,
} = require("./authMiddleware");
const { validateRequest, sanitizeData } = require("./validationMiddleware");
const errorHandler = require("./errorMiddleware");

// Create specific validation functions for different schemas
const validateProperty = (schema) => validateRequest(schema, "body");
const validateUser = (schema) => validateRequest(schema, "body");
const validateReview = (schema) => validateRequest(schema, "body");
const validateBooking = (schema) => validateRequest(schema, "body");

module.exports = {
  protect,
  authenticate,
  optionalAuthenticate,
  authorize,
  isPropertyHost,
  validateProperty,
  validateUser,
  validateReview,
  validateBooking,
  validateRequest,
  sanitizeData,
  errorHandler,
};
