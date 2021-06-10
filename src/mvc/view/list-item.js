class ListItem
{
    constructor(id, parent)
    {
        this.id = id;
        this._elem = document.createElement("tr");

        this._elem.innerHTML = `<td class="id">id</td><td class="title">ti</td><td class="price">pr</td>`;

        parent.appendChild(this._elem);
    }
    update(id, title, price)
    {
        this._elem.querySelector('.id').innerHTML = id;
        this._elem.querySelector('.title').innerHTML = title;
        this._elem.querySelector('.price').innerHTML = price;
    }
}