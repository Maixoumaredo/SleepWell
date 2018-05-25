let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
var keyboard = {};
var view = { height:1, speed:0.05, turnSpeed:Math.PI*0.02 };


// COMPUTER



function init(){
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(70, windowWidth/windowHeight, 0.1, 1000);    

    bedroom = new THREE.Object3D();
	scene.add(bedroom);

	var texturefloor = new THREE.TextureLoader().load( "./images/texturefloor.jpg" );
	texturefloor.wrapS = THREE.RepeatWrapping;
	texturefloor.wrapT = THREE.RepeatWrapping;
	texturefloor.repeat.set( 4, 4 );

	// Walls
    const wall1 = new THREE.Mesh(
		new THREE.PlaneGeometry(10, 5),
		new THREE.MeshPhongMaterial({color: 0xACC0CD, metalness: 0.3, roughness: 0.3})		
    )
    wall1.position.z = -5;
    wall1.position.y = 0.75;
    wall1.castShadow = false;
    wall1.receiveShadow = true;
    bedroom.add(wall1);

    const wall2 = new THREE.Mesh(
		new THREE.PlaneGeometry(10, 5),
		new THREE.MeshPhongMaterial({color: 0xc0d6e4, metalness: 0.3, roughness: 0.3})
    )
    wall2.position.x = -5;
    wall2.position.y = 0.75;
    wall2.rotation.y = Math.PI * 0.5;
    wall2.castShadow = false;
    wall2.receiveShadow = true;
    bedroom.add(wall2);

    const wall3 = new THREE.Mesh(
		new THREE.PlaneGeometry(10, 5),
		new THREE.MeshPhongMaterial({color: 0xc0d6e4, metalness: 0.3, roughness: 0.3})		
    )
    wall3.position.x = 5;
    wall3.position.y = 0.75;
    wall3.rotation.y = -Math.PI * 0.5;
    wall3.castShadow = false;
    wall3.receiveShadow = true;
    bedroom.add(wall3);

    const wall4 = new THREE.Mesh(
		new THREE.PlaneGeometry(10, 5),
		new THREE.MeshPhongMaterial({color: 0xACC0CD, metalness: 0.3, roughness: 0.3})		
    )
    wall4.position.z = 5;    
    wall4.position.y = 0.75;
    wall4.rotation.y = -Math.PI * 1;
    wall4.castShadow = false;
    wall4.receiveShadow = true;
    bedroom.add(wall4);
	
	// Floor
    const floor = new THREE.Mesh(
		new THREE.PlaneGeometry(10,10),
		new THREE.MeshPhongMaterial({map: texturefloor, color: 0xafd7b4, metalness: 0.3, roughness: 0.3})			
	);
	floor.receiveShadow = true;
    floor.position.y = -1.75;   
	floor.rotation.x -= Math.PI / 2; // Rotate the floor 90 degrees
    bedroom.add(floor);
	
	// Roof
    const roof = new THREE.Mesh(
		new THREE.PlaneGeometry(10,10),
		new THREE.MeshPhongMaterial({color: 0xafd7b4, metalness: 0.3, roughness: 0.3})			
		
    );
    roof.position.y = 3.25;
	roof.rotation.x -= Math.PI / -2; // Rotate the roof 90 degrees
	bedroom.add(roof);

	// Bed
    const support = new THREE.Mesh(
		new THREE.BoxGeometry(3, 0.5, 2,),
		new THREE.MeshPhongMaterial({color: 0xfbf8fc, metalness: 0.3, roughness: 0.3})							
	);
	support.receiveShadow = true;
	support.castShadow = true;
	support.position.x = 3.5;
	support.position.y = -1;
	support.position.z = 4;
	bedroom.add(support);

	const matress = new THREE.Mesh(
		new THREE.BoxGeometry(2.25, 0.70, 2.1),
		new THREE.MeshPhongMaterial({color: 0x8CAC90, metalness: 0.3, roughness: 0.3})					
		
	);
	matress.position.x = 3;
	matress.position.y = -1;
	matress.position.z = 4;
	bedroom.add(matress);
	
	const pillow1 = new THREE.Mesh(
		new THREE.BoxGeometry(0.5, 0.2, 0.5),
		new THREE.MeshPhongMaterial({color: 0x8CAC90, metalness: 0.3, roughness: 0.3})							
	);
	pillow1.position.x = 4.5;
	pillow1.position.y = -0.7;
	pillow1.position.z = 4.5;
	bedroom.add(pillow1);

	const pillow2 = new THREE.Mesh(
		new THREE.BoxGeometry(0.5, 0.2, 0.5),
		new THREE.MeshPhongMaterial({color: 0x8CAC90, metalness: 0.3, roughness: 0.3})							
	);
	pillow2.position.x = 4.5;
	pillow2.position.y = -0.7;
	pillow2.position.z = 3.5;
	bedroom.add(pillow2);

	const foot1 = new THREE.Mesh(
		new THREE.BoxGeometry(0.2, 0.5, 0.2),
		new THREE.MeshPhongMaterial({color: 0xfab297, metalness: 0.3, roughness: 0.3})					
	);
	foot1.receiveShadow = true;
	foot1.castShadow = true;
	foot1.position.x = 2.25;
	foot1.position.y = -1.5;
	foot1.position.z = 3.25;
	bedroom.add(foot1);

	const foot2 = new THREE.Mesh(
		new THREE.BoxGeometry(0.2, 0.5, 0.2),
		new THREE.MeshPhongMaterial({color: 0xfab297, metalness: 0.3, roughness: 0.3})					
	);
	foot2.receiveShadow = true;
	foot2.castShadow = true;
	foot2.position.x = 2.25;
	foot2.position.y = -1.5;
	foot2.position.z = 4.75;
	bedroom.add(foot2);

	const foot3 = new THREE.Mesh(
		new THREE.BoxGeometry(0.2, 0.5, 0.2),
		new THREE.MeshPhongMaterial({color: 0xfab297, metalness: 0.3, roughness: 0.3})					
	);
	foot3.receiveShadow = true;
	foot3.castShadow = true;
	foot3.position.x = 4.75;
	foot3.position.y = -1.5;
	foot3.position.z = 3.25;
	bedroom.add(foot3);

	const foot4 = new THREE.Mesh(
		new THREE.BoxGeometry(0.2, 0.5, 0.2),
		new THREE.MeshPhongMaterial({color: 0xfab297, metalness: 0.3, roughness: 0.3})					
	);
	foot4.receiveShadow = true;
	foot4.castShadow = true;
	foot4.position.x = 4.75;
	foot4.position.y = -1.5;
	foot4.position.z = 4.75;
	bedroom.add(foot4);

	// Nightstand
	const nightstand = new THREE.Mesh(
		new THREE.BoxGeometry(1, 1, 1),
		new THREE.MeshPhongMaterial({color: 0xfab297, metalness: 0.3, roughness: 0.3})			
		
	);
	nightstand.receiveShadow = true;
	nightstand.castShadow = true;
	nightstand.position.x = 4.5;
	nightstand.position.y = -1.25;
	nightstand.position.z = 2;
	bedroom.add(nightstand);

	const drawer = new THREE.Mesh( 
		new THREE.BoxGeometry(1.1, 0.5, 0.9),
		new THREE.MeshPhongMaterial({color: 0xfb9692, metalness: 0.3, roughness: 0.3})				
	);
	drawer.receiveShadow = true;
	drawer.castShadow = true;
	drawer.position.x = 4.5;
	drawer.position.y = -1.25;
	drawer.position.z = 2;
	bedroom.add(drawer);

	const cuff = new THREE.Mesh(
		new THREE.BoxGeometry(0.20, 0.05, 0.2	),
		new THREE.MeshPhongMaterial({color: 0xc0c0c0, metalness: 0.3, roughness: 0.3})						
	);
	cuff.receiveShadow = true;
	cuff.castShadow = true;
	cuff.position.x = 4;
	cuff.position.y = -1.25;
	cuff.position.z = 2;
	bedroom.add(cuff);
	
	// Office
	const office1 = new THREE.Mesh(
		new THREE.BoxGeometry(1.5, 0.4, 4),
		new THREE.MeshPhongMaterial({color: 0xFAB297, metalness: 0.3, roughness: 0.3})								
	);
	office1.receiveShadow = true;
	office1.castShadow = true;
	office1.position.x = -4.25;
	office1.position.y = 0;
	office1.position.z = 3;
	bedroom.add(office1);

	const office2 = new THREE.Mesh(
		new THREE.BoxGeometry(1.3, 1.75, 0.4),
		new THREE.MeshPhongMaterial({color: 0xFB9692, metalness: 0.3, roughness: 0.3})				
	);
	office2.receiveShadow = true;
	office2.castShadow = true;
	office2.position.x = -4.25;
	office2.position.y = -1;
	office2.position.z = 1.25
	bedroom.add(office2);

	const office3 = new THREE.Mesh(
		new THREE.BoxGeometry(1.3, 1.75, 0.4),
		new THREE.MeshPhongMaterial({color: 0xFB9692, metalness: 0.3, roughness: 0.3})						
		
		
	);
	office3.receiveShadow = true;
	office3.castShadow = true;
	office3.position.x = -4.25;
	office3.position.y = -1;
	office3.position.z = 4.75
	bedroom.add(office3);

	// TV
	const tv1 = new THREE.Mesh(
		new THREE.BoxGeometry(0.2, 1.25, 2),
		new THREE.MeshPhongMaterial({color: 0xc0c0c0, metalness: 0.3, roughness: 0.3})						
	);
	tv1.receiveShadow = true;
	tv1.castShadow = true;
	tv1.position.x = -4.75;
	tv1.position.y = 1;
	tv1.position.z = 3;
	bedroom.add(tv1);

	const tv2 = new THREE.Mesh(
		new THREE.BoxGeometry(0.15, 0.5, 0.2),
		new THREE.MeshPhongMaterial({color: 0xc0c0c0, metalness: 0.3, roughness: 0.3})								
	);
	tv2.receiveShadow = true;
	tv2.castShadow = true;
	tv2.position.x = -4.75;
	tv2.position.y = 0.25;
	tv2.position.z = 3;
	bedroom.add(tv2);

	const tv3 = new THREE.Mesh(
		new THREE.BoxGeometry(0.5, 0.1, 0.5),
		new THREE.MeshPhongMaterial({color: 0xc0c0c0, metalness: 0.3, roughness: 0.3})								
	);
	tv3.receiveShadow = true;
	tv3.castShadow = true;
	tv3.position.x = -4.75;
	tv3.position.y = 0.25;
	tv3.position.z = 3;
	bedroom.add(tv3);

	const screen = new THREE.Mesh(
		new THREE.BoxGeometry(0.15, 1.15, 1.9),
		new THREE.MeshPhongMaterial({color: 0x000000, metalness: 0.3, roughness: 0.3})										
	);
	screen.position.x = -4.70;
	screen.position.y = 1;
	screen.position.z = 3;
	bedroom.add(screen);

	// Lamp on nightstand
	const lamp1 = new THREE.Mesh(
		new THREE.SphereGeometry(0.2,32,32),
		new THREE.MeshBasicMaterial({color: 0xffff7f, metalness: 0, roughness: 0.5})						
	);
	lamp1.position.x = 4.5;
	lamp1.position.y = -0.5;
	lamp1.position.z = 2;
	bedroom.add(lamp1);

	const lamp2 = new THREE.Mesh(
		new THREE.TorusGeometry(0.1, 0.1, 16, 100, 6.3),
		new THREE.MeshPhongMaterial({color: 0xc0c0c0, metalness: 0.3, roughness: 0.3})						
		
	);
	lamp2.receiveShadow = true;
	lamp2.castShadow = true;
	lamp2.position.x = 4.5;
	lamp2.position.y = -0.7;
	lamp2.position.z = 2;
	lamp2.rotation.x -= Math.PI / 2;
	bedroom.add(lamp2);

	// Door
	


	// Set the camera in first person
	camera.position.set(3, view.height, -3);
	camera.lookAt(new THREE.Vector3(0,view.height,0));
	
	//Light
	ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
	scene.add(ambientLight);

	lampLight = new THREE.PointLight(0xffff7f, 0.5);
	lampLight.position.set(4.5, -0.5, 2);
	lampLight.castShadow = true;
	scene.add(lampLight);

	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize(windowWidth, windowHeight);
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.BasicShadowMap;
	document.body.appendChild(renderer.domElement);
	
	animate();
}

