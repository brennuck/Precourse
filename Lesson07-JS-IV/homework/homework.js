// Do not change any of the function names

function makeCat(name, age) {
  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
  const yada = {
    name: name,
    age: age,
    meow: function() {
      return 'Meow!'
    },
  };
  return yada;
};

function addProperty(object, property) {
  // add the property to the object with a value of null
  object[property] = null;
  // return the object
  return object;
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
}

function invokeMethod(object, method) {
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
  object[method]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
  const mystery = (mysteryNumberObject.mysteryNumber) * 5;
  return mystery;
}

function deleteProperty(object, property) {
  // remove the property from the object
  // return the object
  delete object[property];
  return object;
}

function newUser(name, email, password) {
  // create a new object with properties matching the arguments passed in.
  // return the new object
  const user = {
    name: name,
    email: email,
    password: password,
  }
  return user;
}

function hasEmail(user) {
  // return true if the user has a value for the property 'email'
  // otherwise return false
  if(user.email !== null || undefined) {
    return true;
  } else {
    return false;
  }
}

function hasProperty(object, property) {
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
  for (let key in object) {
    if (key === property) {
      return true;
    } else {
      return false;
    }
  }
}

function verifyPassword(user, password) {
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
  if (password === user.password) {
    return true;
  } else {
    return false;
  }
}

function updatePassword(user, newPassword) {
  // replace the existing password on the user object with the value of newPassword
  // return the object
  user['password'] = newPassword;
  return user;
}

function addFriend(user, newFriend) {
  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object
  user.friends.push(newFriend);
  return user;
}

function setUsersToPremium(users) {
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
  for (let i = 0; i < user.length; i++) {
    users[i].isPremium = true;
  }
  return users;
}

function sumUserPostLikes(user) {
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum
  var sumLikes = 0;
  for (let i = 0; i < user.posts.length; i++) {
    sumLikes += user.posts[i].likes;
  }
  return sumLikes;
}

function addCalculateDiscountPriceMethod(storeItem) {
  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // return storeItem at the end of the function
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
  storeItem.calculateDiscountPrice = function() {
    return this.price - (this.price * this.discountPercentage);
  };
  return storeItem;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod,
};
