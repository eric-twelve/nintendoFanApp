# Formularis - Validacions

## Validacions síncrones

El camp `termeCerca` utilitza:

- Validators.minLength(2): mínim 2 caràcters
- Validators.maxLength(50): màxim 50 caràcters

Aquestes validacions es comproven immediatament quan l'usuari escriu.

## Validació asíncrona

S'implementa el validador `codiDisponibleValidator`, que:

- Fa una petició HTTP simulada a l'API
- Espera 500 ms (delay)
- Retorna `{ sensResultats: true }` si no hi ha resultats

## Debounce

El camp de cerca utilitza `debounceTime(400)` per evitar crides excessives a l'API mentre l'usuari escriu.

## Comportament

- Els errors només es mostren quan el camp ha estat tocat (touched)
- Es mostra un indicador "Validant..." durant la validació asíncrona
- Es pot netejar el camp amb un botó que apareix només si hi ha text