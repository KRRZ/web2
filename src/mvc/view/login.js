class Login {
    constructor(parent) {

        this._elem = document.createElement("section");
        this._elem.innerHTML = `<h2>Bejelentkez�s</h2>`

        parent.appendChild(this._elem);
    }
}