

create database ediary_dev;

CREATE USER 'user001'@'localhost' IDENTIFIED BY 'Iniya@123';

GRANT ALL PRIVILEGES ON ediary_dev.* TO 'user001'@'localhost';

show tables;

DROP TABLE users;
DROP TABLE roles;
DROP TABLE users_roles;

CREATE TABLE roles (
	role_id BIGINT,
	role_name VARCHAR(50) NOT NULL,
	created_date DATE NOT NULL,
	modified_date DATE NOT NULL,
	status CHAR(1) NOT NULL,
	PRIMARY KEY (role_id)
);

INSERT INTO roles VALUES (10001, 'ADMINISTRATOR', '2021-01-05 18:00:00', '2021-01-06 18:00:00', 'A');
INSERT INTO roles VALUES (10002, 'ROLE_EVENTS', '2021-01-05 18:00:00', '2021-01-06 18:00:00', 'A');
INSERT INTO roles VALUES (10003, 'ROLE_CONTACTS', '2021-01-05 18:00:00', '2021-01-06 18:00:00', 'A');
INSERT INTO roles VALUES (10004, 'ROLE_NOTES', '2021-01-05 18:00:00', '2021-01-06 18:00:00', 'A');
INSERT INTO roles VALUES (10005, 'ROLE_EXPENSES', '2021-01-05 18:00:00', '2021-01-06 18:00:00', 'A');

UPDATE roles set role_name='ROLE_EVENTS' WHERE role_id=10002;
UPDATE roles set role_name='ROLE_CONTACTS' WHERE role_id=10003;
UPDATE roles set role_name='ROLE_NOTES' WHERE role_id=10004;
UPDATE roles set role_name='ROLE_EXPENSES' WHERE role_id=10005;


CREATE TABLE users (
	user_id BIGINT, 
	user_name VARCHAR(50) NOT NULL, 
	password VARCHAR(20) NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50),
	created_date DATE NOT NULL,
	modified_date DATE NOT NULL,
	status CHAR(1) NOT NULL,
	PRIMARY KEY (user_id)
	
);


INSERT INTO users VALUES (10001, 'vini', 'vini', 'Vadivel Murugan', 'K', '2021-01-06 18:00:00', '2021-01-06 18:00:00', 'A');
INSERT INTO users VALUES (10002, 'events', 'vini', 'Vadivel Murugan', 'K', '2021-01-06 18:00:00', '2021-01-06 18:00:00', 'A');
INSERT INTO users VALUES (10003, 'contacts', 'vini', 'Vadivel Murugan', 'K', '2021-01-06 18:00:00', '2021-01-06 18:00:00', 'A');
INSERT INTO users VALUES (10004, 'notes', 'vini', 'Vadivel Murugan', 'K', '2021-01-06 18:00:00', '2021-01-06 18:00:00', 'A');
INSERT INTO users VALUES (10005, 'expenses', 'vini', 'Vadivel Murugan', 'K', '2021-01-06 18:00:00', '2021-01-06 18:00:00', 'A');

CREATE TABLE users_roles (
	user_id BIGINT,
	role_id BIGINT,
	FOREIGN KEY (user_id) REFERENCES users(user_id),
	FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

INSERT INTO users_roles VALUES (10001, 10001);
INSERT INTO users_roles VALUES (10002, 10002);
INSERT INTO users_roles VALUES (10003, 10003);
INSERT INTO users_roles VALUES (10004, 10004);
INSERT INTO users_roles VALUES (10005, 10005);

