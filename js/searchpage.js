$(document).ready(function() {
    $('#search-form').submit(function(event) {
        event.preventDefault();
        const query = $('#search-input').val().toLowerCase();
        console.log('Form submitted with query:', query);
        loadSearchResults(query);
    });
});

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var searchTerm = document.getElementById('search-input').value;
    console.log('Form submitted with query:', searchTerm); // Added for debugging
    window.location.href = 'searchresults.html?query=' + encodeURIComponent(searchTerm);
});

function loadSearchResults(query) {
    const jobResults = [
        { title: "Software Engineer", company: "Tech Corp", city: "Erbil", salary: "1,200,000 IQD" },
        { title: "Data Analyst", company: "Data Co", city: "Sulaimaniyah", salary: "900,000 IQD" },
        { title: "Project Manager", company: "Business Solutions", city: "Duhok", salary: "1,100,000 IQD" },
        { title: "Graphic Designer", company: "Creative Studio", city: "Erbil", salary: "800,000 IQD" },
        { title: "Marketing Specialist", company: "Marketing Experts", city: "Sulaimaniyah", salary: "950,000 IQD" }
    ];

    const filteredResults = jobResults.filter(job => job.title.toLowerCase().includes(query));
    
    const resultsContainer = $('#search-results');
    resultsContainer.empty();

    if (filteredResults.length > 0) {
        filteredResults.forEach(job => {
            const jobItem = `
                <div class="result-item">
                    <h3>${job.title}</h3>
                    <p>Company: ${job.company}</p>
                    <p>City: ${job.city}</p>
                    <p>Salary: ${job.salary}</p>
                </div>
            `;
            resultsContainer.append(jobItem);
        });
    } else {
        resultsContainer.append('<p class="no-results">No results found</p>');
    }
}
