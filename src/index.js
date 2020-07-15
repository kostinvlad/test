export default function getHealth(user) {
  if(user.health >= 15 && user.health < 50){
    return 'wounded'
  }
  else if((user.health >= 50)){
    return 'healthy'
  }
  return 'critical'
}
