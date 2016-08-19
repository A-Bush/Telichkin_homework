<?php
require_once("pdo.php");

DataBase::connect();
$hosp = DataBase::getAll('SELECT hospitals.hospitalID, hospitals.Name as name, hospitals.Cords, hospitals.City,
  hospitals.Address, hospitals.Site, hospitals.Email, hospitals.Telephone, 
  hospitals.Persons, hospitals.Region_id,
  regions.Name as Region
FROM hospitals 
  LEFT JOIN regions ON regions.ID = hospitals.Region_id ');


$pharm = DataBase::getAll('SELECT pharmacy.ID as id, pharmacy.Name as name, pharmacy.Cords as coordinates, pharmacy.City as city,
  pharmacy.Address as address, pharmacy.Site as site, pharmacy.Email as email, pharmacy.Telephone as telephone,
  pharmacy.Persons as persons, pharmacy.Region_id,
  regions.Name as region
FROM pharmacy
  LEFT JOIN regions ON regions.ID = pharmacy.Region_id
');


echo json_encode(array_merge($pharm, $hosp));
