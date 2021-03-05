import promptSync from 'prompt-sync';
let prompt = promptSync({sigint: true});

class monster{
    constructor(name,health,points) {
        this.name=name;
        this.health=health;
        this.points=points;
        this.attacks=[];
    }

    addAttack(description,damage){
        this.attacks.push([description+' and does '+damage+' damage!',damage]);
    }   

    defeat(){
      return 'You have defeated the '+this.name+'. Well done!';
    }

    attack(){
        return this.attacks[Math.floor(Math.random()*this.attacks.length)]; 
    }

    fight(){
        let action=prompt(`A ${this.name} attacks you! What will you do? (fight/run away) `);
        while (true){
            if (action=='fight'){
                this.health-=heroDamage;
                console.log(`\nYou hit the ${this.name} and deal ${heroDamage} damage. The ${this.name} now has ${this.health} health.`); //need to link to character 
            } else if (action=='run away'){
                console.log('\nYou can\'t run away!'); //Go back to previous room??
            } else {
                console.log('\nYou can\'t do that!');
            }
            if (this.health<=0){
                console.log(`\nYou defeated the ${this.name}!`);
                break
            }
            let monsterAttack=this.attack();
            heroHealth-=monsterAttack[1]; //need to link to character
            console.log(monsterAttack[0]+` You now have ${heroHealth} health.`); //need to link to character
            
            if (heroHealth<=0){ //need to link to character
                console.log('\nYou have been defeated. Game over.');
                break;
            }

            action=prompt('What will you do? (fight/run away) ')
        }
    }
}


/*Goblin Example
var Goblin=new monster('Goblin',30,100);
Goblin.addAttack('The goblin punches you',20);
Goblin.addAttack('The goblin kicks you',30)
Goblin.addAttack('The goblin bites you',25) 
var heroDamage=2;
var heroHealth=100;
Goblin.fight();
*/