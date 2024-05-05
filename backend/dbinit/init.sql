CREATE DATABASE IF NOT EXISTS maternycaredb;
USE maternycaredb;

DROP TABLE IF EXISTS notices;

CREATE TABLE notices
(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) DEFAULT NULL,
    sub_title VARCHAR(255) DEFAULT NULL,
    message VARCHAR(255) DEFAULT NULL,
    image_url VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (id)
) AUTO_INCREMENT = 1;