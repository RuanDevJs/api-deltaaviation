CREATE DATABASE delta_aviations;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE usuarios(
    id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);
