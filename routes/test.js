const express = require('express');
const testRouter = express.Router();
const TestService = require('../services/test');

testRouter.get('/', (req, res, next) => {
    try {
      res.json(`Success: You hit the test route. Enter a word to be cut`);
    }
    catch {
      next(err);
    };
});

testRouter.post('/', (req, res, next) => {
  const { string_to_cut } = req.body;

  try {
    const returnString = TestService.create(string_to_cut);
    res.json({ "return_string": returnString })
  }
  catch(err) {
    res.json(err);
  }
});

module.exports = testRouter;