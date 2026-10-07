/* =========================
   FOOD MENU FILTER
========================= */

function filterMenu(category, button) {

    const cards = document.querySelectorAll(".food-card");

    const buttons = document.querySelectorAll(".category");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    cards.forEach(card => {

        if (category === "all") {

            card.style.display = "block";

        } else if (card.dataset.category === category) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================
   FOOD SEARCH
========================= */

function searchFood() {

    const search =
        document
        .getElementById("foodSearch")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".food-card");

    cards.forEach(card => {

        const foodName =
            card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const description =
            card
            .querySelector("p")
            .textContent
            .toLowerCase();

        if (
            foodName.includes(search) ||
            description.includes(search)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================
   ORDER SYSTEM
========================= */

let order = [];


function addToOrder(name, price) {

    const existingItem =
        order.find(item => item.name === name);

    if (existingItem) {

        existingItem.quantity++;

    } else {

        order.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateOrder();

    showToast(name + " added to order");

}


function updateOrder() {

    const orderContainer =
        document.getElementById("orderItems");

    const totalElement =
        document.getElementById("orderTotal");


    if (order.length === 0) {

        orderContainer.innerHTML =
            '<p class="empty-order">Your order is empty.</p>';

        totalElement.textContent = "₹0";

        return;

    }


    let html = "";

    let total = 0;


    order.forEach((item, index) => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        html += `

            <div class="order-item">

                <span>
                    ${item.name}
                    × ${item.quantity}
                </span>

                <strong>
                    ₹${itemTotal}
                </strong>

            </div>

        `;

    });


    orderContainer.innerHTML = html;

    totalElement.textContent =
        "₹" + total;

}


/* =========================
   PLACE ORDER
========================= */

function placeOrder() {

    if (order.length === 0) {

        showToast("Please add something to your order.");

        return;

    }

    let total = 0;

    order.forEach(item => {

        total += item.price * item.quantity;

    });


    alert(
        "Thank you for your order!\n\n" +
        "Your total is ₹" + total +
        "\n\nOur restaurant team will contact you shortly."
    );

}


/* =========================
   ROOM BOOKING
========================= */

function bookRoom(roomName, price) {

    alert(
        "Room Selected: " +
        roomName +
        "\nPrice: ₹" +
        price +
        " per night\n\n" +
        "Please contact our reservation desk to complete your booking."
    );

}


/* =========================
   ENQUIRY FORM
========================= */

function submitEnquiry(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const type =
        document.getElementById("enquiryType").value;


    alert(
        "Thank you, " +
        name +
        "!\n\n" +
        "Your " +
        type +
        " enquiry has been received.\n\n" +
        "Our team will contact you shortly."
    );


    event.target.reset();

}


/* =========================
   TOAST MESSAGE
========================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================
   DARK MODE
========================= */

const themeToggle =
    document.getElementById("themeToggle");


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem(
            "hotelTheme",
            "dark"
        );

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem(
            "hotelTheme",
            "light"
        );

    }

});


/* =========================
   LOAD SAVED THEME
========================= */

window.addEventListener("load", () => {

    const savedTheme =
        localStorage.getItem("hotelTheme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeToggle.textContent = "☀️";

    }

});


/* =========================
   MOBILE MENU
========================= */

function toggleMobileMenu() {

    const nav =
        document.querySelector(".navbar nav");

    nav.classList.toggle("mobile-active");

}
