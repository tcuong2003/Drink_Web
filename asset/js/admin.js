let listProducts = localStorage.getItem("listProducts")
  ? JSON.parse(localStorage.getItem("listProducts"))
  : [

    {
      id: 1,
      name: "Americano",
      ingredients: "Espresso, nước nóng",
      price: 3.00,
      cost: 1.50,   
      quantity: 10,
      image: "./asset/img/product-coffee/coffee-101.jpg",
      isHidden: false,
      star: "4.6",
      nature: {
        size: ["S", "M", "L"],
        type: "coffee", 
      }

    },

    {
      id: 2,
      name: "Bạc xỉu",
      ingredients: "Sữa đặc, cà phê pha, đá",
      price: 2.50,
      cost: 1.50,   
      quantity: 100, 
      image: "./asset/img/product-coffee/coffee-102.jpg",
      isHidden: false,
      star: "5",
      nature: {
        size: ["S", "M", "L"],
        type: "coffee",
      }

    },
    {
      id: 3,
      name: "Cacao latte",
      ingredients: "Bột ca cao, sữa, đường, bọt sữa hấp",
      price: 4.20,
      cost: 1.65,   
      quantity: 100, 
      image: "./asset/img/product-coffee/coffee-103.jpg",
      isHidden: false,
      star: "3.5",
      nature: {
        size: ["S", "M", "L"],
        type: "coffee",
      }
    },
    {
      id: 4,
      name: "Cacao nóng",
      ingredients: "Bột ca cao, sữa nóng, đường",
      price: 4.00,
      cost: 1.50,   
      quantity: 100, 
      image: "./asset/img/product-coffee/coffee-104.jpg",
      isHidden: false,
      star: "4.5",
      nature: {
        size: ["S", "M", "L"],
        type: "coffee",
      }
    },
    {
      id: 5,
      name: "Cafe đen",
      ingredients: "Cà phê Robusta pha mạnh",
      price: 2.00,
      cost: 0.50,   
      quantity: 100,
      image: "./asset/img/product-coffee/coffee-105.jpg",
      isHidden: false,
      star: "5",
      nature: {
        size: ["S", "M", "L"],
        type: "coffee",
      }
    },
    {
      id: 6,
      name: "Cafe muối",
      ingredients: "Cà phê, sữa đặc, kem muối",
      price: 3.2,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-coffee/coffee-106.jpg",
      isHidden: false,
      star: "4.3",
      nature: {
        size: ["S", "M", "L"],
        type: "coffee",
      }
    },
    {
      id: 7,
      name: "Cafe sữa",
      ingredients: "Cà phê pha mạnh, sữa đặc, đá",
      price: 2.90,
      cost: 1.40,   
      quantity: 100,
      image: "./asset/img/product-coffee/coffee-107.jpg",
      isHidden: false,
      star: "4.3",
      nature: {
        size: ["S", "M", "L"],
        type: "coffee",
      }
    },

    {
      id: 8,
      name: "Capuchino",
      ingredients: "Espresso, sữa hấp, bọt sữa",
      price: 3.80,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-coffee/coffee-108.jpg",
      isHidden: false,
      star: "4.3",
      nature: {
        size: ["S", "M", "L"],
        type: "coffee",
      }
    },
    {
      id: 9,
      name: "Mocha coffee",
      ingredients: "Espresso, siro sô-cô-la, sữa hấp, kem tươi",
      price: 4.00,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-coffee/coffee-109.jpg",
      isHidden: false,
      star: 4.2,
      nature: {
        size: ["S", "M", "L"],
        type: "coffee",
      }
    },
    {
      id: 10,
      name: "Matcha latte",
      ingredients: "Bột trà xanh, sữa, đường, đá",
      price: 3.50,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-201.jpg",
      isHidden: false,
      star: 4.2,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 11,
      name: "Trà bí đao",
      ingredients: "Trà bí đao, đường phèn, đá",
      price: 2.58,
      cost: 1.10,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-202.jpg",
      isHidden: false,
      star: 4.2,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 12,
      name: "Trà đào",
      ingredients: "Trà đen, siro đào, đào cắt lát, đá",
      price: 3.45,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-203.jpg",
      isHidden: false,
      star: 4.2,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 13,
      name: "Trà dâu ổi hồng",
      ingredients: "Trà đen, siro dâu, nước ép ổi hồng, đá",
      price: 3.4,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-204.jpg",
      isHidden: false,
      star: 4.2,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 14,
      name: "Trà sen vàng",
      ingredients: "Trà sen, mật ong, đá",
      price: 4.20,
      cost: 1.65,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-205.png",
      isHidden: false,
      star: 4.2,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 15,
      name: "Trà sữa khoai môn",
      ingredients: "Trà đen, sữa tươi, bột khoai môn, đường, đá",
      price: 3.57,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-206.jpg",
      isHidden: false,
      star: 4.2,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 16,
      name: "Trà sữa socola",
      ingredients: "Trà đen, sữa tươi, siro socola, đá",
      price: 3.57,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-207.jpg",
      isHidden: false,
      star: 4.2,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 17,
      name: "Trà sữa thái",
      ingredients: "Trà đen Thái, sữa đặc, sữa tươi, đường, đá",
      price: 4.00,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-208.jpg",
      isHidden: false,
      star: 4.2,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 18,
      name: "Trà sữa truyền thống",
      ingredients: "Trà đen, sữa tươi hoặc sữa đặc, đường, đá",
      price: 3.50,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-209.png",
      isHidden: false,
      star: 4.2,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 19,
      name: "Trà tắc",
      ingredients: "Trà xanh, nước cốt tắc, mật ong hoặc đường, đá",
      price: 3.20,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-210.jpg",
      isHidden: false,
      star: 4.2,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 20,
      name: "Trà trái cây nhiệt đới",
      ingredients: "Trà xanh, hỗn hợp trái cây nhiệt đới, đá, đường",
      price: 4.15,
      cost: 1.60,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-211.jpg",
      isHidden: false,
      star: 4.2,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 21,
      name: "Trà vải",
      ingredients: "Trà đen, nước ép vải, đường, đá",
      price: 3.99,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-212.png",
      isHidden: false,
      star: 4.2,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 22,
      name: "Sinh tố dứa",
      ingredients: "Xoài chín, sữa đặc, sữa tươi, đường, đá xay",
      price: 4.49,
      cost: 1.90,   
      quantity: 100,
      image: "./asset/img/product-smoothie/smoothie-301.jpg",
      isHidden: false,
      star: 4.5,
      nature: {
        size: ["S", "M", "L"],
        type: "smoothie",
      }
    },
    {
      id: 23,
      name: "Sinh tố xoài",
      ingredients: "Thơm (dứa), mật ong, sữa tươi, đá viên",
      price: 4.19,
      cost: 1.60,   
      quantity: 100,
      image: "./asset/img/product-smoothie/smoothie-302.jpg",
      isHidden: false,
      star: 4.3,
      nature: {
        size: ["S", "M", "L"],
        type: "smoothie",
      }
    },
    {
      id: 24,
      name: "Sinh tố bơ",
      ingredients: "Mãng cầu xiêm, sữa đặc, sữa tươi, đá xay",
      price: 4.59,
      cost: 1.95,   
      quantity: 100,
      image: "./asset/img/product-smoothie/smoothie-303.jpg",
      isHidden: false,
      star: 4.6,
      nature: {
        size: ["S", "M", "L"],
        type: "smoothie",
      }
    },
    {
      id: 25,
      name: "Sinh tố chuối",
      ingredients: "Kiwi, táo xanh, mật ong, đá viên",
      price: 4.79,
      cost: 2.60,   
      quantity: 100,
      image: "./asset/img/product-smoothie/smoothie-304.jpg",
      isHidden: false,
      star: 4.4,
      nature: {
        size: ["S", "M", "L"],
        type: "smoothie",
      }
    },
    {
      id: 26,
      name: "Sinh tố dâu tây",
      ingredients: "Dâu tây, sữa chua, sữa tươi, đá xay",
      price: 4.69,
      cost: 2.40,   
      quantity: 100,
      image: "./asset/img/product-smoothie/smoothie-305.jpg",
      isHidden: false,
      star: 4.7,
      nature: {
        size: ["S", "M", "L"],
        type: "smoothie",
      }
    },
    {
      id: 27,
      name: "Sinh tố kiwi",
      ingredients: "Chuối chín, sữa tươi, mật ong, đá viên",
      price: 3.99,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-smoothie/smoothie-306.jpg",
      isHidden: false,
      star: 4.3,
      nature: {
        size: ["S", "M", "L"],
        type: "smoothie",
      }
    },
    {
      id: 28,
      name: "Sinh tố mãng cầu",
      ingredients: "Bơ sáp, sữa đặc, sữa tươi, đá xay",
      price: 4.89,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-smoothie/smoothie-307.jpg",
      isHidden: false,
      star: 4.8,
      nature: {
        size: ["S", "M", "L"],
        type: "smoothie",
      }
    },
    {
      id: 29,
      name: "Nước ép táo",
      ingredients: "Táo tươi, nước lọc, đường (tuỳ chọn), đá viên",
      price: 3.99,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-juice/juice-401.jpg",
      isHidden: false,
      star: 4.4,
      nature: {
        size: ["S", "M", "L"],
        type: "juice",
      }
    },
    {
      id: 30,
      name: "Nước ép cam",
      ingredients: "Rau má tươi, nước lọc, sữa đặc hoặc đường, đá viên",
      price: 3.49,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-juice/juice-402.jpg",
      isHidden: false,
      star: 4.5,
      nature: {
        size: ["S", "M", "L"],
        type: "juice",
      }
    },
    {
      id: 31,
      name: "Nước ép cà rốt",
      ingredients: "Ổi hồng, muối, đường, đá xay",
      price: 3.79,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-juice/juice-403.jpg",
      isHidden: false,
      star: 4.3,
      nature: {
        size: ["S", "M", "L"],
        type: "juice",
      }
    },
    {
      id: 32,
      name: "Nước ép chanh dây",
      ingredients: "Lựu tươi, mật ong, đá viên",
      price: 4.49,
      cost: 1.90,   
      quantity: 100,
      image: "./asset/img/product-juice/juice-404.jpg",
      isHidden: false,
      star: 4.6,
      nature: {
        size: ["S", "M", "L"],
        type: "juice",
      }
    },
    {
      id: 33,
      name: "Nước ép dưa hấu",
      ingredients: "Dưa hấu, đường (tuỳ chọn), đá viên",
      price: 3.59,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-juice/juice-405.jpg",
      isHidden: false,
      star: 4.5,
      nature: {
        size: ["S", "M", "L"],
        type: "juice",
      }
    },
    {
      id: 34,
      name: "Nước ép lựu",
      ingredients: "Chanh dây, đường, nước lọc, đá viên",
      price: 3.69,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-juice/juice-406.jpg",
      isHidden: false,
      star: 4.7,
      nature: {
        size: ["S", "M", "L"],
        type: "juice",
      }
    },
    {
      id: 35,
      name: "Nước ép ổi",
      ingredients: "Cam tươi, mật ong (tuỳ chọn), đá viên",
      price: 3.99,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-juice/juice-407.jpg",
      isHidden: false,
      star: 4.8,
      nature: {
        size: ["S", "M", "L"],
        type: "juice",
      }
    },
    {
      id: 36,
      name: "Nước ép rau má",
      ingredients: "Cà rốt tươi, mật ong, đá viên",
      price: 3.89,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-juice/juice-408.jpg",
      isHidden: false,
      star: 4.4,
      nature: {
        size: ["S", "M", "L"],
        type: "juice",
      }
    },
    {
      id: 37,
      name: "Cà phê phin",
      ingredients: "Sữa đặc, cà phê rang say, nước nóng",
      price: 4.00,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-coffee/coffee-110.jpg",
      isHidden: false,
      star: "4.3",
      nature: {
        size: ["S", "M", "L"],
        type: "coffee",
      }
    },
    {
      id: 38,
      name: "Caramel Macchiato",
      ingredients: "Espresso, sữa tươi, sốt caramel, siro vani",
      price: 5.38,
      cost: 2.70,   
      quantity: 100,
      image: "./asset/img/product-coffee/coffee-111.jpg",
      isHidden: false,
      star: "3.4",
      nature: {
        size: ["S", "M", "L"],
        type: "coffee",
      }
    },
    {
      id: 39,
      name: "Espresso con Panna",
      ingredients: "Espresso, kem tươi đánh bông",
      price: 3.50,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-coffee/coffee-112.jpg",
      isHidden: false,
      star: "2.5",
      nature: {
        size: ["S", "M", "L"],
        type: "coffee",
      }
    },
    {
      id: 40,
      name: "Espresso",
      ingredients: "Cà phê xay mịn, nước nóng",
      price: 3.00,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-coffee/coffee-113.jpg",
      isHidden: false,
      star: "1.5",
      nature: {
        size: ["S", "M", "L"],
        type: "coffee",
      }
    },
    {
      id: 41,
      name: "Ristretto Bianco",
      ingredients: "Ristretto, sữa tươi đánh bọt",
      price: 4.20,
      cost: 1.65,   
      quantity: 100,
      image: "./asset/img/product-coffee/coffee-114.jpg",
      isHidden: false,
      star: "2.6",
      nature: {
        size: ["S", "M", "L"],
        type: "coffee",
      }
    },
    {
      id: 42,
      name: "Trà olong nhài",
      ingredients: "Trà olong, hoa nhài, đá",
      price: 4.15,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-213.jpg",
      isHidden: false,
      star: 4.3,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 43,
      name: "Trà sữa Oreo",
      ingredients: "Trà đen, sữa tươi, kem Oreo, đá",
      price: 5.70,
      cost: 3.0,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-214.jpg",
      isHidden: false,
      star: 3.5,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 44,
      name: "Trà sữa pudding trứng",
      ingredients: "Trà đen, sữa tươi, pudding trứng, đá",
      price: 6.00,
      cost: 3.20,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-215.jpg",
      isHidden: false,
      star: 1.4,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 45,
      name: "Trà xoài kem cheese",
      ingredients: "Trà xanh, xoài, kem cheese, đá",
      price: 4.80,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-216.jpg",
      isHidden: false,
      star: 4.7,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 46,
      name: "Trà đào cam sả",
      ingredients: "Trà đen, đào, cam, sả, đá",
      price: 4.50,
      cost: 2.0,   
      quantity: 100,
      image: "./asset/img/product-tea/tea-217.jpg",
      isHidden: false,
      star: 3.5,
      nature: {
        size: ["S", "M", "L"],
        type: "tea",
      }
    },
    {
      id: 47,
      name: "Sinh tố dưa lưới",
      ingredients: "Dưa lưới chín, sữa tươi, sữa đặc, đá xay",
      price: 4.39,
      cost: 1.80,   
      quantity: 100,
      image: "./asset/img/product-smoothie/smoothie-308.jpg",
      isHidden: false,
      star: 4.5,
      nature: {
        size: ["S", "M", "L"],
        type: "smoothie",
      }
    },
    {
      id: 48,
      name: "Sinh tố sầu riêng",
      ingredients: "Sầu riêng, sữa tươi, sữa đặc, đá xay",
      price: 2.99,
      cost: 1.20,   
      quantity: 100,
      image: "./asset/img/product-smoothie/smoothie-309.jpg",
      isHidden: false,
      star: 4.6,
      nature: {
        size: ["S", "M", "L"],
        type: "smoothie",
      }
    },
    {
      id: 49,
      name: "Sinh tố đu đủ",
      ingredients: "Đu đủ chín, sữa tươi, sữa đặc, đá viên",
      price: 3.89,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-smoothie/smoothie-310.jpg",
      isHidden: false,
      star: 4.4,
      nature: {
        size: ["S", "M", "L"],
        type: "smoothie",
      }
    },
    {
      id: 50,
      name: "Sinh tố việt quất",
      ingredients: "Việt quất, sữa chua, sữa tươi, đá xay",
      price: 4.79,
      cost: 2.60,   
      quantity: 100,
      image: "./asset/img/product-smoothie/smoothie-311.jpg",
      isHidden: false,
      star: 4.7,
      nature: {
        size: ["S", "M", "L"],
        type: "smoothie",
      }
    },
    {
      id: 51,
      name: "Sinh tố mít",
      ingredients: "Mít tươi, sữa tươi, sữa đặc, đá viên",
      price: 2.29,
      cost: 0.90,   
      quantity: 100,
      image: "./asset/img/product-smoothie/smoothie-312.jpg",
      isHidden: false,
      star: 4.5,
      nature: {
        size: ["S", "M", "L"],
        type: "smoothie",
      }
    },
    {
      id: 52,
      name: "Nước ép nho",
      ingredients: "Nho tím tươi, mật ong, đá viên",
      price: 4.49,
      cost: 1.90,   
      quantity: 100,
      image: "./asset/img/product-juice/juice-409.jpg",
      isHidden: false,
      star: 4.6,
      nature: {
        size: ["S", "M", "L"],
        type: "juice",
      }
    },
    {
      id: 53,
      name: "Nước ép đào",
      ingredients: "Đào chín, đường (tuỳ chọn), đá viên",
      price: 4.19,
      cost: 1.60,   
      quantity: 100,
      image: "./asset/img/product-juice/juice-410.jpg",
      isHidden: false,
      star: 4.4,
      nature: {
        size: ["S", "M", "L"],
        type: "juice",
      }
    },
    {
      id: 54,
      name: "Nước ép mận",
      ingredients: "Mận chín, đường, đá xay",
      price: 4.19,
      cost: 1.60,   
      quantity: 100,
      image: "./asset/img/product-juice/juice-411.jpg",
      isHidden: false,
      star: 4.3,
      nature: {
        size: ["S", "M", "L"],
        type: "juice",
      }
    },
    {
      id: 55,
      name: "Nước ép dưa leo",
      ingredients: "Dưa leo tươi, mật ong, đá viên",
      price: 3.79,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-juice/juice-412.jpg",
      isHidden: false,
      star: 1.2,
      nature: {
        size: ["S", "M", "L"],
        type: "juice",
      }
    },
    {
      id: 56,
      name: "Nước ép cà chua",
      ingredients: "Cà chua tươi, mật ong hoặc đường, đá viên",
      price: 3.69,
      cost: 1.50,   
      quantity: 100,
      image: "./asset/img/product-juice/juice-413.jpg",
      isHidden: false,
      star: 2.1,
      nature: {
        size: ["S", "M", "L"],
        type: "juice",
      }
    },




  ];
