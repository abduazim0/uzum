const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const body = document.querySelector('body');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const total = document.querySelector('.total');
const quantity = document.querySelector('.quantity');
const sendToTelegramBtn = document.getElementById('send-to-telegram-btn');
const loading = document.getElementById('loading');
const lowestDiscountBtn = document.getElementById('lowest-discount-btn'); // Yangi tugma
const highestDiscountBtn = document.getElementById('highest-discount-btn'); // Yangi tugma

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});
const products = [
    {
        id: 1,
        name: "Televizor Samsung Crystal UHD 4K 43 50 55 65",
        monthly: "10 680 so'm/oyiga",
        price: 197000,
        discount: 89000,
        currency: "so'm",
        image: "https://images.uzum.uz/cmfs29125ku1lubrrt50/t_product_540_high.jpg#1705842903902",
        order: "",
        category: "fruit",
        description: "Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.",
        speciality: "",
      },
    {
      id: 2,
      name: "Televizor Samsung Crystal UHD 4K 43 50 55 65",
        monthly: "299 880 so'm/oyiga",
        price: 3010000,
        discount: 2499000,
        currency: "so'm",
        image: "https://telegra.ph/file/22863e88d9e28f94bdce7.jpg",
        order: "",
        category: "fruit",
        description: "Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.",
        speciality: "",
      },
      {
        id: 3,
        name: "Televizor Samsung Crystal UHD 4K 43 50 55 65",
        monthly: "4 920  so'm/oyiga",
        price: 57000,
        discount: 41000,
        currency: "so'm",
        image: "https://telegra.ph/file/0f7899588b2818bd58b18.jpg",
        order: "",
        category: "fruit",
        description: "Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.",
        speciality: "",
        
      },
      {
        id: 4,
        name: "Televizor Samsung Crystal UHD 4K 43 50 55 65",
        monthly: "11 880 so'm/oyiga",
        price: 160000,
        discount: 99000,
        currency: "so'm",
        image: "https://telegra.ph/file/972cb591d1e9ea0aaf097.jpg",
        order: "",
        category: "fruit",
        description: "Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.",
        speciality: "",
      },
      {
        id: 5,
        name: "Televizor Samsung Crystal UHD 4K 43 50 55 65",
        monthly: " 4 320 so'm/oyiga",
        price: 59000,
        discount: 36000,
        currency: "so'm",
        image: "https://telegra.ph/file/db491bb20eaffea14acad.jpg",
        order: "",
        category: "fruit",
        description: "Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.",
        speciality: "",
      },
      {
        id: 6,
        name: "Televizor Samsung Crystal UHD 4K 43 50 55 65",
        monthly: "587 880 so'm/oyiga",
        price: 5830000,
        discount: 4889000,
        currency: "so'm",
        image: "https://telegra.ph/file/cb6cf802186ffab2a3dd9.jpg",
        order: "",
        category: "fruit",
        description: "Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.",
        speciality: "",
      },
      {
        id: 7,
        name: "Televizor Samsung Crystal UHD 4K 43 50 55 65",
        monthly: " 23 880 so'm/oyiga",
        price: 620000,
        discount: 199000,
        currency: "so'm",
        image: "https://telegra.ph/file/cd652805e363920c1ff4f.jpg",
        order: "",
        category: "fruit",
        description: "Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.",
        speciality: "",
      },
      {
        id: 8,
        name: "Televizor Samsung Crystal UHD 4K 43 50 55 65",
        monthly: " 11 880 so'm/oyiga",
        price: 400000,
        discount: 99000,
        currency: "so'm",
        image: "https://telegra.ph/file/e3e9192a531eb335e4f99.jpg",
        order: "",
        category: "fruit",
        description: "Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.",
        speciality: "",
      },
      {
        id: 9,
        name: "Televizor Samsung Crystal UHD 4K 43 50 55 65",
        monthly: "448 680 so'm/oyiga",
        price: 6000000,
        discount: 3739000,
        currency: "so'm",
        image: "https://telegra.ph/file/a7606bf26afdbf7ea3131.jpg",
        order: "",
        category: "fruit",
        description: "Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.",
        speciality: "",
      },
      {
        id: 10,
        name: "Televizor Samsung Crystal UHD 4K 43 50 55 65",
        monthly: "1 560 so'm/oyiga",
        price: 15000,
        discount: 1300,
        currency: "so'm",
        image: "https://telegra.ph/file/9c3fbd6a19fe21caa513c.jpg",
        order: "",
        category: "fruit",
        description: "Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.",
        speciality: "",
    },
      {
        id: 11,
        name: "Televizor Samsung Crystal UHD 4K 43 50 55 65",
        monthly: "71 880 so'm/oyiga",
        price: 850000,
        discount: 599000,
        currency: "so'm",
        image: "https://images.uzum.uz/ckn6strk9fq6u2tdgv40/t_product_540_high.jpg#1705842952756",
        order: "",
        category: "fruit",
        description: "Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.",
        speciality: "",
      },
     
];

