var story = {};

story["start"] = {
	text: "You are on a ledge with a canyon on your left.",
	a_text: "Step left", 
	a_target: "dead_splat",
	b_text: "Move along the ledge",
	b_target: "ogre_room"
};
		
story["ogre_room"] = {
	text: "You find a room at the end of the ledge and an horrible ogre appears to kill you.",
	a_text: "Lunge at him with your sword", 
	a_target: "dead_ogre",
	b_text: "Wait until he attacks and dodge",
	b_target: "win"
};

story["dead_splat"] = {	text: "You make a splat noise as you hit the ground below. You deaded."}
story["dead_ogre"] = {	text: "The ogre makes short work of you and eats your eyeballs. You deaded."}

story["win"] = { text: "The ogre loses his balance and falls off the ledge. You find a pot of gold in the room. You take it home and live happilly ever after." }