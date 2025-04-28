import prisma from "../config/db";

export const createUser = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  return prisma.user.create({ data });
};
export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};
