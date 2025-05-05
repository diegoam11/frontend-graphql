### Frontend (Vite + React) | [`https://github.com/diegoam11/frontend-graphql`](https://github.com/diegoam11/frontend-graphql)

1. Clonar el repositorio y posicionarse en la raíz del proyecto.

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Debes asegurarte de que el archivo `.env` esté apuntando al backend local:

   ```env
   VITE_GRAPHQL_API_URL=http://localhost:3000/api/graphql
   ```

   Actualmente el archivo `.env` contiene URLs del entorno desplegado:

   ```env
   VITE_GRAPHQL_API_URL=https://damdev.site/equip/api/graphql
   ```

4. Levantar el servidor de desarrollo:

   ```bash
   npm run dev
   ```
   [`http://localhost:3001/`](http://localhost:3001/)

---
