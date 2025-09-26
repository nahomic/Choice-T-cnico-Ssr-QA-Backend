# Instrucciones para Ejecutar las Pruebas

## Requisitos Previos

*   [Node.js](https://nodejs.org/) (versión 14 o superior)
*   [npm](https://www.npmjs.com/) (normalmente viene con Node.js)
*   [Git](https://git-scm.com/) (para clonar el repositorio)

## Pasos para la Ejecución

1.  **Clonar el Repositorio:**

    Abre la terminal y ejecuta el siguiente comando para clonar el repositorio en tu máquina local:

    ```bash
    git clone <URL_DEL_REPOSITORIO>](https://github.com/nahomic/Choice-T-cnico-Ssr-QA-Backend.git)
    cd <nombre_del_repositorio>
    ```

    Reemplaza `<nombre_del_repositorio>` con el nombre de la carpeta que se creó al clonar.

2.  **Instalar Dependencias:**

    Una vez dentro del directorio del repositorio, instala las dependencias necesarias utilizando npm:

    ```bash
    npm install
    ```

    Este comando instalará todas las dependencias listadas en el archivo `package.json`.

3.  **Ejecutar las Pruebas de Cypress:**

    Puedes ejecutar las pruebas de Cypress de dos maneras:

    *   **Modo Interactivo (GUI):**

        ```bash
        npm run cypress:open
        ```

        Este comando abrirá la interfaz gráfica de Cypress, donde podrás ver y ejecutar las pruebas individualmente.

    *   **Terminal Visual Studio Code**

        npx cypress run --headed

        Este comando ejecutará todas las pruebas en modo headless (sin interfaz gráfica) y mostrará los resultados en la terminal.

## Descripción de las Pruebas Implementadas
**Prueba en la UI:**
Registro de Usuario:
Se ejecuta un test que permite la creación de un nuevo usuario y valida que el registro sea exitoso.

**Prueba en la API:**
Valida que los endpoints /system/ping, /system/version, y otros responden con código 200, con la estructura correcta del cuerpo ( ok, date, etc.), y que el tiempo de respuesta sea menor a 3 segundos. También compruebe que los encabezados contienen la información esperada.
