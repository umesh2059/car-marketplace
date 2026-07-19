import { protect, admin } from './authMiddleware.js';

export const adminMiddleware = [protect, admin];