let listUsers = JSON.parse(localStorage.getItem("DataUsers"));
// console.log(listProducts); // Đây là danh sách sản phẩm từ localStorage
let listOrders = localStorage.getItem("listOrders")
  ? JSON.parse(localStorage.getItem("listOrders"))
  : [];
renderAdmin();
function renderAdmin() {
  renderProductManagement();
  document.querySelector(".productManagement").onclick = function () {
    renderProductManagement();
  };
  document.querySelector(".orderManagement").onclick = function () {
    renderOrderManagement();
  };
  document.querySelector(".userManagement").onclick = function () {
    renderUserManagement();
  };
  document.querySelector(".orderStartictis").onclick = function () {
    renderOrderStartictis();
  };
  document.querySelector(".importReceipt").onclick = function () {
    renderImportReceipt();
  };
  document.querySelector(".logout").onclick = function () {
    window.location = "./index.html";
  };
}

function renderImportReceipt() {
  document.querySelector(".div-title").innerHTML = `
        <h1 class="title">Import Receipt</h1>
    `;
  // build product options from listProducts (from localStorage)
  let productOptions = '';
  if (Array.isArray(listProducts) && listProducts.length > 0) {

  // Chỉ lấy sản phẩm KHÔNG ẩn
  const visibleProducts = listProducts.filter(p => !p.isHidden);

  if (visibleProducts.length > 0) {
    productOptions = visibleProducts
      .map(p => `<option value="${p.id}">${p.name}</option>`)
      .join('');
  } else {
    productOptions = '<option value="">-- No visible products --</option>';
  }

  } else {
    productOptions = '<option value="">-- No products --</option>';
  }

  document.querySelector(".contain-add-product-search").innerHTML = `
    <div class="import-container">

      <div class="import-form">
        <label>Date:</label>
        <input type="date" id="importDate">

        <label>Product:</label>
        <select id="importProduct">
          <option value="" selected disabled>-- Select Product --</option>
          ${productOptions}
        </select>

        <label>Cost Price:</label>
        <input type="number" id="importPrice" placeholder="Cost price" readonly>

        <label>Quantity:</label>
        <input type="number" id="importQty" placeholder="Qty">

        <button id="btnAddItem">Add Item</button>
      </div>

      <table class="import-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Cost Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="importTableBody"></tbody>
      </table>

      <div class="import-bottom">
        <p id="displayDate">Date: <span id="displayDateValue">-</span></p>
        <h3 class="total-title">Total: $<span id="importTotal">0.00</span></h3>
      </div>

      <button id="btnCompleteReceipt" class="complete-btn">Complete Receipt</button>
    </div>
  `;

  // ==== LOGIC ====

  let trangThai = "chuahoanthanh";

  // when product selection changes, populate cost price from listProducts and make it read-only
  const importProductSelect = document.getElementById('importProduct');
  const importPriceInput = document.getElementById('importPrice');
  const importQtyInput = document.getElementById('importQty');
  const importDateInput = document.getElementById('importDate');

  importProductSelect.addEventListener('change', function () {
    const pid = parseInt(this.value);
    const prod = Array.isArray(listProducts) ? listProducts.find(p => p.id === pid) : null;
    if (prod) {
      importPriceInput.value = (parseFloat(prod.cost) || 0).toFixed(2);
    } else {
      importPriceInput.value = '';
    }
  });

  document.getElementById("btnAddItem").onclick = function () {
    if (trangThai === "hoanthanh")
      return alert("Receipt has already completed!");
    const productSelect = importProductSelect;
    const productId = productSelect.value;
    const productName = productSelect.options[productSelect.selectedIndex]
      ? productSelect.options[productSelect.selectedIndex].text
      : '';
    const qty = importQtyInput.value;
    const day = importDateInput.value;

    if (!day || !productId || !qty) return alert("Please fill in all fields!");
    if (qty <= 0) return alert("Please enter a Quantity greater than 0");

    // get cost price from listProducts (localStorage source)
    const pidNum = parseInt(productId);
    const productObj = Array.isArray(listProducts) ? listProducts.find(p => p.id === pidNum) : null;
    if (!productObj) return alert('Selected product not found in products list');
    const price = parseFloat(productObj.cost) || 0;
    if (price <= 0) return alert('Cost price for this product is invalid');
    const tbody = document.getElementById("importTableBody");
    const row = document.createElement("tr");
    row.setAttribute('data-product-id', productId);
    const qtyNum = parseInt(qty);

    row.innerHTML = `
      <td>${productName}</td>
      <td class="costCell">$${price.toFixed(2)}</td>
      <td><input type="number" value="${qtyNum}" class="editInput qtyInput"></td>
      <td class="rowTotal">${(price * qtyNum).toFixed(2)}</td>
      <td>
        <button class="editRow">Edit</button>
        <button class="deleteRow">Delete</button>
      </td>
    `;

    tbody.appendChild(row);
    // update displayed date under table
    document.getElementById('displayDateValue').innerText = day;

    updateTotal();
    attachRowEvents(row);

    // reset input fields for next item (keep date)
    importProductSelect.selectedIndex = 0;
    importPriceInput.value = '';
    importQtyInput.value = '';
  };

  function attachRowEvents(row) {
    row.querySelector(".editRow").onclick = function () {
      if (trangThai === "hoanthanh")
        return alert("Receipt is completed. Cannot edit!");

      // cost is fixed (cell index 1), quantity editable (cell index 2)
      const costText = row.children[1].textContent || '';
      const cost = parseFloat(costText.replace('$','')) || 0;
      const qtyInput = row.querySelector('.qtyInput');
      const qty = parseInt(qtyInput.value) || 0;
      row.querySelector('.rowTotal').innerText = (cost * qty).toFixed(2);
      updateTotal();
    };

    row.querySelector(".deleteRow").onclick = function () {
      if (trangThai === "hoanthanh")
        return alert("Cannot delete after completion!");

      if (confirm("Delete this item?")) {
        row.remove();
        updateTotal();
      }
    };
  }

  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".rowTotal").forEach(item => {
      const v = parseFloat(item.innerText) || 0;
      total += v;
    });
    document.getElementById("importTotal").innerText = total.toFixed(2);
  }

  document.getElementById("btnCompleteReceipt").onclick = function () {
    if (trangThai === "hoanthanh") return;

    const tbody = document.getElementById('importTableBody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    if (rows.length === 0) return alert('No items to complete!');

    if (!confirm("Confirm completing the import receipt? After completing, the receipt will be saved.")) return;

    // Build receipt object
    const items = rows.map(row => {
      const productId = parseInt(row.getAttribute('data-product-id')) || null;
      const name = row.children[0].innerText;
      const costText = row.children[1].textContent || '';
      const price = parseFloat(costText.replace('$','')) || 0;
      const quantity = parseInt(row.querySelector('.qtyInput').value) || 0;
      const total = parseFloat((price * quantity).toFixed(2));
      return { productId, nameProduct: name, price, quantity, total };
    });

    const receiptTotal = items.reduce((s, it) => s + it.total, 0);
    const receipt = {
      id: Date.now(),
      date: document.getElementById('importDate').value || new Date().toISOString(),
      items,
      total: parseFloat(receiptTotal.toFixed(2)),
      status: 'completed'
    };

    // Save to localStorage under key 'importReceipts'
    const stored = localStorage.getItem('importReceipts');
    const importReceipts = stored ? JSON.parse(stored) : [];
    importReceipts.push(receipt);
    localStorage.setItem('importReceipts', JSON.stringify(importReceipts));

    // Reset the form for new receipt (keep product list intact)
    tbody.innerHTML = '';
    document.getElementById('importDate').value = '';
    document.getElementById('displayDateValue').innerText = '-';
    document.getElementById('importPrice').value = '';
    document.getElementById('importQty').value = '';
    document.getElementById('importTotal').innerText = '0.00';
    trangThai = 'chuahoanthanh';

    alert('Receipt saved to localStorage and form reset for a new receipt.');
  };
}

    //========Product Management========//
