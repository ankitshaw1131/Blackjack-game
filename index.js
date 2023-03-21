let player={
  name:"ankit", 
  chips:135
}
let cards=[]
let sum=0
let isAlive=false
let hasblackJack=false
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let playerinfo=document.getElementById("player-el")
playerinfo.textContent=player.name +": $"+ player.chips
function getrandomCard(){
  let randomnumber=Math.floor(Math.random()*13)+1
  if(randomnumber>10) return 10
  else if(randomnumber===1) return 11
  else return randomnumber
}
function startGame(){
  isAlive=true
  let firstCard=getrandomCard()
  let secondCard=getrandomCard()
  cards.push(firstCard,secondCard)
  sum=firstCard+secondCard
  renderGame()
}
function renderGame(){
  
  cardEl.textContent="Cards: "
  for(let i=0;i<cards.length;i++){
    cardEl.textContent+=cards[i]+" "
  }
  sumEl.textContent="Sum: "+sum
  if(sum<21){
    messageEl.textContent="Want to draw another card"
  } else if(sum==21){
    hasblackJack=true
    messageEl.textContent="You got BlackJack"
  } else{
    messageEl.textContent="You are out of the game"
    isAlive=false
  }
}
function newcard(){
  if(isAlive && !hasblackJack){
    let card=getrandomCard()
    sum+=card
    cards.push(card);
    renderGame()
  }
}