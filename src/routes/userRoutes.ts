import express from 'express';
import { getUsers, saveUser, deleteUser, getUserById, updateUser } from '../controllers/userController';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', saveUser);
router.delete('/:id', deleteUser);
// router.patch('/:id/name', updateUserName);
router.patch('/:id', updateUser);

export default router; 