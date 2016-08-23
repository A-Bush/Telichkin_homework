<?php

require_once ("config.php");

class DataBase{

    private static $connection;

    public static function connect(){
        self::$connection = new PDO(DB_HOST,DB_USER,DB_PASSWORD);
        self::$connection->setAttribute(PDO::ATTR_ORACLE_NULLS,PDO::NULL_TO_STRING);
    }

    public static function getAll($query){
        $res = self::$connection->query($query);
        return $res->fetchAll(PDO::FETCH_ASSOC);
    }
}
