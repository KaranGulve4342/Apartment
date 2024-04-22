const mysql = require("mysql2");
const config = require("./config_sql");
const con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  insecureAuth: config.insecureAuth,
  protocol: config.protocol,
});

connect();
//used to establish connection with the database
function connect() {
  con.connect(function (err) {
    if (err) throw err;
    console.log("database Connected!");
  });
}

//register the complaint to the block
function registercomplaint(values, callback) {
  sql = " update block set complaints= ? where block_no = ? and room_no= ?";
  con.query(sql, values, (err, results) => {
    console.log(results);
    callback(err, results);
  });
}

//function to calculate total number of owners
function totalowner(callback) {
  sql = "SELECT COUNT(owner_id) FROM owner";
  con.query(sql, (err, results) => {
    callback(err, results);
  });
}

//get all the data from the table using table name
function getdata(tablename, callback) {
  sql = "select * from " + tablename + ";";
  con.query(sql, (err, results) => {
    callback(err, results);
  });
}

//add an owner tuple to the table
function createowner(values, callback) {
  sql = "insert into owner values(?,?,?,?,?,?)";
  con.query(sql, values, (err, results) => {
    callback(err, results);
  });
}
//function to create an owner
function createownerproof(values, callback) {
  sql = "insert into identity values(?,?,null);";
  con.query(sql, values, (err, results) => {
    callback(err, results);
  });
}

//book a parking slot for the tenant
function bookslot(values, callback) {
  sql = "update room set parking_slot =  ? where room_no = ?";
  con.query(sql, values, (err, results) => {
    callback(err, results);
  });
}

//view all the complaints
function viewcomplaints(callback) {
  sql = "select * from block";
  con.query(sql, (err, results) => {
    callback(err, results);
  });
}

//view only owner complaints
//dbms yuvarraj
function ownercomplaints(ownerid, callback) {
  sql =
    "select complaints,room_no from block where room_no in (select room_no from owner where owner_id in(select id from auth where user_id=?))";
  con.query(sql, ownerid, (err, results) => {
    callback(err, results);
  });
}

//get the total no of tenants
function totaltenant(callback) {
  sql = "SELECT COUNT(tenant_id) FROM tenant";
  con.query(sql, (err, results) => {
    callback(err, results);
  });
}
//get the total number of employees
function totalemployee(callback) {
  sql = "SELECT COUNT(emp_id) FROM employee";
  con.query(sql, (err, results) => {
    callback(err, results);
  });
}
//function to retrieve all the complaints in the block
function totalcomplaint(callback) {
  sql = "SELECT COUNT(complaints) FROM block";
  con.query(sql, (err, results) => {
    callback(err, results);
  });
}
//get the data of tenent
// function gettenantdata(tid, callback) {
//   console.log(tid);
//   console.log("And the tid is" + tid)
//   sql =
//     "select * from tenant where tenant_id=?";
//   con.query(sql, tid, (err, results) => {
//     callback(err, results);
//   });
// }

function getTenantId(user_id, callback) {
  console.log("User ID:", user_id); // Log the user_id for debugging purposes
  const sql = "SELECT id FROM auth WHERE user_id=?";
  
  con.query(sql, user_id, (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }

    // Extract the id from the results
    const id = results[0].id;
    
    callback(null, id);
    console.log(id);
  });
}
// Now use the tenantId to fetch data from the tenant table
// function gettenantdata(id, callback) {
//   getTenantId(id, (err, tenantId) => {
//     if (err) {
//       callback(err, null);
//       return;
//     }

//     const sql = "SELECT * FROM tenant WHERE tenant_id=?";
  
//     con.query(sql, tenantId, (err, results) => {
//       callback(err, results);
//     });
//   });
// }

function gettenantdata(id, callback) {
  getTenantId(id, (err, tenantId) => {
    if (err) {
      callback(err, null);
      return;
    }

    console.log("Retrieved tenantId:", tenantId); // Log the retrieved tenantId
  
    const sql = "SELECT * FROM tenant WHERE tenant_id=?";
  
    console.log("SQL Query:", sql); // Log the SQL query for debugging purposes
  
    con.query(sql, tenantId, (err, results) => {
      if (err) {
        console.error("Error executing query:", err); // Log any errors
        callback(err, null);
        return;
      }
      
      console.log("Query Results:", results); // Log the query results
      callback(null, results);
    });
  });
}