let cart = [];



// Saytni boshlashda mahsulotlarni ko'rsatish
function initApp() {
    list.innerHTML = ''; // Eski mahsulotlarni o'chirish
    products.forEach((product, index) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="cardd">
                <img src=${product.image} />
                <h1 class="title">${product.name}</h1>
                <h2 class="titlee">${product.monthly}</h2>
                <div class="karzina">
                    <div>
                        <h3 class="price">${product.price.toLocaleString()} so'm</h3>
                        <h4 class="title">${product.discount} so'm</h4>
                    </div>
                    
                    <div class="karzina-icon">
                        <button class="add-to-cart-button"
                        onclick="addToCart(${index})">
                           savatga qoshish
                        </button>
                    </div>
                </div>
            </div>`;
        list.appendChild(newDiv);
    });
}


// Mahsulot qo'shish
function addToCart(index) {
    const product = products[index];
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    reloadCart();
}

// Savatchani qayta yuklash
function reloadCart() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price * item.quantity;
        count += item.quantity;

        const newDiv = document.createElement('li');
        newDiv.innerHTML = `
            <div><img src=${item.image}/></div>
            <div>${item.name}</div>
            <div>${(item.price * item.quantity).toLocaleString()}</div>
            <div>
                <button onclick="changeQuantity(${index}, ${item.quantity - 1})">-</button>
                <div class="count">${item.quantity}</div>
                <button onclick="changeQuantity(${index}, ${item.quantity + 1})">+</button>
            </div>`;
        listCard.appendChild(newDiv);
    });

    if (total) total.innerText = totalPrice.toLocaleString();
    if (quantity) quantity.innerText = count;
}

// Savatchadagi mahsulotlar sonini o'zgartirish
function changeQuantity(index, quantity) {
    if (quantity <= 0) {
        cart.splice(index, 1);
    } else {
        cart[index].quantity = quantity;
    }
    reloadCart();
}

// Mahsulotlarni eng arzon discount narxiga qarab tartiblash
function sortByLowestDiscount() {
    products.sort((a, b) => a.discount - b.discount);
    initApp();
}

// "Lowest Discount" tugmasini bosilganda eng arzon discount narxiga qarab mahsulotlarni tartiblash
if (lowestDiscountBtn) {
    lowestDiscountBtn.addEventListener('click', sortByLowestDiscount);
}

// Mahsulotlarni eng qimmati bo'yicha tartiblash
function sortByHighestDiscount() {
    products.sort((a, b) => b.discount - a.discount);
    initApp();
}

// "Highest Discount" tugmasini bosilganda eng qimmati bo'yicha discount narxiga qarab mahsulotlarni tartiblash
if (highestDiscountBtn) {
    highestDiscountBtn.addEventListener('click', sortByHighestDiscount);
}



// Telegramga xabar yuborish
function sendToTelegram() {
    if (!sendToTelegramBtn || !loading) {
        console.error("Error: '#send-to-telegram-btn' or '#loading' element not found in the HTML.");
        return;
    }
    sendToTelegramBtn.style.display = 'none';
    loading.style.display = 'block';

    var botToken = '6898882745:AAGWnzQ8alFnCl5AqYaWafjptZhOXu2AnfI';
    var chatId = '-1002133767766';
    var messages = cart.map(item => `Name: ${item.name}\nImage: ${item.image}\nPrice: ${item.price}\nDiscount: ${item.discount}\nQuantity: ${item.quantity}\n\n`);
    var message = messages.join('');

    // Sending each product to Telegram
    Promise.all(cart.map(item =>
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(`Name: ${item.name}\nImage: ${item.image}\nPrice: ${item.price}\nDiscount: ${item.discount}\nQuantity: ${item.quantity}\n\n`)}`)
        .then(response => response.json())
    )).then(responses => {
        console.log(responses);
        loading.style.display = 'none';
        cart = [];
        reloadCart(); // <--- reloadCard o'rniga reloadCart funksiyasini chaqirdik
        sendToTelegramBtn.style.display = 'none';
        setTimeout(() => {
            location.reload(true);
        }, 500);
    }).catch(error => {
        console.error('Error:', error);
        loading.style.display = 'none';
    });
}








// Saytni boshlashda mahsulotlarni ko'rsatish
initApp();



