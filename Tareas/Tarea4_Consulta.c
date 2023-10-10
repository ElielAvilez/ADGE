#include <mysql.h>
#include <stdio.h>


int main(int argc, char *argv[] ) {


MYSQL *conexion;  		  // Conexión a servidor
MYSQL_RES *resultados; 	  // Conjunto de resultados
MYSQL_ROW registro;  	  // Registro de la tabla

char *servidor = "localhost"; 	  // Nombre de Servidor
char *usuario = "eliel"; 	  //Usuario de la base de datos
char *contrasena = "eliel123";	  //Contraseña del usuario
int  puerto = 3306;		  //Contraseña del usuario
char *basedatos = "Trabajo";	 // Nombre de la base de datos

conexion = mysql_init(NULL);

// Conexión a servidor de base de datos
if(!mysql_real_connect(conexion, servidor, usuario, 	contrasena, basedatos,  puerto, NULL, 0))
{
    printf("Error: %s\n", mysql_error(conexion));
    exit(1);
}

// Establece la consultas a realizar
char sqlForm[]= "SELECT nombre, email, fechamov, tipo, SUM(cantidad) AS Total FROM cuentas AS C INNER JOIN movimientos AS M ON C.idcuenta = M.idcuenta WHERE C.idcuenta = %s GROUP BY nombre, email, fechamov, tipo";
char sql[300];
sprintf(sql, sqlForm, argv[1]);

// Envia consulta SQL para la Cuenta
if (mysql_query(conexion, sql)){
    printf("Error al ejecutar la consulta: %s\n", mysql_error(conexion));
    exit(1);
} 

// Recupera dirección de los resultados  
resultados = mysql_store_result(conexion);  
int num = mysql_num_rows(resultados); // numero de registros recuperados

printf("Lista de %d movimientos\n", num);

// Muestra registros de tabla  
printf("Lista de clientes\n");
printf("%-20s %-25s %-30s %-10s %-10s\n", "Nombre", "Correo", "FechaMovimiento", "Tipo", "Total");  
while ((registro = mysql_fetch_row(resultados)) != NULL)     
    printf("%-20s %-25s %-30s %-10s %-10s\n", registro[0], registro[1], registro[2], registro[3], registro[4]);   

mysql_free_result(resultados);  // Liberar recursos de resultados
mysql_close(conexion); // Cierra conexión  
return 0;



}