//creating an tenant id
// function createtenant(values, callback) {
//   sql = "insert into tenant values(?,?,?,null,?,?)";
//   con.query(sql, values, (err, results) => {
//     callback(err, results);
//   });
// }

function createtenant(values, callback) {
  const sql = "INSERT INTO tenant (tenant_Id, name, dob, room_no, age, starting_date, ending_date, rent, deposit) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  console.log("SQL Query:", sql); // Log the SQL query for debugging purposes
  console.log("Values:", values); // Log the values being passed to the query
  con.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error creating tenant:", err);
      callback(err, null);
    } else {
      console.log("Tenant created successfully:", result);
      callback(null, result);
    }
  });
}


//creating an proof for tenant
// function createtenantproof(values, callback) {
//   const sql = "INSERT INTO identity (tenant_id) VALUES (?)";
//   con.query(sql, values, (err, results) => {
//     callback(err, results);
//   });
// }

function createtenantproof(values, callback) {
  const sql = "INSERT INTO identity (tenant_id) VALUES (?)";
  con.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error creating tenant proof:", err);
      callback(err, null);
    } else {
      console.log("Tenant proof created successfully:", results);
      callback(null, results);
    }
  });
}

function createuserid(values, callback) {
  const sql = "INSERT INTO auth (user_id, password, id) VALUES (?, ?, ?)";
  con.query(sql, values, (err, results) => {
    callback(err, results);
  });
}

//owner viewing tenant details
function ownertenantdetails(values, callback) {
  sql =
    "select * from tenant where room_no in (select room_no from owner where owner_id in(select id from auth where user_id=?))";
  con.query(sql, values, (err, results) => {
    callback(err, results);
  });
}

//tenant pays maintanence fee
// function payfees(id, callback) {
//   sql =
//     'update tenant set stat="paid" where tenant_id in (select id from auth where user_id=?)';
//   con.query(sql, id, (err, results) => {
//     callback(err, results);
//   });
// }

//tenant pays maintenance fee
function payfees(id, callback) {
  getTenantId(id, (err, tenantId) => {
    if (err) {
      callback(err, null);
      return;
    }

    console.log("Retrieved tenantId:", tenantId); // Log the retrieved tenantId
  
    const sql = "UPDATE tenant SET stat='paid' WHERE tenant_id=?";
  
    console.log("SQL Query:", sql); // Log the SQL query for debugging purposes
  
    con.query(sql, tenantId, (err, results) => {
      if (err) {
        console.error("Error executing query:", err); // Log any errors
        callback(err, null);
        return;
      }
      
      console.log("Query Results:", results); // Log the query results
      callback(null, results);
    });
  });

  // sql =
  //   'update tenant set stat="paid" where tenant_id in (select id from auth where user_id=?)';
  // con.query(sql, id, (err, results) => {
  //   callback(err, results);
  // });
}


//owner viewing room owned by him
function ownerroomdetails(values, callback) {
  sql =
    "select * from room where room_no in (select room_no from owner where owner_id in(select id from auth where user_id=?))";
  con.query(sql, values, (err, results) => {
    callback(err, results);
  });
}
//view parking alloted for tenant
function viewparking(id, callback) {
  sql =
    "select parking_slot from room where room_no in (select room_no from tenant where tenant_id in (select id from auth where user_id=?))";
  con.query(sql, id, (err, results) => {
    callback(err, results);
  });
}

//employee salary get
function empsalary(id, callback) {
  sql =
    "select salary from employee where emp_id in (select id from auth where user_id=?)";
  con.query(sql, id, (err, results) => {
    callback(err, results);
  });
}

//function to validate user with username and password
function authoriseuser(username, password, callback) {
  let results;
  sql = "SELECT password from auth where user_id = ?";
  const value = [username];
  console.log(value);
  con.query(sql, value, (err, result) => {
    if (result.length === 0) {
      results = "denied";
      callback(err, results);
      return;
    } else {
      const resultArray = Object.values(
        JSON.parse(JSON.stringify(result))[0]
      )[0];
      if (password === resultArray) {
        results = "granted";
      } else {
        results = "denied";
      }
      callback(err, results);
    }
  });
}

