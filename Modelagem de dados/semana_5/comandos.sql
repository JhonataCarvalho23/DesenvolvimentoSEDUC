-- database: ./db.sqlite

CREATE TABLE Hospede(HospedesID INT PRIMARY KEY, NomeHospede TEXT);

CREATE TABLE Quartos (
    QuartoID INT PRIMARY KEY,
    TipoQuarto TEXT,
    PrecoDiaria DECIMAL(10, 2) CHECK (PrecoDiaria >= 0)
);

CREATE TABLE
  reservas (
    ReservaID INT PRIMARY KEY,
    Data DATE NOT NULL,
    HospedesID INT,
    QuartoID INT,
    DataCheckIN DATE,
    DataCheckOUT DATE,
    FOREIGN KEY (HospedesID) REFERENCES Hospedes (HospedesID),
    FOREIGN KEY (QuartoID) REFERENCES Quartos (QuartoID)
  );