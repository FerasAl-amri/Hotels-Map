document.addEventListener("DOMContentLoaded", function () {
    const fullscreenToggle = document.getElementById("fullscreenToggle");

    function openFullscreen() {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            /* Firefox */
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            /* IE/Edge */
            document.documentElement.msRequestFullscreen();
        }
        fullscreenToggle.innerHTML = '<img src="img/fullscreen_exit.svg" />';
    }

    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            /* IE/Edge */
            document.msExitFullscreen();
        }
        fullscreenToggle.innerHTML = '<img src="img/fullscreen.svg" />';
    }

    // Toggle fullscreen mode on button click
    fullscreenToggle.addEventListener("click", function () {
        if (document.fullscreenElement) {
            closeFullscreen();
        } else {
            openFullscreen();
        }
    });
});

// Function to hide all paths
function hideAllPaths() {
    const paths = document.querySelectorAll(".pin .path");
    paths.forEach((path) => (path.style.display = "none"));
}

// Function to hide all cards
function hideAllCards() {
    const cards = document.querySelectorAll(".card.position-absolute");
    cards.forEach((card) => (card.style.display = "none"));
    // Remove 'active' class from all links
    document.querySelectorAll(".list-group-item").forEach((link) => link.classList.remove("active"));
    hideAllPaths();
}

// Function to show a specific card
function showCard(cardId) {
    hideAllCards();
    document.getElementById(cardId).style.display = "block";
    // Add 'active' class to the corresponding link
    document.querySelector(`.list-group-item.${cardId}`).classList.add("active");
}

// Function to show a specific path
function showPath(pathId) {
    hideAllPaths();
    document.getElementById(pathId).style.display = "block";
}

// Function to reset map zoom
function resetMapZoom() {
    scale = 1;
    panX = 0;
    panY = 0;
    updateMapTransform();
}

// Event listeners for pin clicks based on class names
document.querySelectorAll(".maden_hotel").forEach((element) => {
    element.addEventListener("click", function () {
        showCard("maden_hotel");
        showPath("maden_hotel_path");
        resetMapZoom();
    });
});

document.querySelectorAll(".nozol_royal_inn").forEach((element) => {
    element.addEventListener("click", function () {
        showCard("nozol_royal_inn");
        showPath("nozol_royal_inn_path");
        resetMapZoom();
    });
});

document.querySelectorAll(".al_rawda_royal_inn").forEach((element) => {
    element.addEventListener("click", function () {
        showCard("al_rawda_royal_inn");
        showPath("al_rawda_royal_inn_path");
        resetMapZoom();
    });
});

document.querySelectorAll(".ruva_al_madinah").forEach((element) => {
    element.addEventListener("click", function () {
        showCard("ruva_al_madinah");
        showPath("ruva_al_madinah_path");
        resetMapZoom();
    });
});

document.querySelectorAll(".valy_al_madinah").forEach((element) => {
    element.addEventListener("click", function () {
        showCard("valy_al_madinah");
        showPath("valy_al_madinah_path");
        resetMapZoom();
    });
});

document.querySelectorAll(".finda_al_madinah_hotel").forEach((element) => {
    element.addEventListener("click", function () {
        showCard("finda_al_madinah_hotel");
        showPath("finda_al_madinah_hotel_path");
        resetMapZoom();
    });
});

document.querySelectorAll(".maien_al_madinah_hotel").forEach((element) => {
    element.addEventListener("click", function () {
        showCard("maien_al_madinah_hotel");
        showPath("maien_al_madinah_hotel_path");
        resetMapZoom();
    });
});

document.querySelectorAll(".view_hotel").forEach((element) => {
    element.addEventListener("click", function () {
        showCard("view_hotel");
        showPath("view_hotel_path");
        resetMapZoom();
    });
});

document.querySelectorAll(".zaha_hotel").forEach((element) => {
    element.addEventListener("click", function () {
        showCard("zaha_hotel");
        showPath("zaha_hotel_path");
        resetMapZoom();
    });
});

document.querySelectorAll(".zaha_al_madinah_hotel").forEach((element) => {
    element.addEventListener("click", function () {
        showCard("zaha_al_madinah_hotel");
        showPath("zaha_al_madinah_hotel_path");
        resetMapZoom();
    });
});

document.querySelectorAll(".zaha_taiba_hotel").forEach((element) => {
    element.addEventListener("click", function () {
        showCard("zaha_taiba_hotel");
        showPath("zaha_taiba_hotel_path");
        resetMapZoom();
    });
});

