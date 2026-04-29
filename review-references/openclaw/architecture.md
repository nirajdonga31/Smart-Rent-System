# Architecture

- Backend is an Express API under `backend/`.
- Booking logic lives in `backend/controllers/bookingController.js` and routes in `backend/routes/bookingRoutes.js`.
- Authentication middleware lives in `backend/middleware/authMiddleware.js` and is re-exported through `backend/middleware/index.js`.
- Properties and bookings are Mongoose models.
