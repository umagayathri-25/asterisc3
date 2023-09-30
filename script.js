// JavaScript for handling form submission and updating the resume
// JavaScript for handling form submission and updating the resume
document.addEventListener("DOMContentLoaded", function () {
    const resumeForm = document.getElementById("resume-form");
    const resumeContainer = document.querySelector(".resume");

    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const contactInfo = document.getElementById("contact-info").value;
        const education = document.getElementById("education").value;
        const experience = document.getElementById("experience").value;
        const skills = document.getElementById("skills").value;
        const project = document.getElementById("project").value;
        const carrier = document.getElementById("carrier").value;
        const declaration= document.getElementById("del").value;
        // Update the resume with user-provided data
        const resumeHTML = `
            <header>
                <h1>${name}</h1>
                <p>${contactInfo}</p>
            </header>
            <section id="carrier">
                <h4>Carrier Objective</h4>
                <p>${carrier}</p>
            </section>

            <section id="education">
                <h4>Education</h4>
                <p>${education}</p>
            </section>

            <section id="experience">
                <h4>Work Experience</h4>
                <p>${experience}</p>
            </section>

            <section id="skills">
                <h4>Skills</h4>
                <p>${skills}</p>
            </section>
            <section id="project">
                <h4>Project</h4>
                <p>${project}</p>
            </section>
            <section id="del">
                <h4>Declaration</h4>
                <p>${del}</p>
            </section>

            

        `;

        resumeContainer.innerHTML = resumeHTML;
    });
});
