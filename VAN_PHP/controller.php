<?php
require_once("pdo.php");

DataBase::connect();
$medic = DataBase::getAll(' SELECT medical_org.id, medical_org.type, medical_org.name, medical_org.cords, 
  medical_org.region, medical_org.city, medical_org.address, medical_org.site, 
  medical_org.telephone, medical_org.person
FROM medical_org ');

echo json_encode($medic);
