let notifications = [
{message: "Lorem", read: true},
{message: "Ipsum", read: true},
{message: "Dolor", read: true},
{message: "Sit", read: false},
{message: "Amet", read: true}
];
let allRead = true;

function checkRead(obj) {
   //console.log(obj.read);
  if (obj.read === false)
    return true;
}
if(notifications.find(checkRead)){
  allRead = false;
}
console.log(allRead);
