class OrderModel
{
    static AddItem(record)
    {
        var list = this.GetList();

        record.id = list.length + 1;
        record.visible = true;
        record.value = 0;
        list.push(record);

        localStorage.setItem('orderlist-list', JSON.stringify(list));
    }
    static GetList()
    {
        var list = localStorage.getItem('orderlist-list');

        if (!list) list = [];
        else list = JSON.parse(list);

        return list;
    }
    static GetCompletedList()
    {
        var list = this.GetList();
        return list;
    }
    static RemoveItem()
    {
        localStorage.clear();
    }
}
