class InputView
{
    constructor(title, name, parent)
    {

        this._elem = document.createElement("section");
        this._elem.classList.add(name);

        this._elem.innerHTML = `<h2>Új tétel hozzáadása</h2>
        <form action=""></form>`;



        parent.appendChild(this._elem);

        this._form = this._elem.querySelector('form');
    }
    addInput(name, value, type,text)
    {
        var inp = document.createElement("div");

        inp.innerHTML = `<label for="${name}">${text}</label>
						<input type="${type}" id="${name}"  value="${value}">`;
        this._form.appendChild(inp);
    }
    addButton(text)
    {
        this._button = document.createElement("button");
        this._button.textContent = text;       

        this._form.appendChild(this._button);
    }
    onSubmit(method)
    {
        this._button.onclick = (e) =>
        {
            e.preventDefault();

            var data = {};

            for (var elem of this._form.elements)
            {
                if (elem.nodeName == "INPUT")
                {
                    var key = elem.id;
                    var value = elem.value;                   
                    data[key] = value;
                }
            }
            alert("Az új tétel sikeresen rögzítésre került");
            method(data);
            
            
        }
    }
    clear()
    {
        this._form.reset();
    }
}