const filters = [
    {
        title: "Diet",
        items: [
            "Dairy Free",
            "Egg Free",
            "Sugar Free",
            "Gluten Free"
        ]
    },

    {
        title: "Allergies",
        items: [
            "Gluten",
            "Legumes",
            "Grain",
            "Fruite"
        ]
    },

    {
        title: "Cuisine",
        items: [
            "Asian",
            "Italian",
            "Chinese",
            "Thai"
        ]
    },

    {
        title: "Goals",
        items: [
            "Weight loss",
            "Freshness",
            "Activeness",
            "Rich Nutritions"
        ]
    }
];

const recipeSections = [
    {
        title: "Cuisines",
        recipes: [
            {
                image: "img/Recipe1.png",
                name: "Thai Basil Tofu Stir Fry",
                time: "30 minutes",
                price: "$ 12",
                rating: 4,
                ratingCount: "55",
                comments: "35",
                likes: "55"
            },
            {
                image: "img/Recipe2.png",
                name: "Kung Pao Shrimp",
                time: "30 minutes",
                price: "$ 12",
                rating: 4.5,
                ratingCount: "55",
                comments: "35",
                likes: "55"
            },
            {
                image: "img/Recipe3.png",
                name: "Mexican Chicken",
                time: "40 minutes",
                price: "$ 15",
                rating: 5,
                ratingCount: "100",
                comments: "80",
                likes: "100"
            }
        ]
    },

    {
        title: "Diet",
        recipes: [
            {
                image: "img/Recipe4.png",
                name: "Egg White Bites",
                time: "10 minutes",
                price: "$ 10",
                rating: 5,
                ratingCount: "100",
                comments: "80",
                likes: "100"
            },
            {
                image: "img/Recipe5.png",
                name: "Greek Farro Salad",
                time: "15 minutes",
                price: "$ 12",
                rating: 5,
                ratingCount: "100",
                comments: "80",
                likes: "100"
            },
            {
                image: "img/Recipe6.png",
                name: "Mediterranean Diet Snack",
                time: "30 minutes",
                price: "$ 13",
                rating: 5,
                ratingCount: "100",
                comments: "80",
                likes: "100"
            }
        ]
    },

    {
        title: "Bakery",
        recipes: [
            {
                image: "img/Recipe7.png",
                name: "Chocolate Cookies",
                time: "25 minutes",
                price: "$ 8",
                rating: 4,
                ratingCount: "55",
                comments: "50",
                likes: "90"
            },
            {
                image: "img/Recipe8.png",
                name: "Chocolate Cupcake",
                time: "35 minutes",
                price: "$ 7",
                rating: 5,
                ratingCount: "100",
                comments: "70",
                likes: "95"
            },
            {
                image: "img/Recipe9.png",
                name: "Whole Grain Bread",
                time: "50 minutes",
                price: "$ 6",
                rating: 4.5,
                ratingCount: "55",
                comments: "60",
                likes: "90"
            }
        ]
    }
];

const clockIcon = '<i class="fa-regular fa-clock"></i>';
const commentIcon = '<i class="fa-regular fa-comment"></i>';
const likeIcon = '<i class="fa-regular fa-thumbs-up"></i>';

function renderFilters() {
    const filtersContainer = document.getElementById("filters");
    filtersContainer.innerHTML = filters
        .map(filter => {
            const items = filter.items
                .map(item => `
                    <div class="filter-item">
                        ${item}
                    </div>
                `)
                .join("");
            return `
                <section class="filter">
                    <h2 class="filter-title">
                        ${filter.title}
                    </h2>
                    ${items}
                </section>
            `;
        })
        .join("");
}

function createStars(rating) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return '<i class="fa-solid fa-star"></i>'.repeat(fullStars) +
           '<i class="fa-regular fa-star"></i>'.repeat(emptyStars);
}

function createRecipeCard(recipe) {
    return `
        <article class="card">
            <img
                class="card-image"
                src="${recipe.image}"
                alt="${recipe.name}"
            >
            <div class="recipe-name">
                ${recipe.name}
            </div>

            <div class="recipe-info">
                <span class="time">
                    ${clockIcon}
                    ${recipe.time}
                </span>

                <span class="recipe-price">
                    <span class="price-dollar">$</span> ${recipe.price.replace("$", "")}
                </span>
            </div>


            <div class="recipe-rating">
                <span class="stars">
                    ${createStars(recipe.rating)}
                </span>
                <span>
                    ${recipe.ratingCount}
                </span>
            </div>

            <div class="social-info">
                <span>
                    ${commentIcon}
                    ${recipe.comments}
                </span>
                <span>
                    ${likeIcon}
                    ${recipe.likes}
                </span>
            </div>
        </article>
    `;
}

function renderRecipes() {
    const recipesContainer = document.getElementById("recipes");
    recipesContainer.innerHTML = recipeSections
        .map(section => {
            const cards = section.recipes
                .map(recipe => createRecipeCard(recipe))
                .join("");
            return `
                <section class="recipe-section">
                    <h2 class="section-title">
                        ${section.title}
                    </h2>
                    <div class="cards">
                        ${cards}
                    </div>
                </section>
            `;
        })
        .join("");
}
renderFilters();
renderRecipes();
/* ================= 1. ЖИВОЙ ПОИСК ================= */
const searchInput = document.querySelector('.search-input') || document.querySelector('input[placeholder*="Search"]');

