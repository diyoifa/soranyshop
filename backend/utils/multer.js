import multer from "multer";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    },
  });

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg"
    ) {
        cb(null, true);
    } else 
        ({ error: "Formato no compatible. por favor solo subir archivos con este formato JPEG/JPG or PNG" }, false);
};
const upload = multer({
    storage,
    limits: { fieldSize: 1024 * 1024 },
    fileFilter,
});

export default upload;
