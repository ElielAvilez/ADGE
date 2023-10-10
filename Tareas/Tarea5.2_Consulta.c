#include <mysql.h>
#include <stdio.h>


int main(int argc, char *argv[] ) {

  // Parámetros de conexión
    MYSQL *conexion;  // Conexión a servidor
    MYSQL_RES *resultados; // Recuperación de resultados
    MYSQL_ROW registro;  // Recuperación de registros
    // char *servidor = "localhost"; // Nombre o IP del Servidor
    char *servidor = &argv[5][0];
    // char *usuario = argv[3]; //Usuario de la base de datos
    char *usuario = &argv[3][0];
    // strcpy(*usuario, argv[3]);
    // char *contra= argv[4]; //Contraseña del usuario
    char *contra = &argv[4][0];
    // strcpy(*contra, argv[4]);
    // char *basedatos = argv[1];  // Nombre de la base de datos
    char *basedatos  = &argv[1][0];
    // strcpy(*basedatos, argv[1]);
    int puerto = 13306; // Puerto del servicio
    conexion = mysql_init(NULL); //Inicializando variable de conexió
    int i;

// Conexión a servidor de base de datos
if(!mysql_real_connect(conexion, servidor, usuario, 	contra , basedatos,  puerto, NULL, 0))
{
    printf("Error: %s\n", mysql_error(conexion));
    exit(1);
}

// // Establece la consultas a realizar
// char sqlForm[]= "SELECT nombre, email, fechamov, tipo, SUM(cantidad) AS Total FROM cuentas AS C INNER JOIN movimientos AS M ON C.idcuenta = M.idcuenta WHERE C.idcuenta = %s GROUP BY nombre, email, fechamov, tipo";
// char sql[300];
// sprintf(sql, sqlForm, argv[1]);

// Ejecuta consulta SQL   
if (mysql_query(conexion, argv[2])) {     
 printf("%s\n", mysql_error(conexion));     
 exit(1); 
 }  

// Recupera dirección de los resultados  
resultados = mysql_store_result(conexion);  
int num = mysql_num_rows(resultados); // numero de registros recuperados

// printf("Lista de %d movimientos\n", num);
printf("Lista de %d clientes\n", num);
// Muestra registros de tabla  
printf("Lista de clientes\n");
printf("%8s %-25s %-30s\n", "Cuenta", "Nombre", "Correo");  
while ((registro = mysql_fetch_row(resultados)) != NULL)     
    printf("%8s %-25s %-30s\n", registro[0], registro[1],registro[2]);   

mysql_free_result(resultados);  // Liberar recursos de resultados
mysql_close(conexion); // Cierra conexión  
return 0;



}