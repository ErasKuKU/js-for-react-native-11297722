function createUserProfiles(names, modifiedNames) {
  
    // Initialize the id counter
    let id = 1;
  
    // Iterate over the arrays and create a user profile object for each pair of names
    const userProfiles = [];
    for (let i = 0; i < names.length; i++) {
      userProfiles.push({
        originalName: names[i],
        modifiedName: modifiedNames[i],
        id: id++
      });
    }
  
    // Return the array of user profile objects
    return userProfiles;
  }

  const modifiedNames = ['KOFI','ama','yaw','abena','KWAME']
  const names = ['kofi','Ama','Yaw','Abena','Kwame']
  
  console.log(createUserProfiles(names, modifiedNames))