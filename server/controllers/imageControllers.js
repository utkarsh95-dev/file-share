import File from "../models/file.js";

export const uploadImage = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };

  try {
    const file = await File.create(fileObj);
    return res
      .status(200)
      .json({ path: `http://localhost:8000/file-shares/${file._id}` });
  } catch (error) {
    console.error("Error Occured : ", error.message);
  }
};

export const downloadImage = async (req, res) => {
  try {
    const { id } = req.params;
    const file = await File.findById(id);
    file.downloadContent++;
    await file.save();
    res.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }
};
