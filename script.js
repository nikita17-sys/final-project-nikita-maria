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
const searchInput = document.querySelector('.search-input');
const cartBtn = document.querySelector('.cart-wrapper'); 
const cartCount = document.querySelector('.cart-count');

if (cartBtn) {
    cartBtn.addEventListener('click', () => {
        alert('Корзина пока пуста!');
    });
}

const profileBtn = document.querySelector('#profileBtn');
const profileDropdown = document.querySelector('#profileDropdown');

if (profileBtn && profileDropdown) {
    profileBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        profileDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
        profileDropdown.classList.remove('show');
    });
}