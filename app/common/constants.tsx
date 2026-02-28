export const categories = [
  {
    text: "Promotions",
    url: "promotions",
    icon: "/promotions.png",
  },
  {
    text: "Drinks",
    url: "drinks",
    icon: "/drinks.png",
  },
  {
    text: "Cocktails",
    url: "cocktails",
    icon: "/cocktails.png",
  },
  {
    text: "Coffee",
    url: "coffee",
    icon: "/coffee.png",
  },
  {
    text: "Ice Cream",
    url: "icecream",
    icon: "/ice-cream.png",
  },
  {
    text: "Pizza",
    url: "pizza",
    icon: "/pizza.png",
  },
];

export const defaultMenu = {
  menuType: 2, // 1 - row, 2 - columns
  menuBackground: "linear-gradient(#fb8500, #FFBA69, #F2F2F2)",
  productBackground: "/trap.png",
  sliderBg: "#ff9d2cff",
  totalBackground: "#219ebc",
};

export const colors = [
  { name: "Yellow", start: "#FFBA69", end: "#FFFFFF", total: "#26C48B" },
  { name: "Red", start: "#FF6969", end: "#F2F2F2", total: "#265EC4" },
  { name: "Aqua", start: "#69D2FF", end: "#F2F2F2", total: "#26C48B" },
  { name: "Blue", start: "#699CFF", end: "#F2F2F2", total: "#265EC4" },
  { name: "Pink", start: "#FF69BB", end: "#F2F2F2", total: "#265EC4" },
];

