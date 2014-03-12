#pragma strict
public var cuboPrefab1 : GameObject;
public var cuboPrefab2 : GameObject;
public var cuboPrefab3 : GameObject;
function Start () {
Instantiate(cuboPrefab1, Vector3(-1,0,0), Quaternion.identity);
Instantiate(cuboPrefab2, Vector3(0,0,0), Quaternion.identity);
Instantiate(cuboPrefab3, Vector3(1,0,0), Quaternion.identity);
}

function Update () {

}