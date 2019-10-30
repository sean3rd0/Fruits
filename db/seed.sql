CREATE TABLE fruits (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(25)
);

INSERT INTO fruits (name) VALUES (
    'orange', 
    'pineapple'
);

SELECT * FROM fruits