export const articles = [
  {
    slug: 'building-community-trust-in-learning',
    title: 'Building community trust in learning systems',
    category: 'Community Stories',
    date: '2026-09-13',
    author: 'Maya Thompson',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Strong learning ecosystems depend on trust, belonging, and practical support that meets families and communities where they are.',
    content: [
      'Trust is often the quiet foundation of learning. When communities feel listened to, students are more likely to engage, families participate more consistently, and local institutions become stronger partners in growth.',
      'At Human Shine Dream, the work begins with relationships. Community workshops, mentorship pathways, and local listening sessions help create spaces where people can voice what matters most to them and shape the direction of support programs.',
      'This kind of trust-building is not cosmetic. It changes how resources move, how partnerships form, and how outcomes are sustained over time. When the community is a co-designer of solutions, the progress becomes more durable and more meaningful.'
    ]
  },
  {
    slug: 'what-meaningful-education-partnerships-look-like',
    title: 'What meaningful education partnerships look like',
    category: 'Development',
    date: '2026-08-27',
    author: 'Daniel Okafor',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Partnerships are most valuable when they are rooted in trust, shared learning, and practical support for local structures.',
    content: [
      'Education partnerships thrive when they reflect local realities rather than imported assumptions. The most effective collaborations begin with listening, then build around the strengths and needs already present in a community.',
      'This means aligning resources with local priorities, building feedback loops into implementation, and creating pathways for ongoing learning and adjustment. It also means recognizing that schools, families, youth leaders, and local organizations all contribute to the ecosystem.',
      'Human Shine Dream approaches partnership in this spirit—creating bridges between institutions and communities without replacing local ownership.'
    ]
  },
  {
    slug: 'why-youth-leadership-matters-in-local-development',
    title: 'Why youth leadership matters in local development',
    category: 'Education',
    date: '2026-07-12',
    author: 'Leila Mensah',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Young people bring insight, energy, and urgency to the issues shaping their communities. Their leadership should be recognized and supported.',
    content: [
      'Local development is most resilient when youth voices are part of the decision-making process. Young people often see challenges and opportunities in ways that adults overlook, especially when they are rooted in daily lived experience.',
      'Programs that intentionally support youth leadership create stronger community ownership and more relevant action. Youth leadership does not replace adult support; it expands the problem-solving capacity of the whole ecosystem.',
      'HSD continues to explore models that provide youth with mentorship, practical opportunities, and pathways to contribute meaningfully to local change.'
    ]
  },
  {
    slug: 'designing-more-inclusive-learning-spaces',
    title: 'Designing more inclusive learning spaces',
    category: 'News',
    date: '2026-06-08',
    author: 'Nadia Smith',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Inclusive learning spaces are built through access, participation, and intentional design that centers belonging.',
    content: [
      'Inclusive learning environments are not only about physical access. They are shaped by how learners feel, how they participate, and whether they can bring their full selves into the room.',
      'This includes representation in programming, accessibility of information, and support structures that remove barriers rather than simply acknowledging them. For communities facing structural exclusion, this matters deeply.',
      'HSD is committed to designing learning experiences that create space for different needs, backgrounds, and ways of learning to thrive together.'
    ]
  },
  {
    slug: 'what-we-can-learn-from-community-innovation',
    title: 'What we can learn from community innovation',
    category: 'Announcements',
    date: '2026-05-22',
    author: 'Amina Okafor',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'The most promising ideas often emerge from the communities closest to the problems they seek to solve.',
    content: [
      'Community-based innovation often begins with a practical challenge: a young person needs support, a neighborhood lacks resources, or a learning pathway is inaccessible. Small ideas can become powerful systems when they are rooted in practice and developed with local input.',
      'This requires humility and listening. It also requires patience. Human Shine Dream recognizes that sustainable solutions are not always the fastest, but they are often the most grounded and the most lasting.',
      'When communities are invited into the process of learning and adaptation, innovation becomes more relevant, more accountable, and more inclusive.'
    ]
  }
];

export const blogCategories = ['All', ...new Set(articles.map((article) => article.category))];
