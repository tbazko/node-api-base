"use strict";
import { Router } from 'express';
const router = Router();

router.route('/').get((req, res, next) => {
  res.json({
    'key': 'value'
  });
});

export default router;