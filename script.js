const projects = {
  search: {
    category: 'Information retrieval',
    title: 'Multilingual EU Parliament Search Engine',
    summary: 'Built and deployed a multilingual search engine over 9.5 million parliamentary speeches across 24 EU languages.',
    problem: 'Searching a large parliamentary corpus across 24 EU languages required one cross-lingual retrieval system.',
    implementation: [
      'Implemented a custom TF-IDF inverted index for document retrieval.',
      'Built per-language tokenisation, stemming, stopword filtering, and query processing for cross-lingual retrieval.',
      'Combined a FastAPI backend and SQLite storage with a Next.js frontend and Docker deployment.'
    ],
    tags: ['Python', 'FastAPI', 'SQLite', 'Next.js', 'Docker']
  },
  learning: {
    category: 'Dissertation · Machine learning',
    title: 'Architecture-Conditioned Continual Learning',
    summary: 'Investigated catastrophic forgetting across neural network architectures: how learning new tasks affects knowledge acquired earlier.',
    problem: 'Sequential task learning can overwrite knowledge acquired earlier, making catastrophic forgetting a question of architecture and evaluation.',
    implementation: [
      'Built training and evaluation pipelines in PyTorch to compare architectures across sequential tasks.',
      'Measured accuracy, forgetting, backward transfer, and plasticity to examine continual-learning behaviour.'
    ],
    tags: ['Python', 'PyTorch', 'Continual learning']
  },
  distributed: {
    category: 'Distributed systems',
    title: 'Distributed File System & Prime Computing Cluster',
    summary: 'Built a distributed file system with caching, replication, leader election, failover, and consistency mechanisms.',
    problem: 'A distributed file system must keep operations consistent while nodes fail and recover.',
    implementation: [
      'Implemented epoch-based fencing to maintain consistency during failover.',
      'Used idempotent operations and retry logic to handle failures.',
      'Developed the system with Go, gRPC, and Docker.'
    ],
    tags: ['Go', 'gRPC', 'Docker', 'Fault tolerance']
  },
  drone: {
    category: 'Pathfinding · Backend engineering',
    title: 'PizzaDronz - Autonomous Drone Delivery',
    summary: 'Built a Spring Boot route-planning service for autonomous drone delivery.',
    problem: 'Autonomous delivery routes need to account for no-fly-zone constraints.',
    implementation: [
      'Used A* search to plan delivery routes.',
      'Incorporated no-fly-zone constraints into route planning.'
    ],
    tags: ['Java', 'Spring Boot', 'Docker', 'A* search']
  }
};

const dialog = document.querySelector('#project-dialog');
const closeButton = document.querySelector('.dialog-close');
const category = document.querySelector('#dialog-category');
const title = document.querySelector('#dialog-title');
const content = document.querySelector('#dialog-content');
let invokingButton = null;

function createSection(heading, value, list = false) {
  const section = document.createElement('section');
  section.className = 'dialog-section';

  const headingElement = document.createElement('h3');
  headingElement.textContent = heading;
  section.append(headingElement);

  if (list) {
    const listElement = document.createElement('ul');
    value.forEach(detail => {
      const item = document.createElement('li');
      item.textContent = detail;
      listElement.append(item);
    });
    section.append(listElement);
  } else {
    const paragraph = document.createElement('p');
    paragraph.textContent = value;
    section.append(paragraph);
  }

  return section;
}

document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    if (!project || dialog.open) return;

    invokingButton = button;
    category.textContent = project.category;
    title.textContent = project.title;
    content.replaceChildren();

    const summary = document.createElement('p');
    summary.id = 'dialog-summary';
    summary.className = 'dialog-summary';
    summary.textContent = project.summary;

    content.append(
      summary,
      createSection('The problem', project.problem),
      createSection('Implementation', project.implementation, true)
    );

    dialog.showModal();
    document.body.classList.add('modal-open');
    closeButton.focus();
  });
});

closeButton.addEventListener('click', () => dialog.close());

dialog.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;

  const focusable = [
    closeButton,
    document.querySelector('#dialog-profile-link')
  ].filter(element => element && !element.disabled);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  const clickedOutside = event.target === dialog
    && (event.clientX < bounds.left
      || event.clientX > bounds.right
      || event.clientY < bounds.top
      || event.clientY > bounds.bottom);

  if (clickedOutside) dialog.close();
});

dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  if (invokingButton && document.contains(invokingButton)) invokingButton.focus();
  invokingButton = null;
});

document.querySelector('#year').textContent = new Date().getFullYear();
