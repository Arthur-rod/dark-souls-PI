CREATE DATABASE darkSoulsPI;
USE darkSoulsPI;

CREATE TABLE Quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(20)
);

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY,
nome VARCHAR(55) NOT NULL,
email VARCHAR(45) NOT NULL,
senha VARCHAR(15) NOT NULL,
campeaoFav VARCHAR(25) NULL
);

CREATE TABLE IF NOT EXISTS `mydb`.`PontosQuiz` (
idUsuario INT NOT NULL,
idQuiz INT NOT NULL,
numTentativa INT NOT NULL,
Pontos INT NOT NULL,
CONSTRAINT pkUsuarioQuizPontosQuiz
    PRIMARY KEY (idUsuario, idQuiz, numTentativa),
CONSTRAINT fkUsuarioPontosQuiz
	FOREIGN KEY (idUsuario)
		REFERENCES Usuario(idUsuario),
CONSTRAINT fkQuizPontosQuiz
	FOREIGN KEY (fkQuiz)
		REFERENCES Quiz(idQuiz)
);