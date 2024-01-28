-- se crea este archivo para respaldar la creacion de la base de datos y sus tablas

-- creacion de la base de datos
CREATE DATABASE crud;

-- se selecciona la base de datos creada
USE crud;

-- se crea la tabla
CREATE TABLE tablaproducto (
    id INT(50) NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    precioUnidadCompra INT(50),
    precioUnidadVenta INT(50)
);

-- con este comando vemos la estructura de la tabla
DESCRIBE tablaproducto;