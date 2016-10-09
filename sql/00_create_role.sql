-- Como usuario postgres
BEGIN;
-- Rol utest con pass 12utest12
-- Role: utest
-- DROP ROLE utest;
CREATE ROLE utest LOGIN
  ENCRYPTED PASSWORD 'md58330333d8cb9b1730560ead3cf07802a'
  NOSUPERUSER INHERIT NOCREATEDB NOCREATEROLE NOREPLICATION;
COMMENT ON ROLE utest IS 'Usuario de testeos';
--
COMMIT;
