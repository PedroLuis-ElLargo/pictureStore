--
-- Database: `db_pictures_store`
--
CREATE DATABASE `db_pictures_store`
-- --------------------------------------------------------

USE `db_pictures_store`

-- --------------------------------------------------------
--
-- Table structure for table `pintor`
--
CREATE TABLE `pintor` (
    `pintor_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(65) NOT NULL,
    `apellido` VARCHAR(65) NOT NULL,
    `imagen` VARCHAR(100) NOT NULL,
    `fecha_creacion` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `fecha_actualizacion` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `fecha_eliminacion` TIMESTAMP NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SELECT * FROM `pintor`

INSERT INTO `pintor` (nombre, apellido, imagen)
VALUES ('Jayden', 'Torrez', 'file-0015649.jpg');
-- --------------------------------------------------------
--
-- Table structure for table `pinturas`
--
CREATE TABLE `pinturas` (
    `pintura_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `nombre_pintura` VARCHAR(100) NOT NULL,
    `precio_estandar` INT(10) NOT NULL,
    `precio_oferta` INT(10) NULL,
    `imagen` VARCHAR(100) NOT NULL,
    `estado` VARCHAR(10) NOT NULL DEFAULT 'activa', -- o inactiva
    `pintor_id` INT,
    FOREIGN KEY (`pintor_id`) REFERENCES `pintor` (`pintor_id`),
    `fecha_creacion` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `fecha_actualizacion` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SELECT * FROM `pinturas`
ALTER TABLE `pinturas` MODIFY tiempo_venta DATETIME;
-- --------------------------------------------------------
--
-- Table structure for table `usuario`
--
CREATE TABLE `usuario` (
    `usuario_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(65) NOT NULL,
    `apellido` VARCHAR(65) NOT NULL,
    `nombre_usuario` VARCHAR(25) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `clave` VARCHAR(50) NOT NULL,
    `imagen` VARCHAR(100) NOT NULL,
    `estado` VARCHAR(10) NOT NULL DEFAULT 'activa', -- o inactiva
    `fecha_creacion` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `fecha_actualizacion` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SELECT * FROM `usuario`
-- --------------------------------------------------------
--
-- Table structure for table `favoritas`
--
CREATE TABLE `favoritas` (
    `favorito_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `usuario_id` INT,
    FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usuario_id`),
    `pintura_id` INT,
    FOREIGN KEY (`pintura_id`) REFERENCES `pinturas` (`pintura_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SELECT * FROM `favoritas`
-- --------------------------------------------------------
--
-- Table structure for table `carrito`
--
CREATE TABLE `carrito` (
    `carrito_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `usuario_id` INT,
    FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usuario_id`),
    `pintura_id` INT,
    FOREIGN KEY (`pintura_id`) REFERENCES `pinturas` (`pintura_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SELECT * FROM `carrito`
-- --------------------------------------------------------
--
-- XD 💥
--
DROP TABLE IF EXISTS `pintor`;

ALTER TABLE `pintor`
CHANGE COLUMN aplellido apellido VARCHAR(65) NOT NULL;

ALTER TABLE `pinturas`
DROP COLUMN `fecha_eliminacion`