function renderProductManagement() {
    document.querySelector(".div-title").innerHTML = `
        <h1 class="title">Product Management</h1>
    `;

    document.querySelector(".contain-add-product-search").innerHTML = `
        <div class="add-product-search">
            <button class="add-btn" onclick="openAddForm()">Add Product</button>
            <div class="search">
                <input
                    type="text"
                    placeholder="Search for..."
                    class="search-field"
                    />
                <svg xmlns="" height="1em" viewBox="0 0 512 512" class="icon-delete hidden"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg>
                <button class="btn-search"><img src="./asset/img/header-search.svg" alt="" class="search-icon" /></button>
            </div>
        </div>

        <div class="filters-container">
            <div class="filter-group">
                <label for="filter-cost">Cost:</label>
                <select id="filter-cost" class="filter-select">
                    <option value="all">All</option>
                    <option value="0.5-1.5">$0.5 - $1.5</option>
                    <option value="1.6-2.6">$1.60 - $2.60</option>
                    <option value="2.7-3.5">$2.70 - $3.50</option>
                </select>
            </div>
            
            <div class="filter-group">
                <label for="filter-price">Price:</label>
                <select id="filter-price" class="filter-select">
                    <option value="all">All</option>
                    <option value="2-3">$2 - $3</option>
                    <option value="3.1-4">$3.10 - $4</option>
                    <option value="4.1-5">$4.10 - $5</option>
                    <option value="5.1-6">$5.10 - $6</option>
                </select>
            </div>

            <div class="filter-group">
                <label for="filter-profit">Profit %:</label>
                <select id="filter-profit" class="filter-select">
                    <option value="all">All</option>
                    <option value="50-150">50% - 150%</option>
                    <option value="150-250">150% - 250%</option>
                    <option value="250-350">250% - 350%</option>
                </select>
            </div>

            <div class="filter-group">
                <label for="filter-quantity">Quantity:</label>
                <select id="filter-quantity" class="filter-select">
                    <option value="all">All</option>
                    <option value="1-5">Thấp (1-5)</option>
                    <option value="6-14">Vừa (6-14)</option>
                    <option value="15-Infinity">Cao (15+)</option> 
                </select>
            </div>
            </div>

        <div class="contain-product">
        </div>
    `;
    renderProducts(listProducts);
    handleProductManagement(); 
}

