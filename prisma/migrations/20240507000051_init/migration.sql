-- CreateTable
CREATE TABLE `fakultas` (
    `id_fakultas` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_fakultas` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_fakultas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prodi` (
    `id_prodi` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_prodi` VARCHAR(191) NOT NULL,
    `id_fakultas` INTEGER NOT NULL,

    PRIMARY KEY (`id_prodi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kegiatan` (
    `id_kegiatan` INTEGER NOT NULL AUTO_INCREMENT,
    `id_prodi` INTEGER NOT NULL,
    `id_fakultas` INTEGER NOT NULL,
    `judul_kegiatan` VARCHAR(50) NOT NULL,
    `isi_kegiatan` TEXT NOT NULL,
    `tanggal_mulai` DATE NOT NULL,
    `tanggal_akhir` DATE NOT NULL,
    `tanggal_posting` DATE NOT NULL,
    `lokasi` VARCHAR(200) NOT NULL,
    `nis` VARCHAR(10) NOT NULL,
    `status` TINYINT NOT NULL DEFAULT 0,

    PRIMARY KEY (`id_kegiatan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `header` (
    `id_header` INTEGER NOT NULL AUTO_INCREMENT,
    `id_fakultas` INTEGER NOT NULL,
    `judul_header` VARCHAR(50) NOT NULL,
    `subjudul_header` VARCHAR(100) NOT NULL,
    `gambar_header` TEXT NOT NULL,

    PRIMARY KEY (`id_header`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `testimoni` (
    `id_testimoni` INTEGER NOT NULL AUTO_INCREMENT,
    `id_fakultas` INTEGER NOT NULL,
    `testimoner` VARCHAR(50) NOT NULL,
    `pekerjaan_testimoner` VARCHAR(30) NOT NULL,
    `isi_testimoni` TEXT NOT NULL,
    `foto_testimoni` TEXT NOT NULL,
    `tgl_testimoni` DATE NOT NULL,

    PRIMARY KEY (`id_testimoni`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `unit` (
    `id_unit` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_unit` VARCHAR(80) NOT NULL,

    PRIMARY KEY (`id_unit`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dokar` (
    `id_dokar` INTEGER NOT NULL AUTO_INCREMENT,
    `nis` VARCHAR(10) NOT NULL,
    `id_prodi` INTEGER NOT NULL,
    `id_unit` INTEGER NOT NULL,
    `nidn` VARCHAR(20) NOT NULL,
    `nama` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id_dokar`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `galeri` (
    `id_galeri` INTEGER NOT NULL AUTO_INCREMENT,
    `id_fakultas` INTEGER NOT NULL,
    `judul_galeri` VARCHAR(200) NOT NULL,
    `tanggal_posting` DATE NOT NULL,
    `nis` VARCHAR(10) NOT NULL,
    `status` TINYINT NOT NULL DEFAULT 0,

    PRIMARY KEY (`id_galeri`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detil_galeri` (
    `id_detil_galeri` INTEGER NOT NULL AUTO_INCREMENT,
    `id_galeri` INTEGER NOT NULL,
    `gambar` TEXT NOT NULL,
    `keterangan` TEXT NOT NULL,

    PRIMARY KEY (`id_detil_galeri`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `content` (
    `id_content` INTEGER NOT NULL AUTO_INCREMENT,
    `id_jenis_kontent` INTEGER NOT NULL,
    `id_fakultas` INTEGER NOT NULL,
    `id_prodi` INTEGER NOT NULL,
    `judul_content` VARCHAR(200) NOT NULL,
    `isi_content` LONGTEXT NOT NULL,
    `tanggal_posting` DATE NOT NULL,
    `gambar_content` TEXT NOT NULL,
    `nis` VARCHAR(20) NOT NULL,
    `status` TINYINT NOT NULL DEFAULT 0,
    `dibaca` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id_content`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jenis_kerjasama` (
    `id_jenis_kerjasama` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_jenis_kerjasama` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id_jenis_kerjasama`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kerjasama` (
    `id_kerjasama` INTEGER NOT NULL AUTO_INCREMENT,
    `id_jenis_kerjasama` INTEGER NOT NULL,
    `id_fakultas` INTEGER NOT NULL,
    `judul_kerjasama` VARCHAR(200) NOT NULL,
    `isi_kerjasama` TEXT NOT NULL,
    `tanggal_posting` DATE NOT NULL,
    `nis` VARCHAR(10) NOT NULL,
    `status` TINYINT NOT NULL DEFAULT 0,
    `gambar_kerjasama` TEXT NOT NULL,

    PRIMARY KEY (`id_kerjasama`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kerjasama_bbk` (
    `id_kerjasama` INTEGER NOT NULL AUTO_INCREMENT,
    `id_fakultas` INTEGER NOT NULL,
    `id_rak` INTEGER NOT NULL,
    `id_wilayah_kerjasama` INTEGER NOT NULL,
    `id_jenis_kerjasama` INTEGER NOT NULL,
    `nis` VARCHAR(30) NOT NULL,
    `judul_kerjasama` VARCHAR(200) NOT NULL,
    `isi_kerjasama` TEXT NOT NULL,
    `pihak_1` VARCHAR(200) NOT NULL,
    `pihak_2` VARCHAR(200) NOT NULL,
    `tanggal_kerjasama` DATE NOT NULL,
    `tanggal_kadaluarsa` DATE NOT NULL,
    `file_kerjasama` TEXT NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `gambar_kerjasama` TEXT NOT NULL,
    `tanggal_posting` DATE NOT NULL,

    PRIMARY KEY (`id_kerjasama`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wilayah_kerjasama` (
    `id_wilayah_kerjasama` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_wilayah_kerjasama` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id_wilayah_kerjasama`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `prodi` ADD CONSTRAINT `prodi_id_fakultas_fkey` FOREIGN KEY (`id_fakultas`) REFERENCES `fakultas`(`id_fakultas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kegiatan` ADD CONSTRAINT `kegiatan_id_prodi_fkey` FOREIGN KEY (`id_prodi`) REFERENCES `prodi`(`id_prodi`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kegiatan` ADD CONSTRAINT `kegiatan_id_fakultas_fkey` FOREIGN KEY (`id_fakultas`) REFERENCES `fakultas`(`id_fakultas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `header` ADD CONSTRAINT `header_id_fakultas_fkey` FOREIGN KEY (`id_fakultas`) REFERENCES `fakultas`(`id_fakultas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `testimoni` ADD CONSTRAINT `testimoni_id_fakultas_fkey` FOREIGN KEY (`id_fakultas`) REFERENCES `fakultas`(`id_fakultas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dokar` ADD CONSTRAINT `dokar_id_prodi_fkey` FOREIGN KEY (`id_prodi`) REFERENCES `prodi`(`id_prodi`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dokar` ADD CONSTRAINT `dokar_id_unit_fkey` FOREIGN KEY (`id_unit`) REFERENCES `unit`(`id_unit`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `galeri` ADD CONSTRAINT `galeri_id_fakultas_fkey` FOREIGN KEY (`id_fakultas`) REFERENCES `fakultas`(`id_fakultas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detil_galeri` ADD CONSTRAINT `detil_galeri_id_galeri_fkey` FOREIGN KEY (`id_galeri`) REFERENCES `galeri`(`id_galeri`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `content` ADD CONSTRAINT `content_id_fakultas_fkey` FOREIGN KEY (`id_fakultas`) REFERENCES `fakultas`(`id_fakultas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `content` ADD CONSTRAINT `content_id_prodi_fkey` FOREIGN KEY (`id_prodi`) REFERENCES `prodi`(`id_prodi`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kerjasama` ADD CONSTRAINT `kerjasama_id_jenis_kerjasama_fkey` FOREIGN KEY (`id_jenis_kerjasama`) REFERENCES `jenis_kerjasama`(`id_jenis_kerjasama`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kerjasama` ADD CONSTRAINT `kerjasama_id_fakultas_fkey` FOREIGN KEY (`id_fakultas`) REFERENCES `fakultas`(`id_fakultas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kerjasama_bbk` ADD CONSTRAINT `kerjasama_bbk_id_fakultas_fkey` FOREIGN KEY (`id_fakultas`) REFERENCES `fakultas`(`id_fakultas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kerjasama_bbk` ADD CONSTRAINT `kerjasama_bbk_id_jenis_kerjasama_fkey` FOREIGN KEY (`id_jenis_kerjasama`) REFERENCES `jenis_kerjasama`(`id_jenis_kerjasama`) ON DELETE RESTRICT ON UPDATE CASCADE;
