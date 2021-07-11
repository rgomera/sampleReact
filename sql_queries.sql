-- create db
-- CREATE DATABASE pern_stack_review
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     CONNECTION LIMIT = -1;
-- comment out becuase postgres is created the database using heruko add-ons

-- create table
CREATE TABLE public.users
(
    user_id character varying(255) NOT NULL,
    user_name character varying(100) NOT NULL,
    user_email character varying(100) NOT NULL,
    user_password character varying(255) NOT NULL,
    PRIMARY KEY (user_id)
);

-- insert dummy users
INSERT INTO users(user_id, user_name, user_email, user_password) VALUES('1', 'user1', 'user1@gmail.com', 'user1pass');
INSERT INTO users(user_id, user_name, user_email, user_password) VALUES('2', 'user2', 'user2@gmail.com', 'user2pass');
INSERT INTO users(user_id, user_name, user_email, user_password) VALUES('3', 'user3', 'user3@gmail.com', 'user3pass');
INSERT INTO users(user_id, user_name, user_email, user_password) VALUES('4', 'user4', 'user4@gmail.com', 'user4pass');
INSERT INTO users(user_id, user_name, user_email, user_password) VALUES('5', 'user5', 'user5@gmail.com', 'user5pass');