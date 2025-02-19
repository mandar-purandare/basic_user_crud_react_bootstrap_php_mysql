-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2025 at 06:28 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pet_projects`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `dob` date DEFAULT NULL,
  `created_by` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(255) NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `dob`, `created_by`, `created_at`, `updated_by`, `updated_at`) VALUES
(1, 'Mandar', 'mandar@gmail.com', '$2y$10$4Cr4Oyw7vr90JFna19hzzOi/4w0UwqbEcw2y5ldGPn2B7K5ZprsRC', '0000-00-00', 'Mandar', '2025-02-18 10:35:22', '', '0000-00-00 00:00:00'),
(2, 'Priya', 'priya@gmail.com', '$2y$10$tLuLMC3Q1/tpF9.cDCb6a.6e3qNsw7nChQr9wnyzLD5iKVTNlUZ26', '2025-02-12', 'Mandar', '2025-02-18 10:37:57', '', '2025-02-18 23:47:12'),
(3, 'Nidhi', 'nidhi@gmail.com', '$2y$10$vn4.2REzxsjLI0FA/fLRZO1sR.5NtVZUHzKcmX69Uf/b0X6INenv2', '0000-00-00', 'Mandar', '2025-02-18 10:40:09', '', '0000-00-00 00:00:00'),
(5, 'Aashish', 'aashish@yahoo.com', '$2y$10$pU8XTqqX5RGgX/V9nf4O5e./9.Kyj6Wpgzh7d/p6KJLhq3EVNVSxC', '2025-02-11', 'Mandar', '2025-02-18 19:21:50', '', '2025-02-19 00:04:03'),
(7, 'Parth', 'parth@gmail.com', '$2y$10$W1i6C1esbWYu0C7/nbRUMuwe971TDqHryL8ciTtMrxIeCGnEYsHdK', '2025-02-11', 'Mandar', '2025-02-18 19:31:49', '', '0000-00-00 00:00:00'),
(9, 'Rohit', 'rohit@gmail.com', '$2y$10$paS7Q9uFOOkkT9XVFBBsA.xTNS3LnqqIO0OSPrFzL6AM4GoPN7M5W', '2025-02-11', 'Mandar', '2025-02-18 19:36:01', '', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
