CREATE TABLE raw_material (
	id serial PRIMARY KEY,
	name VARCHAR(30),
	amount INT,
  price INT
);

CREATE TABLE product (
  id serial PRIMARY KEY,
  name VARCHAR(30),
  amount INT,
  price INT
);

CREATE product_requirements (
  id serial PRIMARY KEY,
  amount INT NOT NULL,
  product_id INT NOT NULL,
  raw_material_id INT NOT NULL
  CONSTRAINT fk_raw_material
    FOREIGN KEY (raw_material_id)
    REFERENCES raw_material(id)
    ON DELETE CASCADE

  CONSTRAINT fk_product
    FOREIGN KEY (product_id)
    REFERENCES product(id)
    ON DELETE CASCADE


  UNIQUE (product_id, raw_material_id)
)

