class Experience {
  constructor(
    public readonly start: string,
    public readonly end: string,
    public readonly position: string,
    public readonly company: string,
    public readonly body: string
  ) {}
}

const psExperiences = [
  ['Sep 2021', 'April 2022', 'Software Engineer'],
  ['Sep 2019', 'April 2022', 'Managing Director'],
  ['Feb 2018', 'Sep 2019', 'Director of Tutoring and Sales'],
  ['Dec 2016', 'Feb 2018', 'Director of Tutoring'],
  ['Sep 2015', 'Dec 2016', 'Content Manager']
]

let psExperiencesString = '';
for (const exp of psExperiences) {
  psExperiencesString += `
    <ul class="experience-block sub-block">
      <li class="experience-head sub-exp">
        <span class="theme">${ exp[0] } - ${ exp[1] }:</span>
        <span class="theme bold">${ exp[2] }</span>
      </li>
    </ul>
  `
}
psExperiencesString += `
  <li>Designed, tested, and implemented software and systems to optimize education and sales results</li>
  <li>Created and iteratively improved technology products to provide excellent education at scale</li>
  <li>Managed multiple teams, totaling over 50 employees and contractors</li>
  <li><span class="bold theme">Highlights:</span></li>
  <ul>
    <li>Personally designed and coded over 40 apps, tools, and integrations for internal use</li>
    <li>Managed a total website redesign including creating initial wireframes, planning and ensuring mobile optimization, and writing final JavaScript, CSS, and HTML files</li>
    <li>Oversaw more than 50 new technical products, features, and fixes from initial specs to final deployment in an Agile engineering environment</li>
    <li>Hired and trained 49 new employees, including engineers, product managers, and salespeople</li>
  </ul>
`

export const experiences = [
  new Experience(
    'June 2024',
    'December 2024',
    "Master's of Science in Computer Science",
    'Johns Hopkins University',
    `<li>Graduation with Honors</li>`
  ),
  new Experience(
    'April 2022',
    'August 2024',
    'Full-Stack Software Engineer',
    'Vote.org',
    `
      <li>Built, launched, and continuously upgraded tools used by thousands of voters daily</li>
      <li>Maintained and improved robust back-end infrastructure to support security and reliability at scale</li>
      <li>Ensured all systems conformed to best practices and met priorities from diverse users, partners, and internal stakeholders</li>
      <li><span class="bold theme">Highlights:</span></li>
      <ul>
        <li>Lead developer on the <a href="https://www.anthemawards.com/winners/list/entry/#!human-civil-rights/best-use-of-technology/voteorg-whats-on-my-ballot-tool/0/voteorg/471541" target="_blank">Anthem Award-winning</a> “What’s On My Ballot” tool, responsible for software design, full-stack development, integration, and deployment as well as internal and external stakeholder management</li>
        <li>Planned, designed, developed, and launched an MVP version of the same tool in 1 month in 2022, with the resulting application supporting over 250,000 users in the first 2 weeks of launch</li>
        <li>Performed several major-version upgrades of core architectures, including Rails and React</li>
        <li>Scaled and performed major-version upgrades on databases, server operating systems, and Redis instances</li>
      </ul>
    `
  ),
  new Experience(
    'November 2021',
    'May 2022',
    'Grader: Computer Organization',
    'Johns Hopkins University',
    `
      <li>Evaluated and provided feedback on post-graduate level assignments</li>
      <li>Topics included processor design, compilers, and quantum computing</li>
    `
  ),
  new Experience(
    'September 2015',
    'April 2022',
    'Director and Software Engineer',
    'PrepScholar Inc',
    psExperiencesString
  ),
  new Experience(
    'October 2013',
    'August 2015',
    'Global Educational Manager and Instructor',
    'Axiom Learning',
    `
      <li>Designed and taught curricula in mathematics, ELA, test prep, and cognitive functioning</li>
      <li>Researched, wrote, and edited complete ACT and SAT guides totaling 900 pages</li>
      <li>Managed a global faculty, supervising lesson design, teaching skills, and client relations</li>
    `
  ),
  new Experience(
    'May 2011',
    'September 2013',
    'Advisor and Researcher, Math Images Project',
    'Swarthmore College',
    `
      <li>Developed adaptive demonstrations of Fractal behavior and logistic growth in MatLab</li>
      <li>Taught LaTeX and Drupal and conducted demonstrations on math imaging software use</li>
      <li>Presented results at the NCTM 2012 Conference</li>
      <li>Wrote and published articles on <a href="https://web.archive.org/web/20121017020459/http:/mathforum.org/mathimages/index.php/Markus-Lyapunov_Fractals" target="_blank">Markus-Lyapunov Fractals</a> and <a href="https://web.archive.org/web/20171219231633/http:/mathforum.org:80/mathimages/index.php/Logistic_Bifurcation" target="_blank">Logistic Bifurcation</a></li>
    `
  ),
  new Experience(
    'September 2009',
    'June 2013',
    "B.A. in Mathematics Education and English Literature",
    'Swarthmore College',
    `<li>PA Secondary Teacher Certification in Mathematics</li>`
  ),
  new Experience(
    'July 2006',
    'July 2009',
    'Circuitry and Rocketry Teacher',
    'Delaware Aerospace Academy',
    `<li>Designed and taught a 1-week circuitry curriculum; Co-taught a 1-week rocketry curriculum</li>`
  )
]