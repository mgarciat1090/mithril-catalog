var root = document.getElementById("root");
var Hello = {
	view: function(){
		return m("main",[
			m("h1",{class:"title"},"My first app"),
			m("button", "A button"),
		])
	}
}

m.mount(root,Hello);