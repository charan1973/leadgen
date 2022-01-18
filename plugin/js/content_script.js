window.addEventListener("load", async function load(e) {
    window.removeEventListener("load", load, false);

    let fullName = document.querySelector(".artdeco-entity-lockup__title");
    fullName = fullName.innerText;
    fullName = fullName && fullName.split(" ");

    let companyName = document.querySelector("[aria-label='Current company']");
    companyName = companyName !== null ? companyName.innerText : null;

    const leadData = {
        company_name: companyName,
        first_name: fullName[0],
        last_name: fullName[1]
    };

    try {
        const res = await fetch("http://localhost:3000/api/v1/leads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': '*/*'
            },
            body: JSON.stringify(leadData)
        }).then(r => r.json());
        console.log(res);
    } catch (error) {
        console.log(error);
    }

});