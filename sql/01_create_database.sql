-- Como usuario postgres
-- Creo base de datos
DROP DATABASE IF EXISTS bdh_py;
CREATE DATABASE bdh_py WITH ENCODING='UTF8' OWNER=utest CONNECTION LIMIT=-1;

\c bdh_py

BEGIN;
-- Esquema de la aplicacion
CREATE SCHEMA test AUTHORIZATION utest;
-- Cambio busquedas de DB
ALTER DATABASE bdh_py SET search_path = test,public;
-- Busqueda de tablas de usuario
ALTER USER utest SET search_path = test,public;
-- Creo extensiones
CREATE EXTENSION postgis;
COMMIT;
