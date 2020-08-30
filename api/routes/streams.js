const express = require('express');
const streamController = require('../controllers/streams');

module.exports = (context) => {
  let router = express.Router();
  router.get('/', streamController.getStreams.bind(context));
  router.get('/:app/:stream', streamController.getStream.bind(context));
  router.delete('/:app/:stream', streamController.delStream.bind(context));
  router.post('/trans', streamController.postStreamTrans.bind(context));
  router.post('/streamHls', streamController.streamHls.bind(context));
  return router;
};
