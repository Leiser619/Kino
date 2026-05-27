> Web Application for exploring and managementing a cinema
## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)


## General Information
- I made this project for my uni project.
- You can explore it in few diffrent ways you can be login logout or login as a admin.


## Technologies Used
- Java 17
- Spring boot 3.5.11
- Postgres 16 alpine
- React 19.2.0
- TypeScript 5.9.3
- Vite
- Tailwind 


## Features
- Spring Security
- Jwt
- Cookies
- Mail sending
- Connection with TMDB


## Screenshots
Login page<br>
<img width="2548" height="1286" alt="LoginPage" src="https://github.com/user-attachments/assets/2334737f-f068-46c7-b041-428ef579cfa6" />

Admin panel<br>
<img width="2240" height="1274" alt="AdminPanel" src="https://github.com/user-attachments/assets/50ca4691-ea18-4564-8e50-b8ba03f078ee" />

Main page<br>
<img width="2523" height="1292" alt="Mainpage" src="https://github.com/user-attachments/assets/1e61a0f3-ecc7-4c05-8bec-4e2753ed52ab" />

Reperotire<br>
<img width="2487" height="1292" alt="Repertois" src="https://github.com/user-attachments/assets/5189f002-f963-4a7b-bf60-21b342ad6f59" />

Reservation page<br>
<img width="1285" height="1113" alt="ReservationPage" src="https://github.com/user-attachments/assets/e4d39cef-266f-4320-8f3e-41f2e4c28fcd" />

Reviews<br>
<img width="2501" height="1199" alt="Reviews" src="https://github.com/user-attachments/assets/fda6ddb1-f363-4bee-8c91-b967c58d814a" />

Confirmation mail<br>
<img width="1680" height="766" alt="Mail" src="https://github.com/user-attachments/assets/ca98cad8-2137-4a24-8db8-00ce6f53ea79" />













## Setup
1.Clone repository<br><br>
2.Create .env file <br>
{
POSTGRES_DB=xx<br>
POSTGRES_USER=xx<br>
POSTGRES_PASSWORD=xx<br>
SPRING_DATASOURCE_URL=xx<br>
SPRING_DATASOURCE_USERNAME=xx<br>
SPRING_DATASOURCE_PASSWORD=xx<br>
TMDB_API_KEY=xx<br>
APP_JWT_SECRET=xx<br>
APP_JWT_EXPIRATION_MINUTES=xx<br>
MAIL_USERNAME=xx<br>
MAIL_PASSWORD=xx<br>
}<br><br>
3.Run application<br>
docker compose up --build<br><br>

4.Stop application<br>
docker compose down


Project uses 3 containers:<br>

Fronend works on port 3000<br>
Backend works on port 8080<br>
DataBase works on port 5432<br>


## Usage
The frontend (React + Vite) communicates with the backend through endpoints starting with /api.
Vite  forwards all /api/* requests to the backend (http://backend:8080)

Backend (Spring Boot) handles business logic,authorizes users using JWT and Cookies,
communicates with the PostgreSQL database,acts as a proxy for the TMDB api.

PostgreSQL stores user data, hashed passwords , screenings, halls, revies etc 


The TMDB is called exclusively by the backend—the frontend does not communicate with it directly.



## Project Status
_InProgres_

## Room for Improvement
Room for improvement:
- Tests
- Translating
- VipCard discount
- Error handlers
- Endpoint role verification
- Improve movieDetailPage
- Payment methods
