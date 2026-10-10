/* -----------------------------------------------------------------------------
   ENTIDAD: rol
   -----------------------------------------------------------------------------
   ESTRUCTURA:
 
   ["entidad", "campo", "tipo", "nº test", "descripción_Test", "metodo", "acción",
       "Resultado Esperado", "mensaje"]
----------------------------------------------------------------------------- */
 
/* -----------------------------------------------------------------------------
   DECISIONES DE DISEÑO Y ACLARACIONES (entidad rol)
   -----------------------------------------------------------------------------
   Requisitos del enunciado: id_rol numérico (min 1, max 11); rol_name alfabético
   (min 5, max 48); rol_description alfabético con ñ, espacio y signos de
   puntuación (min 5, max 200).
 
   Aviso importante: rol_name figura en el enunciado solo como "Alfabético", sin
   "con ñ" (a diferencia de los demás campos de texto). Admitir ñ y acentos ahí es
   decisión propia; si se quisiera la lectura literal, habría que pasar a
   format_ko los valores con ñ/acentos de rol_name (Gestión, Dueño, Árbitro,
   Pingüino, Edición, Diseñador).
 
   Criterios comunes (decisiones propias, el enunciado no los especifica):
   1. ñ y acentos: se admiten en todos los campos de texto de esta entidad,
      salvo que el enunciado diga expresamente "sin" (aquí no lo dice en ninguno).
      Motivo: comodidad del usuario (Interfaces de Usuario); nombres y
      descripciones se escriben en español natural.
   2. Conjunto de caracteres "alfabético" que aceptados en caso de no indicarse lo
      contrario: A-Z a-z, ñ Ñ, áéíóúÁÉÍÓÚ y üÜ.
   3. Espacios: NO se admiten en los nombres (el enunciado solo los lista en las
      descripciones). Dígitos: no se admiten en ningún campo de texto.
   4. Puntuación admitida en las descripciones (puntuación española):
      . , ; : ¿ ? ¡ ! ( ) [ ] - " ' …
      No se admiten otros símbolos (% & # @ $ < >): las pruebas format_ko de las
      descripciones los usan.
   5. Cada prueba format_ko incumple UN solo criterio (un dígito, un símbolo o un
      espacio), para que el resultado esperado no tenga dos causas posibles.
   6. Tests y pruebas de id_* en ADD: se mantienen aunque el id sea autoincremental
      porque la entrega los exige.
   7. Los valores "a".repeat(n) comprueban los límites exactos de tamaño.
----------------------------------------------------------------------------- */
 