document.querySelectorAll(".maden_taiba").forEach((element) => {
    element.addEventListener("click", function () {
        showCard("maden_taiba");
        showPath("maden_taiba_path");
        resetMapZoom();
    });
});

// Add effect for the clicked pin
document.addEventListener("DOMContentLoaded", function () {
    // Get all pins
    var pins = document.querySelectorAll(".pin a");

    // Add click event listener to each pin
    pins.forEach(function (pin) {
        pin.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default action (e.g., navigating to href)

            // Remove active class from all pins
            pins.forEach(function (otherPin) {
                if (otherPin !== pin) {
                    otherPin.classList.remove("active");
                }
            });

            // Toggle the active class on the clicked pin
            pin.classList.toggle("active");
        });
    });

    // Function to remove 'active' class from all <a> elements inside .pin divs
    function removeActiveClass() {
        // Iterate over the NodeList and remove 'active' class
        pins.forEach(function (pin) {
            pin.classList.remove("active");
        });
    }

    // Event listener for close buttons
    document.querySelectorAll(".closeCardButton").forEach((button) => {
        button.addEventListener("click", function () {
            hideAllCards();
            removeActiveClass();
            hideAllPaths();
            resetMapZoom();
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all links in the list-group
    const listGroupLinks = document.querySelectorAll(".list-group .list-group-item-action");

    // Add event listeners to each link
    listGroupLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Remove the active class from all pins
            document.querySelectorAll(".pin-container .pin a").forEach((pinLink) => {
                pinLink.classList.remove("active");
            });

            // Get the class of the clicked link
            const className = this.classList[2]; // Assuming the class you want is the third one

            // Find the corresponding pin and toggle the active class
            const pinLink = document.querySelector(`.pin-container .pin a.${className}`);
            if (pinLink) {
                pinLink.classList.toggle("active");
            }
        });
    });
});

const map_image = document.getElementById("map_image");
const pin_container = document.getElementById("pin_container");
let scale = 1;
let panX = 0;
let panY = 0;
let isPanning = false;
let startX, startY;

map_image.addEventListener("wheel", (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    scale += delta;
    scale = Math.min(Math.max(1, scale), 3);
    updateMapTransform();
});

map_image.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isPanning = true;
    startX = e.clientX - panX;
    startY = e.clientY - panY;
});

document.addEventListener("mousemove", (e) => {
    if (isPanning) {
        panX = e.clientX - startX;
        panY = e.clientY - startY;
        updateMapTransform();
    }
});

document.addEventListener("mouseup", () => {
    isPanning = false;
});

function updateMapTransform() {
    const imageWidth = map_image.clientWidth * scale;
    const imageHeight = map_image.clientHeight * scale;

    const containerWidth = map_image.parentElement.clientWidth;
    const containerHeight = map_image.parentElement.clientHeight;

    const maxPanX = (imageWidth - containerWidth) / 2;
    const maxPanY = (imageHeight - containerHeight) / 2;

    // Ensure panX and panY are within bounds
    panX = Math.min(Math.max(panX, -maxPanX), maxPanX);
    panY = Math.min(Math.max(panY, -maxPanY), maxPanY);

    map_image.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
    pin_container.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
}

// images galleries
new SimpleLightbox({ elements: ".maden_hotel_gallery a" });
new SimpleLightbox({ elements: ".nozol_royal_inn_gallery a" });
new SimpleLightbox({ elements: ".al_rawda_royal_inn_gallery a" });
new SimpleLightbox({ elements: ".finda_al_madinah_hotel_gallery a" });
new SimpleLightbox({ elements: ".maien_al_madinah_hotel_gallery a" });
new SimpleLightbox({ elements: ".ruva_al_madinah_gallery a" });
new SimpleLightbox({ elements: ".valy_al_madinah_gallery a" });
new SimpleLightbox({ elements: ".view_hotel_gallery a" });
new SimpleLightbox({ elements: ".zaha_al_madinah_hotel_gallery a" });
new SimpleLightbox({ elements: ".zaha_hotel_gallery a" });
new SimpleLightbox({ elements: ".zaha_taiba_hotel_gallery a" });
new SimpleLightbox({ elements: ".maden_taiba_gallery a" });

