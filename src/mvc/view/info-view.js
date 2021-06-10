class InfoView
{
    constructor(parent)
    {
        this._elem = document.createElement("section");
        this._elem.classList.add("summary");

        this._elem.innerHTML = `<div>
					<h3>Tételek:</h3>
					<p class="db"> 0 darab </p>
					<h3>Teljes költség:</h3>
					<p class="allprice">0 HUF </p>

					<a class="clear">Megvettem</a>
				</div>`

        parent.appendChild(this._elem);
    }
    update(db,credit)
    {
        this._elem.querySelector('.db').innerHTML = `${db} darab`;
        this._elem.querySelector('.allprice').innerHTML = `${credit} HUF`; 
    }
    remove()
    {
        localStorage.clear();
    }
    onclick(method)
    {
        this._elem.querySelector('a').onclick = (e) =>
        {
            e.preventDefault();
            method(this);
        }
    }
}