var rol_def_tests = [
 
//Acción: ADD
 
    ["rol", "id_rol", "input", 1, "Comprobar tamaño mínimo", "min_size", "ADD", "id_rol_min_size_ko", "El identificador del rol es obligatorio, introduzca por lo menos 1 dígito"],
 
    ["rol", "id_rol", "input", 2, "Comprobar tamaño máximo", "max_size", "ADD", "id_rol_max_size_ko", "El identificador del rol es demasiado largo, introduzca hasta 11 dígitos"],
 
    ["rol", "id_rol", "input", 3, "Comprobar si el formato del identificador es correcto", "format", "ADD", "id_rol_format_ko", "El formato del identificador es incorrecto. Solo se admiten dígitos numéricos, sin signos ni decimales"],
 
    ["rol", "id_rol", "input", 4, "Valor correcto", "valid", "ADD", true, "Éxito"],
 
    ["rol", "rol_name", "input", 5, "Comprobar tamaño mínimo", "min_size", "ADD", "rol_name_min_size_ko", "El nombre del rol es corto, introduzca por lo menos 5 caracteres"],
 
    ["rol", "rol_name", "input", 6, "Comprobar tamaño máximo", "max_size", "ADD", "rol_name_max_size_ko", "El nombre del rol es demasiado largo, introduzca hasta 48 caracteres"],
 
    ["rol", "rol_name", "input", 7, "Comprobar si el formato del nombre del rol es correcto", "format", "ADD", "rol_name_format_ko", "El formato del nombre del rol es incorrecto. Solo se admiten caracteres alfabéticos (con la ñ y acentos incluidos), sin espacios, números ni signos"],
 
    ["rol", "rol_name", "input", 8, "Valor correcto", "valid", "ADD", true, "Éxito"],
 
    ["rol", "rol_description", "textarea", 9, "Comprobar tamaño mínimo", "min_size", "ADD", "rol_description_min_size_ko", "La descripción del rol es corta, introduzca por lo menos 5 caracteres"],
 
    ["rol", "rol_description", "textarea", 10, "Comprobar tamaño máximo", "max_size", "ADD", "rol_description_max_size_ko", "La descripción del rol es demasiado larga, introduzca hasta 200 caracteres"],
 
    ["rol", "rol_description", "textarea", 11, "Comprobar si el formato de la descripción es correcto", "format", "ADD", "rol_description_format_ko", "El formato de la descripción es incorrecto. Los caracteres admitidos son el alfabeto (con la ñ y acentos incluidos), espacios y signos de puntuación, sin números"],
 
    ["rol", "rol_description", "textarea", 12, "Valor correcto", "valid", "ADD", true, "Éxito"],
 
 
 
//Acción: EDIT
 
    ["rol", "id_rol", "input", 13, "Comprobar tamaño mínimo", "min_size", "EDIT", "id_rol_min_size_ko", "El identificador del rol es obligatorio, introduzca por lo menos 1 dígito"],
 
    ["rol", "id_rol", "input", 14, "Comprobar tamaño máximo", "max_size", "EDIT", "id_rol_max_size_ko", "El identificador del rol es demasiado largo, introduzca hasta 11 dígitos"],
 
    ["rol", "id_rol", "input", 15, "Comprobar si el formato del identificador es correcto", "format", "EDIT", "id_rol_format_ko", "El formato del identificador es incorrecto. Solo se admiten dígitos numéricos, sin signos ni decimales"],
 
    ["rol", "id_rol", "input", 16, "Valor correcto", "valid", "EDIT", true, "Éxito"],
 
    ["rol", "rol_name", "input", 17, "Comprobar tamaño mínimo", "min_size", "EDIT", "rol_name_min_size_ko", "El nombre del rol es corto, introduzca por lo menos 5 caracteres"],
 
    ["rol", "rol_name", "input", 18, "Comprobar tamaño máximo", "max_size", "EDIT", "rol_name_max_size_ko", "El nombre del rol es demasiado largo, introduzca hasta 48 caracteres"],
 
    ["rol", "rol_name", "input", 19, "Comprobar si el formato del nombre del rol es correcto", "format", "EDIT", "rol_name_format_ko", "El formato del nombre del rol es incorrecto. Solo se admiten caracteres alfabéticos (con la ñ y acentos incluidos), sin espacios, números ni signos"],
 
    ["rol", "rol_name", "input", 20, "Valor correcto", "valid", "EDIT", true, "Éxito"],
 
    ["rol", "rol_description", "textarea", 21, "Comprobar tamaño mínimo", "min_size", "EDIT", "rol_description_min_size_ko", "La descripción del rol es corta, introduzca por lo menos 5 caracteres"],
 
    ["rol", "rol_description", "textarea", 22, "Comprobar tamaño máximo", "max_size", "EDIT", "rol_description_max_size_ko", "La descripción del rol es demasiado larga, introduzca hasta 200 caracteres"],
 
    ["rol", "rol_description", "textarea", 23, "Comprobar si el formato de la descripción es correcto", "format", "EDIT", "rol_description_format_ko", "El formato de la descripción es incorrecto. Los caracteres admitidos son el alfabeto (con la ñ y acentos incluidos), espacios y signos de puntuación, sin números"],
 
    ["rol", "rol_description", "textarea", 24, "Valor correcto", "valid", "EDIT", true, "Éxito"],
 
 
 
//Acción: SEARCH
 
    ["rol", "id_rol", "input", 25, "Comprobar tamaño máximo", "max_size", "SEARCH", "id_rol_max_size_ko", "El identificador del rol es demasiado largo, introduzca hasta 11 dígitos"],
 
    ["rol", "id_rol", "input", 26, "Comprobar si el formato del identificador es correcto", "format", "SEARCH", "id_rol_format_ko", "El formato del identificador es incorrecto. Solo se admiten dígitos numéricos, sin signos ni decimales"],
 
    ["rol", "id_rol", "input", 27, "Valor correcto", "valid", "SEARCH", true, "Éxito"],
 
    ["rol", "rol_name", "input", 28, "Comprobar tamaño máximo", "max_size", "SEARCH", "rol_name_max_size_ko", "El nombre del rol es demasiado largo, introduzca hasta 48 caracteres"],
 
    ["rol", "rol_name", "input", 29, "Comprobar si el formato del nombre del rol es correcto", "format", "SEARCH", "rol_name_format_ko", "El formato del nombre del rol es incorrecto. Solo se admiten caracteres alfabéticos (con la ñ y acentos incluidos), sin espacios, números ni signos"],
 
    ["rol", "rol_name", "input", 30, "Valor correcto", "valid", "SEARCH", true, "Éxito"],
 
    ["rol", "rol_description", "textarea", 31, "Comprobar tamaño máximo", "max_size", "SEARCH", "rol_description_max_size_ko", "La descripción del rol es demasiado larga, introduzca hasta 200 caracteres"],
 
    ["rol", "rol_description", "textarea", 32, "Comprobar si el formato de la descripción es correcto", "format", "SEARCH", "rol_description_format_ko", "El formato de la descripción es incorrecto. Los caracteres admitidos son el alfabeto (con la ñ y acentos incluidos), espacios y signos de puntuación, sin números"],
 
    ["rol", "rol_description", "textarea", 33, "Valor correcto", "valid", "SEARCH", true, "Éxito"],
 
 
];
 
 
/* -----------------------------------------------------------------------------
   ESTRUCTURA:
 
   ["entidad", "campo", "nº test", "nº prueba", "acción", {"atributo": "valor"},
        "Resultado Esperado"]
----------------------------------------------------------------------------- */
 