document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class 'carousel'
    const carousels = document.querySelectorAll(".carousel");

    // Loop through each carousel and attach touch event listeners
    carousels.forEach(function (carousel) {
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener("touchstart", function (event) {
            touchStartX = event.changedTouches[0].screenX;
        });

        carousel.addEventListener("touchmove", function (event) {
            touchEndX = event.changedTouches[0].screenX;
        });

        carousel.addEventListener("touchend", function (event) {
            handleGesture(carousel);
        });

        function handleGesture(carousel) {
            if (touchEndX < touchStartX) {
                slideNext(carousel); // Swipe left, go to next slide
            }
            if (touchEndX > touchStartX) {
                slidePrev(carousel); // Swipe right, go to previous slide
            }
        }

        function slideNext(carousel) {
            const nextButton = carousel.querySelector(".carousel-control-next");
            if (nextButton) {
                nextButton.click(); // Trigger the next slide
            }
        }

        function slidePrev(carousel) {
            const prevButton = carousel.querySelector(".carousel-control-prev");
            if (prevButton) {
                prevButton.click(); // Trigger the previous slide
            }
        }
    });
});

// Remove any previous script handling path images

document.addEventListener("DOMContentLoaded", function () {
    // Activate the hotel list item
    document.querySelectorAll(".list-group-item").forEach(function (item) {
        item.addEventListener("click", function () {
            document.querySelectorAll(".list-group-item").forEach(function (el) {
                el.classList.remove("active");
            });
            this.classList.add("active");
        });
    });

});

// --- دالة إعادة ضبط الخريطة للوضع الرئيسي ---
// --- دالة فندق قباء (تخفي كل شيء وتظهر مسار وقباء) ---
function changeMapToQaba() {
    document.getElementById('map_image').src = "img/011.jpg";

    // إخفاء جميع الدبابيس والمسارات
    document.querySelectorAll('.pin').forEach(pin => pin.style.display = 'none');
    document.querySelectorAll('.path').forEach(p => p.style.display = 'none');

    // إخفاء مسار قباء (إزالة الكلاس في حال كان موجوداً من ضغطة سابقة)
    const qabaPath = document.getElementById('qaba_hotel_path');
    if (qabaPath) qabaPath.classList.remove('show-now');

    // إظهار دبوس قباء فقط
    const qabaPin = document.querySelector('.qaba_pin');
    if (qabaPin) qabaPin.style.setProperty('display', 'block', 'important');

    resetMapZoom();
}
function showQabaPath() {
    const qabaPath = document.getElementById('qaba_hotel_path');
    if (qabaPath) {
        // إضافة الكلاس الذي يحتوي على display: block !important
        qabaPath.classList.add('show-now');
    }
}
// --- دالة العودة للخريطة الرئيسية (تعيد الدبابيس الـ 12 الأصلية) ---
function resetToMainMap() {
    // 1. إعادة الصورة الأساسية
    document.getElementById('map_image').src = "img/main_map.jpg";

    // 2. إظهار الدبابيس الأصلية (التي لا تحمل كلاس qaba_pin)
    const allPins = document.querySelectorAll('.pin');
    allPins.forEach(pin => {
        if (!pin.classList.contains('qaba_pin')) {
            pin.style.setProperty('display', 'block', 'important');
            pin.style.opacity = '1';
        } else {
            // إخفاء دبوس قباء لأنه لا ينتمي للخريطة الرئيسية
            pin.style.setProperty('display', 'none', 'important');
        }
    });

    // 3. إخفاء مسار قباء
    const qabaPath = document.getElementById('qaba_hotel_path');
    if (qabaPath) {
        qabaPath.style.setProperty('display', 'none', 'important');
    }

    // 4. إخفاء كرت قباء
    const qabaCard = document.getElementById('qaba_hotel_card');
    if (qabaCard) qabaCard.style.display = 'none';
}
function showQabaPath() {
    const path = document.getElementById('qaba_hotel_path');
    if (path) {
        // إظهار المسار بتأثير تدريجي بسيط إذا أردت
        path.style.display = 'block';
        path.style.opacity = '0';
        setTimeout(() => {
            path.style.transition = 'opacity 0.5s ease';
            path.style.opacity = '1';
        }, 10);
    }
}
// --- تحديث الـ Event Listeners للفنادق ---
const hotelClasses = [
    "maden_hotel", "nozol_royal_inn", "al_rawda_royal_inn", "ruva_al_madinah",
    "valy_al_madinah", "finda_al_madinah_hotel", "maien_al_madinah_hotel",
    "view_hotel", "zaha_hotel", "zaha_al_madinah_hotel", "zaha_taiba_hotel", "maden_taiba"
];

hotelClasses.forEach(className => {
    document.querySelectorAll(`.${className}`).forEach((element) => {
        element.addEventListener("click", function (e) {
            // إذا كان العنصر "رابط" داخل قائمة وليس دبوس، نمنع السلوك الافتراضي
            if (this.tagName === 'A') e.preventDefault();

            resetToMainMap();
            showCard(className);
            showPath(`${className}_path`);
            resetMapZoom();
        });
    });
});