export const products = [
  {
    url: "cocktails",
    icon: "/cocktails.png",
    name: "Cocktails",
    available: true,
    products: [
      {
        id: "E910189B-B474-45BF-A8DE-C4A0999C8F07",
        name: "Malibu Bay Breeze",
        price: 650,
        imageUrl: "https://dlap5dc4zeihu.cloudfront.net/cocktails/teq-150.png",
        available: true,
        description: "",
      },
      {
        id: "45E32E87-E5D9-4A19-82C2-4D0351A9FE51",
        name: "Aperol Spritz",
        price: 600,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/cocktails/aperol-spritz_mb3yfm.png",
        available: true,
        description: "",
      },
      {
        id: "B6B43558-D90C-49DD-8573-933BD5580C15",
        name: "Blue Lagoon",
        price: 650,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/cocktails/sypxsj8dh1irhibmvuip.png",
        available: true,
        description: "",
      },
      {
        id: "90DF5606-F883-4F31-B455-628F4F604E2C",
        name: "The Albanian Way",
        price: 600,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/cocktails/americano_mizagh.png",
        available: true,
        description: "",
      },
      {
        id: "B36C0919-FA4A-4C1A-A57F-F3AE83C0F310",
        name: "Gin Daisy",
        price: 600,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/cocktails/y3kcmy860rzfsnuwtod3.png",
        available: true,
        description: "",
      },
      {
        id: "A91A7E2F-9DF2-4F17-B5D1-0B18580E7D0D",
        name: "Mojito",
        price: 650,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/cocktails/b0xh4fe78uzjngpqrada.png",
        available: true,
        description: "",
      },
      {
        id: "FD589527-624C-4037-9B95-B94D308B94F4",
        name: "Tequila Sunrise",
        price: 650,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/cocktails/bglcgrzoesuc8unfjcg2.png",
        available: true,
        description: "",
      },
      {
        id: "66027CE7-88FC-4098-AB2F-B4DAB4782EC3",
        name: "Campari Spritz",
        price: 600,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/cocktails/jozf1g1x7yj94bw7zpji.png",
        available: true,
        description: "",
      },
      {
        id: "32AD3AA3-E020-4EBE-8D0D-F0065BD66820",
        name: "Vodka Sour",
        price: 650,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/cocktails/disarono-sower_jqqg7f.png",
        available: true,
        description: "",
      },
      {
        id: "3d6fa3c7-1a3f-4d8c-8d10-f4cbb1c5d283",
        name: "Sex On The Beach",
        price: 700,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/cocktails/cocktail-sex-on-the-beach-2.png",
        available: true,
        description: "",
      },
      {
        id: "f79b910b-4ea4-4748-8bb5-19d825ef0681",
        name: "Long Island",
        price: 700,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/cocktails/cocktail-long-island-2.png",
        available: true,
        description: "",
      },
      {
        id: "ee2255af-4593-4d42-9294-de9d2c9c1bcf",
        name: "Gin Tonic",
        price: 650,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/cocktails/cocktail-gin-tonic-2.png",
        available: true,
        description: "",
      },
    ],
  },
  {
    url: "snacks",
    icon: "",
    name: "Snacks",
    available: true,
    products: [
      {
        id: "54D0EBCC-9015-452A-884C-D5F446712FDA",
        name: "Club Sandwich",
        price: 700,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/food/tlsxvafrcwxzan7ubalj.png",
        available: true,
        description: "",
      },
      {
        id: "76ab52c0-c42e-4686-a760-ece386d29b56",
        name: "Patate Friture",
        price: 450,
        imageUrl: "https://dlap5dc4zeihu.cloudfront.net/food/snack-fries.png",
        available: true,
        description: "",
      },
    ],
  },
  {
    url: "smoothie",
    icon: null,
    name: "Smoothie",
    available: true,
    products: [
      {
        id: "bc04af18-e8c6-4377-b01d-814e6e50e1ab",
        name: "Smoothie",
        price: 500,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/smoothie/Berries_1_m5pgw1.png",
        available: true,
        description: "Me fruta stine",
      },
    ],
  },
  {
    url: "coffee",
    icon: "/coffee.png",
    name: "Coffee",
    products: [
      {
        id: "42B08C9F-83A5-4566-AE6F-A20653B6EF81",
        name: "Espresso",
        price: 100,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/coffee/vecteezy_espresso-coffee-cutout_23438439_qyffna.png",
        available: true,
        description: "",
      },
      {
        id: "E9B5E924-A27F-4892-8EC3-BEFBF47B9026",
        name: "Macchiato",
        price: 120,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/coffee/vecteezy_latte-coffee-isolated-illustration_23742327_rbcvwx.png",
        available: true,
        description: "",
      },
      {
        id: "4AE06CAB-5B13-4D41-8E08-3FD5D135777E",
        name: "Frappe",
        price: 250,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/coffee/vecteezy_a-glass-of-cold-brew-cappucino-with-milk-fresh-coffee-which_9665476_1_z6bqjz.png",
        available: true,
        description: "",
      },
      {
        id: "1E9F47E8-C3D7-4330-804C-C2FB8E5A392B",
        name: "Freddo Espresso",
        price: 300,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/coffee/fredo-espresso_awyvhx.png",
        available: true,
        description: "",
      },
      {
        id: "9A7EA55F-ADD5-4820-A23F-103C730A7EE7",
        name: "Freddo Cappuccino",
        price: 350,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/coffee/cold_cappucino_zzhzgt.png",
        available: true,
        description: "",
      },
      {
        id: "17AC4D16-45C3-4AF0-9E9D-6531099F1870",
        name: "Cappuccino",
        price: 200,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/coffee/bustin-caouccino_tyn2tp.png",
        available: true,
        description: "",
      },
      {
        id: "357EF0ED-1ADC-4044-A90E-FC415F859545",
        name: "Hot Chocolate",
        price: 200,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/coffee/vecteezy_view-of-hot-coffee-cup_44025771_k0uo5z.png",
        available: true,
        description: "",
      },
      {
        id: "874935C5-8ECA-41B6-ACEA-B8797F013C14",
        name: "Iced Chocolate",
        price: 350,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/coffee/yedpxczbnz4mtrvxdmu2.png",
        available: true,
        description: "",
      },
      {
        id: "84546D17-B5D2-4251-AA8D-2B9538EF02DB",
        name: "Cappuccino Iced Coffee",
        price: 350,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/coffee/cold_machiatto_arbmzb.png",
        available: true,
        description: "",
      },
      {
        id: "41e11685-cab8-4329-8135-130dc923324f",
        name: "Uje I Vogel",
        price: 100,
        imageUrl: "/lajthiza.png",
        available: true,
        description: "",
      },
      {
        id: "45353A35-4F57-4352-AA5F-CFD103951D6A",
        name: "Tea",
        price: 100,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/coffee/bustin-tea_njbo4r.png",
        available: true,
        description: "",
      },
    ],
    available: true,
  },
  {
    url: "drinks",
    icon: "/drinks.png",
    name: "Drinks",
    products: [
      {
        id: "0d077d36-a1ff-4553-97bd-66a7bb1198b5",
        name: "Coca Cola",
        price: 200,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/drinks/drinks-coca_cola-can.png",
        available: true,
        description: null,
      },
      {
        id: "8ccfc5fa-a6f9-4d82-9169-2b0128976713",
        name: "Coca Cola Zero",
        price: 200,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/drinks/drinks-coca_cola-zero-can.png",
        available: true,
        description: null,
      },
      {
        id: "e910c9c8-99c6-4beb-8373-9288fcf5cbac",
        name: "Sprite",
        price: 200,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/drinks/drinks-sprite-can.png",
        available: true,
        description: null,
      },
      {
        id: "285649e8-984e-481e-864f-cd015d6b65f7",
        name: "Fanta Portokall",
        price: 200,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/drinks/drinks-fanta-orange-can.png",
        available: true,
        description: null,
      },
      {
        id: "3cef7fd7-9acb-418d-beef-f3d90451b08a",
        name: "Fanta Exotic",
        price: 200,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/drinks/drinks-fanta-exotic-can.png",
        available: true,
        description: null,
      },
      {
        id: "8a0126fb-a9e7-4807-af2d-34fb5f3951c3",
        name: "Lemon Soda",
        price: 200,
        imageUrl: "https://dlap5dc4zeihu.cloudfront.net/drinks/lemon-soda.png",
        available: true,
        description: null,
      },
      {
        id: "6a225779-b45e-4f45-8649-e55b66c97151",
        name: "Orange Soda",
        price: 200,
        imageUrl: "https://dlap5dc4zeihu.cloudfront.net/drinks/soda_euels0.png",
        available: true,
        description: null,
      },
      {
        id: "16d7c338-e7ea-45a7-a882-d88e4ce1a241",
        name: "Bravo Molle",
        price: 200,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/drinks/drinks-bravo-apple-can.png",
        available: true,
        description: "",
      },
      {
        id: "75f5ab6f-036a-4248-b018-defec7b95cc2",
        name: "Bravo Pjeshke",
        price: 200,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/drinks/drinks-bravo-peach-can.png",
        available: true,
        description: "",
      },
      {
        id: "03b4a603-d27b-4098-be38-227b458e9d8c",
        name: "Lipton Pjeshke",
        price: 200,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/drinks/drinks-lipton-peach-can.png",
        available: true,
        description: "",
      },
      {
        id: "8ea21a56-f276-49e0-9d85-6132d47aeb38",
        name: "Lipton Lemon",
        price: 200,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/drinks/drinks-lipton-lemon-can.png",
        available: true,
        description: "",
      },
      {
        id: "52BE041D-3934-4134-B2E0-5DFBB20E0C01",
        name: "Red Bull",
        price: 400,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/drinks/red-bull_pvcjaq.png",
        available: true,
        description: "",
      },
      {
        id: "6300A344-84F5-41C7-B464-98A81DE70B2E",
        name: "B-52",
        price: 300,
        imageUrl: "https://dlap5dc4zeihu.cloudfront.net/drinks/drinks-b52.png",
        available: true,
        description: "",
      },
      {
        id: "91C0BEA1-B2A5-4249-8CB9-389D41DF9254",
        name: "Schweppes",
        price: 200,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/drinks/schweeppes_mecs5p.png",
        available: true,
        description: "",
      },
      {
        id: "0298E6AC-C81B-4F12-A09E-E7FE772C98EE",
        name: "Fresh Orange Juice",
        price: 450,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/drinks/orange-juice.png",
        available: true,
        description: "",
      },
    ],
    available: true,
  },
  {
    url: "beers",
    icon: "",
    name: "Beers",
    products: [
      {
        id: "263DAE06-9E87-4338-BA5E-3DBBB5F13CCA",
        name: "Corona",
        price: 450,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/beers/hyxtywjvusgupxh0gehu.png",
        available: true,
        description: "",
      },
      {
        id: "A789A4AE-4E73-4415-81B4-4D2F89F77215",
        name: "Paulaner",
        price: 450,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/beers/md608wi6dvmrv26ran30.png",
        available: true,
        description: "",
      },
      {
        id: "5488C233-6B6C-456F-92D3-FDC150EBEAC6",
        name: "Korca",
        price: 300,
        imageUrl: "https://dlap5dc4zeihu.cloudfront.net/beers/korca_lpr92r.png",
        available: true,
        description: "",
      },
      {
        id: "FE5683EA-F1F4-4620-9FDB-15673A11770B",
        name: "Amstel",
        price: 300,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/beers/amstel_radler_wb5doq.png",
        available: true,
        description: "",
      },
      {
        id: "10EAFA71-3A04-49E5-B690-90F9447BB5DF",
        name: "Heineken",
        price: 350,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/beers/heineken_awbopj.png",
        available: true,
        description: "",
      },
      {
        id: "F4F8ACB0-8754-42A6-8CA7-E27EE6044AB2",
        name: "Stella Artois",
        price: 300,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/beers/beer-stella-artois-bottle.png",
        available: true,
        description: "",
      },
      {
        id: "2943218a-21ba-441c-82a6-29a7c0a0a81a",
        name: "Morreti",
        price: 300,
        imageUrl: "https://dlap5dc4zeihu.cloudfront.net/beers/beer-moretti.png",
        available: true,
        description: "",
      },
    ],
    available: true,
  },
  {
    url: "non_alcoholic",
    icon: null,
    name: "Non'alcoholic",
    products: [
      {
        id: "76C651A7-0F1F-4EF6-9F84-EFD8DAA4DDCC",
        name: "Golden Tropical",
        price: 600,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/cocktails/cocktail-golden-tropical.png",
        available: true,
        description: "",
      },
      {
        id: "B285D4DE-B6DB-4DA9-8DE3-1530AD111C65",
        name: "Avatar",
        price: 600,
        imageUrl:
          "https://dlap5dc4zeihu.cloudfront.net/cocktails/cocktail-avatar.png",
        available: true,
        description: "",
      },
    ],
    available: true,
  },
];

