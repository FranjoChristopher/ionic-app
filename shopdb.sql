-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2025 at 09:46 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `price`, `image`) VALUES
(10, 'Apple iPhone 14 (128 GB)', 'Apple’s Radical New iPhone Suddenly Takes Shape — Forbes', '829.00', 'assets/images/iphone14.jpg'),
(11, 'Dell Latitude Laptops', 'Dell Latitude Laptops _ Dell USA', '750.00', 'assets/images/dell_latitude.jpg'),
(12, 'Galaxy Z Flip 6', 'The latest Galaxy Z Flip 6 with foldable screen', '999.00', 'assets/images/galaxy_z_flip6.jpg'),
(13, 'iPad Pro', 'Powerful iPad Pro with M-series chip', '1099.00', 'assets/images/ipad_pro.jpg'),
(14, 'iPhone 13', 'iPhone 13 bigger camera module and sleek design', '699.00', 'assets/images/iphone13.jpg'),
(15, 'MacBook Air 13 (2018-2019)', 'Lightweight and portable MacBook Air', '899.00', 'assets/images/macbook_air.jpg'),
(16, 'Samsung A55', 'Affordable Samsung A55 smartphone', '399.00', 'assets/images/samsung_a55.jpg'),
(17, 'Samsung Ultra Note 23', 'Premium Samsung Ultra Note 23 with S Pen', '1199.00', 'assets/images/note23.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
