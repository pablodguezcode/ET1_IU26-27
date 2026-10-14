# ET1 · Definición de tests y pruebas de validación

Entrega ET1 de la asignatura **Interfaces de Usuario** (curso 2026-2027), de la universidad de **Uvigo**.

Definición, para cada atributo de las tablas del enunciado, de los **tests de validación**
(con su mensaje al usuario) y de la **batería de pruebas** que verifica cada test,
tanto en su resultado positivo como negativo.

## Contenido

| Fichero | Entidad | Atributos |
|---|---|---|
| `accion_tests.js` | accion | id_accion, nombre_accion, descrip_accion |
| `funcionalidad_tests.js` | funcionalidad | id_funcionalidad, nombre_funcionalidad, descrip_funcionalidad |
| `funcionalidad_accion_tests.js` | funcionalidad_accion | id_funcionalidad, id_accion |
| `persona_tests.js` | persona | dni, nombre, apellidos, fecha de nacimiento, dirección, teléfono, email, foto |
| `rol_tests.js` | rol | id_rol, rol_name, rol_description |
| `rolaccionfuncionalidad_tests.js` | rolaccionfuncionalidad | id_funcionalidad, id_accion, id_rol |
| `usuario_tests.js` | usuario | dni, usuario, contrasena, id_rol |

## Formato

Cada fichero define dos variables globales: `<entidad>_def_tests` y `<entidad>_pruebas`.

**Definición de test** (9 campos):
`[entidad, campo, elemento, nº_def, descripción, validación_atómica, acción, resultado_esperado, mensaje]`

**Prueba** (7 campos):
`[entidad, campo, nº_def, nº_prueba, acción, {campo: valor}, resultado_esperado]`

- Acciones: `ADD`, `EDIT` y `SEARCH`.
- Validaciones atómicas: `min_size`, `max_size`, `format`, `personalized` y `valid`
  (en foto: `format_name_file`, `type_file`, `max_size_file`).
- Resultado esperado: `true` si es válido o `<campo>_<validación>_ko` si falla.

## Criterios de diseño

### Comunes a todas las entidades

- "Numérico min 1 max 11" se interpreta como número de **dígitos** (`int(11)`).
- Acciones: `ADD`, `EDIT` y `SEARCH`. En `SEARCH` no se define `min_size`: el filtro es opcional y un valor vacío significa "sin filtro".
- Cada atributo tiene un test `valid` que confirma el caso correcto.
- Las pruebas de error incumplen un solo criterio, para que el resultado esperado tenga una única causa.
- Cada fichero incluye al inicio un comentario con las decisiones propias.

### accion

- `id_accion`: dígitos, 1 a 11. Se mantienen los tests en `ADD` aunque el id sea autoincremental.
- `nombre_accion`: alfabético con ñ y acentos, 5 a 48. Sin espacios ni dígitos.
- `descrip_accion`: alfabético con ñ y acentos, espacios y puntuación española (`. , ; : ¿ ? ¡ ! ( ) [ ] - " ' …`), 5 a 200. Sin dígitos ni símbolos como `% & # @ $ < >`.

### rol

- `id_rol`: dígitos, 1 a 11.
- `rol_name`: alfabético, 5 a 48. Se admiten ñ y acentos (decisión propia, ya que el enunciado solo dice "alfabético"). Sin espacios ni dígitos.
- `rol_description`: mismo criterio que `descrip_accion`.

### funcionalidad

- `id_funcionalidad`: dígitos, 1 a 11.
- `nombre_funcionalidad`: alfabético, 5 a 48. Sin espacios ni dígitos.
- `descrip_funcionalidad`: alfabético, espacios y signos de puntuación, 5 a 200 (`textarea`).

### funcionalidad_accion

- `id_funcionalidad` e `id_accion` forman la clave primaria compuesta y son claves foráneas, introducidas mediante `select`.
- `min_size` equivale a seleccionar un valor obligatoriamente. `max_size` y `format` se mantienen para detectar valores manipulados.
- No se definen tests de unicidad del par ni de existencia de los ids, al ser comprobaciones de servidor.

### rolaccionfuncionalidad

- `id_funcionalidad`, `id_accion` e `id_rol` forman la clave primaria compuesta y se introducen mediante `select`.
- Mismos tests que en `funcionalidad_accion` para cada uno de los tres ids.

### persona

- `dni`: 8 dígitos + letra **mayúscula** de control (algoritmo módulo 23). No se admiten NIE ni minúsculas. Tests en `ADD`, `EDIT` y `SEARCH` (en búsqueda se admite un DNI parcial de hasta 9 caracteres).
- `nombre_persona`: alfabético con ñ, acentos, puntos, guiones y espacio, 2 a 45.
- `apellidos_persona`: mismo criterio, 3 a 100.
- `fechaNacimiento_persona`: formato `dd/mm/aaaa`, y que la fecha exista en el calendario.
- `direccion_persona`: alfanumérico con ñ, acentos, puntos, guiones, punto y coma, espacio y `/`, 10 a 200. La coma **no** está permitida.
- `telefono_persona`: 9 dígitos, y debe empezar por 6, 7, 8 o 9.
- `email_persona`: formato de email válido, máximo 45 caracteres (tamaño de la columna).
- `foto_persona`: fichero `jpg` o `jpeg`, nombre alfabético y punto (3 a 15 caracteres), tamaño hasta 2 MB (2.097.152 bytes). En `EDIT` la foto es opcional.

### usuario

- `dni`: `ADD`, `EDIT` y `SEARCH`. Es clave primaria y se permite modificarlo, por lo que en `EDIT` se aplican las mismas restricciones que en `ADD` (`min_size`, `max_size`, `format` y letra de control). En `SEARCH` se exige el DNI completo.
- `usuario`: alfabético **sin ñ ni acentos**, 5 a 45.
- `contrasena`: alfabético **sin ñ ni acentos**, 8 a 45. Solo `ADD` y `EDIT`: es un dato sensible y no se usa como criterio de búsqueda. Aunque en la base de datos admite `NULL`, se trata como obligatoria porque el enunciado fija un mínimo.
- `id_rol`: `select`, dígitos, 1 a 11.

## Autores

- [@Miguel Ángel](https://github.com/miguiquintas2-oss)
- [@Federico](https://github.com/ElElectrico)
- [@Raúl](https://github.com/Raulete769)
- [@Pablo](https://github.com/pablodguezcode)

## Aviso

Trabajo académico. Todos los derechos reservados. No se permite su reutilización sin autorización de los autores.