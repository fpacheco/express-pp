\c bdh_py;

CREATE TABLE well (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR,
  x FLOAT,
  y FLOAT
)
WITH (
  OIDS=FALSE
);

-- Table: auth_user
-- DROP TABLE auth_user;
CREATE TABLE auth_user
(
  id serial NOT NULL,
  first_name character varying(128),
  last_name character varying(128),
  username character varying(512),
  email character varying(512),
  password character varying(512),
  registration_key character varying(512),
  reset_password_key character varying(512),
  registration_id character varying(512),
  phone character varying(512),
  is_active character(1),
  created_on timestamp without time zone,
  created_by integer,
  modified_on timestamp without time zone,
  modified_by integer,
  CONSTRAINT auth_user_pkey PRIMARY KEY (id),
  CONSTRAINT auth_user_created_by_fkey FOREIGN KEY (created_by)
      REFERENCES auth_user (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT auth_user_modified_by_fkey FOREIGN KEY (modified_by)
      REFERENCES auth_user (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
