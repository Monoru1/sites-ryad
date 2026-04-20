export const selectedWork = [
  {
    title: 'Maison Rivière SS24 · Éditorial',
    image:
      'https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=1600&q=80'
  },
  {
    title: 'Portrait · Architecte',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80'
  },
  {
    title: 'Campagne Joaillerie',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80'
  }
] as const;

export const services = ['Portrait éditorial', 'Campagne marque', 'Direction visuelle'] as const;

export const processSteps = [
  {
    title: 'Intention',
    text: "On définit ensemble ce que l'image doit faire ressentir."
  },
  {
    title: 'Création',
    text: 'Je construis une direction visuelle avant le premier déclenchement.'
  },
  {
    title: 'Livraison',
    text: 'Des images prêtes à être vues. Pas à être retouchées encore.'
  }
] as const;
