use db_biblioteca;

show tables;

create table if not exists tbl_livro (
	ID_Livro SMALLINT AUTO_INCREMENT PRIMARY KEY,
    Nome_Livro VARCHAR(70) NOT NULL,
    ISBN13 CHAR(13),
    ID_Categoria SMALLINT,
	ID_Autor SMALLINT NOT NULL,
	Data_Pub DATE NOT NULL,
	Preco_Livro DECIMAL(6,2) NOT NULL
);

create table tbl_autores (
	ID_Autor SMALLINT PRIMARY KEY,
	Nome_Autor VARCHAR(50) NOT NULL,
	Sobrenome_Autor VARCHAR(60) NOT NULL
);

create table tbl_categorias (
	ID_Categoria SMALLINT PRIMARY KEY,
	Categoria VARCHAR(30) NOT NULL
);

create table tbl_editoras (
	ID_Editora SMALLINT PRIMARY KEY AUTO_INCREMENT,
	Nome_Editora VARCHAR(50) NOT NULL
);