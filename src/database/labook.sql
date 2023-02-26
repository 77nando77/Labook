-- Active: 1676310772151@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT(DATETIME()) NOT NULL
);

CREATE TABLE posts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    creator_id TEXT NOT NULL,
    content TEXT NOT NULL,
    likes INTEGER DEFAULT(0) NOT NULL,
    dislikes INTEGER DEFAULT(0) NOT NULL,
    created_at TEXT DEFAULT(DATETIME()),
    updated_at TEXT DEFAULT(DATETIME()),
    FOREIGN KEY (creator_id) REFERENCES users(id)
);

CREATE TABLE likes_dislikes (
    user_id TEXT NOT NULL,
    post_id TEXT NOT NULL,
    like INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

INSERT INTO users (id,name,email,password, role)
VALUES
    ("u001", "Luiz", "luiz@email.com","1234", "NORMAL"),
    ("u002", "Gustavo", "gustavo@email.com","4321", "NORMAL"),
    ("u003", "Marlene", "marlene@email.com","$2a$12$mgdLQEvyJnyHRm7L1zeSI.TbvtZ7e2HGw31rF7DWX5KtpgNGXzbsS", "ADMIN");

INSERT INTO posts(id, creator_id, content, likes, dislikes)
VALUES
    ("p001", "u002", "academia academia academia", 15, 2),
    ("p002", "u003", "cuidando dos netos", 35, 0),
    ("p003", "u001", "fazendo projetinho", 20, 4);

INSERT INTO likes_dislikes (user_id, post_id, like)
VALUES
    ("u002", "p001", 0),
    ("u003", "p002", 0),
    ("u001", "p003", 0);

SELECT * FROM users;

SELECT * FROM posts;

SELECT * FROM users;

DROP TABLE users;
DROP TABLE likes_dislikes;
DROP TABLE posts;