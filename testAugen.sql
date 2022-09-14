create schema testAugen;
use testAugen;

create table Equipamento (
	Id int auto_increment,
	Nome varchar(30) not null,
	CidadeId int not null,
	PRIMARY KEY(Id)
);

create table Cidade (
	Id int auto_increment, 
	Nome varchar(30) not null,
    Estado varchar(30) not null,
	PRIMARY KEY(Id)
);

create table Analise (
	Id int auto_increment,
	PH float not null,
	Cloro float not null,
    Vazao float not null,
    EquipamentoId int not null,
	PRIMARY KEY(Id)
);

create table Funcionario (
	Email varchar(30) not null,
    Senha char(30) not null
);

alter table Funcionario add primary key(Email);

alter table Analise add foreign key (EquipamentoId) references Equipamento(Id);
alter table Equipamento add foreign key (CidadeId) references Cidade(Id);


