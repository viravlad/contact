export const getContactService = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=10");
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
