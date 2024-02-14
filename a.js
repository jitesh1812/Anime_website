document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");

    // Sample search data (replace with your own data)
    const searchData = [
        
            { keyword: "luffy", url: "https://onepiece.fandom.com/wiki/Monkey_D._Luffy" },
            { keyword: "tanjiro", url: "https://kimetsu-no-yaiba.fandom.com/wiki/Tanjiro_Kamado" },
            { keyword: "naruto", url: "https://en.wikipedia.org/wiki/Naruto" },
            { keyword: "zoro", url: "https://onepiece.fandom.com/wiki/Roronoa_Zoro" },
            { keyword: "sanji", url: "https://onepiece.fandom.com/wiki/Sanji/Abilities_and_Powers" },
            { keyword: "gojo", url: "https://jujutsu-kaisen.fandom.com/wiki/Satoru_Gojo" },
            { keyword: "denji", url: "https://chainsaw-man.fandom.com/wiki/Denji" },
            { keyword: "kakashi", url: "https://naruto.fandom.com/wiki/Kakashi_Hatake" },
            { keyword: "chooper", url: "https://onepiece.fandom.com/wiki/Tony_Tony_Chopper" },
            { keyword: "nami", url: "https://onepiece.fandom.com/wiki/Nami" },
            { keyword: "hinata", url: "https://naruto.fandom.com/wiki/Hinata_Hy%C5%ABga" },
            { keyword: "sabo", url: "https://onepiece.fandom.com/wiki/Sabo" },
            { keyword: "robin", url: "https://onepiece.fandom.com/wiki/Nico_Robin" },
            { keyword: "jiraiya", url: "https://naruto.fandom.com/wiki/Jiraiya" },
            { keyword: "mikasa", url: "https://attackontitan.fandom.com/wiki/Mikasa_Ackerman" },
            { keyword: "boa", url: "https://onepiece.fandom.com/wiki/Boa_Hancock" },

            { keyword: "ace", url: "https://onepiece.fandom.com/wiki/Portgas_D._Ace" },
            { keyword: "robin", url: "https://onepiece.fandom.com/wiki/Nico_Robin" },
            { keyword: "dazai", url: "https://bungostraydogs.fandom.com/wiki/Osamu_Dazai" },
            { keyword: "eren", url: "https://attackontitan.fandom.com/wiki/Eren_Yeager" },
            { keyword: "mikasa", url: "https://attackontitan.fandom.com/wiki/Mikasa_Ackerman" },
            { keyword: "gara", url: "https://naruto.fandom.com/wiki/Gaara" },
            { keyword: "hinata Haikyuu", url: "https://haikyuu.fandom.com/wiki/Sh%C5%8Dy%C5%8D_Hinata" },
            { keyword: "loid", url: "https://spy-x-family.fandom.com/wiki/Loid_Forger" },
            { keyword: "katsuki", url: "https://onepiece.fandom.com/wiki/Portgas_D._Ace" },
            { keyword: "gara", url: "https://onepiece.fandom.com/wiki/Portgas_D._Ace" },
            { keyword: "jiraya", url: "https://onepiece.fandom.com/wiki/Portgas_D._Ace" },
            { keyword: "zenistu", url: "https://onepiece.fandom.com/wiki/Portgas_D._Ace" },
            { keyword: "nezuko", url: "https://onepiece.fandom.com/wiki/Portgas_D._Ace" },
            { keyword: "itaddori", url: "https://onepiece.fandom.com/wiki/Portgas_D._Ace" },
            { keyword: "ace", url: "https://onepiece.fandom.com/wiki/Portgas_D._Ace" },
            
            
            ];


    // Function to perform the search and navigate
    function performSearchAndNavigate(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const searchTerm = searchInput.value.toLowerCase();
        const result = searchData.find(item => item.keyword === searchTerm);

        if (result) {
            // If a matching keyword is found, navigate to the associated URL
            window.location.href = result.url;
        } else {
            // Handle cases where no match is found (e.g., show an error message)
            alert("No matching result found.");
        }

        searchInput.value = "";
    }

    // Add submit event listener to the form
    document.querySelector("form").addEventListener("submit", performSearchAndNavigate);
});


document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const loginButton = document.getElementById("loginButton");
    const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
    const charactersLink = document.getElementById("charactersLink");
    const animeListLink = document.getElementById("animeListLink");

    // Sample user data (replace with your own authentication logic)
    const users = [
        { username: "user1", hashedPassword: "$2b$10$UERsZv/vVad6TfjSwNhTjelWuEnA3lHmHnl0Yzj.D9Gy2SkojWDfW" },
        { username: "user2", hashedPassword: "$2b$10$Zb8JapZBjPzdUc9lP1CSle5w9vW/jzZKk2vQa9AJZL4n3/ZgWyYRe" },
        // Add more users as needed
    ];

    // Function to show the login modal
    function showLoginModal() {
        loginModal.show();
    }

    // Function to perform login
    function performLogin(event) {
        event.preventDefault();

        const username = document.getElementById("Ram").value;
        const password = document.getElementById("555").value;

        const user = users.find(u => u.username === username);

        if (user && comparePasswords(password, user.hashedPassword)) {
            // Enable navigation features after successful login
            enableNavigation();

            // Implement session management or token-based authentication here
            alert("Login successful!"); // You can replace this with your own logic
            loginModal.hide();
        } else {
            alert("Invalid username or password.");
        }

        // Clear the login form fields
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }

    // Function to compare hashed and plain passwords using bcrypt
    function comparePasswords(plainPassword, hashedPassword) {
        // You need to use a library like bcrypt for secure password hashing
        // Example using bcrypt.js (https://github.com/dcodeIO/bcrypt.js)
        const bcrypt = dcodeIO.bcrypt;
        return bcrypt.compareSync(plainPassword, hashedPassword);
    }

    // Function to enable navigation features after login
    function enableNavigation() {
        charactersLink.classList.remove("disabled");
        animeListLink.classList.remove("disabled");

        // You can add more elements to enable/disable as needed
    }

    // Add click event listener to the login button
    loginButton.addEventListener("click", showLoginModal);

    // Add submit event listener to the login form
    document.getElementById("loginForm").addEventListener("submit", performLogin);
});


let currentIndex = 0;
const slides = document.querySelector('.slider').children;
const totalSlides = slides.length;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function updateSlider() {
    const newTransformValue = -currentIndex * 100 + '%';
    document.querySelector('.slider').style.transform = `translateX(${newTransformValue})`;
}



