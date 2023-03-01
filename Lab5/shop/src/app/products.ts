export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  rating: string;
  url: string;
  category: number;
}

export const products = [
  // Phones
  {
    id: 1,
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    description: 'Description 1',
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hc2/h05/46392662458398/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    rating: '8/10',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
    category: 1,
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
    description: 'Description 2',
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8b/h66/31489166606366/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    rating: '7/10',
    url: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000',
    category: 1,
  },
  {
    id: 3,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    description: 'Description 3',
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hab/hed/62948780671006/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    rating: '9/10',
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000',
    category: 1,
  },
  {
    id: 4,
    name: 'Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ серый',
    description: 'Description 4',
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd3/hfa/51166990303262/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg',
    rating: '9/10',
    url: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000',
    category: 1,
  },
  {
    id: 5,
    name: 'Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
    description: 'Description 5',
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h30/hd2/64487157760030/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    rating: '9/10',
    url: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000',
    category: 1,
  },

  // Computers
  {
    id: 6,
    name: 'Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    description: 'Description 6',
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h92/he5/66993674059806/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
    rating: '10/10',
    url: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000',
    category: 2,
  },
  {
    id: 7,
    name: 'ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0',
    description: 'Description 7',
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h12/ha8/65953424211998/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg',
    rating: '10/10',
    url: 'https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000',
    category: 2,
  },
  {
    id: 8,
    name: 'Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    description: 'Description 8',
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h9b/h1b/67236399120414/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    rating: '10/10',
    url: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000',
    category: 2,
  },
  {
    id: 9,
    name: 'Apple MacBook Air 13 MGN63 серый',
    description: 'Description 9',
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h67/h95/33125682380830/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    rating: '7/10',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000',
    category: 2,
  },
  {
    id: 10,
    name: 'Lenovo IdeaPad 1 14IGL05 81VU00H3RU серый',
    description: 'Description 10',
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h32/hd3/67940461608990/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-1.jpg',
    rating: '10/10',
    url: 'https://kaspi.kz/shop/p/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874/?c=750000000',
    category: 2,
  },

  // Clothes
  {
    id: 11,
    name: 'Худи Black and White Robert B Weide BW53HM',
    description: 'Description 11',
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h07/h35/50135457497118/black-and-white-robert-b-weide-bw53hm-104514919-1JPEG.jpg',
    rating: '10/10',
    url: 'https://kaspi.kz/shop/p/hudi-black-and-white-robert-b-weide-bw53hm-104514919/?c=750000000',
    category: 3,
  },
  {
    id: 12,
    name: 'Asyl Pidjak 170017/3',
    description: 'Description 12',
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h3e/h9b/61781628649502/asyl-pidjak-170017-3-106105240-1jpg.jpg',
    rating: '1/10',
    url: 'https://kaspi.kz/shop/p/asyl-pidjak-170017-3-106105240/?c=750000000',
    category: 3,
  },
  {
    id: 13,
    name: 'Thomas Graf XCMSM0144/223',
    description: 'Description 13',
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h3d/hbd/67489073004574/thomas-graf-xcmsm0144-223-108292911-1jpg.jpg',
    rating: '7/10',
    url: 'https://kaspi.kz/shop/p/thomas-graf-xcmsm0144-223-108292911/?c=750000000',
    category: 3,
  },
  {
    id: 14,
    name: "Sol's 11500264",
    description: 'Description 14',
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h57/hde/50730934173726/sol-s-11500264-104851509-1JPEG.jpg',
    rating: '10/10',
    url: 'https://kaspi.kz/shop/p/sol-s-11500264-104851509/?c=750000000',
    category: 3,
  },
  {
    id: 15,
    name: 'Assyl Qazyna "Отбасы" МЖ-0003',
    description: 'Description 15',
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h82/h92/52062162157598/assyl-qazyna-otbasy-mz-0003-105596368-1jpg.jpg',
    rating: '10/10',
    url: 'https://kaspi.kz/shop/p/assyl-qazyna-otbasy-mzh-0003-105596368/?c=750000000',
    category: 3,
  },

  // Grocery
  {
    id: 16,
    name: 'Сахар',
    description: 'Description 16',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h3d/h52/64377133924382.jpg?format=preview-medium',
    rating: '10/10',
    url: 'https://kaspi.kz/shop/p/sahar-102740562/?c=750000000&m=Magnum',
    category: 4,
  },
  {
    id: 17,
    name: 'MAGNUM лук репчатый отборный Казахстан',
    description: 'Description 17',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h9c/h05/64347184594974.jpg?format=preview-medium',
    rating: '10/10',
    url: 'https://kaspi.kz/shop/p/magnum-luk-repchatyi-otbornyi-kazahstan-101349070/?c=750000000&m=Magnum',
    category: 4,
  },
  {
    id: 18,
    name: 'MAGNUM морковь отборная Казахстан',
    description: 'Description 18',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hb3/h05/64231629357086.jpg?format=preview-medium',
    rating: '10/10',
    url: 'https://kaspi.kz/shop/p/magnum-morkov-otbornaja-kazahstan-106203164/?c=750000000&m=Magnum',
    category: 4,
  },
  {
    id: 19,
    name: 'MAGNUM Банан Эквадор',
    description: 'Description 19',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h1b/hec/64346750550046.jpg?format=preview-medium',
    rating: '6/10',
    url: 'https://kaspi.kz/shop/p/magnum-banan-ekvador-101349284/?c=750000000&m=Magnum',
    category: 4,
  },
  {
    id: 20,
    name: 'MAGNUM картофель белый отборный Казахстан',
    description: 'Description 20',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h05/h20/64374139813918.jpg?format=preview-medium',
    rating: '9/10',
    url: 'https://kaspi.kz/shop/p/magnum-kartofel-belyi-otbornyi-kazahstan-102865232/?c=750000000&m=Magnum',
    category: 4,
  },
];