// THAY THẾ hàm renderProducts cũ
function renderProducts(arr) {
    const productListContainer = document.querySelector(".contain-product");
    productListContainer.innerHTML = "";

    arr.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.setAttribute('id', `product-row-${product.id}`); 

        if (product.isHidden) {
            productDiv.classList.add("product-hidden");
        }

        // --- Logic tính toán ---
        const hideButtonText = product.isHidden ? "Visible" : "Hidden";
        const hideButtonClass = product.isHidden ? "show-btn" : "hide-btn";
        
        const cost = parseFloat(product.cost) || 0;
        const price = parseFloat(product.price) || 0;
        const type = product.nature.type || "N/A";
        const quantity = parseInt(product.quantity) || 0; 

        let profitDisplay = "0"; 
        if (cost > 0) {
            profitDisplay = (((price - cost) / cost) * 100).toFixed(0);
        } else if (cost === 0 && price > 0) {
            profitDisplay = "∞";
        }
        
        // ========== LOGIC TÔ MÀU ==========
        let quantityClass = "";
        if (quantity >= 1 && quantity <= 5) {
            quantityClass = "stock-low"; // Đỏ
        } else if (quantity >= 6 && quantity <= 14) {
            quantityClass = "stock-medium"; // Vàng
        } else if (quantity >= 15) {
            quantityClass = "stock-high"; // Xanh
        }
        // ===================================

        // --- HTML MỚI ---
        productDiv.innerHTML = `
            <img src="${product.image}" alt="" class="img-product" />

            <div class="product-info">
                <h2 class="name">${product.name}</h2>
                <span class="product-type-badge type-${type}">${type}</span>
            </div>

            <div class="product-pricing">
                <span class="pricing-label">Cost</span>
                <span class="pricing-value" id="product-cost-${product.id}">$${cost.toFixed(2)}</span>
            </div>

            <div class="product-pricing">
                <span class="pricing-label">Price</span>
                <input type="number" class="inline-input product-input-price" id="product-price-${product.id}" data-id="${product.id}" value="${price.toFixed(2)}" step="0.01" />
            </div>

            <div class="product-pricing">
                <span class="pricing-label">Profit %</span> 
                <input type="number" class="inline-input product-input-profit" id="product-profit-${product.id}" data-id="${product.id}" value="${profitDisplay}" />
            </div>

            <div class="product-pricing ${quantityClass}">
                <span class="pricing-label">Quantity</span>
                <span class="pricing-value">${quantity}</span>
            </div>

            <details class="action-menu-container">
                <summary class="action-menu-toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </summary>
                
                <div class="action-menu-dropdown">
                    <button class="edit-btn" onclick="openEditForm(${product.id})">
                        <img src="./asset/img/admin-edit-product.png" alt="" class="icon-edit" />
                        Edit
                    </button>
                    <button class="${hideButtonClass} hide-btn" onclick="toggleHideProduct(${product.id})">
                        <img src="./asset/img/hide.png" alt="" class="icon-hide" />
                        ${hideButtonText}
                    </button>
                    <button class="delete-btn" onclick="deleteProduct(${product.id})">
                        <img src="./asset/img/admin-delete-product.png" alt="" class="icon-delete" />
                        Delete 
                    </button>
                </div>
            </details>
        `;

        productListContainer.appendChild(productDiv);
    });

    // Kích hoạt các ô input
    setupInlineEditing();
}
/* DÁN HÀM NÀY VÀO file admin.js
   (Ngay sau hàm renderProducts)
*/
function setupInlineEditing() {
    // 1. Lấy các ô input
    const priceInputs = document.querySelectorAll('.product-input-price');
    const profitInputs = document.querySelectorAll('.product-input-profit');

    // 2. Hàm lưu thay đổi
    function saveChange(productId, field, value) {
        const productToUpdate = listProducts.find(p => p.id === productId);
        if (productToUpdate) {
            productToUpdate[field] = parseFloat(value);
            localStorage.setItem("listProducts", JSON.stringify(listProducts));
        }
    }

    // 3. Gán sự kiện cho ô Price
    priceInputs.forEach(input => {
        // 'change' chỉ kích hoạt khi bạn bấm ra ngoài
        input.addEventListener('change', (e) => { 
            const productId = parseInt(e.target.dataset.id);
            const price = parseFloat(e.target.value) || 0;

            // Tìm các ô liên quan
            const costElement = document.getElementById(`product-cost-${productId}`);
            const profitInput = document.getElementById(`product-profit-${productId}`);
            
            // Đọc Cost từ văn bản (loại bỏ "$")
            const cost = parseFloat(costElement.textContent.replace('$', '')) || 0;

            // Tính lại Profit %
            if (cost > 0 && price >= cost) {
                const newProfit = ((price - cost) / cost) * 100;
                profitInput.value = newProfit.toFixed(0);
            } else {
                profitInput.value = 0;
            }
            // Lưu Price mới
            saveChange(productId, 'price', price);
        });
    });

    // 4. Gán sự kiện cho ô Profit %
    profitInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const productId = parseInt(e.target.dataset.id);
            const profit = parseFloat(e.target.value) || 0;

            // Tìm các ô liên quan
            const costElement = document.getElementById(`product-cost-${productId}`);
            const priceInput = document.getElementById(`product-price-${productId}`);

            // Đọc Cost từ văn bản
            const cost = parseFloat(costElement.textContent.replace('$', '')) || 0;

            // Tính lại Price
            if (cost > 0) {
                const newPrice = cost + (cost * profit / 100);
                priceInput.value = newPrice.toFixed(2);
                // Lưu Price mới
                saveChange(productId, 'price', newPrice);
            }
        });
    });
}
  //=============order Management=============//
  // phần order Management đổi màu khi nhấn chọn 
function renderOrderManagement() {
  document.querySelector(".div-title").innerHTML = `
        <h1 class="title">Order Management</h1>
    `;
  const orderManagementContainer = document.querySelector(
    ".contain-add-product-search"
  );

  orderManagementContainer.innerHTML = ` 
    <div class="orderManagementHeader">
        <button class="add-btn" id="wait-order-btn">
            Các đơn hàng chưa xác nhận
        </button>
        <button class="add-btn" id="accepted-order-btn">
            Các đơn hàng đã xác nhận
        </button>
        <button class="add-btn" id="rejected-order-btn">
            Các đơn hàng bị hủy
        </button>
    </div>
    <div class="orderManagementBody"></div>
    `;

  const waitBtn = document.getElementById("wait-order-btn");
  const acceptedBtn = document.getElementById("accepted-order-btn");
  const rejectedBtn = document.getElementById("rejected-order-btn");
  const allButtons = [waitBtn, acceptedBtn, rejectedBtn];

  function setActiveButton(clickedButton) {
    allButtons.forEach(btn => btn.classList.remove('active-filter'));
    clickedButton.classList.add('active-filter');
  }

  waitBtn.addEventListener('click', () => {
    setActiveButton(waitBtn);
    renderWaitOrder(listOrders);
  });
  acceptedBtn.addEventListener('click', () => {
    setActiveButton(acceptedBtn);
    renderAcceptedOrder(listOrders);
  });
  rejectedBtn.addEventListener('click', () => {
    setActiveButton(rejectedBtn);
    renderRejectedOrder(listOrders);
  });

  // Mặc định hiển thị đơn hàng chờ và kích hoạt nút đầu tiên
  // renderWaitOrder(listOrders);
  // waitBtn.classList.add('active-filter');
}
  //---------------------------------------------------//
function renderTotalPriceAdmin(arrOfOrderInListOrder) {
  let sumQuantity = 0;
  let sumPrice = 0;
  let shipTotal = 0;
  arrOfOrderInListOrder.forEach((item) => {
    sumQuantity += item.quantity;
    sumPrice += item.price * item.quantity;
    shipTotal += 5 * item.quantity;
  })
  let totalPriceFull = sumPrice + shipTotal;
  return totalPriceFull.toFixed(2);
}
//======== Các Đơn Hàng Chờ Xác Nhận =========//
function renderWaitOrder(arr) {
  const orderManagementBody = document.querySelector(".orderManagementBody")
  orderManagementBody.innerHTML = "";
  arr.forEach((order) => {
    if (order.order[0].check === 0) {
      const orderDiv = document.createElement("div");
      orderDiv.classList.add("historyOrder");
      var orderid = order.id;
      orderDiv.setAttribute("id", orderid);
      orderDiv.innerHTML = `
    <div class="helloUser-Order">
    <div class="sub-hello">
      <p>User: ${order.email}</p>
      <p class="total">Total: $${renderTotalPriceAdmin(order.order)}</p>
    </div>
      <span class = "fee_shipping fee_shipping${order.id}" >Shipping Fee: $10</span>
  </div>
        <div class="container">
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quatity</th>    
                        <th>Price</th>
                        <th>Order time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody class = "tableHistory">
                    
                </tbody>
            </table>
        </div>
        <div class="handleAcceptOrder">
          <div>
            <button class="adminAcceptOrder" onclick = "acceptOrder(${orderid})">Xác nhận</button>
          </div>
          <div>
            <button class="adminRejectOrder" onclick = "rejectOrder(${orderid})">Hủy</button>
          </div>
        </div>
    `;
      orderManagementBody.appendChild(orderDiv);
      renderOrderItem(order.order, orderid);
    }
  });
}
//======== Các Đơn Hàng Đã Xác Nhận =========//
function renderAcceptedOrder(arr) {
  const orderManagementBody = document.querySelector(".orderManagementBody")
  orderManagementBody.innerHTML = "";
  arr.forEach((order) => {
    if (order.order[0].check === 1) {
      const orderDiv = document.createElement("div");
      orderDiv.classList.add("historyOrder");
      var orderid = order.id;
      orderDiv.setAttribute("id", orderid);
      orderDiv.innerHTML = `
        <div class="helloUser-Order">
          <div class="sub-hello">
            <p>User: ${order.email}</p>
            <p class="total">Total: $${renderTotalPriceAdmin(order.order)}</p>
          </div>
            <span class = "fee_shipping fee_shipping${order.id}" >Shipping Fee: $10</span>
        </div>
        <div class="container">
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quatity</th>    
                        <th>Price</th>
                        <th>Order time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody class = "tableHistory">
                    
                </tbody>
            </table>
        </div>
    `;
      orderManagementBody.appendChild(orderDiv);
      renderOrderItem(order.order, orderid);
    }
  });
}
//======== Các Đơn Hàng Đã Bị Hủy =========//
function renderRejectedOrder(arr) {
  const orderManagementBody = document.querySelector(".orderManagementBody")
  orderManagementBody.innerHTML = "";
  arr.forEach((order) => {
    if (order.order[0].check === 2) {
      const orderDiv = document.createElement("div");
      orderDiv.classList.add("historyOrder");
      var orderid = order.id;
      orderDiv.setAttribute("id", orderid);
      orderDiv.innerHTML = `
        <div class="helloUser-Order">
        <div class="sub-hello">
          <p>User: ${order.email}</p>
          <p class="total">Total: $${renderTotalPriceAdmin(order.order)}</p>
        </div>
          <span class = "fee_shipping fee_shipping${order.id}" >Shipping Fee: $10</span>
      </div>
        <div class="container">
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quatity</th>    
                        <th>Price</th>
                        <th>Order time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody class = "tableHistory">
                    
                </tbody>
            </table>
        </div>
    `;
      orderManagementBody.appendChild(orderDiv);
      renderOrderItem(order.order, orderid);
    }
  });
}

