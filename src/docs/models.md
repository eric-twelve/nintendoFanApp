# Models de dades

Aquest document descriu el mapeig entre la resposta de l’API i el model intern de l’aplicació.

## Taula de mapeig de camps

| Camp API   | Camp intern | Tipus TypeScript |
|------------|------------ |------------------|
| id         | id          | string           |
| nom        | titol       | string           |
| descripcio | descripcio  | string           |
| categoria  | categoria   | string           |
| preu       | preu        | number           |
| imatge     | imatgeUrl   | string           |
| popular    | esPopular   | boolean          |
| stock      | unitats     | number           |