class Main {
    public static void main(String[] args) {
        Customer c1 = new Customer("jayant",12345,'M', "Single", "Raipur",(byte) 25,0);
        Customer c2 = new Customer(null, 0,(char) 0, null, null,(byte) 0,20);
        System.out.println(c1.customerInfo());
        System.out.println(c2.isEven());

    }
}
