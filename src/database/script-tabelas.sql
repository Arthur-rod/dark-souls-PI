-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE darkSoulsPI;

USE DATABASE darkSoulsPI;

CREATE TABLE Quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(20)
);

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(55) NOT NULL,
email VARCHAR(45) NOT NULL,
senha VARCHAR(15) NOT NULL,
campeaoFav VARCHAR(25) NULL
);

CREATE TABLE PontosQuiz (
fkUsuario INT NOT NULL,
fkQuiz INT NOT NULL,
numTentativa INT NOT NULL,
Pontos INT NOT NULL,
CONSTRAINT pkUsuarioQuizPontosQuiz
    PRIMARY KEY (fkUsuario, fkQuiz, numTentativa),
CONSTRAINT fkUsuarioPontosQuiz
	FOREIGN KEY (fkUsuario)
		REFERENCES Usuario(idUsuario),
CONSTRAINT fkQuizPontosQuiz
	FOREIGN KEY (fkQuiz)
		REFERENCES Quiz(idQuiz)
);