CREATE DATABASE financesapp;

use financesapp;

CREATE TABLE users(
    id varchar(50) PRIMARY KEY, name varchar(50)
 );

INSERT INTO users VALUES('1', 'FELIPE');
INSERT INTO users VALUES('2', 'ANA');
INSERT INTO users VALUES('3', 'MARCIO');

SELECT * FROM users;