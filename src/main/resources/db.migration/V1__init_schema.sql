
CREATE TABLE movies (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

                        imdb_id VARCHAR(255) NOT NULL UNIQUE,

                        title VARCHAR(255) NOT NULL,

                        duration INTEGER NOT NULL,

                        poster_url TEXT NOT NULL,

                        trailer_url TEXT,

                        description TEXT,

                        release_date DATE,

                        director VARCHAR(255),

                        genre VARCHAR(255),

                        language VARCHAR(100),

                        imdb_rating VARCHAR(20),

                        search_key VARCHAR(255) UNIQUE
);


CREATE TABLE hall (
                      id BIGSERIAL PRIMARY KEY,

                      name VARCHAR(255) NOT NULL,

                      rows INTEGER NOT NULL,

                      columns INTEGER NOT NULL
);

CREATE TABLE screening (
                           id BIGSERIAL PRIMARY KEY,

                           hall_id BIGINT NOT NULL,

                           start_time TIMESTAMP NOT NULL,

                           end_time TIMESTAMP NOT NULL,

                           CONSTRAINT fk_screening_hall
                               FOREIGN KEY (hall_id)
                                   REFERENCES hall(id)
                                   ON DELETE CASCADE
);

CREATE TABLE seat_reservation (
                                  id BIGSERIAL PRIMARY KEY,

                                  row_number INTEGER NOT NULL,

                                  column_number INTEGER NOT NULL,

                                  screening_id BIGINT NOT NULL,

                                  owner_email VARCHAR(255),

                                  CONSTRAINT fk_seat_reservation_screening
                                      FOREIGN KEY (screening_id)
                                          REFERENCES screening(id)
                                          ON DELETE CASCADE,

                                  CONSTRAINT unique_reserved_seat
                                      UNIQUE(screening_id, row_number, column_number)
);


CREATE TABLE ticket (
                        id BIGSERIAL PRIMARY KEY,

                        row INTEGER NOT NULL,

                        col INTEGER NOT NULL,

                        screening_id BIGINT NOT NULL,

                        owner_id BIGINT,

                        owner_email VARCHAR(255) NOT NULL,

                        paid BOOLEAN NOT NULL DEFAULT FALSE,

                        CONSTRAINT fk_ticket_screening
                            FOREIGN KEY (screening_id)
                                REFERENCES screening(id)
                                ON DELETE CASCADE,

                        CONSTRAINT unique_ticket_seat
                            UNIQUE(screening_id, row, col)
);

CREATE INDEX idx_movies_title
    ON movies(title);

CREATE INDEX idx_movies_genre
    ON movies(genre);

CREATE INDEX idx_movies_search_key
    ON movies(search_key);

CREATE INDEX idx_screening_hall
    ON screening(hall_id);

CREATE INDEX idx_screening_start_time
    ON screening(start_time);

CREATE INDEX idx_ticket_owner_email
    ON ticket(owner_email);