// Function to moove the camera
function animate(){
	requestAnimationFrame(animate);

	// Collisions
	if (camera.position.x >= 4.8){
		camera.position.x -= 0.1;
	}
	if (camera.position.x <= -4.8){
		camera.position.x += 0.1;
	}
	if (camera.position.z >= 4.8){
		camera.position.z -= 0.1;
	}
	if (camera.position.z <= -4.8){
		camera.position.z += 0.1;
	}
	// Camera bed
	if (camera.position.x >= 2 && camera.position.x <= 5  && camera.position.z >= 3 && camera.position.z <= 5){
		camera.position.y = 0
		document.getElementById("sleep").style.display = "block";
		document.getElementById("FadeInSleep").style.display = "block";
	}else{
		camera.position.y = 1
		document.getElementById("sleep").style.display = "none";
		document.getElementById("FadeInSleep").style.display = "none";
	}

	// Keyboard movement inputs
	if(keyboard[90]){ // Z key
		camera.position.x -= Math.sin(camera.rotation.y) * view.speed;
		camera.position.z -= -Math.cos(camera.rotation.y) * view.speed;
	}
	if(keyboard[83]){ // S key
		camera.position.x += Math.sin(camera.rotation.y) * view.speed;
		camera.position.z += -Math.cos(camera.rotation.y) * view.speed;
	}
	if(keyboard[81]){ // Q key
		// Redirect motion by 90 degrees
		camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * view.speed;
		camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * view.speed;
	}
	if(keyboard[68]){ // D key
		camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * view.speed;
		camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * view.speed;
	}

	// Keyboard turn inputs
	if(keyboard[37]){ // left arrow key
		camera.rotation.y -= view.turnSpeed;
	}
	if(keyboard[39]){ // right arrow key
		camera.rotation.y += view.turnSpeed;
	}

	
	
	renderer.render(scene, camera);
}

function keyDown(event){
	keyboard[event.keyCode] = true;
}

function keyUp(event){
	keyboard[event.keyCode] = false;
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

window.onload = init;