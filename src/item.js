export default class Item {
  constructor(id, name, additionDate, rating, description, isAvailable) {
    this.id = id;
    this.name = name;
    this.addition_date = additionDate;
    this.rating = rating;
    this.description = description;
    this.is_available = isAvailable;
    this.picture = `${id < 5 ? id : "other"}.jpg`;
  }
}

export const mockItems = [
  new Item(
    1,
    "Bed 'Avocadium'",
    "2022-10-11",
    5,
    "Noice comfy bed with avocado shmell",
    true,
  ),
  new Item(
    2,
    "Bookshelf 'Oesterone'",
    "2022-02-03",
    4,
    "Fits at least 32 books",
    false,
  ),
  new Item(
    3,
    "Nightstand 'Supreme Sleep'",
    "2022-12-01",
    3,
    "A great place for your alarm clock",
    false,
  ),
  new Item(4, "Sofa 'King'", "2022-04-23", 2, "Sit&sleep like a king", true),
];
