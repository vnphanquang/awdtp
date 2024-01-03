CREATE TABLE IF NOT EXISTS executions (
	email TEXT NOT NULL PRIMARY KEY,
	name TEXT NOT NULL DEFAULT '',
	count INTEGER NOT NULL DEFAULT 0,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
);

INSERT INTO executions (email, name) VALUES('john_doe@example.com', 'John Doe');

SELECT * FROM executions;

UPDATE executions SET count = count + 1 WHERE email = 'john_doe@example.com';

DELETE FROM executions WHERE email = 'john_doe@example.com';