import express from 'express';
import Url from '../models/Url.js';

const router = express.Router();

// Fix: Change urlId to urlCode to match your model
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });
    if (url) {
      await Url.updateOne(
        { urlCode: req.params.code },
        { $inc: { clicks: 1 } }
      );
      return res.redirect(url.origUrl);
    } else {
      res.status(404).json('Not found');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});

export default router;