function renderTotalShipAdmin(arrOfOrderInListOrder) {
  let sumQuantity = 0;
  let sumPrice = 0;
  let shipTotal = 0;
  arrOfOrderInListOrder.forEach((item) => {
    sumQuantity += item.quantity;
    sumPrice += item.price * item.quantity;
    shipTotal += 5 * item.quantity;
  })
  return shipTotal;
}

function renderOrderItem(arr, orderid) {
  const orderManagementTbody = document
    .getElementById(orderid)
    .querySelector(".tableHistory");
  var variableNeed = ".fee_shipping" + orderid
  document.querySelector(variableNeed).textContent = "Shipping Fee: $" + renderTotalShipAdmin(arr);
  let number = 0;
  arr.forEach((item) => {
    number++;
    // Format time in Vietnam timezone dd/mm/yyyy, hh:mm:ss
    const formattedTime = new Date(item.time).toLocaleString('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
      hour12: false
    });
    const orderTr = document.createElement("tr");
    orderTr.innerHTML = `
            <td>${number}</td>
            <td><img class="img-history" src="${item.image}" alt=""></td>
            <td>${item.nameProduct}</td>
            <td>${item.quantity}</td>
            <td>$${item.price}</td>
            <td>${formattedTime}</td>
            <td>${status(item.check)}</td>
        `;
    orderManagementTbody.appendChild(orderTr);
  });
}
//======== Status=========//
function status(check) {
  if (check == 0) {
    return "Đang chờ...";
  } else {
    if (check == 1) {
      return "Đã xác nhận!";
    }
    else {
      return "Đã hủy";
    }
  }
}

//-----------------------------------------------------------------------------------------------------//
function renderUserManagement() {
  document.querySelector(".div-title").innerHTML = `
        <h1 class="title">User Management</h1>
    `;
  document.querySelector(".contain-add-product-search").innerHTML = `
        <table class="userTable">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    `;
  renderUser(listUsers);
}
// Thêm user, nút block, nút edit vào bảng user management
function renderUser(arr) {
    const userManagementTbody = document.querySelector(".userTable tbody");
    userManagementTbody.innerHTML = "";

    arr.forEach((user) => {
        const userTr = document.createElement("tr");
        
        userTr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name || ''}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>
                ${user.isAdmin ? '' : `
                  <button class="edit-user" onclick="openEditUser(${user.id})">
                  <img src="./asset/img/admin-edit-product.png" alt="" class="user-icon-edit" />
                        Edit
                    </button>
                    <button class="block-user ${user.isBlocked ? 'blocked' : ''}" 
                            onclick="toggleBlockUser(${user.id})">
                            <img src="./asset/img/admin-block-icon.png" alt="" class="user-icon-block" />
                        ${user.isBlocked ? 'Unblock' : 'Block'}
                    </button>
                    <button class="delete-user" onclick="deleteUser(${user.id})">
                        <img src="./asset/img/admin-delete-product.png" alt="" class="user-icon-delete" />
                        Delete
                    </button>
                    
                    
                `}
            </td>
        `;
        
        userManagementTbody.appendChild(userTr);
    });
}

// Hàm mở modal edit user
function openEditUser(userId) {
    const user = listUsers.find(u => u.id === userId);
    if (!user) return;


    // tạo modal (background + form)
    const modalHtml = `
        <div id="edit-user-background" class="add-edit-product-background-form animate">
            <div id="edit-user-form" class="add-edit-product-form">
                <div class="head-form">
                    <h2 class="title">Edit User</h2>
                    <span id="close-edit-user">&times;</span>
                </div>
                <div class="form-group">
                    <label class="form-label">Name</label>
                    <div class="div"><input id="edit-user-name" class="form-input" type="text" value="${(user.name||'').replace(/"/g,'&quot;')}" /></div>
                    <div class="form-error" id="edit-user-name-error"></div>
                </div>
                <div class="form-group">
                    <label class="form-label">Password (leave blank to keep)</label>
                    <div class="div"><input id="edit-user-password" class="form-input" type="text" placeholder="New password" /></div>
                    <div class="form-error" id="edit-user-password-error"></div>
                </div>
                <div class="edit-user-actions">
                    <button class="btn-save" id="save-edit-user">Save</button>
                    <button class="add-btn modal-cancel" id="cancel-edit-user">Cancel</button>
                </div>
            </div>
        </div>
    `;
    // chèn vào DOM
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // gán sự kiện đóng
    document.getElementById('close-edit-user').addEventListener('click', closeEditUserModal);
    document.getElementById('cancel-edit-user').addEventListener('click', closeEditUserModal);
    document.getElementById('edit-user-background').addEventListener('click', function (e) {
        if (e.target.id === 'edit-user-background') closeEditUserModal();
    });

    // lưu
    document.getElementById('save-edit-user').addEventListener('click', function () {
        const newName = document.getElementById('edit-user-name').value.trim();
        const newPassword = document.getElementById('edit-user-password').value;

        // kiểm tra dữ liệu nhập
        let valid = true;
        document.getElementById('edit-user-name-error').innerText = '';
        document.getElementById('edit-user-password-error').innerText = '';

        if (newName === '') {
            document.getElementById('edit-user-name-error').innerText = 'Vui lòng nhập tên';
            valid = false;
        }
        if (newPassword && newPassword.length > 0 && newPassword.length < 6) {
            document.getElementById('edit-user-password-error').innerText = 'Mật khẩu tối thiểu 6 kí tự';
            valid = false;
        }

        if (!valid) return;

        saveUserEdit(userId, newName, newPassword);
        closeEditUserModal();
    });
}

function closeEditUserModal() {
    const bg = document.getElementById('edit-user-background');
    if (bg) bg.remove();
}

// Lưu thay đổi user
function saveUserEdit(userId, newName, newPassword) {
    for (let i = 0; i < listUsers.length; i++) {
        if (listUsers[i].id === userId) {
            listUsers[i].name = newName;
            if (newPassword && newPassword.length >= 6) {
                listUsers[i].password = newPassword;
            }
            break;
        }
    }
    // cập nhật localStorage
    localStorage.setItem('DataUsers', JSON.stringify(listUsers));

    // nếu đang login là user này thì cập nhật loginUser luôn
    const currentLogin = JSON.parse(localStorage.getItem('loginUser'));
    if (currentLogin && currentLogin.id === userId) {
        currentLogin.name = newName;
        if (newPassword && newPassword.length >= 6) currentLogin.password = newPassword;
        localStorage.setItem('loginUser', JSON.stringify(currentLogin));
    }

    // cập nhật UI
    renderUser(listUsers);
}
//-----------------------------------------------------------------------------------------------------//
function renderOrderStartictis() {
  document.querySelector(".div-title").innerHTML = `
        <h1 class="title">Order Startictis</h1>
    `;
  const orderStartictisContainer = document.querySelector(
    ".contain-add-product-search"
  );
  orderStartictisContainer.innerHTML = `
  <div class="head">
  <div class="form-input-startics">
      <form>
        <div>
           <div class="start-date-div">
            <label for="start-date">From Date:</label>
            <input type="date" id="start-date" name="start-date" />
          </div>

          <div class="end-date-div">
            <label for="end-date">To Date:</label>
            <input type="date" id="end-date" name="end-date" />
         </div>

         <div class="form-item">
              <label for="type">Type</label>
              <select name="type" id="type">
                  <option value="">---</option>
                  <option value="coffee">Coffee</option>
                  <option value="juice">Juice</option>
                  <option value="smoothie">Smoothie</option>
                  <option value="tea">Tea</option>
              </select>
          </div>

        </div>
          <button type = "button" class="btn-submit" id = "handle-Order-Startictis">Submit</button>
      </form>
      <button class="btn-sale" id = "handle-Top-Sale">Top Sales</button>
      <button class="btn-customer" id = "handle-Top-Customer">Top Customers</button>
  </div>
</div>
<div class="body-table"></div>
`;

  //  Lấy tham chiếu đến các nút vừa tạo
  const startictisBtn = document.querySelector("#handle-Order-Startictis");
  const topSaledBtn = document.querySelector("#handle-Top-Sale");
  const customerdBtn = document.querySelector("#handle-Top-Customer");
  const allButtons = [startictisBtn, topSaledBtn, customerdBtn];

  //  Hàm xử lý việc chuyển đổi class "active-filter"
  function handleButtonClick(clickedButton) {
    // Xóa class 'active-filter' khỏi tất cả các nút
    allButtons.forEach(btn => btn.classList.remove('active-filter'));
    // Thêm class 'active-filter' vào nút vừa được nhấn
    clickedButton.classList.add('active-filter');
  }
  //  Gán sự kiện click cho từng nút
  startictisBtn.addEventListener('click', () => {
    handleButtonClick(startictisBtn); // Cập nhật giao diện nút
    handleOrderStartictis(); // Render nội dung tương ứng
  });

  topSaledBtn.addEventListener('click', () => {
    handleButtonClick(topSaledBtn);
    handleTopSale();
  });

  customerdBtn.addEventListener('click', () => {
    handleButtonClick(customerdBtn);
    handleTopCustomer();
  });
}
//-----------------------------------------------//
function renderTableBody() {
  const tableBody = document.querySelector(".body-table");
  tableBody.innerHTML = `<table>
  <thead>
      <tr>
          <th>STT</th>
          <th>Email</th>
          <th>Image</th>
          <th>Name</th>
          <th>Quatity</th>    
          <th>Price</th>
          <th>Order time</th>
      </tr>
  </thead>
  <tbody class = "body-order-startictis">
  </tbody>