var rol_pruebas = [
 
//Acción: ADD
 
    ["rol", "id_rol", 1, 1, "ADD", {"id_rol": ""}, "id_rol_min_size_ko"],
 
    ["rol", "id_rol", 2, 2, "ADD", {"id_rol": "123456789012"}, "id_rol_max_size_ko"],
 
    ["rol", "id_rol", 3, 3, "ADD", {"id_rol": "1a"}, "id_rol_format_ko"],
 
    ["rol", "id_rol", 3, 4, "ADD", {"id_rol": "-3"}, "id_rol_format_ko"],
 
    ["rol", "id_rol", 3, 5, "ADD", {"id_rol": "1.5"}, "id_rol_format_ko"],
 
    ["rol", "id_rol", 3, 6, "ADD", {"id_rol": "1 2"}, "id_rol_format_ko"],
 
    ["rol", "id_rol", 4, 7, "ADD", {"id_rol": "7"}, true],
 
    ["rol", "id_rol", 4, 8, "ADD", {"id_rol": "12345678901"}, true],
 
    ["rol", "rol_name", 5, 9, "ADD", {"rol_name": "Jefe"}, "rol_name_min_size_ko"],
 
    ["rol", "rol_name", 6, 10, "ADD", {"rol_name": "a".repeat(49)}, "rol_name_max_size_ko"],
 
    ["rol", "rol_name", 7, 11, "ADD", {"rol_name": "admin1"}, "rol_name_format_ko"],
 
    ["rol", "rol_name", 7, 12, "ADD", {"rol_name": "admin_"}, "rol_name_format_ko"],
 
    ["rol", "rol_name", 7, 13, "ADD", {"rol_name": "admin istrador"}, "rol_name_format_ko"], // criterio propio: espacios no admitidos en nombres
 
    ["rol", "rol_name", 8, 14, "ADD", {"rol_name": "Administrador"}, true],
 
    ["rol", "rol_name", 8, 15, "ADD", {"rol_name": "Admin"}, true],
 
    ["rol", "rol_name", 8, 16, "ADD", {"rol_name": "a".repeat(48)}, true],
 
    ["rol", "rol_name", 8, 17, "ADD", {"rol_name": "Gestión"}, true], // criterio propio: ñ/acentos admitidos (el enunciado solo dice "Alfabético")
 
    ["rol", "rol_name", 8, 18, "ADD", {"rol_name": "Dueño"}, true], // criterio propio: ñ/acentos admitidos (el enunciado solo dice "Alfabético")
 
    ["rol", "rol_name", 8, 19, "ADD", {"rol_name": "Árbitro"}, true], // criterio propio: ñ/acentos admitidos (el enunciado solo dice "Alfabético")
 
    ["rol", "rol_name", 8, 20, "ADD", {"rol_name": "Pingüino"}, true], // criterio propio: ñ/acentos admitidos (el enunciado solo dice "Alfabético")
 
    ["rol", "rol_description", 9, 21, "ADD", {"rol_description": "Role"}, "rol_description_min_size_ko"],
 
    ["rol", "rol_description", 10, 22, "ADD", {"rol_description": "a".repeat(201)}, "rol_description_max_size_ko"],
 
    ["rol", "rol_description", 11, 23, "ADD", {"rol_description": "Rol de administración 24 horas"}, "rol_description_format_ko"],
 
    ["rol", "rol_description", 11, 24, "ADD", {"rol_description": "Rol de administración #total"}, "rol_description_format_ko"], // símbolo fuera de la puntuación española admitida
 
    ["rol", "rol_description", 11, 25, "ADD", {"rol_description": "Rol de administración <señor>"}, "rol_description_format_ko"], // símbolo fuera de la puntuación española admitida
 
    ["rol", "rol_description", 12, 26, "ADD", {"rol_description": "Rol con permisos de administración: alta, baja y modificación de usuarios."}, true],
 
    ["rol", "rol_description", 12, 27, "ADD", {"rol_description": "Roles"}, true],
 
    ["rol", "rol_description", 12, 28, "ADD", {"rol_description": "Rol de diseño y gestión"}, true],
 
    ["rol", "rol_description", 12, 29, "ADD", {"rol_description": "a".repeat(200)}, true],
 
 
 
//Acción: EDIT
 
    ["rol", "id_rol", 13, 30, "EDIT", {"id_rol": ""}, "id_rol_min_size_ko"],
 
    ["rol", "id_rol", 14, 31, "EDIT", {"id_rol": "123456789012"}, "id_rol_max_size_ko"],
 
    ["rol", "id_rol", 15, 32, "EDIT", {"id_rol": "1a"}, "id_rol_format_ko"],
 
    ["rol", "id_rol", 15, 33, "EDIT", {"id_rol": "-3"}, "id_rol_format_ko"],
 
    ["rol", "id_rol", 15, 34, "EDIT", {"id_rol": "1.5"}, "id_rol_format_ko"],
 
    ["rol", "id_rol", 15, 35, "EDIT", {"id_rol": "1 2"}, "id_rol_format_ko"],
 
    ["rol", "id_rol", 16, 36, "EDIT", {"id_rol": "7"}, true],
 
    ["rol", "id_rol", 16, 37, "EDIT", {"id_rol": "12345678901"}, true],
 
    ["rol", "rol_name", 17, 38, "EDIT", {"rol_name": "Jefe"}, "rol_name_min_size_ko"],
 
    ["rol", "rol_name", 18, 39, "EDIT", {"rol_name": "a".repeat(49)}, "rol_name_max_size_ko"],
 
    ["rol", "rol_name", 19, 40, "EDIT", {"rol_name": "admin1"}, "rol_name_format_ko"],
 
    ["rol", "rol_name", 19, 41, "EDIT", {"rol_name": "admin-istrador"}, "rol_name_format_ko"],
 
    ["rol", "rol_name", 19, 42, "EDIT", {"rol_name": "edición1"}, "rol_name_format_ko"],
 
    ["rol", "rol_name", 20, 43, "EDIT", {"rol_name": "Editor"}, true],
 
    ["rol", "rol_name", 20, 44, "EDIT", {"rol_name": "Admin"}, true],
 
    ["rol", "rol_name", 20, 45, "EDIT", {"rol_name": "a".repeat(48)}, true],
 
    ["rol", "rol_name", 20, 46, "EDIT", {"rol_name": "Edición"}, true], // criterio propio: ñ/acentos admitidos (el enunciado solo dice "Alfabético")
 
    ["rol", "rol_name", 20, 47, "EDIT", {"rol_name": "Diseñador"}, true], // criterio propio: ñ/acentos admitidos (el enunciado solo dice "Alfabético")
 
    ["rol", "rol_description", 21, 48, "EDIT", {"rol_description": "Role"}, "rol_description_min_size_ko"],
 
    ["rol", "rol_description", 22, 49, "EDIT", {"rol_description": "a".repeat(201)}, "rol_description_max_size_ko"],
 
    ["rol", "rol_description", 23, 50, "EDIT", {"rol_description": "Rol de edición nivel 2"}, "rol_description_format_ko"],
 
    ["rol", "rol_description", 23, 51, "EDIT", {"rol_description": "Rol de edición @limitada"}, "rol_description_format_ko"], // símbolo fuera de la puntuación española admitida
 
    ["rol", "rol_description", 23, 52, "EDIT", {"rol_description": "Rol de edición $limitada"}, "rol_description_format_ko"], // símbolo fuera de la puntuación española admitida
 
    ["rol", "rol_description", 24, 53, "EDIT", {"rol_description": "Rol con permisos de edición de contenidos; no permite borrado."}, true],
 
    ["rol", "rol_description", 24, 54, "EDIT", {"rol_description": "Roles"}, true],
 
    ["rol", "rol_description", 24, 55, "EDIT", {"rol_description": "Rol de diseño y gestión"}, true],
 
    ["rol", "rol_description", 24, 56, "EDIT", {"rol_description": "a".repeat(200)}, true],
 
 
 
//Acción: SEARCH
 
    ["rol", "id_rol", 25, 57, "SEARCH", {"id_rol": "123456789012"}, "id_rol_max_size_ko"],
 
    ["rol", "id_rol", 26, 58, "SEARCH", {"id_rol": "3b"}, "id_rol_format_ko"],
 
    ["rol", "id_rol", 26, 59, "SEARCH", {"id_rol": "+3"}, "id_rol_format_ko"],
 
    ["rol", "id_rol", 26, 60, "SEARCH", {"id_rol": "1 2"}, "id_rol_format_ko"],
 
    ["rol", "id_rol", 27, 61, "SEARCH", {"id_rol": "12"}, true],
 
    ["rol", "id_rol", 27, 62, "SEARCH", {"id_rol": ""}, true],
 
    ["rol", "id_rol", 27, 63, "SEARCH", {"id_rol": "12345678901"}, true],
 
    ["rol", "rol_name", 28, 64, "SEARCH", {"rol_name": "a".repeat(49)}, "rol_name_max_size_ko"],
 
    ["rol", "rol_name", 29, 65, "SEARCH", {"rol_name": "admin2"}, "rol_name_format_ko"],
 
    ["rol", "rol_name", 29, 66, "SEARCH", {"rol_name": "admin."}, "rol_name_format_ko"],
 
    ["rol", "rol_name", 29, 67, "SEARCH", {"rol_name": "gestión1"}, "rol_name_format_ko"],
 
    ["rol", "rol_name", 30, 68, "SEARCH", {"rol_name": "Invitado"}, true],
 
    ["rol", "rol_name", 30, 69, "SEARCH", {"rol_name": "adm"}, true],
 
    ["rol", "rol_name", 30, 70, "SEARCH", {"rol_name": ""}, true],
 
    ["rol", "rol_name", 30, 71, "SEARCH", {"rol_name": "a".repeat(48)}, true],
 
    ["rol", "rol_name", 30, 72, "SEARCH", {"rol_name": "Gestión"}, true], // criterio propio: ñ/acentos admitidos (el enunciado solo dice "Alfabético")
 
    ["rol", "rol_name", 30, 73, "SEARCH", {"rol_name": "Dueño"}, true], // criterio propio: ñ/acentos admitidos (el enunciado solo dice "Alfabético")
 
    ["rol", "rol_description", 31, 74, "SEARCH", {"rol_description": "a".repeat(201)}, "rol_description_max_size_ko"],
 
    ["rol", "rol_description", 32, 75, "SEARCH", {"rol_description": "Rol de nivel 3"}, "rol_description_format_ko"],
 
    ["rol", "rol_description", 32, 76, "SEARCH", {"rol_description": "Rol #admin"}, "rol_description_format_ko"], // símbolo fuera de la puntuación española admitida
 
    ["rol", "rol_description", 32, 77, "SEARCH", {"rol_description": "Rol de gestión $"}, "rol_description_format_ko"], // símbolo fuera de la puntuación española admitida
 
    ["rol", "rol_description", 33, 78, "SEARCH", {"rol_description": "Rol con permisos de lectura"}, true],
 
    ["rol", "rol_description", 33, 79, "SEARCH", {"rol_description": "Rol de ad"}, true],
 
    ["rol", "rol_description", 33, 80, "SEARCH", {"rol_description": "Rol de diseño"}, true],
 
    ["rol", "rol_description", 33, 81, "SEARCH", {"rol_description": "Rol de lectura, solo consulta."}, true],
 
    ["rol", "rol_description", 33, 82, "SEARCH", {"rol_description": ""}, true],
 
];