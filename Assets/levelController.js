#pragma strict
public var cuboPrefab1 : GameObject;

// Creamos 2 variables para controlar el tiempo
private var tiempoInstancia    : float = 2.0; // Cada cuántos segundos se instanciarán nuevos cubos
private var siguienteInstancia : float = 0.0; // Controlará cuándo toca volver a instanciar

/*

Función Start no la vamos a usar por ahora. La comento pero la puedes borrar

function Start () {
	Instantiate(cuboPrefab1, Vector3(-2,1,0), Quaternion.identity);
	Instantiate(cuboPrefab1, Vector3( 0,1,0), Quaternion.identity);
	Instantiate(cuboPrefab1, Vector3( 2,1,0), Quaternion.identity);
}
*/

// Usamos la función FixedUpdate, que se ejecuta 1 vez por frame
function FixedUpdate(){

	// Time.time da el tiempo en segundos desde que comenzó el juego
	// Cada vez que instanciamos, la variable siguienteInstancia crece, 
	// por lo que esta condición se cumple cada 2 segundos (el valor de tiempoInstancia)
	if (Time.time > siguienteInstancia){
		siguienteInstancia = siguienteInstancia + tiempoInstancia;

		// Instanciamos los 3 cubos:
		Instantiate(cuboPrefab1, Vector3(-2,1,0), Quaternion.identity);
		Instantiate(cuboPrefab1, Vector3( 0,1,0), Quaternion.identity);
		Instantiate(cuboPrefab1, Vector3( 2,1,0), Quaternion.identity);
	}
}
