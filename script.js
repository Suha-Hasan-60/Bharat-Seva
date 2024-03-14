document.addEventListener("DOMContentLoaded", function() {
    // Dummy data for programs and events
    const programsData = ["Education Support", "Healthcare Clinics", "Skill Development Workshops"];
    const eventsData = ["Health Camp - March 20, 2024", "Education Drive - April 5, 2024", "Livelihood Workshop - April 15, 2024"];

    // Function to populate programs
    function populatePrograms() {
        const programList = document.getElementById("programList");
        programsData.forEach(program => {
            const li = document.createElement("li");
            li.textContent = program;
            programList.appendChild(li);
        });
    }

    // Function to populate events
    function populateEvents() {
        const eventList = document.getElementById("eventList");
        eventsData.forEach(event => {
            const li = document.createElement("li");
            li.textContent = event;
            eventList.appendChild(li);
        });
    }

    // Call the functions to populate programs and events
    populatePrograms();
    populateEvents();
});
