-- AlterTable
ALTER TABLE `corporate` ADD COLUMN `isDel` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `isValid` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `site` ADD COLUMN `isDel` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `isValid` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `isDel` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `isValid` BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE `Contact` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `isDel` BOOLEAN NOT NULL DEFAULT true,
    `isValid` BOOLEAN NOT NULL DEFAULT true,
    `type` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;