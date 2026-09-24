const express = require('express');
const router = express.Router();
const {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking,
} = require('../controllers/bookingController');
const validateBooking = require('../middleware/validateBooking');

router.post('/', validateBooking, createBooking);
router.get('/', getAllBookings);
router.get('/:id', getBookingById);
router.patch('/:id/status', updateBookingStatus);
router.delete('/:id', deleteBooking);

module.exports = router;