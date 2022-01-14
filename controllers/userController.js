// const { getAllUsers } = require("../models/getUser");
const db = require("../models");

//Display All Users
const getUsers = async (req, res) => {
  const result = await db.sequelize.models.User.getUsers();
  if (result) {
    // const result_js = result.map((e) => e.toJSON());
    console.log(result);
    return res.status(201).json({ result });
  } else {
    return res.status(404).json({ message: "Something Went Wrong!!!" });
  }
};

//Display a Particular User
const getUser = async (req, res) => {
  const id = req.params.id;
  // console.log(id);

  const result = await db.sequelize.models.User.getUser(id);
  if (result) {
    // console.log(result);
    res.status(202).json({ result });
  } else {
    return res.status(404).json({ message: "Id not found" });
  }
};

//Insert Users
const createUsers = async (req, res) => {
  if (req.body != {}) {
    console.log(req.body);
  }

  const data_user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  };

  const result = await db.sequelize.models.User.createUser(data_user);
  if (result) {
    // const result_js = result.map((e) => e.toJSON());
    // console.log(result_js);
    // console.log(result);
    return res.status(201).json({ Created: result });
  } else {
    return res.status(404).json({ message: "Something Went Wrong!!!" });
  }
};

//Update User
const update = async (req, res) => {
  const id = req.params.id;
  const updatedValue = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  };
  const result = await db.sequelize.models.User.updateUser(updatedValue, id);
  if (result) {
    // const result_js = result.map((e) => e.toJSON());
    // console.log(result_js);
    // console.log(result);
    return res.status(201).json({ "Updated ID": id, updatedValue });
  } else {
    return res.status(404).json({ message: "User not found!!!" });
  }

  // console.log("User Updated Successfully");
  // res.send("Done! User Updated Successfully");
};

//Delete ALL Users
const delUsers = async (req, res) => {
  // const id = req.params.id;
  const result = await db.sequelize.models.User.deleteUsers();
  return res.status(201).json({ Deleted: "All Record Deleted" });
  // if (result) {
  //   // const result_js = result.map((e) => e.toJSON());
  //   // console.log(result_js);
  //   // console.log(result);
  //   return res.status(201).json({ Deleted: "All Record Deleted" });
  // } else {
  //   return res.status(404).json({ message: "User not found!!!" });
  // }
};

//Delete Particular User
const delUser = async (req, res) => {
  const id = req.params.id;
  const result = await db.sequelize.models.User.deleteUser(id);
  console.log(result);
  if (result) {
    // const result_js = result.map((e) => e.toJSON());
    // console.log(result_js);
    // console.log(result);
    return res.status(201).json({ Deleted: id });
  } else {
    return res.status(404).json({ message: "User not found!!!" });
  }
};

// const putUsers = async (req, res) => {};

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  createUsers: createUsers,
  updateuser: update,
  delUser: delUser,
  delUsers: delUsers,
};
