CREATE DATABASE  IF NOT EXISTS `fswpproject` 
USE `fswpproject`;
DROP TABLE IF EXISTS `furniture`;
CREATE TABLE `furniture` (
  `category` tinyint DEFAULT NULL,
  `is_editors_pick` bit(1) DEFAULT NULL,
  `price` decimal(38,2) DEFAULT NULL,
  `id` bigint NOT NULL,
  `image_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `furniture_chk_1` CHECK ((`category` between 0 and 2))
)

DROP TABLE IF EXISTS `furniture_sequence`;

CREATE TABLE `furniture_sequence` (
  `next_val` bigint DEFAULT NULL
)



