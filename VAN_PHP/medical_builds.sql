-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Авг 22 2016 г., 16:50
-- Версия сервера: 5.7.11
-- Версия PHP: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `medical_builds`
--

-- --------------------------------------------------------

--
-- Структура таблицы `medical_org`
--

CREATE TABLE `medical_org` (
  `id` int(11) NOT NULL,
  `type` text NOT NULL,
  `name` text NOT NULL,
  `cords` text NOT NULL,
  `region` text NOT NULL,
  `city` text NOT NULL,
  `address` text NOT NULL,
  `site` text,
  `telephone` text,
  `person` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `medical_org`
--

INSERT INTO `medical_org` (`id`, `type`, `name`, `cords`, `region`, `city`, `address`, `site`, `telephone`, `person`) VALUES
(1, 'Аптека', 'Аптека', '47.85037, 35.10057', 'Запорізька', 'Запоріжжя', 'вулиця Перемоги, 2,', NULL, NULL, NULL),
(2, 'Аптека', 'Аптека', '46.6397, 32.61586', 'Херсонська', 'Херсон', 'площа Свободи, 4,', NULL, NULL, NULL),
(3, 'Аптека', 'Аптека Низьких Цін', '48.26147, 25.94816', 'Чернівецька', 'Чернівці', 'провулок Ентузіастів, 8', 'www.aptekanizkihcen.ua', '+380 372 547 103', NULL),
(4, 'Аптека', 'Аптека24', '50.6365, 26.24298', 'Рівненська', 'Рівне', 'вулиця Князя Володимира, 109', 'www.apteka24.ua', '+380 362 420 455', NULL),
(5, 'Аптека', 'Аптека №4 ТОВ "Євро-аптека"', '48.60749, 22.27086', 'Закарпатська', 'Ужгород', 'вулиця Достоєвського, 9', NULL, NULL, NULL),
(6, 'Аптека', 'Аптека Киви', '50.75784, 25.34885', 'Волинська', 'Луцьк', 'проспект Президента Грушевського, 31,', 'kiwifarm.com.ua', '+380 3322 00201', NULL),
(7, 'Лікарня', 'Олександрівська клінічна лікарня', '50.439604, 30.527305', 'Київ', 'Київ', 'вулиця Мечникова, 1', 'www.www.gongalsky.com.ua', '+380 44 255 1519', NULL),
(8, 'Лікарня', 'Охматдит', '50.45112, 30.48093', 'Київ', 'Київ', 'вул. В\'ячеслава Чорновола, 28/1', 'www.ohmatdyt.com.ua', '+380 44 236 6942', NULL),
(9, 'Лікарня', 'Головний військовий клінічний госпіталь', '50.43007, 30.53253', 'Київ', 'Київ', 'вулиця Госпітальна, 16', 'www.gvkg.kiev.ua', '+380 44 521 8413', NULL),
(10, 'Лікарня', 'Больница скорой и неотложной помощи', '50.04024, 36.24846', 'Харківська', 'Харків', 'провулок Балакірєва, 3а', NULL, NULL, 'Сідоров С.С.'),
(11, 'Лікарня', 'Больница Мечникова', '48.45576, 35.0677', 'Дніпропетровська', 'Дніпро', 'площа Соборна, 14,', 'www.m.mechnikova.com', NULL, 'Іванов І.І.'),
(12, 'Лікарня', 'Львівська обласна клінічна лікарня', '49.83883, 24.04644', 'Львівська', 'Львів', 'вулиця Чернігівська, 7', 'www.hospital.lviv.ua', NULL, NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `medical_org`
--
ALTER TABLE `medical_org`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `medical_org`
--
ALTER TABLE `medical_org`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
