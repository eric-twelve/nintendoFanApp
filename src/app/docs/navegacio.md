# Sistema de navegació

## Mapa de rutes

| Path | Component | Accés |
|---|---|---|
| / | Redirecció a /cataleg | Públic |
| /cataleg | CatalegComponent | Públic |
| /cerca | CercaComponent | Públic |
| /detall/:id | DetallComponent | Públic |
| /preferits | PreferitsComponent | Privat |
| /login | LoginComponent | Públic |
| ** | Redirecció a /cataleg | Públic |

---

## Configuració del router

Les rutes s'han definit al fitxer `app.routes.ts`
exportant una constant `routes` de tipus `Routes`.

El router s'ha configurat a `app.config.ts`
mitjançant:

```ts
provideRouter(routes)