export const newDemoMenu = [
  {
    icon: "/coffee.png",
    name: "Kafeteria",
    available: true,
    products: products,
  },
  {
    icon: "/drinks.png",
    name: "Pijet e Ftohta",
    available: true,
    products: [
      {
        id: "3fa91a95-6797-4d19-84f1-4b7f80bb35b3",
        name: "Bravo",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046740/shijevere/categories-NEW/soda/yowgitceob7t7msowiyu.png",
        available: true,
        description: "",
      },
      {
        id: "4c6a64ba-8ef6-4b16-95cf-b1c0bc726fc6",
        name: "Fanta",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715280887/shijevere/categories-NEW/soda/fanta_vaoypb.png",
        available: true,
        description: "",
      },
      {
        id: "f38a9c44-4d96-4e63-b3b2-02a83f7f72a0",
        name: "Coca-Cola",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715280633/shijevere/categories-NEW/soda/cola_mueird_xrmru2.png",
        available: true,
        description: "",
      },
      {
        id: "7bda3b0c-fd63-4a34-b02d-8f5e1f4713f5",
        name: "Orange Soda",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715281033/shijevere/categories-NEW/soda/soda_euels0.png",
        available: true,
        description: "",
      },
      {
        id: "fe0d7e1b-5ad1-44c0-81b5-7bbf7fa18b19",
        name: "Lemon Soda",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716586660/shijevere/categories-NEW/soda/lemon-soda_dhfcez.png",
        available: true,
        description: "",
      },
      {
        id: "849be27c-80e0-4091-938d-649267d48b36",
        name: "Caj I Ftohte",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046740/shijevere/categories-NEW/soda/c113pwlz0c13ykr45xlt.png",
        available: true,
        description: "",
      },
      {
        id: "0b9da92a-e650-4b28-bc5e-3c01062b1c08",
        name: "Caffe Mio",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716574953/shijevere/categories-NEW/coffee/cafe-mio_pt9ode.png",
        available: true,
        description: "",
      },
      {
        id: "8a4d8d57-3a8d-4e5f-8890-60e2d3c1e77b",
        name: "Milkshake",
        price: 350,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046733/shijevere/categories-NEW/coffee/yedpxczbnz4mtrvxdmu2.png",
        available: true,
        description: "",
      },
      {
        id: "3e5d4e8c-5eb1-43c7-9cdb-dc8a8cfb5c34",
        name: "Crodino",
        price: 200,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715280703/shijevere/categories-NEW/soda/crodino_rhhhtu.png",
        available: true,
        description: "",
      },
      {
        id: "a76dc281-2e79-4d7a-8296-179051c1c040",
        name: "San Biter",
        price: 150,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715283275/shijevere/categories-NEW/soda/bitter_zag7u4.png",
        available: true,
        description: "",
      },
      {
        id: "3c25829b-44fa-42ba-b503-cf8ed2294b14",
        name: "Zhveps",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715279912/shijevere/categories-NEW/soda/schweeppes_mecs5p_qvqlmd.png",
        available: true,
        description: "",
      },
      {
        id: "760de689-73fa-4b69-b847-e21b2a129aca",
        name: "Aranciata Portokall",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716587374/shijevere/categories-NEW/soda/aranchata-exotic_mjkuq9.png",
        available: true,
        description: "",
      },
      {
        id: "66e9c7d1-4d22-403d-a0d6-4ff4e0c843e8",
        name: "Aranciata Limon",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716587374/shijevere/categories-NEW/soda/aranchata-classix_mawnbz.png",
        available: true,
        description: "",
      },
      {
        id: "6fdb5461-7b20-45da-bfa4-3270fc4b8268",
        name: "Redbull",
        price: 500,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715279839/shijevere/categories-NEW/soda/red-bull_pvcjaq_qluajq.png",
        available: true,
        description: "",
      },
      {
        id: "db128b4b-d41a-4d5f-9e42-1d9e1e4e5cf4",
        name: "Rose Lemonade",
        price: 500,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1687465091/shijevere/categories/drinks/rose-lemonade_fy5bvk.png",
        available: true,
        description: "",
      },
      {
        id: "4d5372b5-920f-4a8c-8887-5d4d15e2aeb9",
        name: "Leng Mix",
        price: 500,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715611033/shijevere/categories-NEW/soda/mix-juice_pkajrm.png",
        available: true,
        description: "",
      },
      {
        id: "c5b6e5f4-8ef3-4c73-8083-1d4a8453a9c5",
        name: "Leng Portokalli",
        price: 400,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715611032/shijevere/categories-NEW/soda/orange-juice_aci6jj.png",
        available: true,
        description: "",
      },
      {
        id: "5c03b20c-c780-4073-85a1-4e7c15d4a4e4",
        name: "Leng Molle",
        price: 400,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716574751/shijevere/categories-NEW/soda/vecteezy_ai-generated-fruit-cocktail-clip-art_39853511_ufeuva.png",
        available: true,
        description: "",
      },
      {
        id: "33f4957e-4cc0-4c92-b2bb-4d3b60f3b9ee",
        name: "Leng Karrote",
        price: 400,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716574750/shijevere/categories-NEW/soda/vecteezy_fresh-carrot-and-sweet-carrot-juice-isolated-on-a_45553682_ewtzis.png",
        available: true,
        description: "",
      },
      {
        id: "8f589fb0-b2af-44d5-a1d5-34583d4c083f",
        name: "Caj Monin",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716574751/shijevere/categories-NEW/soda/vecteezy_ai-generated-bottle-of-soda-on-transparent-background_41385439_dooxsq.png",
        available: true,
        description: "",
      },
      {
        id: "799e1234-4a22-49e5-a92e-17bc5e06dd2e",
        name: "Gia Molle - Shege",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716588415/shijevere/categories-NEW/soda/gia-giamas-green-apple_zh0fvz.png",
        available: true,
        description: "",
      },
      {
        id: "ff1b256e-5b6d-42e1-8f57-6c9247515544",
        name: "Gia Limon",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716588429/shijevere/categories-NEW/soda/gia-lemon_m0lv3t.png",
        available: true,
        description: "",
      },
      {
        id: "7e5b4f9b-ea4b-4b60-8a5e-e334caed1a28",
        name: "Gia Pjeshke",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716588421/shijevere/categories-NEW/soda/gia-peach_y47lrl.png",
        available: true,
        description: "",
      },
      {
        id: "a6a4c788-94c6-4d2a-9c61-91a43b6f1a45",
        name: "Gia Luleshtrydhe - Limon",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716588429/shijevere/categories-NEW/soda/gia-strawberry_tjlkuf.png",
        available: true,
        description: "",
      },
      {
        id: "6310b40d-f34f-4d1d-885d-857517d13356",
        name: "Gia Pandisia",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716588415/shijevere/categories-NEW/soda/pandasia-gia_fmzsac.png",
        available: true,
        description: "",
      },
      {
        id: "4890b758-9a77-40ad-b1a2-fb4b8196e8c7",
        name: "Gia Qershi - Manaferre",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716588430/shijevere/categories-NEW/soda/gia-cherry_gqf6yh.png",
        available: true,
        description: "",
      },
      {
        id: "bca3a915-5e1d-44f6-a8b4-3b5716abf293",
        name: "Uje Selita 0.5",
        price: 120,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716588431/shijevere/categories-NEW/soda/uje-selita-05_kak2d6.png",
        available: true,
        description: "",
      },
      {
        id: "b2bbf7e4-367e-4c39-9bbd-cd121c3706a7",
        name: "Uje Glina 0.5",
        price: 120,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824538/shijevere/categories-NEW/soda/gline-uje_hjvlnz.png",
        available: true,
        description: "",
      },
      {
        id: "5897a1a5-4b16-497f-bbff-e2a6ec5e2d95",
        name: "Uje Aqua Panna 0.5",
        price: 150,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716588432/shijevere/categories-NEW/soda/aqua-pana-05_vizobm.png",
        available: true,
        description: "",
      },
      {
        id: "c3b4847d-cb94-4bcf-a0d8-1e1cf6304504",
        name: "Uje Aqua Panna 0.75",
        price: 280,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716588414/shijevere/categories-NEW/soda/aqua-pana-075_pikz8u.png",
        available: true,
        description: "",
      },
    ],
  },
  {
    // icon: "/snack.png",
    name: "Snack",
    available: true,
    products: [
      {
        id: "05d709a3-2b1b-4892-b07f-5c1d6d276255",
        name: "Pringles I vogel",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716588768/shijevere/categories-NEW/food/pringless_small_mr2frk.png",
        available: true,
        description: "",
      },
      {
        id: "f237d0b4-dbe8-4895-917d-bb98bfe2c9cf",
        name: "Pringles I madh",
        price: 400,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716588768/shijevere/categories-NEW/food/pringles-big_dd60ms.png",
        available: true,
        description: "",
      },
    ],
  },
  {
    icon: "/cocktails.png",
    name: "Cocktail",
    available: true,
    products: [
      {
        id: "795287e1-fbd0-4e6c-bb89-44d183f58d53",
        name: "Mohito",
        price: 700,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046732/shijevere/categories-NEW/cocktails/gy8uzzfiecrxaeytvir1.png",
        available: true,
        description: "",
      },
      {
        id: "0b145b55-8ab1-4269-822b-bf8c23f848f6",
        name: "Gin Bombay Teke",
        price: 600,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716819982/shijevere/categories-NEW/alcohol/gin-bombay_1_ownagv.png",
        available: true,
        description: "",
      },
      {
        id: "3d6fa3c7-1a3f-4d8c-8d10-f4cbb1c5d283",
        name: "Sex On The Beach",
        price: 700,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046732/shijevere/categories-NEW/cocktails/bglcgrzoesuc8unfjcg2.png",
        available: true,
        description: "",
      },
      {
        id: "1e44f85f-17de-448d-bb94-6b7e7645dc52",
        name: "Negroni",
        price: 800,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046732/shijevere/categories-NEW/cocktails/uambqbmdzgnoxpurwcz6.png",
        available: true,
        description: "",
      },
      {
        id: "1fdcb9da-63f8-4901-91d1-c7db1e9bb1f7",
        name: "Mai Tai",
        price: 700,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716589281/shijevere/categories-NEW/cocktails/mai-tai_uxr3fd.png",
        available: true,
        description: "",
      },
      {
        id: "8d58234a-08f1-4317-98ad-53d76d8bcd58",
        name: "Miami Beach",
        price: 600,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046731/shijevere/categories-NEW/cocktails/tjblohz9pnjmvzjpvn19.png",
        available: true,
        description: "",
      },
      {
        id: "51727aa2-c908-4f61-ae0c-655d7b23ae91",
        name: "AMF",
        price: 900,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046731/shijevere/categories-NEW/cocktails/fpym0cqtykjl1vvdluoa.png",
        available: true,
        description: "",
      },
      {
        id: "7ff30f02-8781-4cf4-a950-b9a2bdb04106",
        name: "Long Island",
        price: 900,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716589501/shijevere/categories-NEW/cocktails/long-island_w8wvvy.png",
        available: true,
        description: "",
      },
      {
        id: "cf5ed580-14e8-4a60-8146-d5f7f1f27c26",
        name: "Blue Hawaian",
        price: 800,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716819550/shijevere/categories-NEW/cocktails/gin-bombay_mrprrn.png",
        available: true,
        description: "",
      },
      {
        id: "45a3347c-dbc2-4c32-91a8-7bdf73026099",
        name: "Green Paradise",
        price: 800,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715282772/shijevere/categories-NEW/cocktails/green-paradisee_vfzuat.png",
        available: true,
        description: "",
      },
      {
        id: "ad2b8b84-8b16-4d1d-a229-bb2cc0f38010",
        name: "Vodka Sower",
        price: 800,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046732/shijevere/categories-NEW/cocktails/ntshxyjld6p7zpvgt9rp.png",
        available: true,
        description: "",
      },
      {
        id: "e90747bc-b839-45b3-88b6-f2d25e7f1c5a",
        name: "Disarono Sower",
        price: 600,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716820089/shijevere/categories-NEW/cocktails/disarono-sower_jqqg7f.png",
        available: true,
        description: "",
      },
      {
        id: "f65e9373-7d09-4737-ae1b-0b7f6810dd84",
        name: "Pina Colada",
        price: 800,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716817789/shijevere/categories-NEW/cocktails/pina-colada_f2r5tx.png",
        available: true,
        description: "",
      },
      {
        id: "b217445d-3cbb-4f76-9b6a-7ae0700418e6",
        name: "Irish Coffe",
        price: 800,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046733/shijevere/categories-NEW/coffee/bqslyjv76apovbmychhz.png",
        available: true,
        description: "",
      },
      {
        id: "d5b3283d-57e6-4b60-9479-4d788e61f979",
        name: "Aperol Spritz",
        price: 600,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715610003/shijevere/categories-NEW/cocktails/aperol-spritz_mb3yfm.png",
        available: true,
        description: "",
      },
      {
        id: "3393f93e-474d-4f65-8b2f-d36658f747e0",
        name: "Hugo Spritz",
        price: 600,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046730/shijevere/categories-NEW/cocktails/xyzipiokczndyrcfynqf.png",
        available: true,
        description: "",
      },
      {
        id: "c730e683-6e38-4f8b-9c7d-d728c16726d6",
        name: "Campari Spritz",
        price: 600,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046731/shijevere/categories-NEW/cocktails/jozf1g1x7yj94bw7zpji.png",
        available: true,
        description: "",
      },
      {
        id: "c9b26cb5-73da-44cf-8e02-e25d5ec5b620",
        name: "Tequila Sunrise",
        price: 700,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1708702690/shijevere/categories/cocktails/teq-150_hdwm3x.png",
        available: true,
        description: "",
      },
      {
        id: "c0212b2d-00c3-4b80-872b-0de1f09ac3f5",
        name: "Capirosa",
        price: 600,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046732/shijevere/categories-NEW/cocktails/l6q1buqe8yejsx4xnyln.png",
        available: true,
        description: "",
      },
      {
        id: "2b2a9be3-caba-478d-b20f-f2e5a3346f43",
        name: "Daquiri",
        price: 600,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715283028/shijevere/categories-NEW/cocktails/bees-knees_u9em7h.png",
        available: true,
        description: "",
      },
      {
        id: "99f2c5d5-d58c-49f6-b1f3-8323feaa8c14",
        name: "Strawberry Daquiri",
        price: 700,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716590207/shijevere/categories-NEW/cocktails/strawberry-daiquiri_kefred.png",
        available: true,
        description: "",
      },
      {
        id: "e30a8d56-9466-4da8-85f7-188cd7527d4b",
        name: "Margarita",
        price: 700,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716590093/shijevere/categories-NEW/cocktails/margarita_enubnp.png",
        available: true,
        description: "",
      },
      {
        id: "e6c07e9c-5dd4-4d0e-83e4-7bfb0ec95dc0",
        name: "Cosmopolitan",
        price: 700,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046732/shijevere/categories-NEW/cocktails/tbx2kcnmkpyf7xtt0bba.png",
        available: true,
        description: "",
      },
      {
        id: "996e0a4f-94d5-4290-90ec-2d44c4bcfb9c",
        name: "Long Drinks",
        price: 600,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046730/shijevere/categories-NEW/cocktails/fd0hqfbv4ud8z9wqviwk.png",
        available: true,
        description: "",
      },
      {
        id: "12dffdb2-4788-4691-8e38-3a5cfec2933d",
        name: "Cuba Libre",
        price: 700,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1687512597/shijevere/categories/cocktails/cuba-libre_qfgyy4.png",
        available: true,
        description: "",
      },
      {
        id: "404776c2-44f5-49b4-a8c6-874f92889ae3",
        name: "Whiskey Sower",
        price: 800,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1687591039/shijevere/categories/cocktails/whiskey-sour_yntgaf.png",
        available: true,
        description: "",
      },
      {
        id: "1ccaf6e5-04b7-4a7e-8238-9c51766c5734",
        name: "Non-Alcoholic",
        price: 500,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046731/shijevere/categories-NEW/cocktails/y2uymw8wd0of9reng9le.png",
        available: true,
        description: "",
      },
      {
        id: "ae1766eb-e03f-4c7c-8419-d28c621b2f2f",
        name: "Amara",
        price: 1000,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716820089/shijevere/categories-NEW/cocktails/disarono-sower_jqqg7f.png",
        available: true,
        description: "",
      },
      {
        id: "9dbb1b76-3bb5-4e4b-8d89-c2e07d30f2be",
        name: "Shisha",
        price: 1500,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1687591039/shijevere/categories/cocktails/shisha_aq2o2x.png",
        available: true,
        description: "",
      },
    ],
  },
  {
    icon: "/beers.png",
    name: "Birraria",
    available: true,
    products: [
      {
        id: "cd2e8580-1836-4f62-bdee-69df98204c20",
        name: "Paulaner",
        price: 450,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715281526/shijevere/categories-NEW/beers/paulaner-turbullt_ovpjuk.png",
        available: true,
        description: "",
      },
      {
        id: "c38473c7-6c19-4fd4-a29d-2295ec40c5d2",
        name: "Bavaria 0% Alchool",
        price: 300,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716817545/shijevere/categories-NEW/beers/bavaria_uygmvv.png",
        available: true,
        description: "",
      },
      {
        id: "89e5c30e-33c8-4a36-8c4b-292d899df905",
        name: "Corona",
        price: 450,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046730/shijevere/categories-NEW/beers/hyxtywjvusgupxh0gehu.png",
        available: true,
        description: "",
      },
      {
        id: "599605ae-54c0-4b07-b2bb-56e134378f9f",
        name: "Heiniken",
        price: 300,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715281347/shijevere/categories-NEW/beers/heineken_awbopj.png",
        available: true,
        description: "",
      },
      {
        id: "1cf3682d-0d24-4c7c-bd02-f6e37775590b",
        name: "Kriko Korca e Vogel 0.25",
        price: 250,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715289384/shijevere/categories-NEW/beers/kriko-vogel_yauwbt.png",
        available: true,
        description: "",
      },
      {
        id: "b0970f34-8e27-4ec8-82e1-803ef8b1c73f",
        name: "Kriko Korca e Madhe 0.5",
        price: 350,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715289386/shijevere/categories-NEW/beers/kriko-madhe_nzuknk.png",
        available: true,
        description: "",
      },
      {
        id: "7c1e77b5-09ef-4db0-bc9e-71a6d82cb65b",
        name: "Kriko Stella Artois e Vogel 0.33",
        price: 300,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716817352/shijevere/categories-NEW/beers/kriko_rtjldx.png",
        available: true,
        description: "",
      },
      {
        id: "6edee249-9b5b-4c4c-bf71-3cbd49480c4b",
        name: "Kriko Stella Artois e Madhe 0.5",
        price: 500,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715289386/shijevere/categories-NEW/beers/kriko-madhe_nzuknk.png",
        available: true,
        description: "",
      },
      {
        id: "e67f144e-b23d-4f05-b743-c165e57f2123",
        name: "Kriko Carslberg e Vogel 0.33",
        price: 300,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715289384/shijevere/categories-NEW/beers/kriko-vogel_yauwbt.png",
        available: true,
        description: "",
      },
      {
        id: "d9a42291-1e33-4e95-8003-154937dd9fba",
        name: "Kriko Carslberg e Madhe 0.4",
        price: 400,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1715289386/shijevere/categories-NEW/beers/kriko-madhe_nzuknk.png",
        available: true,
        description: "",
      },
    ],
  },
  {
    icon: "/amaro.png",
    name: "Amaro",
    available: true,
    products: [
      {
        id: "12345678-9abc-def0-1234-56789abcdef0",
        name: "Montenegro",
        price: 350,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824070/shijevere/categories-NEW/alcohol/AmaroMontenegro_1_hlgrks.png",
        available: true,
        description: "",
      },
      {
        id: "23456789-abcd-ef01-2345-6789abcdef01",
        name: "Disarono",
        price: 350,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824069/shijevere/categories-NEW/alcohol/disarono_brcfmw.png",
        available: true,
        description: "",
      },
      {
        id: "34567890-bcde-f012-3456-789abcdef012",
        name: "Jagermaister",
        price: 350,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824068/shijevere/categories-NEW/alcohol/Jagermeister_inlyyp.png",
        available: true,
        description: "",
      },
      {
        id: "45678901-cdef-0123-4567-89abcdef0123",
        name: "Amaro Del Capo",
        price: 400,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824067/shijevere/categories-NEW/alcohol/amaro-del-capo_jngvhc.png",
        available: true,
        description: "",
      },
      {
        id: "56789012-def0-1234-5678-9abcdef01234",
        name: "Martini Bianco",
        price: 300,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824066/shijevere/categories-NEW/alcohol/Martini-Bianco_1_j4k46e.png",
        available: true,
        description: "",
      },
      {
        id: "67890123-ef01-2345-6789-abcdef012345",
        name: "Martini Rosso",
        price: 300,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824065/shijevere/categories-NEW/alcohol/Martini-Rosso-Vermouth_wcqgcd.png",
        available: true,
        description: "",
      },
    ],
  },
  {
    icon: "/gin.png",
    name: "Gin",
    available: true,
    products: [
      {
        id: "78901234-f012-3456-789a-bcdef0123456",
        name: "Bombay",
        price: 450,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716819982/shijevere/categories-NEW/alcohol/gin-bombay_1_ownagv.png",
        available: true,
        description: "",
      },
      {
        id: "89012345-0123-4567-89ab-cdef01234567",
        name: "Gin Gordons",
        price: 350,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824064/shijevere/categories-NEW/alcohol/gordons_gin_kodz4p.png",
        available: true,
        description: "",
      },
      {
        id: "90123456-1234-5678-9abc-def012345678",
        name: "Hawana Club",
        price: 350,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824063/shijevere/categories-NEW/alcohol/coke-havana-club_t6km7d.png",
        available: true,
        description: "",
      },
      {
        id: "a0123456-2345-6789-abcd-ef0123456789",
        name: "Hendricks",
        price: 700,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824063/shijevere/categories-NEW/alcohol/hendriks_ka8go7.png",
        available: true,
        description: "",
      },
      {
        id: "b1234567-3456-7890-bcde-f0123456789a",
        name: "Malibu",
        price: 350,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824086/shijevere/categories-NEW/alcohol/malibu_tjaqbi.png",
        available: true,
        description: "",
      },
      {
        id: "c2345678-4567-8901-cdef-0123456789ab",
        name: "Tanqueray",
        price: 450,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824084/shijevere/categories-NEW/alcohol/Tanqueray_dzcoxi.png",
        available: true,
        description: "",
      },
      {
        id: "d3456789-5678-9012-def0-123456789abc",
        name: "Raki",
        price: 150,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824083/shijevere/categories-NEW/alcohol/raki_az4j5m.png",
        available: true,
        description: "",
      },
    ],
  },
  {
    icon: "/vodka.png",
    name: "Vodka",
    available: true,
    products: [
      {
        id: "a1234567-89ab-cdef-0123-456789abcdef",
        name: "Vodka Absolut",
        price: 350,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824081/shijevere/categories-NEW/alcohol/Vodka_Absolut_ytw33k.png",
        available: true,
        description: "",
      },
      {
        id: "b2345678-9abc-def0-1234-56789abcdef0",
        name: "Vodka Smirnoff",
        price: 350,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824082/shijevere/categories-NEW/alcohol/Vodka_Smirnoff_bn82bp.png",
        available: true,
        description: "",
      },
      {
        id: "c3456789-abcd-ef01-2345-6789abcdef01",
        name: "Vodka Shije Fruti",
        price: 300,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824080/shijevere/categories-NEW/alcohol/vodka-fruit_v8hj0e.png",
        available: true,
        description: "",
      },
    ],
  },
  {
    icon: "/whiskey.png",
    name: "Whiskey",
    available: true,
    products: [
      {
        id: "d6e7f8a1-1234-5678-9abc-def012345678",
        name: "Baileys",
        price: 350,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824079/shijevere/categories-NEW/alcohol/Baileys_wjiq6v.png",
        available: true,
        description: "",
      },
      {
        id: "a6b7c8d1-2345-6789-0abc-def123456789",
        name: "JB Rare",
        price: 350,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824078/shijevere/categories-NEW/alcohol/JB_Rare_wby4y2.png",
        available: true,
        description: "",
      },
      {
        id: "b7c8d9e1-3456-7890-1abc-def234567890",
        name: "Black Label",
        price: 550,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824077/shijevere/categories-NEW/alcohol/Black_Label_alnruf.png",
        available: true,
        description: "",
      },
      {
        id: "c8d9e0f1-4567-8901-2abc-def345678901",
        name: "Red Label",
        price: 550,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824074/shijevere/categories-NEW/alcohol/Red_Label_ca2btk.png",
        available: true,
        description: "",
      },
      {
        id: "d9e0f1a2-5678-9012-3abc-def456789012",
        name: "Jameson",
        price: 450,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824075/shijevere/categories-NEW/alcohol/Jameson_bu0vcq.png",
        available: true,
        description: "",
      },
      {
        id: "e0f1a2b3-6789-0123-4abc-def567890123",
        name: "Jack Daniels",
        price: 400,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824074/shijevere/categories-NEW/alcohol/Jack_Daniels_ua0i0x.png",
        available: true,
        description: "",
      },
      {
        id: "f1a2b3c4-7890-1234-5abc-def678901234",
        name: "Chivas Regal 12",
        price: 700,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824071/shijevere/categories-NEW/alcohol/Chivas_Regal_12_w4xxfj.png",
        available: true,
        description: "",
      },
      {
        id: "a2b3c4d5-8901-2345-6abc-def789012345",
        name: "Chivas Regal 18",
        price: 1200,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716824072/shijevere/categories-NEW/alcohol/Chivas_Regal_18_kkjjeo.png",
        available: true,
        description: "",
      },
    ],
  },
  {
    icon: "/vera.png",
    name: "Gote Vere",
    available: true,
    products: [
      {
        id: "a1b2c3d4-1234-5678-9abc-def012345678",
        name: "Gote Vere e Bardhe",
        price: 400,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716820220/shijevere/categories-NEW/wine/white-wine_orpynu.png",
        available: true,
        description: "",
      },
      {
        id: "b2c3d4e5-2345-6789-0abc-def123456789",
        name: "Gote Vere e Kuqe",
        price: 400,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716820219/shijevere/categories-NEW/wine/red-wine_gchzhf.png",
        available: true,
        description: "",
      },
    ],
  },
  {
    icon: "/shots.png",
    name: "Shots",
    available: true,
    products: [
      {
        id: "12345678-9abc-def0-1234-56789abcdef0",
        name: "Shots",
        price: 200,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046732/shijevere/categories-NEW/cocktails/heqorrhdygklv47o8sgz.png",
        available: true,
        description: "",
      },
    ],
  },
  {
    icon: "/cigare.png",
    name: "Cigare",
    available: true,
    products: [
      {
        id: "23456789-abcd-ef01-2345-6789abcdef01",
        name: "Marlboro Gold",
        price: 500,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046743/shijevere/categories-NEW/tabaco/uqmfi9mpc8el06vje4wi.png",
        available: true,
        description: "",
      },
      {
        id: "34567890-bcde-f012-3456-789abcdef012",
        name: "Marlboro Blu",
        price: 400,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/t_remove-bg/v1690317569/shijevere/categories/cigarette/malboro-blue_pieew4.png",
        available: true,
        description: "",
      },
      {
        id: "45678901-cdef-0123-4567-89abcdef0123",
        name: "Marlboro Black",
        price: 600,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1716591066/shijevere/categories-NEW/tabaco/malboro-black_h4wbsf.png",
        available: true,
        description: "",
      },
      {
        id: "56789012-def0-1234-5678-9abcdef01234",
        name: "Cigare Elektronike",
        price: 1200,
        imageUrl:
          "https://res.cloudinary.com/dq8wk32xl/image/upload/v1709046743/shijevere/categories-NEW/tabaco/kbszhqbcgrdq7i3qzare.png",
        available: true,
        description: "",
      },
    ],
  },
  {
    icon: "/restaurant.png",
    name: "RESTORANT",
    available: true,
    products: [
      {
        id: "12345678-9abc-def0-1234-56789abcdef0",
        name: "Briosh",
        price: 180,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "23456789-abcd-ef01-2345-6789abcdef01",
        name: "Briosh me pistachio",
        price: 200,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "34567890-bcde-f012-3456-789abcdef012",
        name: "Petulla",
        price: 350,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "45678901-cdef-0123-4567-89abcdef0123",
        name: "Toast",
        price: 350,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "56789012-def0-1234-5678-9abcdef01234",
        name: "Club Sandwich",
        price: 500,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "67890123-ef01-2345-6789-abcdef012345",
        name: "Sandwich Vegan",
        price: 400,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "78901234-f012-3456-789a-bcdef0123456",
        name: "Sandwich me proshut pule",
        price: 450,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "89012345-0123-4567-89ab-cdef01234567",
        name: "Omlet me bacon",
        price: 350,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "90123456-1234-5678-9abc-def012345678",
        name: "Omlet me djath dhie & Salcice",
        price: 380,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "a0123456-2345-6789-abcd-ef0123456789",
        name: "Omlet me perime",
        price: 300,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "b1234567-3456-7890-bcde-f0123456789a",
        name: "Veze sy me avocado dhe djathe me feta",
        price: 350,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "c2345678-4567-8901-cdef-0123456789ab",
        name: "Pancakes",
        price: 350,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "d3456789-5678-9012-def0-123456789abc",
        name: "Crepa",
        price: 350,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "e4567890-6789-0123-4567-89abcdef0123",
        name: "Waffle me akullore",
        price: 300,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "f5678901-7890-1234-5678-9abcdef01234",
        name: "Mengjes Tradicional",
        price: 700,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "g6789012-8901-2345-6789-abcdef012345",
        name: "Tailer Mix e Vogel",
        price: 1000,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "h7890123-9012-3456-789a-bcdef0123456",
        name: "Tailer Mix e Madhe",
        price: 1600,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "i8901234-0123-4567-89ab-cdef01234567",
        name: "Patate Frite",
        price: 250,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "j9012345-1234-5678-9abc-def012345678",
        name: "Fritur",
        price: 1400,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
    ],
  },
  {
    icon: "/pizzeria.png",
    name: "PIZZERIA",
    available: true,
    products: [
      {
        id: "12345678-9abc-def0-1234-56789abcdef0",
        name: "Pizza Margherita",
        price: 600,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "23456789-abcd-ef01-2345-6789abcdef01",
        name: "Pizza Proshute Cotto",
        price: 750,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "34567890-bcde-f012-3456-789abcdef012",
        name: "Pizza Diavolo",
        price: 800,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "45678901-cdef-0123-4567-89abcdef0123",
        name: "Pizza 4-Formaggi",
        price: 800,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "56789012-def0-1234-5678-9abcdef01234",
        name: "Pizza Proshut-Kerpurdhe",
        price: 750,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "67890123-ef01-2345-6789-abcdef012345",
        name: "Pizza 4-Stinet",
        price: 750,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "78901234-f012-3456-789a-bcdef0123456",
        name: "Pizza Fruta Deti",
        price: 1200,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "89012345-0123-4567-89ab-cdef01234567",
        name: "Pizza Capriciossa",
        price: 750,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "90123456-1234-5678-9abc-def012345678",
        name: "Pizza Amerikane",
        price: 800,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "a0123456-2345-6789-abcd-ef0123456789",
        name: "Pizza Tonno",
        price: 800,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "b1234567-3456-7890-bcde-f0123456789a",
        name: "Pizza Vegjetariane",
        price: 800,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "c2345678-4567-8901-cdef-0123456789ab",
        name: "Pizza Deliciozza",
        price: 850,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "d3456789-5678-9012-def0-123456789abc",
        name: "Pizza Bufalo",
        price: 900,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "e4567890-6789-0123-4567-89abcdef0123",
        name: "Pizza Taormine",
        price: 950,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "f5678901-7890-1234-5678-9abcdef01234",
        name: "Pizza Proshute-Crudo",
        price: 850,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "g6789012-8901-2345-6789-abcdef012345",
        name: "Fokace",
        price: 450,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
      {
        id: "h7890123-9012-3456-789a-bcdef0123456",
        name: "Fokace me djathe te bardhe",
        price: 500,
        imageUrl: "/ic_restaurant_plate.png",
        available: true,
        description: "",
      },
    ],
  },
];

export const businessData = {
  name: "FAFA",
  city: "Golem",
  orderCode: "dori1992",
  umbrellas: 100,
  location: null,
  logoUrl: null,
  bannerUrl: null,
  quote: null,
  available: true,
  orderRequestFlag: true,
  openingTime: 0,
  closingTime: 99,
  menu: products, //pemaThateMenu,
  activeOrdes: {},
  //   theme: {
  //     primaryColor: "#744228",
  //     menuType: 3,
  //     menuBackground: "transparent",
  //     productBackground: "transparent",
  //     // bgImage: "/tree.png",
  //     sliderBg: "white",
  //     totalBackground: "#744228",
  //     font: "Josefin-Slab",
  //   },
  id: "a12d4614-962e-4310-8b89-3262f0847436",
  createdAt: "2022-05-31T16:09:15.652098Z",
  updatedAt: "2022-05-31T16:09:15.655003Z",
};
