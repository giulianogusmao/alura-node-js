-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2018 at 02:14 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alura_node`
--

-- --------------------------------------------------------

--
-- Table structure for table `livros`
--

CREATE TABLE `livros` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `descricao` text,
  `preco` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `livros`
--

INSERT INTO `livros` (`id`, `titulo`, `descricao`, `preco`) VALUES
(1, 'Comecando com nodejs', 'livro introdutório sobre nodejs', '39.90'),
(2, 'Comecando com javascript', 'livro introdutório sobre javascript', '39.90'),
(3, 'Comecando com express', 'livro introdutório sobre express', '39.90'),
(4, 'Livro de piadas', 'Top top top...', '45.00'),
(5, 'Novo livro de Nodejs', 'Livro top da casadocodigo', '48.30'),
(6, 'oloco bicho', 'Olá novo mundo', '65.40'),
(7, 'oloco bicho', 'Olá novo mundo', '65.40');

-- --------------------------------------------------------

--
-- Table structure for table `livros_promocoes`
--

CREATE TABLE `livros_promocoes` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `livros_promocoes`
--

INSERT INTO `livros_promocoes` (`id`) VALUES
(4),
(5),
(6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `livros`
--
ALTER TABLE `livros`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `livros_promocoes`
--
ALTER TABLE `livros_promocoes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `livros`
--
ALTER TABLE `livros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `livros_promocoes`
--
ALTER TABLE `livros_promocoes`
  ADD CONSTRAINT `fk_livros_promocoes` FOREIGN KEY (`id`) REFERENCES `livros` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
