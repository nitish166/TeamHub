const prisma = require('../config/prismaClient');
const { hashPassword, comparePassword } = require('../utils/hash.util');
const jwt = require('jsonwebtoken');

const signup = async ({ name, email, password }) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error('User already exists');

  const hashed = await hashPassword(password);

  const user = await prisma.user.create({
    data: { name, email, password: hashed }
  });

  return generateToken(user);
};

const login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('User not found');

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  return generateToken(user);
};

const generateToken = (user) => {
  return jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

module.exports = { signup, login };