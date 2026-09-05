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



const $ = selector => document.querySelector(selector);
const toggleClass = (el, cls, state) => el && el.classList.toggle(cls, state);

const els = {
    authModal: $('#authModal'),
    paymentModal: $('#paymentModal'),
    cartDrawer: $('#cartDrawer'),
    profileDropdown: $('#profileDropdown'),
    cartCount: $('.cart-count'),
    cartItems: $('#cartItems'),
    cartTotal: $('#cartTotal')
};

let cart = [];

const searchInput = $('.search-input') || $('input[placeholder*="Search"]');
searchInput?.addEventListener('input', e => {
    const query = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.recipe-card, .cuisine-card, [class*="card"]').forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(query) ? '' : 'none';
    });
});

document.addEventListener('click', e => {
    const target = e.target;
    const text = target.innerText?.toLowerCase() || '';

    if (target.closest('#profileBtn')) {
        els.profileDropdown?.classList.toggle('show');
        return;
    } else {
        els.profileDropdown?.classList.remove('show');
    }

    if (target.closest('.cart-wrapper')) return toggleClass(els.cartDrawer, 'active', true);

    const isAuth = ['register', 'login', 'вход', 'регистр'].some(k => text.includes(k));
    if (isAuth && !target.closest('#authModal')) {
        e.preventDefault();
        return toggleClass(els.authModal, 'active', true);
    }

    if (!target.closest('#cartDrawer, #paymentModal, #authModal, header, footer')) {
        const card = target.closest('.recipe-card, .cuisine-card, [class*="card"], [class*="recipe"]');
        if (card) {
            const title = card.querySelector('h3, h4, h5, p, strong, span')?.innerText.trim().split('\n')[0] || 'Блюдо';
            const priceText = [...card.querySelectorAll('*')].find(el => el.innerText?.includes('$'))?.innerText;
            const price = parseFloat(priceText?.replace(/[^0-9.]/g, '')) || 12;

            const existing = cart.find(item => item.title === title);
            existing ? existing.quantity++ : cart.push({ title, price, quantity: 1 });

            updateCart();
            toggleClass(els.cartDrawer, 'active', true);
        }
    }
});

$('#closeAuth')?.addEventListener('click', () => toggleClass(els.authModal, 'active', false));
$('#confirmAuthBtn')?.addEventListener('click', () => {
    alert('Авторизация прошла успешно!');
    toggleClass(els.authModal, 'active', false);
});

$('#closeCart')?.addEventListener('click', () => toggleClass(els.cartDrawer, 'active', false));

els.cartItems?.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;

    const idx = parseInt(btn.dataset.index, 10);
    if (isNaN(idx) || !cart[idx]) return;

    if (btn.classList.contains('qty-minus')) {
        cart[idx].quantity--;
        if (cart[idx].quantity <= 0) cart.splice(idx, 1);
    } else if (btn.classList.contains('qty-plus')) {
        cart[idx].quantity++;
    } else if (btn.classList.contains('remove-btn')) {
        cart.splice(idx, 1);
    }
    updateCart();
});

function updateCart() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (els.cartCount) els.cartCount.innerText = totalCount;
    if (!els.cartItems) return;

    if (cart.length === 0) {
        els.cartItems.innerHTML = '<p class="empty-msg">Корзина пуста</p>';
        if (els.cartTotal) els.cartTotal.innerText = '0';
        return;
    }

    let total = 0;
    els.cartItems.innerHTML = cart.map((item, idx) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="cart-item">
                <div class="item-info">
                    <strong>${item.title}</strong>
                    <span>$${item.price} × ${item.quantity} = $${itemTotal}</span>
                </div>
                <div class="item-controls">
                    <button class="qty-btn qty-minus" data-index="${idx}">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn qty-plus" data-index="${idx}">+</button>
                    <button class="remove-btn" data-index="${idx}">×</button>
                </div>
            </div>`;
    }).join('');

    if (els.cartTotal) els.cartTotal.innerText = total;
}
$('#checkoutBtn')?.addEventListener('click', () => {
    toggleClass(els.cartDrawer, 'active', false);
    toggleClass(els.paymentModal, 'active', true);
});
$('#closeModal')?.addEventListener('click', () => toggleClass(els.paymentModal, 'active', false));