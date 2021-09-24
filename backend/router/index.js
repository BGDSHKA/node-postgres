const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const pool = require('../db');

router.get('/postgresUsers', async (req, res) => {
  try {
    const client = await pool.connect();

    const sql = 'SELECT * FROM User';
    const { rows } = await client.query(sql);
    const users = rows;

    client.release();
    res.send(JSON.stringify(users));
  } catch (error) {
    res.status(400).send(error);
  }
});
router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.get('/profile', authMiddleware, userController.getProfile);

module.exports = router;
