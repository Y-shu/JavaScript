let user = {}; //user object
let users = []; //user array
for (index = 0; index < 5; index++) {
  let option = prompt(`
    1.Registration
    2.Login
    3.Changing Password
    4.Exit`);
  switch (option) {
    case "1":
    case 'Registration':
    case 'registartion':
      user.name = prompt('Enter your Name');
      user.email = prompt('Enter your Email');
      user.Password = prompt('Enter your Password');
      users.push(user);
      user = {}; //making object empty
      break;
    case "2":
    case 'Login':
    case 'login':
      var urs = prompt('Enter your user name');
      var pwd = prompt('Enter your Password');
      outer:for (index in users)
       {
        console.log(users[index].name);
        console.log(users[index].password);
        if(users[index].name==urs){
          if(users[index].password==pwd)
          alert('login sucessfully');{

          }else
          {
            alert('user not found');
            break outer;
          }
        }
        break;
        default:
        alert('Invalid Option')
      }
      console.log(users);
      var con = prompt(`
        1.Continue
        2.Exit`);
        if(con=="1"){}
      else if(con=="2"){
        break;
      }
    }
        // inner:for (usr in users[index])
        // {
        //   nestinner : for(key in  ){}
        //   console.log(users[index]);
        //   console.log(usr['name']);
        //   console.log(usr['password']);
        //   if (usr['name'] === urs)
        //   {
        //     console.log(usr['name']);
        //
        //     if (usr.Password === pwd)
        //     {
        //       console.log(usr.password);
        //       if (user.password === pwd)
        //       {
        //         alert('Login Sucessfully')
        //       }
        //       else
        //       {
        //         alert('User not found');
        //         break inner;
        //       }
        //       }
        //
        //     }
