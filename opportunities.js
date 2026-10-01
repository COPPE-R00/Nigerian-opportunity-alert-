const opportunities = [
  {
    title: "African Development Bank 2027 Internship Program – Session 1",
    category: "internship",
    tag: "Internship",
    description: "Internship opportunity for eligible students and recent graduates. Check the official African Development Bank listing for the full eligibility requirements.",
    deadline: "12 October 2026",
    source: "African Development Bank",
    url: "https://www.afdb.org/en/vacancy/2027-internship-program-session-1-97099"
  },

  {
    title: "Mandela Washington Fellowship 2027",
    category: "fellowship",
    tag: "Fellowship",
    description: "The Mandela Washington Fellowship is the flagship program of the Young African Leaders Initiative for eligible young African leaders.",
    deadline: "13 October 2026",
    source: "Mandela Washington Fellowship",
    url: "https://apply.mandelawashingtonfellowship.org/Account/Login"
  },

  {
    title: "United Nations Careers – Current Opportunities",
    category: "job",
    tag: "Jobs",
    description: "Search current United Nations vacancies and career opportunities through the official UN Careers platform.",
    deadline: "Varies by position",
    source: "United Nations",
    url: "https://careers.un.org/"
  },

  {
    title: "UNICEF Nigeria Career Opportunities",
    category: "job",
    tag: "Jobs / NGO",
    description: "Check the official UNICEF careers platform for Nigeria-related vacancies, consultancies and other opportunities when available.",
    deadline: "Depends on listing",
    source: "UNICEF",
    url: "https://jobs.unicef.org/en-us/Search/?location=nigeria"
  },

  {
    title: "Scholarship Opportunities in Nigeria",
    category: "scholarship",
    tag: "Scholarship",
    description: "Explore education and scholarship information and verify eligibility and application requirements from the official source before applying.",
    deadline: "Varies",
    source: "Study in Nigeria",
    url: "https://www.studyinnigeria.gov.ng/"
  },

  {
    title: "UN Volunteers – Online Opportunities",
    category: "volunteering",
    tag: "Volunteering",
    description: "Explore current online volunteering assignments available through the official United Nations Volunteers platform.",
    deadline: "Varies by assignment",
    source: "United Nations Volunteers",
    url: "https://app.unv.org/"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("opportunityList");

  if (!container) return;

  container.innerHTML = "";

  opportunities.forEach(function (opportunity) {
    const card = document.createElement("article");

    card.className = "card";
    card.dataset.category = opportunity.category;
    card.dataset.search = (
      opportunity.title + " " +
      opportunity.category + " " +
      opportunity.description + " " +
      opportunity.source
    ).toLowerCase();

    card.innerHTML = `
      <span class="tag">${opportunity.tag}</span>

      <h3>${opportunity.title}</h3>

      <p>${opportunity.description}</p>

      <div class="deadline">
        Deadline: ${opportunity.deadline}
      </div>

      <div class="source">
        Official source: ${opportunity.source}
      </div>

      <a
        class="button"
        href="${opportunity.url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Official Opportunity
      </a>
    `;

    container.appendChild(card);
  });
});