//tenant delete
function deletetenant(id, callback) {
  // First, delete referencing rows from 'rental'
  const deleteRentalQuery = "DELETE FROM rental WHERE tenant_id=?";
  con.query(deleteRentalQuery, id, (err, rentalResults) => {
    if (err) {
      callback(err, null);
    } else {
      // Next, delete referencing rows from 'identity' (assuming there's a foreign key)
      const deleteIdentityQuery = "DELETE FROM identity WHERE tenant_id=?";
      con.query(deleteIdentityQuery, id, (err, identityResults) => {
        if (err) {
          callback(err, null);
        } else {
          // Then, delete the row from 'tenant'
          const deleteTenantQuery = "DELETE FROM tenant WHERE tenant_id=?";
          con.query(deleteTenantQuery, id, (err, tenantResults) => {
            callback(err, tenantResults);
          });
        }
      });
    }
  });
}

// //owner delete
// function deleteowner(id, callback) {
//   // First, delete referencing rows from 'identity'
//   const deleteIdentityQuery = "DELETE FROM identity WHERE owner_id=?";
//   con.query(deleteIdentityQuery, id, (err, identityResults) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       // Then, delete the row from 'owner'
//       const deleteOwnerQuery = "DELETE FROM owner WHERE owner_id=?";
//       con.query(deleteOwnerQuery, id, (err, ownerResults) => {
//         callback(err, ownerResults);
//       });
//     }
//   });
// }

// function deleteowner(id, callback) {
//   // First, delete referencing rows from 'identity'
//   const deleteIdentityQuery = "DELETE FROM owner WHERE owner_id=?";
//   con.query(deleteIdentityQuery, id, (err, identityResults) => {
//     if (err) {
//       callback(err, null); // Pass error to the callback
//     } else {
//       // Then, delete the row from 'owner'
//       const deleteOwnerQuery = "DELETE FROM owner WHERE owner_id=?";
//       con.query(deleteOwnerQuery, id, (err, ownerResults) => {
//         if (err) {
//           callback(err, null); // Pass error to the callback
//         } else {
//           callback(null, ownerResults); // Pass results to the callback
//         }
//       });
//     }
//   });
// }

function deleteowner(id, callback) {
  // Delete the row from 'owner' table
  const deleteOwnerQuery = "DELETE FROM owner WHERE owner_id=?";
  con.query(deleteOwnerQuery, id, (err, results) => {
    if (err) {
      callback(err, null); // Pass error to the callback
    } else {
      callback(null, results); // Pass results to the callback
    }
  });
}

//employee delete
function deleteemployee(id, callback) {
  // First, delete referencing rows from 'identity'
  const deleteIdentityQuery = "DELETE FROM identity WHERE emp_id=?";
  con.query(deleteIdentityQuery, id, (err, identityResults) => {
    if (err) {
      callback(err, null);
    } else {
      // Then, delete the row from 'owner'
      const deleteOwnerQuery = "DELETE FROM employee WHERE emp_id=?";
      con.query(deleteOwnerQuery, id, (err, ownerResults) => {
        callback(err, ownerResults);
      });
    }
  });
}

function deletecomplaint(id, callback) {
  sql = " update block set complaints=NULL  where room_no= ?";
  con.query(sql, id, (err, results) => {
    console.log(results);
    callback(err, results);
  });
}

function bookroom(values, callback) {
  const sql = "INSERT INTO tenant (name, dob, room_no, age, starting_date, ending_date, rent, deposit) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  con.query(sql, values, (err, results) => {
    console.log(results);
    callback(err, results);
  });
}

function updateRoomStatus(roomno, status, callback) {
  const sql = "UPDATE room_status SET occupancy_status = ? WHERE room_no = ?";
  con.query(sql, [status, roomno], (err, results) => {
    if (err) {
      console.error(err);
      if (callback && typeof callback === "function") {
        callback(err, null);
      }
    } else {
      if (callback && typeof callback === "function") {
        callback(null, results);
      }
    }
  });
}

module.exports = {
  connect,
  registercomplaint,
  createowner,
  bookslot,
  getdata,
  totalowner,
  totaltenant,
  totalemployee,
  totalcomplaint,
  createownerproof,
  viewcomplaints,
  authoriseuser,
  gettenantdata,
  createtenant,
  createtenantproof,
  ownerroomdetails,
  ownercomplaints,
  viewparking,
  createuserid,
  payfees,
  empsalary,
  ownerroomdetails,
  ownertenantdetails,
  deletetenant,
  deleteowner,
  deleteemployee,
  deletecomplaint,
  bookroom,
  updateRoomStatus,
};
