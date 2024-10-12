import multer from "multer";
import path from "path";

export const fileStorageCourse = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/courses")
    },
    filename: (req, file, cb) => {
        const now = new Date(); // Ambil waktu saat ini

        // Ambil tahun, bulan, dan tanggal
        const year = now.getFullYear(); // Mendapatkan tahun
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Mendapatkan bulan (0 = Januari, +1 untuk menyesuaikan)
        const day = String(now.getDate()).padStart(2, '0'); // Mendapatkan tanggal

        // Gabungkan menjadi format YYYY-MM-DD
        const formattedDate = `${year}-${month}-${day}`;

        const ext = path.extname(file.originalname);
        const uniqId = `${formattedDate}-${Math.round(Math.random() * 1e9)}`
        cb(null, `${file.fieldname}-${uniqId}.${ext}`)
    }
})

export const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}