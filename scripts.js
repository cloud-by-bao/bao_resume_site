document.addEventListener('DOMContentLoaded', function () {
  const timelineData = [
    {
      date: 'Jan 2023 – Present',
      title: 'DevOps Engineer (Freelance)',
      description: 'Built CI/CD pipelines, automated infrastructure using Terraform, deployed apps with Docker and Kubernetes, and collaborated with dev teams to streamline delivery.'
    },
    {
      date: 'Oct 2021 – Dec 2022',
      title: 'IT System Administrator – NielsenIQ',
      description: 'Maintained systems, automated server setups, supported backup/disaster recovery processes, and provided technical support for enterprise infrastructure.'
    }
  ];

  const timeline = document.getElementById('timeline');

  if (!timeline) return;

  timelineData.forEach((item, index) => {
    let entry = document.createElement('div');
    entry.classList.add('timeline-entry');
    entry.setAttribute('id', 'entry-' + index);

    let dot = document.createElement('div');
    dot.classList.add('timeline-dot');

    let date = document.createElement('div');
    date.textContent = item.date;
    date.classList.add('timeline-date');

    let content = document.createElement('div');
    content.classList.add('timeline-content');
    content.setAttribute('id', 'content-' + index);

    let title = document.createElement('h3');
    title.textContent = item.title;

    let description = document.createElement('p');
    description.textContent = item.description;
    description.style.display = 'none';

    entry.addEventListener('click', function () {
      description.style.display = description.style.display === 'none' ? 'block' : 'none';
    });

    content.appendChild(title);
    content.appendChild(description);
    entry.appendChild(dot);
    entry.appendChild(date);
    entry.appendChild(content);
    timeline.appendChild(entry);
  });
});