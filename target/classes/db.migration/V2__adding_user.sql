CREATE TABLE users (
                       id BIGSERIAL PRIMARY KEY,
                       email VARCHAR(255) NOT NULL UNIQUE,
                       password_hash VARCHAR(255) NOT NULL,
                       created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                       role VARCHAR(255)
);

ALTER TABLE hall ADD COLUMN type VARCHAR(255);

ALTER TABLE screening ADD COLUMN  price double precision;
ALTER TABLE screening ADD COLUMN tmdb_movie_id BIGSERIAL;
ALTER TABLE screening DROP COLUMN end_time;
