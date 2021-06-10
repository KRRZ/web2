class FinanceModel
{
    static AddCredit(credit)
    {
        var actual = this.GetCredit();
        actual += parseInt(credit);

        if (actual < 0) actual = 0;

        localStorage.setItem('orderlist-credit', actual);
    }
    static GetCredit()
    {
        var credit = localStorage.getItem('orderlist-credit');

        if (!credit) credit = 0;
        else credit = parseInt(credit);

        return credit;
    }
    static RemoveCredit(credit)
    {
        localStorage.clear();
    }
}
