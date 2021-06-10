class Controller
{
    static Prepare()
    {
        AppView.NavigationEvents([
            this.NewOrder,
            this.OrderList,
            this.Summary,
            this.Login
        ]);
    }
    static OrderList()
    {
        AppView.ClearTarget();
        var list = OrderModel.GetCompletedList();
        var orderList = new ListView(AppView.app, list.length);

        for (var item of list) {
            orderList.addItem(item.id, item.name, item.price);
        }
    }
    static NewOrder()
    {
        AppView.ClearTarget();
        var input = new NewItemForm(AppView.app);
        input.onSubmit((inp) => {
            OrderModel.AddItem({ name: inp.name, price: inp.price });
            FinanceModel.AddCredit(inp.price);

            console.log(inp);
            console.log(OrderModel.GetList());

            input.clear();
            Controller.NewOrder();
        });
    }
    static Summary()
    {
        AppView.ClearTarget();
        var list = OrderModel.GetList();
        var info = new InfoView(AppView.app);
        info.update(list.length, FinanceModel.GetCredit());

        info.onclick((info) => {
            info.remove();
            info.update(list.length, FinanceModel.GetCredit());
            Controller.Summary();
        });
    }
    static Login()
    {
        AppView.ClearTarget();
        var login = new Login(AppView.app);
       
    }
}
