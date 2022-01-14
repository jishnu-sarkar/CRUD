// const { getAllUsers } = require("../models/getUser");
const db = require("../models");

//Display All Users
const getUsers = async (req, res) => {
  const result = await db.sequelize.models.User.get_Users();
  const result_js = result.map((e) => e.toJSON());

  console.log(result_js);
  res.send(result_js);
};

//Display a Particular User
const getUser = async (req, res) => {
  const id = req.params.id;
  // console.log(id);

  const result = await db.sequelize.models.User.get_User(id);
  if (result) {
    console.log(result);
    res.status(202);
    res.send(result);
  } else {
    return res.status(404).json({ message: "Id not found" });
  }
};

//Insert Users
const createUsers = async (req, res) => {
  const data_user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  };

  await db.sequelize.models.User.put_User(data_user);
  //   const result_js = result.map((e) => e.toJSON());

  console.log("User Inserted Successfully");
  res.send("Done! User Inserted Successfully");
};

//Update User

const update = async (req, res) => {
  const id = req.params.id;
  const updatedValue = {
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    email: req.body.email,
  };
  await db.sequelize.models.User.update_User(updatedValue, id);

  console.log("User Updated Successfully");
  res.send("Done! User Updated Successfully");
};

//Delete Users
const delUsers = async (req, res) => {
  const id = req.params.id;
  await db.sequelize.models.User.delete_User(id);

  console.log("User Deleted Successfully");
  res.send("Done! User Deleted Successfully");
};

// const putUsers = async (req, res) => {};

module.exports = {
  get_User: getUser,
  get_Users: getUsers,
  createUsers: createUsers,
  update_user: update,
  del_Users: delUsers,
};
