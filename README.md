https://svkutyrev.github.io/sprint13/
v1.1 releases 1

Реализован функционал REST API для проекта Mesto, для запуска необходимо:

клонируйте репозиторий из ветки develop
установите node modules
устновите базу данных Mongoos
установить POSTMAN

При запросах:

GET /users - выводится JSON список пользователей 
GET /users/id - выводится JSON объек конктретного юзера, если юзер не найден выводится ошибка 
POST /users - создается пользователь, для отправки обязательные поля: name, about, avatar

GET /cards - выводится JSON список всех карточек
POST /cards - создается карточка, для отправки обязательные поля: name, link

При неверных запросах выводится код ошибки и статус - 404
