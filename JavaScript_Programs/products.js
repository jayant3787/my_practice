
      class products {
        constructor(proNo, ProPri, ProId, proName, mfdyear, image) {
          this.proNo = proNo;
          this.ProPri = ProPri;
          this.ProId = ProId;
          this.proName = proName;
          this.mfdyear = mfdyear;
          this.image = image;
        }
      }
      var p1 = new products(
        1,
        15000,
        1001,
        "washingMachine",
        2019,
        "./machine.jpg"
      );
      var p2 = new products(2, 150, 1002, "Heatingpad", 2020, "./heating.jpg");
      var p3 = new products(3, 45000, 1003, "laptop", 2021, "./lapi.jpg");
      var p4 = new products(4, 1500, 1004, "saree", 2018, "./saree.jpg");
      var p5 = new products(5, 200, 1005, "bottle", 2019, "./bottle.jpg");
    