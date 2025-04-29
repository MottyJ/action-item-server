import { Request, Response } from 'express';
import User from '../models/User';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

export const saveUser = async (req: Request, res: Response) => {
  try {
    const {
      id,
      gender,
      name,
      location,
      email,
      phone,
      picture,
      dob
    } = req.body;
    const sanitizedUser = {
      id,
      gender,
      name: name && {
        title: name.title,
        first: name.first,
        last: name.last,
      },
      location: location && {
        street: location.street && {
          number: location.street.number,
          name: location.street.name,
        },
        city: location.city,
        state: location.state,
        country: location.country,
      },
      email,
      phone,
      picture: picture && {
        large: picture.large,
        medium: picture.medium,
        thumbnail: picture.thumbnail,
      },
      dob: dob && {
        date: dob.date,
        age: dob.age,
      },
    };
    const user = new User(sanitizedUser);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: 'Error saving user', error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await User.findOneAndDelete({ id: req.params.id });
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ message: 'Error deleting user', error });
  }
};

export const updateUserName = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { id: req.params.id },
      { name },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user name', error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
}; 