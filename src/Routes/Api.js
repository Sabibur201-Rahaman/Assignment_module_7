const express = require('express');
const router = express.Router();

// Import controllers
const {
  create: createBlog,
  read: readBlog,
  delete: deleteBlog,
  update: updateBlog,
} = require('../Controllers/blogController');

const {
  create: createComment,
  read: readComment,
  delete: deleteComment,
  update: updateComment,
} = require('../Controllers/commentController');
const {
  create: createMessage,
  read: readMessage,
  delete: deleteMessage,
  update: updateMessage,
} = require('../Controllers/messageController');
const {
  create: createPortFolio,
  read: readPOrtFolio,
  delete: deletePortFolio,
  update: updatePortFolio,
} = require('../Controllers/portfolioController');
const {
  create: createProduct,
  read: readProduct,
  delete: deleteProduct,
  update: updateProduct,
} = require('../Controllers/productController');

// Define routes
router.get('/', createBlog);
router.get('/blog/read', readBlog);
router.get('/blog/delete', deleteBlog);
router.get('/blog/update', updateBlog);

router.get('/', createComment);
router.get('/comment/delete', deleteComment);
router.get('/comment/read', readComment);
router.get('/comment/update', updateComment);

router.get('/', createMessage);
router.get('/message/delete', deleteMessage);
router.get('/message/read', readMessage);
router.get('/message/update', updateMessage);

router.get('/', createPortFolio);
router.get('/portfolio/delete', deletePortFolio);
router.get('/portfolio/read', readPOrtFolio);
router.get('/portfolio/update', updatePortFolio);

router.get('/', createProduct);
router.get('/product/delete', deleteProduct);
router.get('/product/read', readProduct);
router.get('/product/update', updateProduct);

// Repeat the above for other controllers and functions

module.exports = router;
