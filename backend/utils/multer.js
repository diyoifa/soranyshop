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
    } else {
        cb(new Error("Formato no compatible. Por favor, subir solo archivos con formato JPEG/JPG o PNG"), false);
    }
};

const upload = multer({
    storage,
    limits: { fileSize: 1024 * 1024 }, // Cambio de 'fieldSize' a 'fileSize'
    fileFilter,
});

export default upload;
