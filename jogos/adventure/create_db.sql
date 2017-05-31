CREATE TABLE "data"(
	id INTEGER PRIMARY KEY,
	data TEXT,
	ip TEXT,
	timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
	`referer` TEXT,
	`user_agent` TEXT
);