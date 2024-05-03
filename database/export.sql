CREATE DATABASE IF NOT EXISTS `apartment`;
USE `apartment`;

-- Create tables

-- Table to store information about blocks in the apartment
CREATE TABLE IF NOT EXISTS `block` (
  `block_no` int NOT NULL,
  `block_name` varchar(10) DEFAULT NULL,
  `complaints` varchar(100) DEFAULT NULL,
  `room_no` int DEFAULT NULL,
  PRIMARY KEY (`block_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table to store information about block administrators
CREATE TABLE IF NOT EXISTS `block_admin` (
  `admin_id` int NOT NULL,
  `admin_name` varchar(20) DEFAULT NULL,
  `block_no` int DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table to store information about rooms in the apartment
CREATE TABLE IF NOT EXISTS `room` (
  `room_no` int NOT NULL,
  `type` varchar(10) DEFAULT NULL,
  `floor` int DEFAULT NULL,
  `parking_slot` varchar(10) DEFAULT NULL,
  `reg_no` int DEFAULT NULL,
  `block_no` int DEFAULT NULL,
  `deposit` int DEFAULT NULL,
  `rent` int DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `owner` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`room_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table to store information about apartment owners
CREATE TABLE IF NOT EXISTS `owner` (
  `owner_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `age` int DEFAULT NULL,
  `agreement_status` varchar(20) NOT NULL,
  `room_no` int DEFAULT NULL,
  `dob` date DEFAULT NULL,
  PRIMARY KEY (`owner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table to store information about tenants
CREATE TABLE IF NOT EXISTS `tenant` (
  `tenant_id` int NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `room_no` int NOT NULL,
  `age` int DEFAULT NULL,
  `starting_date` DATE NOT NULL,
  `ending_date` DATE NOT NULL,
  `rent` int NOT NULL,
  `deposit` int NOT NULL,
  `stat` VARCHAR(20) DEFAULT "not",
  PRIMARY KEY (`tenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table to store rental information
CREATE TABLE IF NOT EXISTS `rental` (
  `starting_date` DATE DEFAULT NULL,
  `ending_date` DATE DEFAULT NULL,
  `monthly_rent` int DEFAULT NULL,
  `room_no` int DEFAULT NULL,
  `tenant_id` int DEFAULT NULL,
  `deposit` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table to store information about identity (owner and tenant)
CREATE TABLE IF NOT EXISTS `identity` (
  `tenant_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table to store authentication information
CREATE TABLE IF NOT EXISTS `auth` (
  `user_id` varchar(10) NOT NULL,
  `password` varchar(20) NOT NULL DEFAULT '12345678',
  `id` int NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table to store information about employees
CREATE TABLE IF NOT EXISTS `employee` (
  `emp_id` int NOT NULL,
  `emp_name` varchar(30) DEFAULT NULL,
  `salary` int DEFAULT NULL,
  `emp_type` varchar(20) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `block_no` int DEFAULT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table to store status of rooms in the apartment
CREATE TABLE IF NOT EXISTS `room_status` (
  `room_no` int NOT NULL,
  `type` varchar(10) DEFAULT NULL,
  `floor` int DEFAULT NULL,
  `parking_slot` varchar(10) DEFAULT NULL,
  `reg_no` int DEFAULT NULL,
  `block_no` int DEFAULT NULL,
  `occupancy_status` varchar(10) DEFAULT NULL,
  `owner_name` VARCHAR(20) DEFAULT NULL,
  `rent` int DEFAULT NULL,
  `deposit` int DEFAULT NULL,
  `occupied_till` DATE DEFAULT NULL,
  PRIMARY KEY (`room_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Add entries to tables

-- Populate the `block` table with sample data
INSERT INTO `block` VALUES 
(1,'Jethalal','Water problem',11),
(2,'Roshan','Plumbing work',12),
(3,'Taarak','tenant issue',13),
(4,'Aatmaram',NULL, NULL);

-- Populate the `block_admin` table with sample data
INSERT INTO `block_admin` VALUES 
(101, 'shiva', 1),
(102, 'rajaa', NULL);

-- Populate the `room` table with sample data
INSERT INTO `room` VALUES 
(11, '3bhk', 2, 'B-123', 1234, 1, 5000, 25000, 'Occupied', 'Crane'),
(12, '2bhk', 2, 'B-124', 12345, 2, 5000, 25000, 'Occupied', 'tigress'),
(13, '3bhk', 2, 'B-125', 123, 1, 5000, 35000, 'Occupied', 'Viper'),
(21, '1bhk', 3, 'B-234', 456, 4, 5000, 15000, 'Occupied', 'Mantis'),
(31, '4bhk', 4, 'B-789', 2345, 4, 5000, 15000, '', 'Monkey'),
(67, '3bhk', 2, 'B-123', 1234, 3, 5000, 24000, '', 'Po');

-- Populate the `owner` table with sample data
INSERT INTO `owner` VALUES 
(501, 'Virendra', 19, 'yes', 11, '2002-08-17'),
(502, 'Rahul', 19, 'yes', 13, '2002-05-21'),
(503, 'Suryakumar', 20, 'no', 21, '2001-09-23'),
(504, 'Dinesh Kartik', 21, 'no', 31, '2002-01-24');

-- Populate the `tenant` table with sample data
INSERT INTO `tenant` VALUES 
(601, 'Gaurav', '2002-04-01', 11, 19, '2024-01-01', '2024-12-11', 25000, 5000, 'Not-Paid'),
(602, 'Sanchit', '2002-08-23', 12, 23, '2024-01-01', '2024-12-21', 25000, 5000, 'Not-Paid'),
(603, 'Kartik', '2002-06-12', 13, 41, '2024-01-01', '2024-12-01', 35000, 5000, 'Not-Paid'),
(604, 'Ishna Kulkarni', '2002-04-23', 21, 35, '2024-01-01', '2024-06-23', 15000, 5000, 'Not-Paid'),
(605, 'Krishna', '2002-09-30', 31, 56, '2024-01-01', '2024-04-25', 15000, 5000, 'Not-Paid');

-- Populate the `rental` table with sample data
INSERT INTO `rental` (`starting_date`, `ending_date`, `monthly_rent`, `room_no`, `tenant_id`, `deposit`)
SELECT '2024-01-01', '2024-12-31', r.`rent`, r.`room_no`, t.`tenant_id`, r.`deposit`
FROM `room` r
LEFT JOIN `tenant` t ON r.`room_no` = t.`room_no`;

-- Populate the `identity` table with sample data
INSERT INTO `identity` VALUES 
(501),
(502),
(503),
(504),
(NULL),
(NULL),
(NULL),
(NULL),
(NULL);

-- Populate the `auth` table with sample data
INSERT INTO `auth` VALUES 
('a-123', '12345678', 101),
('a-124', '12345678', 102),
('a-909', '12345678', 103),
('e-123', '12345678', 701),
('e-456', '12345678', 702),
('e-909', '12345678', 703),
('o-123', '12345678', 501),
('o-124', '12345678', 502),
('o-456', '12345678', 503),
('o-909', '12345678', 504),
('t-123', '12345678', 601),
('t-124', '12345678', 602),
('t-145', '12345678', 603),
('t-190', '12345678', 604),
('t-345', '12345678', 605);

-- Populate the `employee` table with sample data
INSERT INTO `employee` VALUES 
(701,'Digvijay',20000,'Plumber',20,4),
(702,'Atharva',5000,'Gardener',30,3),
(703,'Ganesh',4000,'Electrician ',21,NULL);

-- Populate the `room_status` table with sample data
-- INSERT INTO `room_status` (`room_no`, `type`, `floor`, `parking_slot`, `reg_no`, `block_no`, `occupancy_status`, `owner_name`, `rent`, `deposit`)
-- SELECT r.`room_no`, r.`type`, r.`floor`, r.`parking_slot`, r.`reg_no`, r.`block_no`, 
--     CASE
--         WHEN t.`tenant_id` IS NOT NULL THEN 'occupied'
--         ELSE 'empty'
--     END AS `occupancy_status`,
--     o.`name` AS `owner_name`,
--     r.`rent` AS `rent`,
--     r.`deposit` AS `deposit`
-- FROM `room` r
-- LEFT JOIN `tenant` t ON r.`room_no` = t.`room_no`
-- LEFT JOIN `owner` o ON r.`room_no` = o.`room_no`
-- WHERE NOT EXISTS (
--     SELECT 1 FROM `room_status` WHERE `room_status`.`room_no` = r.`room_no`
-- );

-- Add foreign key constraints

-- Add foreign key constraints for `block_admin`
ALTER TABLE `block_admin`
  ADD CONSTRAINT `fk_block_admin_block` FOREIGN KEY (`block_no`) REFERENCES `block` (`block_no`);

-- Add foreign key constraints for `room`
ALTER TABLE `room`
  ADD CONSTRAINT `fk_room_block` FOREIGN KEY (`block_no`) REFERENCES `block` (`block_no`);

-- Add foreign key constraints for `owner`
ALTER TABLE `owner`
  ADD CONSTRAINT `fk_owner_room` FOREIGN KEY (`room_no`) REFERENCES `room` (`room_no`);

-- Add foreign key constraints for `tenant`
ALTER TABLE `tenant`
  ADD CONSTRAINT `fk_tenant_room` FOREIGN KEY (`room_no`) REFERENCES `room` (`room_no`);

-- Add foreign key constraints for `rental`
ALTER TABLE `rental`
  ADD CONSTRAINT `fk_rental_tenant` FOREIGN KEY (`tenant_id`) REFERENCES `tenant` (`tenant_id`),
  ADD CONSTRAINT `fk_rental_room` FOREIGN KEY (`room_no`) REFERENCES `room` (`room_no`);

-- Add foreign key constraints for `identity`
ALTER TABLE `identity`
  ADD CONSTRAINT `fk_identity_tenant` FOREIGN KEY (`tenant_id`) REFERENCES `tenant` (`tenant_id`);

-- Add foreign key constraints for `auth`
ALTER TABLE `auth`
  ADD CONSTRAINT `fk_auth_id` FOREIGN KEY (`id`) REFERENCES `block_admin` (`admin_id`);

-- Add foreign key constraints for `employee`
ALTER TABLE `employee`
  ADD CONSTRAINT `fk_employee_block` FOREIGN KEY (`block_no`) REFERENCES `block` (`block_no`);

-- Add foreign key constraints for `room_status`
-- ALTER TABLE `room_status`
--   ADD CONSTRAINT `fk_room_status_block` FOREIGN KEY (`block_no`) REFERENCES `block` (`block_no`);


INSERT INTO `room_status` (`room_no`, `type`, `floor`, `parking_slot`, `reg_no`, `block_no`, `occupancy_status`, `owner_name`, `rent`, `deposit`, `occupied_till`)
SELECT r.`room_no`, r.`type`, r.`floor`, r.`parking_slot`, r.`reg_no`, r.`block_no`, 
    CASE
        WHEN t.`tenant_id` IS NOT NULL THEN 'occupied'
        ELSE 'empty'
    END AS `occupancy_status`,
    o.`name` AS `owner_name`,
    r.`rent` AS `rent`,
    r.`deposit` AS `deposit`,
    t.`ending_date` AS `occupied_till`
FROM `room` r
LEFT JOIN `tenant` t ON r.`room_no` = t.`room_no`
LEFT JOIN `owner` o ON r.`room_no` = o.`room_no`
WHERE NOT EXISTS (
    SELECT 1 FROM `room_status` WHERE `room_status`.`room_no` = r.`room_no`
);

SET SQL_SAFE_UPDATES = 0;

-- Update `occupied_till` with tenant ending date
UPDATE `room_status` rs
LEFT JOIN `tenant` t ON rs.`room_no` = t.`room_no`
SET rs.`occupied_till` = t.`ending_date`;

-- Set `occupied_till` to NULL for empty rooms
UPDATE `room_status`
SET `occupied_till` = NULL
WHERE `occupancy_status` = 'empty';

SET SQL_SAFE_UPDATES = 1;