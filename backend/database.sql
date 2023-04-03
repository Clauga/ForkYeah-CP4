-- MySQL Script generated by MySQL Workbench
-- Mon Apr  3 10:33:54 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema forkyeah
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `forkyeah` ;

-- -----------------------------------------------------
-- Schema forkyeah
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `forkyeah` DEFAULT CHARACTER SET utf8 ;
USE `forkyeah` ;

-- -----------------------------------------------------
-- Table `forkyeah`.`areas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `forkyeah`.`areas` (
  `idarea` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idarea`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `forkyeah`.`recipes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `forkyeah`.`recipes` (
  `idrecipes` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `preparation` VARCHAR(1000) NULL,
  `country_idarea` VARCHAR(45) NOT NULL,
  `timetotal` VARCHAR(255) NULL,
  `difficulty` VARCHAR(45) NULL,
  `url` VARCHAR(45) NULL,
  `picture` VARCHAR(45) NULL,
  PRIMARY KEY (`idrecipes`),
  INDEX `fk_recipes_country_idx` (`country_idarea` ASC) VISIBLE,
  CONSTRAINT `fk_recipes_country`
    FOREIGN KEY (`country_idarea`)
    REFERENCES `forkyeah`.`areas` (`idarea`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `forkyeah`.`ingredients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `forkyeah`.`ingredients` (
  `idingredients` INT NOT NULL,
  PRIMARY KEY (`idingredients`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `forkyeah`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `forkyeah`.`user` (
  `iduser` INT NOT NULL,
  `recipes_idrecipes` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`iduser`, `recipes_idrecipes`),
  INDEX `fk_user_recipes1_idx` (`recipes_idrecipes` ASC) VISIBLE,
  CONSTRAINT `fk_user_recipes1`
    FOREIGN KEY (`recipes_idrecipes`)
    REFERENCES `forkyeah`.`recipes` (`idrecipes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `forkyeah`.`favorites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `forkyeah`.`favorites` (
  `idfavorites` INT NOT NULL,
  PRIMARY KEY (`idfavorites`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `forkyeah`.`recipes_has_ingredients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `forkyeah`.`recipes_has_ingredients` (
  `recipes_idrecipes` INT NOT NULL,
  `ingredients_idingredients` INT NOT NULL,
  PRIMARY KEY (`recipes_idrecipes`, `ingredients_idingredients`),
  INDEX `fk_recipes_has_ingredients_ingredients1_idx` (`ingredients_idingredients` ASC) VISIBLE,
  INDEX `fk_recipes_has_ingredients_recipes1_idx` (`recipes_idrecipes` ASC) VISIBLE,
  CONSTRAINT `fk_recipes_has_ingredients_recipes1`
    FOREIGN KEY (`recipes_idrecipes`)
    REFERENCES `forkyeah`.`recipes` (`idrecipes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_recipes_has_ingredients_ingredients1`
    FOREIGN KEY (`ingredients_idingredients`)
    REFERENCES `forkyeah`.`ingredients` (`idingredients`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `forkyeah`.`user_has_favorites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `forkyeah`.`user_has_favorites` (
  `user_iduser` INT NOT NULL,
  `favorites_idfavorites` INT NOT NULL,
  PRIMARY KEY (`user_iduser`, `favorites_idfavorites`),
  INDEX `fk_user_has_favorites_favorites1_idx` (`favorites_idfavorites` ASC) VISIBLE,
  INDEX `fk_user_has_favorites_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_favorites_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `forkyeah`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_favorites_favorites1`
    FOREIGN KEY (`favorites_idfavorites`)
    REFERENCES `forkyeah`.`favorites` (`idfavorites`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;