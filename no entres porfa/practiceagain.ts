
function tooManyScoops( heladoCrema: IceCream): string  {
    
    if (heladoCrema.scoops>  4) {
        return heladoCrema.scoops + `its too mnay scoops`;

        
    }else{
        return "enjoy your order"
    }
   

}
console.log(tooManyScoops({flavor: "vainilla" ,scoops : 5}))



interface IceCream{
    flavor : string;
    scoops: number;
}


let icecream: IceCream={
    flavor: "helado de agua",
    scoops: 103
}

interface sundae extends IceCream{
    sauce:'chocolate'|'caramel'|'strawberry';
    nuts:boolean;
    Whippedcream?:boolean;
    instruction?:boolean;
}

let myIcecream:sundae={
    flavor:'vanilla',
    scoops:2,
    sauce:'caramel',
    nuts:true
}
function sundae(dessert:IceCream){
    if (dessert.scoops>4){
        return dessert.scoops + 'is too many scoops!';
        }else {
        return 'your order will be ready soon!';

        }
    

}
console.log(tooManyScoops({flavor: "vainilla" ,scoops : 5}))
