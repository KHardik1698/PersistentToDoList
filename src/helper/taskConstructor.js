export const taskConstructor = function (description, liClass) {
  this.description = description;
  this.taskId = faker.random.uuid();
  this.class = liClass;
};
