export const convertBase64 = async (file: any) => {
  try {
    const fileReader = new FileReader();

    const result = await new Promise((resolve, reject) => {
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
      fileReader.readAsDataURL(file);
    });

    return result;
  } catch (error) {
    throw error;
  }
};
