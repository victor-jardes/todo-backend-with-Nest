import * as bcrypt from 'bcrypt';

export const createHash = async (password: string) => {
  const saltRounds = 8;

  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const compareHash = async (password: string) => {
  try {
    const mathc = await bcrypt.compare(password, 'hash');
    return mathc;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
