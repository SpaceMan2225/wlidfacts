const data = [
    {
        common_name : "African lion",
        scientific  : "Panthera leo", 
        picture1     : "https://ichef.bbci.co.uk/news/976/cpsprodpb/1CE8/production/_109100470_ed01bd7f-0c64-4f6b-9d29-f43261119ade.jpg",
        information : "Lions can weigh up to 550 lbs. A lion’s roar can be heard up to five miles away. Only male lions have a large mane, but they can lose it after being neutered. Lions are the only cats that live in groups. These groups are called prides. Lionesses do most of the hunting and the males defend the territory. Like most cats, lions are nocturnal, sleeping around 21 hours a day. Lions can run up to 50 miles per hour. When you meet with a lion in the wild, they are a force to be reckoned with, so you should stay clear. Lions have yellow and golden brown fur also covering a long tail with a bushy end."
    },
    {
        common_name : "Giant Panda",
        scientific  : "Ailuropoda melanoleuca ", 
        picture1     : "https://media.npr.org/assets/img/2019/11/15/giant-panda-bei-bei-20180608-051skipbrown-_wide-5621060ac353db3650a31d9b8cb078bbbfccd9e5-s800-c85.png",
        information : "Giant Pandas live in the bamboo forests of central China. The males can grow up to 300 pounds, while females grow up to about 200 pounds. All pandas are born very small. The average weight is 100g which is only 1/900 of their mother's weight. Their fur helps them dry and cool, they have short tails to help them balance in trees and keep them warm while they're asleep, they have hairs on the bases of their feet so they don't slip while climbing and they come out to feed at night when fewer predators are around. Pandas have Thick black and white fur. Their white coat with black markings is unique, with black patches around the eyes and ears, black legs, and a black band around the shoulders. And they have cute whitetails."

    }, {
        common_name : "lion",
        scientific  : "Panthera leo", 
        picture1     : "https://ichef.bbci.co.uk/news/976/cpsprodpb/1CE8/production/_109100470_ed01bd7f-0c64-4f6b-9d29-f43261119ade.jpg",
        information : "Lions can weigh up to 550 lbs. A lion’s roar can be heard up to five miles away. Only male lions have a large mane, but they can lose it after being neutered. Lions are the only cats that live in groups. These groups are called prides. Lionesses do most of the hunting and the males defend the territory. Like most cats, lions are nocturnal, sleeping around 21 hours a day. Lions can run up to 50 miles per hour. When you meet with a lion in the wild, they are a force to be reckoned with, so you should stay clear. Lions have yellow and golden brown fur also covering a long tail with a bushy end."
    },
    {
        common_name : "Panda",
        scientific  : "Ailuropoda melanoleuca ", 
        picture1     : "https://media.npr.org/assets/img/2019/11/15/giant-panda-bei-bei-20180608-051skipbrown-_wide-5621060ac353db3650a31d9b8cb078bbbfccd9e5-s800-c85.png",
        information : "Giant Pandas live in the bamboo forests of central China. The males can grow up to 300 pounds, while females grow up to about 200 pounds. All pandas are born very small. The average weight is 100g which is only 1/900 of their mother's weight. Their fur helps them dry and cool, they have short tails to help them balance in trees and keep them warm while they're asleep, they have hairs on the bases of their feet so they don't slip while climbing and they come out to feed at night when fewer predators are around. Pandas have Thick black and white fur. Their white coat with black markings is unique, with black patches around the eyes and ears, black legs, and a black band around the shoulders. And they have cute whitetails."

    }
]

const button = document.querySelector('#SButton')   
document.getElementById("par3").style.backgroundImage = "url('https://vignette.wikia.nocookie.net/river-monsters/images/d/dd/Resident_orca.png/revision/latest?cb=20190429070329')"            
document.getElementById("par3").style.backgroundSize = "auto 850px";
document.getElementById("par3").style.backgroundPosition = "center"
document.getElementById("par3").style.backgroundRepeat = "no-repeat"
document.getElementById("par3").style.height = "635px"

button.addEventListener('click',()=>{
    const bar = document.querySelector('#Bar').value.toLowerCase()
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        console.log(String(bar))
        if (element.common_name.toLowerCase() === bar) {
            var b = element.scientific
            var textnode = document.createTextNode(b);
            var item = document.getElementById("myList")
            item.replaceChild(textnode, item.childNodes[1]);
            const k = element.picture1
            let e = document.getElementById("par3")
            e.style.height= "550px"
            e.style.backgroundImage =`url(${k})` ;
            e.style.backgroundSize = "cover";
            e.style.backgroundPosition = "center"
            e.style.backgroundRepeat = "no-repeat"
            var asd = document.getElementById("cooldiv")
            asd.remove()
            var ww = document.getElementById("name")
            ww.remove()
            e.style.backgroundAttachment = "fixed";
            
            var qw = document.getElementById("qwe")
            var dar = document.getElementById("darken")
            dar.style.backgroundColor="rgba(74, 63, 70,0.35)"
            dar.style.height="400px"
            qw.style.height= "699px";
            
            qw.style.backgroundColor = "#f7f7f7";
            qw.style.borderRadius="0%"
            qw.style.padding="20px"
            
            // var c = element.information
            // var textnode2 = document.createTextNode(c);
            // item.replaceChild(textnode2, qw.childNodes[0]);
            
        }
     }
 })