class ListView
{
    constructor(parent,id)
    {
        this._elem = document.createElement("section");
        this._elem.classList.add("list");
        
        if (id == 0)
        {
            this._elem.innerHTML = `<div><p>A lista teljesen üres. <br>Adj hozzá új rendelési tételt!</p></div>`;
            parent.appendChild(this._elem);
        }
        else
        {
            this._elem.innerHTML = `<h2>Tételek listája</h2><table><thead><tr><th>Ssz.</th><th>Megnevezés</th><th>Ára</th>
						</tr></thead><tbody>      </tbody></table>`;
            parent.appendChild(this._elem);
        }

        
    }
    addItem(id,title,price)
    {
        var tbody = this._elem.querySelector('tbody');
        var item = new ListItem(id, tbody);
        item.update(id, title, price);
    }
    onClick(method)
    {

    }
    _itemClick(item)
    {

    }
}