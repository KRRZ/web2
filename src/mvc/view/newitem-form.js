class NewItemForm extends InputView
{
    constructor(parent,ch)
    {
        super("Hozzáadás", "new", parent);
        this.addInput("name", "", "text", "Megnevezés");
        this.addInput("price", "5000", "number", "Tétel ára");
        this.addButton("Hozzáadás");
    }   
}