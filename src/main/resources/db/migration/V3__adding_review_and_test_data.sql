CREATE TABLE reviews (

                         id BIGSERIAL PRIMARY KEY,

                         tmdb_id VARCHAR(255) NOT NULL,

                         content TEXT,

                         rating INT NOT NULL,

                         created_at TIMESTAMP NOT NULL,

                         owner_id BIGINT NOT NULL

);

-- BCrypt dla "password123"


INSERT INTO users (
    email,
    password_hash,
    role
)
VALUES
    (
        'admin@cinema.pl',
        '$2a$10$7EqJtq98hPqEX7fNZaFWoO5Q6Q0jrISFRCGDpa2BkLomPvKgJo6m2',
        'ADMIN'
    ),
    (
        'user1@cinema.pl',
        '$2a$10$7EqJtq98hPqEX7fNZaFWoO5Q6Q0jrISFRCGDpa2BkLomPvKgJo6m2',
        'USER'
    ),
    (
        'user2@cinema.pl',
        '$2a$10$7EqJtq98hPqEX7fNZaFWoO5Q6Q0jrISFRCGDpa2BkLomPvKgJo6m2',
        'USER'
    ),
    (
        'vip@cinema.pl',
        '$2a$10$7EqJtq98hPqEX7fNZaFWoO5Q6Q0jrISFRCGDpa2BkLomPvKgJo6m2',
        'USER'
    ),
    (
        'employee@cinema.pl',
        '$2a$10$7EqJtq98hPqEX7fNZaFWoO5Q6Q0jrISFRCGDpa2BkLomPvKgJo6m2',
        'ADMIN'
    );



INSERT INTO hall (name, rows, columns, type)
VALUES
    ('Sala 1 IMAX', 12, 18, 'NORMAL'),
    ('Sala 2 Classic', 10, 16, 'IMAX'),
    ('Sala 3 VIP Gold', 8, 12, 'VIP'),
    ('Sala 4 Family', 9, 14, '4DX'),
    ('Sala 5 Dolby Atmos', 11, 17, 'NORMAL'),
    ('Sala 6 Retro', 7, 10, '4DX'),
    ('Sala 7 Platinum VIP', 6, 10, 'VIP'),
    ('Sala 8 Action', 12, 20, 'IMAX'),
    ('Sala 9 Horror Room', 8, 13, 'NORMAL'),
    ('Sala 10 Twix', 5, 8, 'VIP');





INSERT INTO screening (
    hall_id,
    start_time,
    price,
    tmdb_movie_id
)
VALUES
    ((SELECT id FROM hall WHERE name = 'Sala 1 IMAX'), NOW() + INTERVAL '1 hour', 39.99, 603692),
    ((SELECT id FROM hall WHERE name = 'Sala 4 Family'), NOW() + INTERVAL '2 hours', 31.99, 872585),
    ((SELECT id FROM hall WHERE name = 'Sala 10 Twix'), NOW() + INTERVAL '3 hours', 59.99, 693134),
    ((SELECT id FROM hall WHERE name = 'Sala 1 IMAX'), NOW() + INTERVAL '4 hours', 28.99, 940721),
    ((SELECT id FROM hall WHERE name = 'Sala 9 Horror Room'), NOW() + INTERVAL '5 hours', 42.99, 385687),
    ((SELECT id FROM hall WHERE name = 'Sala 9 Horror Room'), NOW() + INTERVAL '6 hours', 25.99, 762509),
    ((SELECT id FROM hall WHERE name = 'Sala 1 IMAX'), NOW() + INTERVAL '7 hours', 64.99, 299536),
    ((SELECT id FROM hall WHERE name = 'Sala 4 Family'), NOW() + INTERVAL '8 hours', 33.99, 615656),
    ((SELECT id FROM hall WHERE name = 'Sala 10 Twix'), NOW() + INTERVAL '9 hours', 29.99, 447365),
    ((SELECT id FROM hall WHERE name = 'Sala 6 Retro'), NOW() + INTERVAL '10 hours', 69.99, 872906);


