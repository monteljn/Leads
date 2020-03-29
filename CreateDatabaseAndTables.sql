# Create the database 'leads'.  If it already exists, do nothing.
CREATE DATABASE IF NOT EXISTS leads;

# Create the table 'stage' if it doesn't already exist.
CREATE TABLE IF NOT EXISTS leads.stage (
  `id` INT NOT NULL AUTO_INCREMENT,
  `stage_desc` VARCHAR(45) NOT NULL UNIQUE,
  PRIMARY KEY (`id`));

# Fill the stage table with the 5 stages.  Use 'insert ignore' rather than insert so it doesn't insert duplicates if already populated.
INSERT IGNORE INTO 
	leads.stage(stage_desc)
    	VALUES  ('New'),('Qualified'),('Tour Confirmed'),('Toured'),('Booked');

# Create the leads table.  If it already exists, do nothing.
CREATE TABLE IF NOT EXISTS leads.lead (
  `id` int NOT NULL AUTO_INCREMENT,
  `couple_name` varchar(255) NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `phone_nbr` varchar(20) NOT NULL,
  `event_date` varchar(50) DEFAULT NULL,
  `guest_count` varchar(50) DEFAULT NULL COMMENT 'varchar enables entering a guest count range (eg 100-150)',
  `budget` varchar(50) DEFAULT NULL,
  `stage_id` int NOT NULL DEFAULT '1',
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `LEAD_STAGE_ID_FK_idx` (`stage_id`),
  CONSTRAINT `LEAD_STAGE_ID_FK` FOREIGN KEY (`stage_id`) REFERENCES `stage` (`id`)
);

# Create the view vlead.  
CREATE OR REPLACE VIEW `leads`.`vlead` AS
    SELECT 
        `l`.`id` AS `id`,
        `l`.`couple_name` AS `couple_name`,
        `l`.`email_address` AS `email_address`,
        `l`.`phone_nbr` AS `phone_nbr`,
        `l`.`event_date` AS `event_date`,
        `l`.`guest_count` AS `guest_count`,
        `l`.`budget` AS `budget`,
        `l`.`stage_id` AS `stage_id`,
        `s`.`stage_desc` AS `stage_desc`,
        `l`.`create_date` AS `create_date`,
        `l`.`last_update` AS `last_update`
    FROM
        (`leads`.`lead` `l`
        JOIN `leads`.`stage` `s`)
    WHERE
        (`l`.`stage_id` = `s`.`id`)
    ORDER BY `l`.`id`;