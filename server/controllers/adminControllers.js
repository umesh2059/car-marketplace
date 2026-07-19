import User from '../models/User.js';
import Car from '../models/Car.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'user not found' });
    }
    await user.destroy();
    res.status(200).json({ success: true, message: 'user deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json({ success: true, count: cars.length, data: cars });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) {
      return res.status(404).json({ success: false, message: 'car not found' });
    }
    await car.destroy();
    res.status(200).json({ success: true, message: 'car deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAdminStats = async (req, res) => {
  try {
    const totalCars = await Car.count();
    const totalUsers = await User.count();
    const totalAdmins = await User.count({ where: { role: 'admin' } });

    res.status(200).json({
      success: true,
      data: { totalCars, totalUsers, totalAdmins },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};