import type { MenuCategory } from '@/types';

export const menuCategories: MenuCategory[] = [
  {
    id: 'mar',
    title: 'Del mar',
    icon: 'fa-fish',
    items: [
      {
        id: 'ceviche',
        name: 'Ceviche El Palmar',
        price: 320,
        description: 'Pescado del día, limón, cilantro, cebolla morada, aguacate y totopos.',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&auto=format&fit=crop',
      },
      {
        id: 'tacos-camaron',
        name: 'Tacos de camarón',
        price: 280,
        description: 'Camarones salteados con ajo y chile de árbol, tortillas de maíz, salsa verde.',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop',
      },
      {
        id: 'pulpo',
        name: 'Pulpo a las brasas',
        price: 480,
        description: 'Pulpo cocido y terminado al carbón, puré de papa al azafrán, aceite de oliva.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'tierra',
    title: 'De la tierra',
    icon: 'fa-drumstick-bite',
    items: [
      {
        id: 'arrachera',
        name: 'Arrachera El Palmar',
        price: 420,
        description: '220g de arrachera a la parrilla, frijoles charros, guacamole y tortillas.',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400&auto=format&fit=crop',
      },
      {
        id: 'ensalada',
        name: 'Ensalada Tropical',
        price: 190,
        description: 'Lechuga, mango, jícama, nuez, aderezo de maracuyá y camarones opcionales.',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'barra',
    title: 'Barra & Coctelería',
    icon: 'fa-cocktail',
    items: [
      {
        id: 'paloma',
        name: 'Paloma Vallarta',
        price: 160,
        description: 'Tequila blanco, toronja, limón, sal de gusano y refresco de toronja.',
        image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=400&auto=format&fit=crop',
      },
      {
        id: 'margarita',
        name: 'Margarita de la Casa',
        price: 150,
        description: 'Tequila reposado, triple seco, limón fresco y escarchado de sal.',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400&auto=format&fit=crop',
      },
    ],
  },
];