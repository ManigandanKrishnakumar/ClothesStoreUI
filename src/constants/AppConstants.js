export const CATAGORIES = {
  MAN: 'man',
  WOMAN: 'woman',
  KIDS: 'kids',
};

export const INITIAL_CATAGORY = CATAGORIES.MAN;

const MOST_POPULAR_PRODUCTS = {
  MEN: [
    {
      id: 1,
      product_image: 'https://i.ibb.co/9HgCvMk/model-2.png',
      product_name: 'Black Mamba Sleeve Shirt 1',
      price_details: {
        currency_code: 'RM',
        current_price: 120,
        actual_price: 130,
        discount: '15%',
      },
      rating_details: {
        scale: 5,
        rating: 4.9,
      },
      available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
      id: 2,
      product_image: 'https://i.ibb.co/XphhTtj/model.png',
      product_name: 'Black Mamba Sleeve Shirt 2',
      price_details: {
        currency_code: 'RM',
        current_price: 120,
        actual_price: 130,
        discount: '15%',
      },
      rating_details: {
        scale: 5,
        rating: 4.9,
      },
      available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
      id: 3,
      product_image: 'https://i.ibb.co/9HgCvMk/model-2.png',
      product_name: 'Black Mamba Sleeve Shirt 3',
      price_details: {
        currency_code: 'RM',
        current_price: 120,
        actual_price: 130,
        discount: '15%',
      },
      rating_details: {
        scale: 5,
        rating: 4.9,
      },
      available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
      id: 4,
      product_image: 'https://i.ibb.co/XphhTtj/model.png',
      product_name: 'Black Mamba Sleeve Shirt 4',
      price_details: {
        currency_code: 'RM',
        current_price: 120,
        actual_price: 130,
        discount: '15%',
      },
      rating_details: {
        scale: 5,
        rating: 4.9,
      },
      available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
  ],

  WOMAN: [
    {
      id: 5,
      product_image: 'https://i.ibb.co/m47n3fk/model-3.png',
      product_name: 'Black Mamba Sleeve Shirt 1',
      price_details: {
        currency_code: 'RM',
        current_price: 120,
        actual_price: 130,
        discount: '15%',
      },
      rating_details: {
        scale: 5,
        rating: 4.9,
      },
      available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
      id: 6,
      product_image: 'https://i.ibb.co/f1V2XT6/female-model-2.jpg.png',
      product_name: 'Black Mamba Sleeve Shirt 2',
      price_details: {
        currency_code: 'RM',
        current_price: 120,
        actual_price: 130,
        discount: '15%',
      },
      rating_details: {
        scale: 5,
        rating: 4.9,
      },
      available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
      id: 7,
      product_image: 'https://i.ibb.co/f1V2XT6/female-model-2.jpg.png',
      product_name: 'Black Mamba Sleeve Shirt 3',
      price_details: {
        currency_code: 'RM',
        current_price: 120,
        actual_price: 130,
        discount: '15%',
      },
      rating_details: {
        scale: 5,
        rating: 4.9,
      },
      available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
      id: 8,
      product_image: 'https://i.ibb.co/m47n3fk/model-3.png',
      product_name: 'Black Mamba Sleeve Shirt 4',
      price_details: {
        currency_code: 'RM',
        current_price: 120,
        actual_price: 130,
        discount: '15%',
      },
      rating_details: {
        scale: 5,
        rating: 4.9,
      },
      available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
  ],

  KIDS: [
    {
      id: 9,
      product_image:
        'https://i.pinimg.com/originals/d7/d8/0a/d7d80ab4f1dff4cf20432c8992fc097d.jpg',
      product_name: 'Black Mamba Sleeve Shirt 1',
      price_details: {
        currency_code: 'RM',
        current_price: 120,
        actual_price: 130,
        discount: '15%',
      },
      rating_details: {
        scale: 5,
        rating: 4.9,
      },
      available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
      id: 10,
      product_image:
        'https://ae01.alicdn.com/kf/HTB1ppUzLYPpK1RjSZFFq6y5PpXaq/LUOBOBEIBEI-Boys-Suits-Formal-Children-Costume-For-Boy-Wedding-Suit-Kids-Blazer-5-Pieces-Summer-Child.jpg',
      product_name: 'Black Mamba Sleeve Shirt 2',
      price_details: {
        currency_code: 'RM',
        current_price: 120,
        actual_price: 130,
        discount: '15%',
      },
      rating_details: {
        scale: 5,
        rating: 4.9,
      },
      available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
      id: 11,
      product_image:
        'https://i.pinimg.com/originals/d7/d8/0a/d7d80ab4f1dff4cf20432c8992fc097d.jpg',
      product_name: 'Black Mamba Sleeve Shirt 3',
      price_details: {
        currency_code: 'RM',
        current_price: 120,
        actual_price: 130,
        discount: '15%',
      },
      rating_details: {
        scale: 5,
        rating: 4.9,
      },
      available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
      id: 12,
      product_image:
        'https://ae01.alicdn.com/kf/HTB1ppUzLYPpK1RjSZFFq6y5PpXaq/LUOBOBEIBEI-Boys-Suits-Formal-Children-Costume-For-Boy-Wedding-Suit-Kids-Blazer-5-Pieces-Summer-Child.jpg',
      product_name: 'Black Mamba Sleeve Shirt 4',
      price_details: {
        currency_code: 'RM',
        current_price: 120,
        actual_price: 130,
        discount: '15%',
      },
      rating_details: {
        scale: 5,
        rating: 4.9,
      },
      available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
  ],

  OFFERS: [
    {
      id: 1,
      discountText: 'Get 25% for Our Latest Arrial',
      discountCode: 'NEW25',
      discountSlogan: 'Beeing update with the latest product from us',
      modelImg: 'https://i.ibb.co/XphhTtj/model.png',
    },
    {
      id: 2,
      discountText: 'Get 25% for Our Latest Arrial',
      discountCode: 'NEW25',
      discountSlogan: 'Beeing update with the latest product from us',
      modelImg: 'https://i.ibb.co/m47n3fk/model-3.png',
    },
    {
      id: 3,
      discountText: 'Get 25% for Our Latest Arrial',
      discountCode: 'NEW25',
      discountSlogan: 'Beeing update with the latest product from us',
      modelImg:
        'https://i.pinimg.com/originals/d7/d8/0a/d7d80ab4f1dff4cf20432c8992fc097d.jpg',
    },
    {
      id: 4,
      discountText: 'Get 25% for Our Latest Arrial',
      discountCode: 'NEW25',
      discountSlogan: 'Beeing update with the latest product from us',
      modelImg: 'https://i.ibb.co/9HgCvMk/model-2.png',
    },
    {
      id: 5,
      discountText: 'Get 25% for Our Latest Arrial',
      discountCode: 'NEW25',
      discountSlogan: 'Beeing update with the latest product from us',
      modelImg: 'https://i.ibb.co/f1V2XT6/female-model-2.jpg.png',
    },
    {
      id: 6,
      discountText: 'Get 25% for Our Latest Arrial',
      discountCode: 'NEW25',
      discountSlogan: 'Beeing update with the latest product from us',
      modelImg:
        'https://ae01.alicdn.com/kf/HTB1ppUzLYPpK1RjSZFFq6y5PpXaq/LUOBOBEIBEI-Boys-Suits-Formal-Children-Costume-For-Boy-Wedding-Suit-Kids-Blazer-5-Pieces-Summer-Child.jpg',
    },
    {
      id: 7,
      discountText: 'Get 25% for Our Latest Arrial',
      discountCode: 'NEW25',
      discountSlogan: 'Beeing update with the latest product from us',
      modelImg: 'https://i.ibb.co/9HgCvMk/model-2.png',
    },
    {
      id: 8,
      discountText: 'Get 25% for Our Latest Arrial',
      discountCode: 'NEW25',
      discountSlogan: 'Beeing update with the latest product from us',
      modelImg: 'https://i.ibb.co/9HgCvMk/model-2.png',
    },
  ],
};
