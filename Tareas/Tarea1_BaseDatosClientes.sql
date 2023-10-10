


CREATE TABLE cliente 
(
     RFC_Cliente VARCHAR(100) PRIMARY KEY
    ,Nombre VARCHAR(40)
    ,Apellido1 VARCHAR(40)
    ,Apellido2 VARCHAR(40)
    ,Nombre_Empresa VARCHAR(100)
    ,Direccion VARCHAR(200)
    ,Ciudad VARCHAR(50)
    ,Estado VARCHAR(50)
    ,CP CHAR(5)
);


CREATE TABLE proveedor 
(
     RFC_Proveedor VARCHAR(100) PRIMARY KEY
    ,Nombre VARCHAR(40)
    ,Apellido1 VARCHAR(40)
    ,Apellido2 VARCHAR(40)
    ,Nombre_Empresa VARCHAR(100)
    ,Direccion VARCHAR(200)
    ,Ciudad VARCHAR(50)
    ,Estado VARCHAR(50)
    ,CP CHAR(5)
);


CREATE TABLE factura 
(
     Num_Factura INT PRIMARY KEY AUTO_INCREMENT
    ,Fecha_Factura DATE 
    ,RFC_Cliente VARCHAR(100)
    
    ,FOREIGN KEY(RFC_Cliente) REFERENCES cliente(RFC_Cliente)
    ON UPDATE CASCADE ON DELETE NO ACTION
);


CREATE TABLE articulo 
(
     Cod_Articulo INT PRIMARY KEY AUTO_INCREMENT
    ,RFC_Proveedor VARCHAR(100)
    ,Nombre_Articulo VARCHAR(100) 
    ,Caracteristicas VARCHAR(200)
    ,Precio FLOAT
    
    ,FOREIGN KEY(RFC_Proveedor) REFERENCES proveedor(RFC_Proveedor)
    ON UPDATE CASCADE ON DELETE NO ACTION

);


CREATE TABLE detallefactura 
(
     Num_DetalleFactura INT PRIMARY KEY AUTO_INCREMENT
    ,Num_Factura INT 
    ,Cod_Articulo INT 
    ,Cantidad INT
    
    ,FOREIGN KEY(Num_Factura) REFERENCES factura(Num_Factura)
    ON UPDATE CASCADE ON DELETE NO ACTION

    ,FOREIGN KEY(Cod_Articulo) REFERENCES articulo(Cod_Articulo)
    ON UPDATE CASCADE ON DELETE NO ACTION
);





