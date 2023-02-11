export const carMock = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  price: 3500000,
  seats: 2,
  doors: 2
}

export const carMockWithId = {
  _id: "4edd40c86762e0fb12000003",
  ...carMock,
}

export const updatedCarMock = { ...carMock, model: 'Jeep Renegade' };

export const updatedCarMockWithId = { _id: carMockWithId._id, ...updatedCarMock };