</table>`;
}
function renderTopSales() {
  const tableBody = document.querySelector(".body-table");
  tableBody.innerHTML = `<table>
  <thead>
      <tr>
          <th>STT</th>
          <th>Image</th>
          <th>Name</th>
          <th>Total quantity</th>    
          <th>Price</th>
          <th>Total price</th>
      </tr>
  </thead>
  <tbody class = "body-order-startictis">
  </tbody>
</table>`;
}
let listFilterTopSale = [];
function fillterTopSale() {
  // Map to store quantities for each product
  const productQuantities = {};

  listOrders.forEach((item) => {
    item.order.forEach((itemOrder) => {
      const productId = itemOrder.idProduct;
      let check = itemOrder.check;    // == 0 la chua mua, 1 la mua roi
      console.log(check);
      // If the product is not in the map, initialize it
      if (!productQuantities[productId] && check == 1) {
        productQuantities[productId] = {
          imgProduct: itemOrder.image,
          nameProduct: itemOrder.nameProduct,
          totalQuantity: 0,
          priceProduct: itemOrder.price,
        };
      }

      // Update the total quantity for the product
      if (check == 1)
        productQuantities[productId].totalQuantity += itemOrder.quantity;
    });
  });

  // Convert the map values to an array
  listFilterTopSale = Object.values(productQuantities);
  listTopCustomer.sort((a, b) => b.totalPrice - a.totalPrice);
  listFilterTopSale.sort((a, b) => b.totalQuantity - a.totalQuantity);

  console.log(listFilterTopSale);
}
function renderFillterTopSaleProduct() {
  const bodyOrderStartics = document.querySelector(".body-order-startictis");
  bodyOrderStartics.innerHTML = "";
  listFilterTopSale.forEach((item, i) => {
    let row = `<tr>
    <td>${i + 1}</td>
    <td><img class="img" src="${item.imgProduct}" alt=""></td>
    <td>${item.nameProduct}</td>
    <td>${item.totalQuantity}</td>
    <td>${item.priceProduct}</td>
    <td>${(item.totalQuantity * item.priceProduct).toFixed(2)}</td>
</tr>`;
    bodyOrderStartics.innerHTML += row;
  });
}
function renderTopCustomer() {
  const tableBody = document.querySelector(".body-table");
  tableBody.innerHTML = `<table>
  <thead>
      <tr>
          <th>STT</th>
          <th>Email</th>
          <th>Name</th>
          <th>Total Price</th>    
      </tr>
  </thead>
  <tbody class = "body-order-startictis">
  </tbody>
</table>`;
}
let listTopCustomer = [];
function fillterTopCustomer() {
  const customer = {};
  listOrders.forEach((item) => {
    item.order.forEach((itemOrder) => {
      const userId = item.userId;

      if (!customer[userId]) {
        customer[userId] = {
          email: item.email,
          nameCustomer: item.nameCustomer,
          totalPrice: 0,
        };
      }
      if (itemOrder.check == 1) // khi da mua roi moi cong them tien
        customer[userId].totalPrice += itemOrder.quantity * itemOrder.price + itemOrder.quantity * 5;
    });
  });
  listTopCustomer = Object.values(customer);
  // Sort the listTopCustomer array based on totalPrice in descending order
  listTopCustomer.sort((a, b) => b.totalPrice - a.totalPrice);

  console.log("mang gia tri khach hang la");
  console.log(listTopCustomer);
}
function renderTopCustomerPerson() {
  console.log("da vo hamf customer");
  const bodyOrderStartics = document.querySelector(".body-order-startictis");
  bodyOrderStartics.innerHTML = "";
  listTopCustomer.forEach((item, i) => {
    let row = `<tr>
    <td>${i + 1}</td>
    <td>${item.email}</td>
    <td>${item.nameCustomer}</td>
    <td>${item.totalPrice.toFixed(2)}</td>
