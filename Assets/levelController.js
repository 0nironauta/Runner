#pragma strict
public var cuboPrefab1 : GameObject;
function Start () {
Instantiate(cuboPrefab1, Vector3(-1,1,0), Quaternion.identity);
Instantiate(cuboPrefab1, Vector3(-1,1,2), Quaternion.identity);
Instantiate(cuboPrefab1, Vector3(-1,1,4), Quaternion.identity);
Instantiate(cuboPrefab1, Vector3(-1,0,0), Quaternion.identity);
Instantiate(cuboPrefab1, Vector3(0,0,0), Quaternion.identity);
Instantiate(cuboPrefab1, Vector3(1,0,0), Quaternion.identity);

Instantiate(cuboPrefab1, Vector3(-1,0,0), Quaternion.identity);
Instantiate(cuboPrefab1, Vector3(0,0,0), Quaternion.identity);
Instantiate(cuboPrefab1, Vector3(1,0,0), Quaternion.identity);

Instantiate(cuboPrefab1, Vector3(-1,0,0), Quaternion.identity);
Instantiate(cuboPrefab1, Vector3(0,0,0), Quaternion.identity);
Instantiate(cuboPrefab1, Vector3(1,0,0), Quaternion.identity);

Instantiate(cuboPrefab1, Vector3(-1,0,0), Quaternion.identity);
Instantiate(cuboPrefab1, Vector3(0,0,0), Quaternion.identity);
Instantiate(cuboPrefab1, Vector3(1,0,0), Quaternion.identity);
}

function Update () {
}