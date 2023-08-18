type Menu = {
  id: number;
  slug: string;
  title: string;
  img?: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "drinks",
    title: "Featured Drinks",
    img: "/slug1.jpg",
  },
  {
    id: 2,
    slug: "savouries",
    title: "Homemade Savouries",
    img: "/slug2.jpg",
  },
  {
    id: 3,
    slug: "sweets",
    title: "Heavenly Sweets",
    img: "/slug3.jpg",
  },
];

type ProductOption = {
  title: string;
  additionalPrice: number;
};

type Products = {
  id: number;
  title: string;
  desc: string;
  img: string;
  price: number;
  option1?: ProductOption[];
  option2?: ProductOption[];
}[];

type Product = {
  id: number;
  title: string;
  desc: string;
  img: string;
  price: number;
  option1?: ProductOption[];
  option2?: ProductOption[];
};

export const coffee: Products = [
  {
    id: 1,
    title: "Flat White",
    desc: "Flat White. Regular, unsweetened. A common 'short white coffee' found in New Zealand and Australia, offering a richer coffee aroma.",
    img: "/fw.jpg",
    price: 135,
    option1: [
      {
        title: "Hot",
        additionalPrice: 0,
      },
      {
        title: "Cold",
        additionalPrice: 0,
      },
    ],
    option2: [
      {
        title: "Medium",
        additionalPrice: 0,
      },
      {
        title: "Large",
        additionalPrice: 20,
      },
    ],
  },
  {
    id: 2,
    title: "Rich Fresh Milk Tea",
    desc: "Fresh Milk from local dairy farmer. *Flavor changed to Red Tea on 8/10. Ceylon + Taiwanese Black Tea.",
    img: "/mt.jpg",
    price: 99,
    option1: [
      {
        title: "Hot",
        additionalPrice: 0,
      },
      {
        title: "Cold",
        additionalPrice: 0,
      },
    ],
  },
  {
    id: 3,
    title: "Single Origin Cold Brew",
    desc: "Black Tea Black Coffee and Lemon Black Coffee. Both are slightly sweetened beverages.",
    img: "/sc.jpg",
    price: 120,
    option1: [
      {
        title: "Medium (360ml)",
        additionalPrice: 0,
      },
      {
        title: "Large (480ml)",
        additionalPrice: 20,
      },
    ],
  },
];

export const sweets: Products = [
  {
    id: 1,
    title: "Choc Banana Loaf",
    desc: "Presenting Kiwi's favorite golden combination – banana, chocolate, nuts, and a touch of botanical spices. If you're a fan of the aromatic delight brought by cinnamon rolls, you're bound to fall in love with this Choc Banana Loaf.",
    img: "/bk.jpg",
    price: 89,
  },
  {
    id: 2,
    title: "Classic Brownie",
    desc: "The Classic New Zealand-Australia Version - The crispy outer shell, a brownie that crumbles as you bite into it. Ausbakelia brings back to you the locally beloved crispy brownie.",
    img: "/brownie.jpg",
    price: 70,
  },
];

export const savouries: Products = [
  {
    id: 1,
    title: "★Top1★ Imperial Salmon Cream Cheese Bagel",
    desc: "Imperial Smoked Salmon, Signature Cream Cheese Spread, Roasted Carrots (or Fresh Lettuce), Onion Sauce, Homemade Bagel",
    img: "/salmonB.jpg",
    price: 149,
    option1: [
      {
        title: "Bake for a slightly shorter time, softer texture.",
        additionalPrice: 0,
      },
      {
        title: "Bake for a slightly longer time, firmer texture.",
        additionalPrice: 0,
      },
    ],
  },
  {
    id: 2,
    title: "Grilled Chicken Bagel",
    desc: "Indulge in succulent grilled chicken atop a bed of crisp, fresh greens – an irresistible choice that's sure to satisfy.",
    img: "/chickenB.jpg",
    price: 129,
  },
  {
    id: 3,
    title: "Sun-Dried Tomato and Cream Cheese Bagel",
    desc: "Delight in the exquisite flavors of the Sun-Dried Tomato and Cream Cheese Bagel, where the rich creaminess of the cheese harmonizes with the intense, sun-kissed essence of the tomatoes,",
    img: "/tomatoB.jpg",
    price: 99,
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Flat White",
  desc: "Flat White. Regular, unsweetened. A common 'short white coffee' found in New Zealand and Australia, offering a richer coffee aroma.",
  img: "/fw.jpg",
  price: 135,
  option1: [
    {
      title: "Hot",
      additionalPrice: 0,
    },
    {
      title: "Cold",
      additionalPrice: 0,
    },
  ],
  option2: [
    {
      title: "Medium",
      additionalPrice: 0,
    },
    {
      title: "Large",
      additionalPrice: 20,
    },
  ],
};
