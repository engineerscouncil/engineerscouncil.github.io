document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       DESKTOP ABOUT US DROPDOWN
    ========================================= */

    const desktopDropdown = document.querySelector(".nav-dropdown");
    const desktopToggle = document.querySelector(".dropdown-toggle");

    if (desktopDropdown && desktopToggle) {

        desktopToggle.addEventListener("click", function (event) {

            event.preventDefault();

            const isOpen =
                desktopDropdown.classList.contains("open");

            desktopDropdown.classList.toggle("open");

            desktopToggle.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

        });


        // Close when clicking somewhere else

        document.addEventListener("click", function (event) {

            if (!desktopDropdown.contains(event.target)) {

                desktopDropdown.classList.remove("open");

                desktopToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* =========================================
       MOBILE MENU
    ========================================= */

    const mainNav =
        document.querySelector(".main-nav");

    const mobileButton =
        document.querySelector(".mobile-menu-button");

    const mobileDropdownToggle =
        document.querySelector(".mobile-dropdown-toggle");

    const mobileDropdown =
        document.querySelector(".mobile-dropdown");


    if (mainNav && mobileButton) {

        mobileButton.addEventListener("click", function () {

            const isOpen =
                mainNav.classList.contains("mobile-open");

            mainNav.classList.toggle("mobile-open");

            mobileButton.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

        });

    }


    /* =========================================
       MOBILE ABOUT US DROPDOWN
    ========================================== */

    if (
        mobileDropdownToggle &&
        mobileDropdown
    ) {

        mobileDropdownToggle.addEventListener(
            "click",
            function () {

                const isOpen =
                    mobileDropdown.classList.contains("open");

                mobileDropdown.classList.toggle("open");

                mobileDropdownToggle.setAttribute(
                    "aria-expanded",
                    String(!isOpen)
                );

                const arrow =
                    mobileDropdownToggle.querySelector(".arrow");

                if (arrow) {

                    arrow.textContent =
                        isOpen ? "▼" : "▲";

                }

            }
        );

    }


    /* =========================================
       CLOSE MOBILE MENU AFTER LINK CLICK
    ========================================== */

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-menu a"
        );

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (mainNav) {
                mainNav.classList.remove("mobile-open");
            }

            if (mobileButton) {
                mobileButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    });

});
document.addEventListener("DOMContentLoaded", function () {

    fetch("header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load header");
            }

            return response.text();
        })
        .then(data => {
            document.getElementById("header").innerHTML = data;
            document.documentElement.classList.remove("loading");
        })
        .catch(error => {
            console.error("Header failed to load:", error);
            document.documentElement.classList.remove("loading");
        });

});