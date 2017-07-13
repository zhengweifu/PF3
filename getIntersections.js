
var raycaster = new THREE.Raycaster();

var mouse = new THREE.Vector2();

function getIntersects( point, objects ) {
	
	mouse.set( ( point.x * 2 ) - 1, - ( point.y * 2 ) + 1 );

	raycaster.setFromCamera( mouse, camera );
	
	return raycaster.intersectObjects( objects );

}

function getMousePosition( dom, x, y ) {

	var rect = dom.getBoundingClientRect();
	return [ ( x - rect.left ) / rect.width, ( y - rect.top ) / rect.height ];

}

function mousemove( event ) {

	var _point = new THREE.Vector2().fromArray(getMousePosition( player.dom, event.clientX, event.clientY ));
	
	var intersections = getIntersects( _point,  this.children );
	console.log(intersections);
}