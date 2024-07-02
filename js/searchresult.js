// Sample jobs array
const jobResults = [
    { title: "Data Analyst", city: "Erbil", company: "Tech Solutions", salary: 1000000, email: "techsol@mail.com"},
    { title: "Software Engineer", city: "Sulaymaniyah", company: "CodeCraft", salary: 1500000, email: "codecraft@mail.com"},
    { title: "Marketing Manager", city: "Duhok", company: "Digital Ventures", salary: 1200000, email: "digven@mail.com" },
    { title: "Sales Agent", city: "Duhok", company: "Digital Ventures", salary: 800000, email: "digven@mail.com" },
    { title: "Photographer", city: "Erbil", company: "Fox Advertisement", salary: 700000, email: "foxad@mail.com" },
    { title: "Motion Graphic Designer", city: "Halabja", company: "Cloud Travel Agency", salary: 900000, email: "cloudt@mail.com" },
    { title: "Graphic Designer", city: "Sulaymaniyah", company: "Sky LTD.", salary: 1200000, email: "skyltd@mail.com" },
    { title: "Accountant", city: "Erbil", company: "Rating App co.", salary: 1100000, email: "ratingapp@mail.com" },
    { title: "Marketing Specialist", city: "Erbil", company: "Telle co.", salary: 600000, email: "telleco@mail.com" },
    { title: "Logostic Officer", city: "Halabja", company: "Digital Solutions", salary: 500000, email: "digsol@mail.com" },
    { title: "HR manager", city: "Sulaymaniyah", company: "Super Company", salary: 700000, email: "superco@mail.com" },
];

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    console.log('Form submitted with query:', searchTerm); // Added for debugging
    displayResults(searchTerm);
});

function displayResults(query) {
    var resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    var filteredJobs = jobResults.filter(function(job) {
        return job.title.toLowerCase().includes(query); // Adjusted to filter by 'title'
    });

    if (filteredJobs.length > 0) {
        filteredJobs.forEach(function(job) {
            var jobElement = document.createElement('div');
            jobElement.className = 'result-item';
            jobElement.innerHTML = '<h3>' + job.title + '</h3>' +
                                   '<p>Company: ' + job.company + '</p>' +
                                   '<p>City: ' + job.city + '</p>' +
                                   '<p>Salary: ' + job.salary.toLocaleString() + ' IQD</p>' + // Adjusted for salary formatting
                                   '<p>Email: ' + job.email + '</p>';
            resultsContainer.appendChild(jobElement);
        });
    } else {
        resultsContainer.innerHTML = '<p class="no-results">No results found</p>';
    }
}
