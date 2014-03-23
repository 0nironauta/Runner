#pragma strict

// Una variable pública que podrás ver en el inspector.
// Este script va en el prefab del cubo, no en la cámara
public var velocidad : int = -1;

function Update () {
	
		// Desplazamos el cubo (todos los cubos que están en escena ejecutarán este script)
		transform.Translate(Vector3(0,0,velocidad) * Time.deltaTime);

		// Si el cubo no se renderiza en ninguna cámara, lo destruimos
		if (renderer.isVisible == false) Destroy(gameObject);
	
}