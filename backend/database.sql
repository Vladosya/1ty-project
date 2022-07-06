CREATE TABLE IF NOT EXISTS notes
(
    id           SERIAL PRIMARY KEY,
    note_id      VARCHAR(255) NOT NULL,
    note_message TEXT         NOT NULL,
    date_create  VARCHAR(255) NOT NULL,
    is_readed    BOOLEAN      NOT NULL DEFAULT 'f',
    date_read    VARCHAR(255)          DEFAULT 'unread'
);
