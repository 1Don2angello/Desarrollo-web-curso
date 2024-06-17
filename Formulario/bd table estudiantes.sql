CREATE TABLE Estudiantes (
    ID INT PRIMARY KEY IDENTITY(1,1), -- ID autoincremental como clave primaria
    Nombre NVARCHAR(100),
    Edad INT,
    EsEstudiante BIT, -- 0 para NO, 1 para SI
    Direccion NVARCHAR(255),
    Hobbies NVARCHAR(MAX) -- Almacenar los hobbies como texto separado por comas
);
