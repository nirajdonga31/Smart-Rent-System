# API Contracts

- `GET /api/bookings/check/:propertyId` is intentionally callable with or without a bearer token.
- Anonymous callers should receive a non-error response with no booking information.
- Authenticated callers should only receive booking details for their own booking on the given property.
- Booking details exposed by this endpoint are a summary payload, not the full booking document.