</tr>`;
    bodyOrderStartics.innerHTML += row;
  });
}
function handleTopSale() {
  renderTopSales();
  fillterTopSale();
  renderFillterTopSaleProduct();
}
function handleTopCustomer() {
  fillterTopCustomer();
  renderTopCustomer();
  renderTopCustomerPerson();
}

let listFilter = [];

function filterOrdersByTime() {
  // Input elements
  const startDate = document.querySelector("#start-date");
  const endDate = document.querySelector("#end-date");
  const typeProduct = document.querySelector("#type");

  // Clear the previous filtered list
  listFilter = [];

  // Helper: create Date at VN timezone for a date input (start or end of day)
  function vnDateFromInput(dateStr, endOfDay = false) {
    if (!dateStr) return null;
    // Build an ISO string with Vietnam offset +07:00 so Date parses at VN local time
    return new Date(`${dateStr}T${endOfDay ? '23:59:59' : '00:00:00'}+07:00`);
  }

  // start at VN midnight of startDate, or earliest if empty
  const startDateTime = startDate.value ? vnDateFromInput(startDate.value, false) : new Date(0);
  // end at VN now if end empty, else VN end of selected day
  const endDateTime = endDate.value ? vnDateFromInput(endDate.value, true) :
    // get current time in VN timezone
    new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }));

  listOrders.forEach((item) => {
    const filteredOrders = item.order.filter((order) => {
      const orderTime = new Date(order.time);
      return orderTime >= startDateTime && orderTime <= endDateTime;
    });

    // Get orders that match the selected type
    const typeFilteredOrders = filteredOrders.filter(order => {
        // If no type is selected, include all orders
        if (typeProduct.value === '') return true;
        
        // Find the corresponding product in listProducts to get its type
        const product = listProducts.find(p => p.id === order.idProduct);
        // Check if product exists and its type matches selected type
        return product && product.nature.type === typeProduct.value;
    });

    // Only add to filtered list if we have matching orders
    if (typeFilteredOrders.length > 0) {
        const filteredItem = {
            email: item.email,
            id: item.id,
            nameCustomer: item.nameCustomer,
            order: typeFilteredOrders,
            userId: item.userId
        };
        listFilter.push(filteredItem);
    }
  });

  console.log("Filtered Orders:");
  console.log(listFilter);
  console.log("Filtering completed.");
}

function renderOrderStartictisProduct() {
  const bodyOrderStartics = document.querySelector(".body-order-startictis");
  let count = 0;
  bodyOrderStartics.innerHTML = "";
  for (let i = 0; i < listFilter.length; i++) {
    for (let j = 0; j < listFilter[i].order.length; j++) {
      if (listFilter[i].order[j].check == 1) {
        count++;
        const vnTime = new Date(listFilter[i].order[j].time).toLocaleString('vi-VN', {
          timeZone: 'Asia/Ho_Chi_Minh',
          hour12: false
        });
        let row = `<tr>
          <td>${count}</td>
          <td>${listFilter[i].email}</td>
          <td><img class="img" src="${listFilter[i].order[j].image}" alt=""></td>
          <td>${listFilter[i].order[j].nameProduct}</td>
          <td>${listFilter[i].order[j].quantity}</td>
          <td>$${listFilter[i].order[j].price}</td>
          <td>${vnTime}</td>
      </tr>`;
        bodyOrderStartics.innerHTML += row;
      }
    }
  }
  console.log("da renderlayout xong");
}

function handleOrderStartictis() {
  renderTableBody();
  filterOrdersByTime();
  renderOrderStartictisProduct();
}

/**
 * Hàm 1: Hàm trợ giúp để tính % lợi nhuận
 */
function calculateProfitPercent(cost, price) {
    if (cost <= 0 || price <= 0) return 0;
    return ((price - cost) / cost) * 100;
}

/**
 * Hàm 2: Hàm trợ giúp để đọc khoảng giá trị (ví dụ: "1-1.5")
 */
 
function parseRange(rangeString) {
    // Nếu là "all", trả về khoảng vô hạn
    if (!rangeString || rangeString === 'all') {
        return { min: -Infinity, max: Infinity };
    }
    const parts = rangeString.split('-');
    return { min: parseFloat(parts[0]), max: parseFloat(parts[1]) };
}

/**
 * Hàm 3: Hàm "master" để xử lý TẤT CẢ bộ lọc (thay thế performSearch)
 */
// THAY THẾ hàm applyAllFilters cũ
function applyAllFilters() {
    // 1. Lấy giá trị của tất cả 5 bộ lọc
    const searchText = document.querySelector(".search-field").value.trim().toLowerCase();
    const costRangeString = document.querySelector("#filter-cost").value;
    const priceRangeString = document.querySelector("#filter-price").value;
    const profitRangeString = document.querySelector("#filter-profit").value;
    const quantityRangeString = document.querySelector("#filter-quantity").value; // <-- THÊM MỚI

    // 2. Chuyển đổi
    const costRange = parseRange(costRangeString);
    const priceRange = parseRange(priceRangeString);
    const profitRange = parseRange(profitRangeString);
    const quantityRange = parseRange(quantityRangeString); // <-- THÊM MỚI

    // 3. Lọc
    const filteredList = listProducts.filter((product) => {
        const productName = product.name.trim().toLowerCase();
        const cost = parseFloat(product.cost) || 0;
        const price = parseFloat(product.price) || 0;
        const profit = calculateProfitPercent(cost, price);
        const quantity = parseInt(product.quantity) || 0; // <-- THÊM MỚI

        // --- Kiểm tra ---
        if (searchText && !productName.includes(searchText)) {
            return false;
        }
        if (cost < costRange.min || cost > costRange.max) {
            return false;
        }
        if (price < priceRange.min || price > priceRange.max) {
            return false;
        }
        if (profit < profitRange.min || profit > profitRange.max) {
            return false;
        }
        
        // Điều kiện 5: Quantity (đã sửa logic cho chính xác)
        if (quantity < quantityRange.min || quantity > quantityRange.max) {
            // Nếu là "all" (min: -Infinity, max: Infinity) thì bỏ qua
            if (quantityRange.max === Infinity) {
                // tiếp tục
            } else {
                 return false; // Nếu không phải "all" và nằm ngoài khoảng, thì loại
            }
        }

        return true; 
    });

    // 4. Render
    renderProducts(filteredList);
}


/**
 * Hàm 4: Cập nhật hàm handleProductManagement
 */
function handleProductManagement() {
    // Lấy các element
    const textInput = document.querySelector(".search-field");
    const iconDelete = document.querySelector(".icon-delete");
    const searchButton = document.querySelector(".btn-search");
    const costFilter = document.querySelector("#filter-cost");
    const priceFilter = document.querySelector("#filter-price");
    const profitFilter = document.querySelector("#filter-profit");
    const quantityFilter = document.querySelector("#filter-quantity");

    // --- Gán sự kiện (TẤT CẢ đều gọi 1 hàm duy nhất) ---

    // 1. Gán sự kiện cho Search
    textInput.addEventListener("input", applyAllFilters);
    searchButton.addEventListener("click", applyAllFilters);

    // 2. Gán sự kiện cho 3 bộ lọc <select>
    costFilter.addEventListener("change", applyAllFilters);
    priceFilter.addEventListener("change", applyAllFilters);
    profitFilter.addEventListener("change", applyAllFilters);
    quantityFilter.addEventListener("change", applyAllFilters);

    // --- Xử lý nút 'x' (giữ nguyên) ---
    textInput.addEventListener("input", function () {
        if (textInput.value.length > 0) {
            iconDelete.classList.remove("hidden");
        } else {
            iconDelete.classList.add("hidden");
        }
    });
    iconDelete.addEventListener("click", function () {
        textInput.value = "";
        iconDelete.classList.add("hidden");
        applyAllFilters(); // Gọi hàm lọc chính
    });
}

function addAnimate() {
  addEditProductBackgroundForm.classList.add("animate");
  addEditProductForm.classList.add("animate");
}
function rmvAnimate() {
  clearForm();
  addEditProductBackgroundForm.classList.remove("animate");
  addEditProductForm.classList.remove("animate");
  var allDiv = document.querySelectorAll(".div");
  var allFormError = document.querySelectorAll(".form-error");

  for (let i = 0; i < allDiv.length; i++) {
    Object.assign(allDiv[i].style, {
      "border-color": "#b3b3b3",
    });
  }
  for (let j = 0; j < allFormError.length; j++) {
    allFormError[j].innerText = "";
  }
}
// hàm tính
function setupPriceCalculator() {
    const costInput = document.getElementById("cost");
    const priceInput = document.getElementById("price");
    const profitInput = document.getElementById("profitPercent");

    if (!costInput || !priceInput || !profitInput) return; 

    let lockPrice = false;
    let lockProfit = false; 

    function calculatePrice() {
        if (lockProfit) return; 
        lockPrice = true;
        const cost = parseFloat(costInput.value) || 0;
        const profit = parseFloat(profitInput.value) || 0;
        
        if (cost > 0) {
            const newPrice = cost + (cost * profit / 100);
            priceInput.value = newPrice.toFixed(2);
        }
        setTimeout(() => { lockPrice = false; }, 100);
    }

    function calculateProfit() {
        if (lockPrice) return; 
        lockProfit = true;
        const cost = parseFloat(costInput.value) || 0;
        const price = parseFloat(priceInput.value) || 0;

        if (cost > 0 && price >= cost) {
            const newProfit = ((price - cost) / cost) * 100;
            profitInput.value = newProfit.toFixed(0);
        } else {
             profitInput.value = 0;
        }
        setTimeout(() => { lockProfit = false; }, 100);
    }

    costInput.addEventListener("input", calculateProfit);
    priceInput.addEventListener("input", calculateProfit);
    profitInput.addEventListener("input", calculatePrice);
}
// Function to clear the form
function clearForm() {
  document.getElementById("nameProduct").value = "";
  document.getElementById("cost").value = "";
  document.getElementById("price").value = "";
  document.getElementById("profitPercent").value = "";
  document.getElementById("type").value = "";
  // Clear hidden image, file input and preview
  var hidden = document.getElementById("linkImage");
  if (hidden) hidden.value = "";
  var fileInput = document.getElementById("linkImageFile");
  if (fileInput) fileInput.value = null;
  var preview = document.getElementById('previewImg');
  var previewText = document.getElementById('previewText');
  if (preview) { preview.src = ''; preview.style.display = 'none'; }
  if (previewText) { previewText.textContent = ''; previewText.style.display = 'none'; }
}

// ============= Xu li form an hien ================
let checkEdit = 0;
const btnCloseForm = document.querySelector(".closeImg");
const btnAddProduct = document.querySelector(".add-btn");
function openAddForm() {
  checkEdit = 0; // Đảm bảo là Add mode
  addAnimate();
  setupPriceCalculator();
  btnCloseForm.addEventListener("click", rmvAnimate);
}

const addEditProductBackgroundForm = document.querySelector(
  ".add-edit-product-background-form"
);
addEditProductBackgroundForm.addEventListener("click", rmvAnimate);
const addEditProductForm = document.querySelector(".add-edit-product-form");
addEditProductForm.onclick = function (event) {
  // Ngăn chặn sự kiện khi ấn vào form mà bị mất
  event.stopPropagation();
};

// =========== hàm xét id tự động =================
function setId() {
  let max = listProducts[0].id;
  for (let i = 1; i < listProducts.length; i++) {
    if (listProducts[i].id > max) max = listProducts[i].id;
  }
  return max + 1;
}

// Function to delete a product
function deleteProduct(productId) {
  const shouldDelete = window.confirm(
    "Are you sure you want to delete this product"
  );
  for (let i = 0; i < listProducts.length; i++) {
    if (listProducts[i].id === productId && shouldDelete) {
      console.log("da xoa  " + listProducts[i].id);
      console.log(listProducts);
      listProducts.splice(i, 1);

    }
  }
  localStorage.setItem("listProducts", JSON.stringify(listProducts));
  renderProducts(listProducts);
}

// === HÀM MỚI ĐỂ ẨN/HIỆN SẢN PHẨM ===
function toggleHideProduct(productId) {
  // 1. Tìm sản phẩm trong mảng
  const productToToggle = listProducts.find(
    (product) => product.id === productId
  );

  if (productToToggle) {
    // 2. Đảo ngược trạng thái isHidden (từ false -> true hoặc từ true -> false)
    productToToggle.isHidden = !productToToggle.isHidden;

    // 3. Cập nhật lại localStorage
    localStorage.setItem("listProducts", JSON.stringify(listProducts));

    // 4. Render lại danh sách sản phẩm để thấy thay đổi
    // Lưu ý: Nếu bạn đang dùng search, bạn có thể cần render lại kết quả search
    // Cách đơn giản nhất là render lại toàn bộ listProducts
    renderProducts(listProducts);
    
    // Hoặc nếu bạn muốn giữ nguyên kết quả search, bạn phải gọi lại hàm performSearch()
    // performSearch(); // (Hàm này cần được truy cập từ đây)
  } else {
    console.log("Không tìm thấy sản phẩm với ID: " + productId);
  }
}
// ======================================
// Function to delete a user
function deleteUser(userId) {
    const shouldDelete = window.confirm(
        "Are you sure you want to delete this user"
    );

    if (shouldDelete) {
        // Remove user from listUsers array
        for (let i = 0; i < listUsers.length; i++) {
            if (listUsers[i].id === userId) {
                listUsers.splice(i, 1);
                break;
            }
        }

        // Update localStorage
        localStorage.setItem("DataUsers", JSON.stringify(listUsers));

        // Force logout if deleted user is currently logged in
        const currentLogin = JSON.parse(localStorage.getItem('loginUser'));
        if (currentLogin && currentLogin.id === userId) {
            // Clear login session
            localStorage.setItem('loginUser', JSON.stringify(null));
            
            // Set flag for other tabs to detect and logout
            localStorage.setItem('forceLogout', JSON.stringify({
                userId: userId,
                time: Date.now()
            }));
            
            // Trigger storage event in other tabs
            localStorage.setItem('needReload', Date.now().toString());
        }

        // Update admin UI
        renderUser(listUsers);
    }
}
// Hàm để hiển thị form chỉnh sửa sản phẩm với thông tin sản phẩm cần chỉnh sửa
function openEditForm(productId) {
    document.getElementById("idProduct").value = productId;
    checkEdit = 1;
    
    // Lấy các ô input
    const productName = document.getElementById("nameProduct");
    const productCost = document.getElementById("cost");
    const productPrice = document.getElementById("price");
    const productProfit = document.getElementById("profitPercent");
    const productType = document.getElementById("type");
    
    // (Giữ nguyên code lấy preview image của bạn)
    const productImg = document.getElementById("linkImage");
    const productImgFile = document.getElementById("linkImageFile");
    const previewImg = document.getElementById("previewImg");
    const previewText = document.getElementById("previewText");

    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].id === productId) {
            const product = listProducts[i];
            
            const cost = parseFloat(product.cost) || 0;
            const price = parseFloat(product.price) || 0;

            // Điền dữ liệu
            productName.value = product.name;
            productCost.value = cost.toFixed(2);
            productPrice.value = price.toFixed(2);
            productType.value = product.nature.type;
            
            // Tự động tính % lợi nhuận khi mở form
            if (cost > 0 && price > cost) {
                const newProfit = ((price - cost) / cost) * 100;
                productProfit.value = newProfit.toFixed(0);
            } else {
                productProfit.value = 0;
            }

            // (Giữ nguyên code xử lý image preview của bạn)
            productImg.value = product.image;
            if (productImgFile) productImgFile.value = null;
            if (product.image) {
                if (previewImg) { previewImg.src = product.image; previewImg.style.display = 'block'; }
                if (previewText) { previewText.textContent = ''; previewText.style.display = 'none'; }
            } else {
                if (previewImg) { previewImg.style.display = 'none'; }
            }
        }
    }
    addAnimate();
    setupPriceCalculator(); // <-- KÍCH HOẠT HÀM TÍNH
    btnCloseForm.addEventListener("click", rmvAnimate);
}

// Function to edit a product
// editProduct now accepts prepared data (data.linkImage should contain final image string)
function editProduct(data) {
    const productId = parseInt(data.idProduct);
    const productName = data.nameProduct;
    const productCost = parseFloat(data.cost); // <-- LẤY DỮ LIỆU COST
    const productPrice = parseFloat(data.price);
    const productType = data.type;
    const productImg = data.linkImage;
    
    const productToEdit = listProducts.find((product) => product.id === productId);
    if (productToEdit) {
        productToEdit.name = productName;
        productToEdit.cost = productCost; // <-- LƯU DỮ LIỆU COST
        productToEdit.price = productPrice;
        productToEdit.nature.type = productType;
        productToEdit.image = productImg;

        localStorage.setItem("listProducts", JSON.stringify(listProducts));
        renderProducts(listProducts); // Tải lại danh sách
        rmvAnimate();
        checkEdit = 0; 
    } else {
        console.log("Product not found for editing with ID " + productId);
    }
}
// ============ Hàm thêm sản phẩm ==================
function addProduct(data) {
    const productId = setId();
    const productName = data.nameProduct;
    const productCost = parseFloat(data.cost); 
    const productPrice = parseFloat(data.price);
    const productType = data.type;
    const productImg = data.linkImage;
    
    const product = {
        id: productId,
        name: productName,
        ingredients: data.description || "Chưa có mô tả", // <-- LẤY MÔ TẢ (nếu bạn có ô 'description')
        price: productPrice,
        cost: productCost, 
        quantity: 100,
        image: productImg,
        isHidden: false,
        star: 4.5, 
        nature: {
            size: ["S", "M", "L"],
            type: productType,
        },
    };
    listProducts.unshift(product);
    localStorage.setItem("listProducts", JSON.stringify(listProducts));
    console.log(listProducts);
    renderProducts(listProducts); // Tải lại danh sách
    rmvAnimate();
    clearForm();
    checkEdit = 0; 
}
// ======== Ham xu li thong bao khi them san pham ===========
function addSuccessForm() {
  const toast = document.querySelector(".toast");
  const closeIcon = document.querySelector(".close");
  const progress = document.querySelector(".progress");
  let timer1, timer2;

  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 2500); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 2800);

  closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
      progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
  });
}

function acceptOrder(orderid) {
  for (var i = 0; i < listOrders.length; i++) {
    if (listOrders[i].id === orderid) {
      if (listOrders[i].order[0].check === 0) {
        listOrders[i].order.forEach((item) => {
          item.check = 1;
        });
      } else {
        return;
      }
    }
  }
  updateListOrderstoLocalStorage();
  alert("Đã xác nhận!");
  renderOrderManagement();
}
function rejectOrder(orderid) {
  for (var i = 0; i < listOrders.length; i++) {
    if (listOrders[i].id === orderid) {
      if (listOrders[i].order[0].check === 0) {
        listOrders[i].order.forEach((item) => {
          item.check = 2;
        });
      } else {
        return;
      }
    }
  }
  updateListOrderstoLocalStorage();
  alert("Đã hủy");
  renderOrderManagement();
}
function updateListOrderstoLocalStorage() {
  let order = JSON.stringify(listOrders);
  localStorage.setItem("listOrders", order);
}

// Đối tượng `Validator`
function Validator(options) {
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  var selectorRules = {};
  // Hàm thực hiện validate
  function validate(inputElement, rule) {
    var errorElement = getParent(
      inputElement,
      options.formGroupSelector
    ).querySelector(options.errorSelector);
    var errorMessage;
    // Lấy ra các rules của selector
    var rules = selectorRules[rule.selector];
    // Lặp qua từng rule & kiểm tra
    // Nếu có lỗi thì dừng việc kiểm
    for (var i = 0; i < rules.length; ++i) {
      errorMessage = rules[i](inputElement.value);
      if (errorMessage) break;
    }
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      var validateElement = getParent(
        inputElement,
        options.formGroupSelector
      ).querySelector(".div");
      Object.assign(validateElement.style, {
        "border-color": "red",
      });
    } else {
      errorElement.innerText = "";
      var validateElement = getParent(
        inputElement,
        options.formGroupSelector
      ).querySelector(".div");
      Object.assign(validateElement.style, {
        "border-color": "#b3b3b3",
      });
    }
    return !errorMessage;
  }

  // Lấy element của form cần validate
  var formElement = document.querySelector(options.form);
  if (formElement) {
    // Khi submit form
    formElement.onsubmit = function (e) {
      e.preventDefault();
      var isFormValid = true;
      // Lặp qua từng rules và validate
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        // Trường hợp submit với javascript
        if (typeof options.onSubmit === "function") {
          var enableInputs = formElement.querySelectorAll("[name]");
          var formValues = Array.from(enableInputs).reduce(function (
            values,
            input
          ) {
            values[input.name] = input.value;
            return values;
          },
            {});
          options.onSubmit(formValues);
        }
        // Trường hợp submit với hành vi mặc định
        else {
          formElement.submit();
        }
      }
    };

    // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
    options.rules.forEach(function (rule) {
      // Lưu lại các rules cho mỗi input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      var inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        // Xử lý trường hợp blur khỏi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        // Xử lý mỗi khi người dùng nhập vào input
        inputElement.oninput = function () {
          var errorElement = getParent(
            inputElement,
            options.formGroupSelector
          ).querySelector(options.errorSelector);
          errorElement.innerText = "";
          var validateElement = getParent(
            inputElement,
            options.formGroupSelector
          ).querySelector(".div");
          Object.assign(validateElement.style, {
            "border-color": "#b3b3b3",
          });
          document.querySelector(".form-error").innerHTML = "";
        };
      }
    });
  }
}
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      // If selector is file input, check files length
      var el = document.querySelector(selector);
      if (el && el.type === 'file') {
        return el.files && el.files.length > 0 ? undefined : message || "Vui lòng nhập trường này";
      }
      return value && String(value).trim() ? undefined : message || "Vui lòng nhập trường này";
    },
  };
};

runCheckAddForm();

function runCheckAddForm() {
    Validator({
        form: "#add-form",
        formGroupSelector: ".form-group",
        errorSelector: ".form-error",
        rules: [
            Validator.isRequired("#nameProduct", "Vui lòng nhập tên sản phẩm"),
            Validator.isRequired("#cost", "Vui lòng nhập giá vốn"), 
            Validator.isRequired("#price", "Vui lòng nhập đơn giá"),
            Validator.isRequired("#type", "Vui lòng chọn loại sản phẩm"),
            Validator.isRequired("#linkImage", "Vui lòng chọn hình ảnh"),
        ],
        onSubmit: function (data) {
  
            var fileInput = document.getElementById('linkImageFile');
            var hiddenInput = document.getElementById('linkImage');

            function finishSubmit(finalData) {
                if (checkEdit === 0) {
                    addSuccessForm();
                    addProduct(finalData);
                } else {
                    addSuccessForm(); 
                    editProduct(finalData);
                }
                clearForm();
            }

            if (fileInput && fileInput.files && fileInput.files[0]) {
                var file = fileInput.files[0];
                var reader = new FileReader();
                reader.onload = function(e) {
                    data.linkImage = e.target.result; 
                    if (hiddenInput) hiddenInput.value = data.linkImage;
                    finishSubmit(data);
                };
                reader.readAsDataURL(file);
            } else {
                data.linkImage = hiddenInput ? hiddenInput.value : '';
                finishSubmit(data);
            }
        },
    });
}

// Preview selected image immediately
var fileInputEl = document.getElementById('linkImageFile');
var previewImgEl = document.getElementById('previewImg');
var previewTextEl = document.getElementById('previewText');
var hiddenImageEl = document.getElementById('linkImage');
if (fileInputEl) {
  fileInputEl.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) {
      if (previewImgEl) { previewImgEl.style.display = 'none'; }
      if (previewTextEl) { previewTextEl.style.display = 'none'; }
      return;
    }
    const reader = new FileReader();
    reader.onload = function(ev) {
      const dataUrl = ev.target.result;
      if (previewImgEl) { previewImgEl.src = dataUrl; previewImgEl.style.display = 'block'; }
      if (previewTextEl) { previewTextEl.textContent = file.name; previewTextEl.style.display = 'inline-block'; }
      if (hiddenImageEl) hiddenImageEl.value = dataUrl;
    };
    reader.readAsDataURL(file);
  });
}

function toggleBlockUser(userId) {
    const user = listUsers.find(user => user.id === userId);
    if (!user) return;

    user.isBlocked = !user.isBlocked;
    localStorage.setItem('DataUsers', JSON.stringify(listUsers));

    // Nếu user vừa bị block và đang là tài khoản đang đăng nhập -> đăng xuất
    const currentLogin = JSON.parse(localStorage.getItem('loginUser'));
    if (currentLogin && currentLogin.id === userId && user.isBlocked) {
        // Xoá session ở localStorage
        localStorage.setItem('loginUser', JSON.stringify(null));
        // Ghi flag để các tab khác nhận biết và reload
        localStorage.setItem('forceLogout', JSON.stringify({ userId: userId, time: Date.now() }));
        // Ghi thêm một key để bắt chắc sự kiện storage (timestamp)
        localStorage.setItem('needReload', Date.now().toString());
        // Thông báo
        alert('Người dùng đã bị chặn');
    }

    renderUser(listUsers);
}