INSERT INTO seat_reservation (
    row_number,
    column_number,
    screening_id,
    owner_email
)
VALUES
    (
        1,
        1,
        (
            SELECT id
            FROM screening
            WHERE tmdb_movie_id = 603692
            LIMIT 1
    ),
    'adam@example.com'
    ),
(
    1,
    2,
    (
        SELECT id
        FROM screening
        WHERE tmdb_movie_id = 603692
        LIMIT 1
    ),
    'ewa@example.com'
),
(
    2,
    5,
    (
        SELECT id
        FROM screening
        WHERE tmdb_movie_id = 872585
        LIMIT 1
    ),
    'jan@example.com'
),
(
    3,
    6,
    (
        SELECT id
        FROM screening
        WHERE tmdb_movie_id = 872585
        LIMIT 1
    ),
    'ola@example.com'
),
(
    4,
    7,
    (
        SELECT id
        FROM screening
        WHERE tmdb_movie_id = 693134
        LIMIT 1
    ),
    'vip@example.com'
),
(
    2,
    3,
    (
        SELECT id
        FROM screening
        WHERE tmdb_movie_id = 940721
        LIMIT 1
    ),
    'family@example.com'
),
(
    5,
    8,
    (
        SELECT id
        FROM screening
        WHERE tmdb_movie_id = 385687
        LIMIT 1
    ),
    'movie@example.com'
),
(
    6,
    9,
    (
        SELECT id
        FROM screening
        WHERE tmdb_movie_id = 762509
        LIMIT 1
    ),
    'retro@example.com'
),
(
    3,
    4,
    (
        SELECT id
        FROM screening
        WHERE tmdb_movie_id = 299536
        LIMIT 1
    ),
    'premium@example.com'
),
(
    1,
    1,
    (
        SELECT id
        FROM screening
        WHERE tmdb_movie_id = 615656
        LIMIT 1
    ),
    'action@example.com'
);



INSERT INTO reviews(
    tmdb_id,
    content,
    rating,
    created_at,
    owner_id
)
VALUES
    (
        '936075',
        'FAJNA OPINIA EPICKA OGOLNIE HEJ',
        4,
        NOW(),
        (
            SELECT id
            FROM users
            WHERE email = 'admin@cinema.pl'
        )
    ),
    (
        '936075',
        'NO SPOKO',
        1,
        NOW(),
        (
            SELECT id
            FROM users
            WHERE email = 'user1@cinema.pl'
        )
    ),
    (
        '936075',
        'DOBRE',
        5,
        NOW(),
        (
            SELECT id
            FROM users
            WHERE email = 'user2@cinema.pl'
        )
    ),
    (
        '936075',
        '',
        4,
        NOW(),
        (
            SELECT id
            FROM users
            WHERE email = 'vip@cinema.pl'
        )
    ),
    (
        '936075',
        'ASD',
        4,
        NOW(),
        (
            SELECT id
            FROM users
            WHERE email = 'admin@cinema.pl'
        )
    ),
    (
        '936075',
        'KOZACKI FILM',
        10,
        NOW(),
        (
            SELECT id
            FROM users
            WHERE email = 'employee@cinema.pl'
        )
    ),
    (
        '936075',
        'Dobraasdiojdfjikosndjiolkfhnsadljknfljkasdnl;fjknas;jdnfj;ikasdjk;lfnj;klasdjnfjkl;asd;jklofjj;klasddnfjk;asiklujdnflhjkasndjk;nfjk;asnmdfasd',
        4,
        NOW(),
        (
            SELECT id
            FROM users
            WHERE email = 'admin@cinema.pl'
        )
    ),
    (
        '936075',
        'a ok',
        2,
        NOW(),
        (
            SELECT id
            FROM users
            WHERE email = 'admin@cinema.pl'
        )
    ),
    (
        '936075',
        'niedobry film',
        1,
        NOW(),
        (
            SELECT id
            FROM users
            WHERE email = 'admin@cinema.pl'
        )
    );



