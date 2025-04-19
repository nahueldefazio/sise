export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validateName = (name) => {
  return name && name.length >= 2;
};

export const validatePhone = (phone) => {
  const regex = /^[0-9\s-+()]{8,}$/;
  return regex.test(phone);
};

export const validateMessage = (message) => {
  return message && message.length >= 10;
};