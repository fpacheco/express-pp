\c bdh_py;

INSERT INTO well (nombre, x, y) VALUES ('Pozo_1', 450001, 6500001);
INSERT INTO well (nombre, x, y) VALUES ('Pozo_2', 450002, 6500002);
INSERT INTO well (nombre, x, y) VALUES ('Pozo_3', 450003, 6500003);

INSERT INTO auth_user (id, first_name, last_name, username, email, password, registration_key, reset_password_key, registration_id, phone, is_active, created_on, created_by, modified_on, modified_by) VALUES (1, 'Fernando', 'Pacheco', 'fpacheco', 'fernando.pacheco@ingesur.com.uy', 'pbkdf2(1000,20,sha512)$a31b3e8664f43e77$83d4cf2b6925fd534cd6c40f1485473e522811f9', '', '', '', '099627932', 'T', '2015-08-03 10:05:39', NULL, '2015-08-18 17:35:03', NULL);