if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase().trim();
        // Ищем все карточки на странице
        const cards = document.querySelectorAll('.recipe-card, .cuisine-card, [class*="card"]');

        cards.forEach(function(card) {
            const text = card.innerText.toLowerCase();
            // Показываем если есть совпадение, иначе скрываем
            if (text.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

/* ================= 2. ОКТРЫТИЕ ВХОДА / РЕГИСТРАЦИИ ================= */
const authModal = document.getElementById('authModal');
const closeAuth = document.getElementById('closeAuth');
const confirmAuthBtn = document.getElementById('confirmAuthBtn');

// Перехватываем клик по кнопкам REGISTER / LOGIN
document.addEventListener('click', function(e) {
    const text = e.target.innerText ? e.target.innerText.toLowerCase() : '';
    const isAuthClick = text.includes('register') || text.includes('login') || text.includes('вход') || text.includes('регистр');
    
    if (isAuthClick && !e.target.closest('#authModal')) {
        e.preventDefault();
        if (authModal) authModal.classList.add('active');
    }
});

if (closeAuth) {
    closeAuth.addEventListener('click', function() {
        if (authModal) authModal.classList.remove('active');
    });
}

if (confirmAuthBtn) {
    confirmAuthBtn.addEventListener('click', function() {
        alert('Авторизация прошла успешно!');
        if (authModal) authModal.classList.remove('active');
    });
}

/* ================= 3. ВЫПАДАЮЩЕЕ МЕНЮ ПРОФИЛЯ ================= */
const profileBtn = document.querySelector('#profileBtn');
const profileDropdown = document.querySelector('#profileDropdown');

if (profileBtn && profileDropdown) {
    profileBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        profileDropdown.classList.toggle('show');
    });

    document.addEventListener('click', function() {
        profileDropdown.classList.remove('show');
    });
}

const cartWrapper = document.querySelector('.cart-wrapper');
const cartCount = document.querySelector('.cart-count');
const cartDrawer = document.getElementById('cartDrawer');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

const paymentModal = document.getElementById('paymentModal');
const closeModal = document.getElementById('closeModal');
const confirmPayBtn = document.getElementById('confirmPayBtn');

let cart = [];

if (cartWrapper && cartDrawer) {
    cartWrapper.addEventListener('click', function() {
        cartDrawer.classList.add('active');
    });
}
if (closeCart && cartDrawer) {
    closeCart.addEventListener('click', function() {
        cartDrawer.classList.remove('active');
    });
}

document.addEventListener('click', function(e) {
    if (e.target.closest('#cartDrawer, #paymentModal, #authModal, header, footer')) {
        return;
    }

    const card = e.target.closest('.recipe-card, .cuisine-card, [class*="card"], [class*="recipe"]');
    if (!card) return;

    const titleEl = card.querySelector('h3, h4, h5, p, strong, span');
    const title = titleEl ? titleEl.innerText.trim().split('\n')[0] : 'Блюдо';

    let price = 12;
    const allTexts = Array.from(card.querySelectorAll('*')).map(el => el.innerText);
    const priceString = allTexts.find(t => t && t.includes('$'));
    if (priceString) {
        const parsed = parseFloat(priceString.replace(/[^0-9.]/g, ''));
        if (!isNaN(parsed) && parsed > 0) price = parsed;
    }

    // Добавляем новый товар или увеличиваем количество
    const existing = cart.find(item => item.title === title);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ title: title, price: price, quantity: 1 });
    }

    updateCart();
    if (cartDrawer) cartDrawer.classList.add('active');
});

if (cartItemsContainer) {
    cartItemsContainer.addEventListener('click', function(e) {
        const btn = e.target.closest('button');
        if (!btn) return;

        const index = parseInt(btn.dataset.index, 10);
        if (isNaN(index) || !cart[index]) return;

        if (btn.classList.contains('qty-minus')) {
            cart[index].quantity -= 1;
            if (cart[index].quantity <= 0) cart.splice(index, 1);
        } else if (btn.classList.contains('qty-plus')) {
            cart[index].quantity += 1;
        } else if (btn.classList.contains('remove-btn')) {
            cart.splice(index, 1);
        }

        updateCart();
    });
}

function updateCart() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.innerText = totalCount;
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Корзина пуста</p>';
        if (cartTotalEl) cartTotalEl.innerText = '0';
        return;
    }

    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <div class="item-info">
                <strong>${item.title}</strong>
                <span>$${item.price} × ${item.quantity} = $${itemTotal}</span>
            </div>
            <div class="item-controls">
                <button class="qty-btn qty-minus" data-index="${index}">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn qty-plus" data-index="${index}">+</button>
                <button class="remove-btn" data-index="${index}">×</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemEl);
    });

    if (cartTotalEl) cartTotalEl.innerText = total;
}

if (checkoutBtn && paymentModal) {
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Добавьте хотя бы один товар в корзину!');
            return;
        }
        if (cartDrawer) cartDrawer.classList.remove('active');
        paymentModal.classList.add('active');
    });
}

if (closeModal && paymentModal) {
    closeModal.addEventListener('click', function() {
        paymentModal.classList.remove('active');
    });
}

if (confirmPayBtn && paymentModal) {
    confirmPayBtn.addEventListener('click', function() {
        alert('Оплата прошла успешно! Спасибо за заказ.');
        cart = [];
        updateCart();
        paymentModal.classList.remove('active');
    });
}