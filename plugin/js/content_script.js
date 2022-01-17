window.addEventListener("load", (e) => {
    const companyName = document.querySelector("[aria-label='Current company']").innerText;
    let fullName = document.querySelector(".global-nav__me-photo").alt;
    fullName = fullName.split(" ");
    const leadData = {
        companyName,
        firstName: fullName[0],
        lastName: fullName[1]
    };

    console.log(leadData);
});