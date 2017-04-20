import express, { Router } from 'express';
// Import index action from movies controller

// Initialize the router
const router = Router();

// Handle /movies.json route with index action from movies controller
router.route('/').get((req, res, next) => {
  res.json({
    'key': 'value'
  });
});

export default router;