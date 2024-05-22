import * as THREE from 'three';
// @ts-ignore
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 50, 1, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth < window.innerHeight ? window.innerWidth * 0.8 : window.innerHeight * 0.8 , window.innerWidth < window.innerHeight ? window.innerWidth * 0.8 : window.innerHeight * 0.8);
document.getElementById("renderer").appendChild( renderer.domElement );
/*const price = document.createElement("p");
price.className = "label";
price.innerHTML = "&#x20AC 24.99";
document.getElementById("renderer").appendChild(price);*/
const checkout = document.createElement("a");
checkout.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
checkout.style.display = "block";
checkout.className = "label";
checkout.innerHTML = "&#x1F6D2";
document.getElementById("renderer").appendChild(checkout);

const loader = new GLTFLoader();
const controls = new OrbitControls( camera, renderer.domElement );
controls.autoRotate = true;
animate();
function animate() {

    requestAnimationFrame( animate );

    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();

    renderer.render( scene, camera );

}
loader.load('3dpea.gltf', (gltf) => {
    // Add the loaded model to your scene
    const model = gltf.scene;
    model.traverse((obj) => {
        if (obj.isMesh) {
            obj.material = new THREE.MeshStandardMaterial({ color: 0x082008 }); // Apply the new material to each mesh
        }
    });
    scene.add(model);

    // Position the camera to view the model
    camera.position.set(0, 0, 150); // Adjust as needed

    // Add lights if necessary
    const ambientLight = new THREE.RectAreaLight(0xFFFFFF, 10);
    ambientLight.position.set(-50, 70, 0);
    ambientLight.width = 1000;
    ambientLight.height = 1000;
    ambientLight.lookAt(gltf.scene.position);
    scene.add(ambientLight);

    /*const asd = new THREE.BoxGeometry(100, 1, 100, 1,1,1);
    const as = new THREE.Mesh(asd);
    as.position.set(-50, 70, 0);
    scene.add(as);*/

    // Render the scene
    renderer.setClearColor(0x19053F); // Light gray background color
    renderer.render(scene, camera);
    camera.lookAt( gltf.scene.position );
}, undefined, (error) => {
    console.error('Error loading glTF model:', error);
});

/*
Once upon a time there was a lovely princess. But she had an enchantment upon her of a fearful sort, which could only be broken by Love's first kiss. She was locked away in a castle guarded by a terrible fire breathing dragon. Many brave knights had attempted to free her from this dreadful prison, but none prevailed. She waited in the dragon's keep in the highest room of the tallest tower for her true love and true love's first kiss. Like that's ever going to happen. What a loony. Shrek Beware Stay out I think he's in here. All right. Lets get it! Hold on. Do you know what that thing can do to you? Yeah. He'll groan into your bones for his brains. Well actually that would be a giant. Now Ogres, huh, they are much worse. They'll make a soup from your freshly peeled skin. They'll chew your livers, squeeze the jelly from your eyes. Actually, it's quite good on toast. Back, back beast, back! I warned you! Right. This is the part, where you run away. Yeah! And stay out. Wanted. Fairytale creatures. Right, this one is full. Take it away. Give me that. Your fine days are over. -25 pieces of silver for the witch. Next. -Come on. Sit down there! And be quiet! This cage is so small. You wouldn't turn me in. I'll never be stubborn again. I can change. Please, give me another chance. Oh, shut up! Next. What do we got? This little wooden puppet. I'm not a puppet, I'm a real boy. Five shillings for the possessed toy. Take it away. No! Please, don't let them do it! Next. What do you got? Well, I've got a talking donkey! Right. Well that's good for ten schillings, if you can prove it. Oh, go ahead fella. Well? He's just a li..., just a little nervous. He's really quite a chatterbox. You boneheaded donkey! That's it. I have heard enough. Guards! No, no, he talks, he does! I can talk. I love to talk. I've talked to... Get her out of my sight! -No, no, I swear! Hey, I can fly. -He can fly! -He can fly! He can talk! -That's right, fool! Now I'm a flying, talking donkey! You might have seen house fly, maybe even a superfly. But I bet you ain't never seen a donkey fly! Seize him! Get him! This way! Hurry! You there. Ogre. -I. By the order of lord Farquaad. I am authorized to place you both under arrest. And transport you to designated resettlement facility. Oh really? You and what army? Can I say something to you? Listen, you were really, really something, back there. Incredible. Are you talking to... ...me? Yes, I was talking to you. Can I just tell you that you were really great back there with those guards. They thought that was all over there. And then you showed up and BAM. There was tripping on over themselves like babes in the woods. That really made me feel good to see that. Oh, that's great. Really. Man, it's good to be free. Now, why don't you go celebrate your freedom with your own friends? But I... I don't have any friends. And I'm not going out there by myself. Hey wait a minute. I have a great idea... I'll stick with you. You and me in green fighting machine. Together we'll scare the spin if anybody crosses us. Oh, a, that was really scary. Maybe you don't mine me saying. If that don't work, your breath will certainly do the job done, 'cause... you definitively need some tic-tac or something, 'cause your breath stinks! Man you've ??? my note! Just like the time... ...and then I ate some rotten berries. Man I had some strong gases leaking out of my but that day. Why are you following me? I'll tell you why. 'Cause I'm all alone, there is no one here, beside me. My problems have all gone. There's no one to derive me. But you got to have free ... -Stop singing! Well, it's no wonder, you don't have any friends. Wow! Only a true friend would be that truly honest. Listen! Little donkey. Take a look at me! What am I? A... ...really tall? No! I'm an Ogre. You know, grab your torch and pitchforks. Doesn't that bother you? Nope. Really? -Really really. Oh? Man, I like you. What's your name? A..., Shrek. Shrek?! But do you know, what I like about you, Shrek? You've got that kind of: "I don't care what nobody thinks of me" thing. I like that, I respect that, Shrek. You're all right. Uh, look at that. Who would wanna live in a place like that? That would be my home. Oh, it is lovely. Just beautiful. You know you're quite a decorator. It's amazing what you did with such a modest budget. I like that boulder. That is a nice boulder. I guess, you don't entertain much, do you? I like my privacy. You know I do to. That's another thing, we have in common. Like I hate it when you got somebody in your face. You try to give them a hint and they won't leave. And then there's that big occurred silence, you know? Can I stay with you? -What? Can I stay with you, please. Of course! -Really? No. -Please! I don't want to go back there. You don't how is like to be concerned like a freak. Well..., maybe you do. But that's why we have to stick together! You got to let me stay! Please! Please! OK, OK. -But one night only. -Huh, thank you! A, what are you do... No! This is going to be fun. We can stay up late, swap the manly stories. And in
the morning... I'm making waffles. Where do I sleep? Outside! Oh, a, I guess that's cool. You know, I don't know you and you don't know me... ... so I guess, outside is best for me. Here I go. Good night. I do like that half door. I'm a donkey all alone outside. Sit by myself outside, I guess. I'm all alone, there's no one here beside me. -I thought, I told you to stay outside. -I am outside. Well James. This is far from the farm, but what choice do we have? It's not... What a lovely bed. -Got you! I found some cheese. Awful stuff. -Is that you Gordon? -How did you know? Enough! What are you doing in my house? Oh, no, no, no... Death prods off the table! Where would we supposed to put her. The bed's taken. What? I live in a swamp. I've put up signs. I'm a terrifying Ogre! What do I have to do, to get a little privacy? Oh, no! No, no! What are you doing in my swamp? All right, get out of here. All of you. Move it! Come on, let's go. And hurry up, hurry up. No, no, not there. Not there! Hey don't look at me. I didn't invite them. Oh gosh, no one invited us. -What? We were forced to come here. -By who? Lord Farquaad. He ??? All right. Who knows where this Farquaad guy is? Oh I do. I know where he is. Does anyone else know where to find him? -Anyone at all? -Me. -Anyone? Oh pick me, I know! Me, me. Ok, fine. Attention all fairy tale things! Do not get comfortable. Your welcome is officially warned up. In fact. I'm gonna see this guy Farquaad right now and get all off my land and back where you came from. You. You're coming with me. All right. That's what I like to hear, man. Shrek and Donkey, two stubborn friends off on a world and big city adventure. I love it. I'm on road again. Sing with me Shrek! I'm on road again... What did I say about singing? -Can I whistle? -No. -Well, can I hummer? -All right. That's enough. He's ready to talk. Run, run, run as fast as you can, you can't catch me. I'm the gingerbread man. You monster. I'm not a monster here. You are. You and the rest of that fairytale trash, poisoning my perfect world. -Now tell me! Where are the others? -Eat me. I've tried to be fair to you, creatures. Now my patience has reached its end! -Tell me! Or I'll... -No, no, not the buttons. Not gumdrop buttons. All right! Who's hiding them? Ok, I'll tell you. -Do you know the muffin-man? -The muffin-man? -The muffin-man. -Yes, I know the muffin-man. Who lives on Proully lane? -Well, she's married to the muffin-man. -The muffin-man! -The muffin-man! -She's married to the muffin-man. My lord! We found it. Well then, what are you waiting for? Bring it in. Magic mirror. Don't tell him anything! Evening. Mirror, mirror on the wall. Is this not the most perfect kingdom of them all? Well, technically, you're not a king. A..., felonious. -You were saying. -What I mean is a... ...you're not a king, yet. But you can become one. All you have to do, is marry a princess. Go on. So, just sit back and relax my lord, because it's time for you to meet today's eligible bachelorettes. And here they are. Bachelorette number one is a mentally abused shading from a kingdom far, far away. She likes sushi and hottubbing anytime. Her hobbies include cooking and cleaning for two evil sisters. Please welcome... Cinderella. Bachelorette number two is a kemp wearing girl from a land of fantasy. Although she lives with seven other man, she is not easy. Just kiss hers dead frozen lips and find out what a live wife she is. Come on. Give it up for... Show-white. And last but certainly not least. Bachelorette number three is a fire-breathing ????, dragon guarded castle, surrounded by a hot boiling lava. But don't let that cool you off. She's a loaded pistol who likes Pina Coladas and getting cut in the rain. Yours for the rescuing, Princess Fiona. So will it be, bachelorette number one? Bachelorette number two? Or bachelorette number three? -Two... -Three! -Two! One. No, no, no. Three. Pick number three my lord. Ok, ok. Number three. Lord Farquaad. You've chosen... princess Fiona. She's nice. Fiona. She's perfect. All I have to do is just find someone... But I probably should mention little thing that happens at night... -I'll do it! -Yes, but after sunset... Silence! I will make this princess Fiona my queen. And Duloc will finally have the perfect king! Captain! Assemble your finest man. We're going to have a tournament! That's it, that's, right there, that's Duloc. I've told you I'll find it. So. That must be lord Farquaad's castle. Aha, that's the place. Do you think maybe he's compensating for something. Hey, hey wait up Shrek! -Hey, you! -No, no! Wait a second. Look, I'm not gonna eat you. I just... It's quiet. Too quiet. Where is everybody? Hey look at this. Wow! -Let's do that again. -No. no. All right. You're going the right way for smack bottom. Sorry about that. That champion should have the honor, no, no... ...the privilege to go forth and rescue the lovely princess Fiona from the fireing keep of the dragon. If for any reason the winner is unsuccessful, the first
runner up will take his place. And so on, and so forth. Some of you may die, but it's a sacrifice I'm willing to make. Applause. Let the tournament begin. What is that? Ugh, it's hideous. Oh, that's not very nice. It's just a donkey. Indeed. Knights! New plan. The one, who kills the Ogre, will be named champion. How about him. Oh, hey. Now, come on. Can't we just settle this over a pint? No? All right then. Come on. Hey Shrek! Let me, let me! The chair! Give him the chair! Thank you. Thank you, very much. I'm here until Thursday. Try the wheel! Shall I give the order sir? No. I have a better idea. People of Duloc. I give you our champion! What? Congratulation, Ogre. You've won the honor of embarking on a great and noble quest. Quest? I'm already on a quest. A quest to get my swamp back! -Your swamp? -Yeah, my swamp! Where you dumped those fairytale creatures. Indeed. All right Ogre, I'll make you a deal. Go on this quest for me and I'll give you your swamp back. Exactly the way it was? Down to the last slime covered toast tool. -And the squatters? -As good as gone. What kind of quest? Ok, let me get this straight! We gonna go find the dragon and rescue a princess just so Farquaad will give you back the swamp, which you only don't have, 'cause he filled it with full of freaks on the first place. -Is that about right? -You know what? Maybe there is a good reason, donkeys shouldn't talk. I don't get it Shrek. Why didn't you just pull some old Ogre stuff on them? You know, ??? . Grab his bones to make you brave. You know the whole Ogre trick. Oh, you know what. Maybe I could have decapitated entire village and put their heads on plate. Got a knife, cut open their spleens and drink their fluids. Does that sound good to you? A, no, not really, no. For your information, there is a lot more to Ogres than people think. -Example. -Example? OK, A-a-m, Ogres are like onions. -They stink? -Yes, no. -O, they make you cry. -No. Oh, you leave them out on the sun and they get all brown and start ??? little wild hairs? No! Layers! Onions have layers. Ogres have layers. Onions have layers. You get it? We both have layers. O, you both have layers. You know not everybody likes onions. Cake! Everybody loves cakes. Cakes have layers. I don't care what everyone likes. Ogres are not like cakes. You know what else everyone likes? Paffe. Have you ever met a person and you say: "Hey, let's get some paffe" and they say I don't like paffe. Paffe is delicious. No! You tensed, irritating, miniature peace of barden. Ogres are like onions. End of story. Bye, bye. See you lather. Paffe is maybe the most delicious thing on the whole damn planet. You know I think I've preferred your humming. Do you have a tissue or something, 'cause I'm making a mess. Just the word paffe has made me start slimying Why, Shrek, did you do that? Man you got to warn somebody before you just crack one off. My mouth was opened and everything. Believe me donkey, if it was me, you'd be dead. It's brimstone. We must be getting close. Yeah, right, brimstone. Don't be talking ??? brimstone. I know what I smell and ??? no brimstone. And they don't come of stone neither. Sure it's big enough, but look at the location. Oh, Shrek, remember when you said that Ogres have layers? Oh, yeah. Well, I have a confession to make. Donkeys don't have layers. We wear ??? sleeves. Wait a second. Donkeys don't have sleeves. -You know what I mean. -Oh, you can't tell me you're afraid of highs. No, I'm just a little uncomfortable of being on a rickety bridge over boiling lake of lava! Come on donkey, I'm right here beside you. Ok? For emotional support. We'll just hackle this thing together one little baby step after time. -Really? -Really really. Ok. That makes me feel so much better. Just keep moving and don't look down. Don't look down, don't look down. Shrek! I'm looking down! I can't do this. Just let me off right now, please. -But you're already half way. -Yeah, but I know that half is safe. Ok, fine. I don't have time for this. You go back. Shrek, no, wait. Don't do that! Oh, I'm sorry. Do what? -Oh. This? -Yes, that! Yes, yes. Do it. OK. -No, Shrek! -I'm doing it. I'm gonna die. I'm gonna die. Shrek, I'm gonna die. That will do Donkey, that will do. Cool. So where is this fire breathing pain in the neck anyway? Inside. Waiting for us to rescue her. I was talking about the dragon Shrek. -Are you afraid? -No, but shhhhh. Oh, good. Me neither. Because there's nothing wrong with being afraid. Here's a..., something responsible of the situation. Not to mention dangerous situation. And there's dragon that breathes fire. I'm sure he's meaner than a cow or anything, but they're scare. You know what I mean. I'm sure he's heavier than a cow... Donkey. Two things. Ok? Shut, up. Now go over there and see if you can find any stairs. Stairs? I thought we were looking for the princess. The princess will be up the stairs in the highest room in the tallest tower. What makes you think she'll be there? I read it
in a book once. Cool. You handle the dragon, I'll handle the stairs. Oh, I'll find those stairs. I'll ???. That's right. Those stairs won't know which way they go. The drafting stairs, ??? Don't mess with me. I'm the stair master. I'm master of the stairs. I wish I had a stair right here right here now, I'd step all over it. Well, at least we know where the princess is. -But where is the... -Dragon! Donkey, look out! Got you. Oh, what large teeth you have. I mean, white sparkling teeth. You probably hear this all the time from your food, but you must bleach yourself, because that is one dashing smile you got there. And do I detect the hint of minty freshness? And you know what else? You're a girl dragon. Oh, sure. I mean 'course you're a girl dragon, 'cause you're just ricking the feminine beauty out. What's the matter with you? Do you have something in your eye? Man, I'd really love to stay, but you know I'm a asthmatic and I don't know if we would worked out. You'd be blowing smoke and stuff. Shrek! No, Shrek! Shrek! -Wake up! -What? Are you princess Fiona? I am. Awaiting a knight so bold as to rescue me. Oh, that's nice. Now let's go. But wait, sir knight. This be our first meeting. Should not be wonderful, romantic moment? Yeah. Sorry lady there's no time. Hey, what are you doing? You know, you should sweep me out of my feet. Out through the window and down the rope by to your valued steed. You've had a lot of time to plan this, haven't you? Uh-um. But we have to sing through this moment. You can residing of a poem to me. A ballad, a sonnet, a libretti. Or something. I don't think so. Well, can I at least know a name of my champion? Shrek. So, Shrek. I pray that you take this favor as a token of my gratitude. Thanks. -You didn't slay the dragon? -It's not my job to do this. Now, come on! But this isn't right. ??? That's what all the other knights did. Yeah. Right before they burst in the flame. That's not the point. Wait. Where are you going? Exit is over there. Well, I have to save my ass. What kind of knight are you? One of a kind. ...rush into a physical relationship. I'm not that emotionally ready for commitment of a this magnitude. That was the word I was looking for. Magnitude. Hey, that is unwanted physical contact. Hey, what are you doing? Ok, ok, let's just back up a little and take this one step at the time. I mean, we really should get to know each other first, you know what am I saying. As friends, maybe even as ??? Hey don't do that. That's my tail. That's ma personal tail. And you're going to tear it off.... Oh, no. No! -It talks?! -Yeah. It's getting to shut up, that's a trick. Ok, you two. Head for the exit. I'll take care of the dragon. Ruuuuun! You did it. You rescued me. Amizing, you're wonderful. You're a ... ...a little unorthodox I admit, but by deed is great and by heart is pure. I'm entirely in your debt. And where would a brave knight be without his noble steed. I hope you heard that. She called me a noble steed. She thinks I'm a steed. The battle is won. You may remove your helmet good sir knight. -Aah, no. -Why not? I have helmet hair. Please. I wouldst look upon the face of my rescuer. Oh, no, you wouldn't, dust. But, how will you kiss me? What? That wasn't in a job description. -Maybe it's a perk? -No. It's destiny. You must know how it goes. A princess locked in a tower and besieged by a dragon is rescued by a brave knight. And then they share true love's first kiss. With Shrek? You think, wait... ...you think Shrek is your true love? Well, yes. You think that Shrek is your true love. What is so funny? Let's just say, I'm not your type, ok? Of course you are. You're my rescuer. Now, now remove your helmet. Look. I really don't think this is a good idea. -Just take off the helmet. -I'm not going to. -Take it off! -No! -Now! -Ok, easy. As you command your highness. You're an Ogre. Oh, you were expecting Prince Charming. Well, yes, actually. Oh no. This is all wrong. You're not supposed to be an Ogre. Princess, I was sent to rescue you by lord Farquaad, ok? He's the one, who wants to marry you. Well, then why didn't he come to rescue me? Good question. You should ask him that, when we get there. But I have to be rescued by my true love. Not by some Ogre and his pet. Well so much for noble steed. Look princess. You're not making my job any easier. Well I'm sorry, but your job is not my problem. You can tell lord Farquaad that if he wants to rescue me properly, I'll be waiting for him right here. Hey, I'm no ones messenger boy, all right? -I'm a delivery boy. -You wouldn't dare. -You coming donkey? -Put me down! Yeah, I'm right behind you. Put me down or you will suffer the consequences. This is not dignified. Put me down. Ok, here's another question. Let's say that a woman 'digged' you, but you don't really like her, that way. Now, how you let her down real easy, so her feelings aren't hurt? But you don't get burned to a crisp neither. How do you do this? Just tell her, she's not your true love. Everyone knows it what happens when you
find... Hey! The sooner we get to Duloc, the better. Oh, yeah. You gonna love it there princess. It's beautiful. And what of my groom to be, lord Farquaad. What's he like? Well, let me put it this way, princess. Men of Farquaad's stature are in short supply. Oh no, Shrek. There are those who think little of him. Stop it. Stop it, both of you. You know, you're just jealous that you can never measure up to a great ruler like lord Farquaad. Yeah. Well maybe you're right princess. But I'd like you do that measuring when you see him tomorrow Tomorrow? It will take that long? -Shouldn't we stop to make camp? -No. That would take longer. We can keep going. But there are robbers in the woods. Whoa, time out Shrek. Camp is definitely something that sounds good. Hey. Come on. I'm scarier than anything we're gonna see in this forest. I need to find somewhere to camp, now! Hey, over here. Shrek, we can do better than that. Now, I don't think this is decent for princess. No, no, it's perfect. It just needs a few homey touches. Homey touches? Like what? A door. Well, gentleman I'll be d..., good night. Do you want me to come in and read you a bedtime story, 'cause I will... I said good night! Shrek! What are you doing? I just..., you know... Oh, come on, I was just kidding. And that one, that's Throwback. The only Ogre to ever spit over three wheat fields. Right. Yeah. Hey, can you tell my future form these stars? Well, the stars don't tell the future, Donkey. They tell stories. Look. There's Blodna, the "Flatulent" You can guess what he is famous for. All right. Now I know you're making this up. No. Look. There he is and there's the group of hunters running away from his stag. Man, there ain't nothing, but a bunch of little dots. You know donkey, sometimes things are more than they appear. Forget it. Hey Shrek. What are you gonna do when we get our swamp back, anyway? -Our swamp? -You know. When we're through rescuing the princess and all that stuff. We? Donkey, there is no we. There's no our. There's just me and my swamp. And the first thing I'm gonna do, is build a ten foot wall around my land. You cut me deep Shrek, you cut me real deep just now. You know, what I think? I think this whole wall thing is just a way to keep somebody out. No, do you think? -Are you hiding something? -Never mind Donkey. Oh, this is another one of those onion things, isn't it? No. This is one of those drop it and leave it alone things. -Why don't you want to talk about it? -Why do you want to talk about it? -Oh, Why you block? -I'm not blocking. -Oh yes you are. -Donkey, I'm warning you. -Who are you trying to keep out? Just tell me that Shrek. Who? Everyone, ok? -Oh, now we're getting somewhere. -Oh, for 'the love of pit'. Hey, what's your problem Shrek? What do you got against the whole world anyway? Look. I'm not the one with the problem, ok? It's the world that seems to have a problem with me. People take one look at me and go: AAA... Help! Run! A big stupid ugly Ogre. They judge me, before they even know me. That's why I'm better off alone. You know what? When we met, I didn't think you're just a big stupid, ugly Ogre. Yeah, I know. So, a... Are there any donkeys up there? Well, there's a Cabby. The small and annoying. Ok, ok. I see him, now. Big shining one, right there. That one, over there? That's the moon. Again. Show me again. Mirror, mirror, show her to me. Show me the princess. Perfect. Yeah. You know I like like that. Oh come on baby... -Donkey. Wake up. -What? -Wake up. Morning. How do you like your eggs? -Good morning princess. -What's all this about? You know, we kind of got of to a bad start yesterday and I wanted to make it up to you. I mean, after all, you did rescue me. Thanks. Well, eat up. We've got a big day ahead of us. -Shrek! -What? It's a compliment. Better out than in I always say. But that's no way to behave in front of a princess. -Thanks. -She's as nasty as you are. You know. You're not exactly what I've expected. Well, maybe you shouldn't judge people before you get to know them. Princess! What are you doing? ???mon shery, for I am your saviour. And I am rescuing you from this green...beast. Hey! That's my princess. Go find your own. Please, monster. Can't you see I'm a little busy here? Look, pal. I don't know who you think you are. Oh, of course. How rude that was. Please, let me introduce myself. Oh marry men! Man, that was annoying. Oh, you little... Shall we? ???all the forin??? Whoa, hold on, now. Where did that come from? -What? -That. Back there. That was amazing. Where did you learn that? Well, when one lives alone one has to learn these things in case there's a... There is an arrow in your butt. What? Oh, would you look at that. Oh, no... This is all my fault. I'm so sorry. -What's wrong? -Shrek's hurt. -Shrek's hurt? Shrek's hurt! -Oh, no. Shrek's going to die. -Donkey, I'm ok. You can't do this to me Shrek. I'm too young for you to die. Keep your legs elevated. Turn your head ???. -Does anyone
know how to handle... -Donkey! Calm down. If you want to help Shrek, run into woods and find me a blue flower with red thorns. Blue flower, red thorns. Ok, I'm on it. Blue flower, red thorns. Blue flower, red thorns. Don't die Shrek. And if you see a long tunnel, stay away from the light! -Donkey! -Oh, yeah. Right. Blue flower, red thorns. Blue flower, red thorns. -What are the flowers for? -For getting rid of the Donkey. Now, you hold still and I'll yank this thing out. -Hey! Easy with the yanking. -I'm sorry, but it has to come out. No, no. It's tender. What you're doing here is the opposite... -Don't move. -Ok, look. Time out. -Would you... Ok. What do you propose we do? Blue flower, red thorns. Blue flower, red thorns. Blue flower, red thorns. This would be so much easier if I wasn't colorblind. Blue flower, red thorns. Blue flower, red thorns. Hold on, Shrek. I'm coming! Not good. Ok, ok, I can lose it. It's just about it. Nothing happened. We were just a... Look if you want to be alone, all you had to do is ask, ok? Oh, come on. That's the last thing on my mind. The princess here was just... Au! Hey, what's that? Is that... There it is, princess. -Your future awaits you. -That's Duloc? Yeah. I know. You'll shrink things lord Farquaad is compensating for something, which I think needs, he has a I guess we better move on. Sure, but Shrek... -I'm worried about Donkey. -What? I mean. Look at him. He doesn't look so good. -What are you talking about? I'm fine. -Well, that's what they always say. And the next thing you know you're on your back. -Dead! -You know she's right. You look awful. -Do you want to sit down? -You know, I'll make you up some tea. Well, I won't say nothing, but I've got this twinge in my neck. And if I turn my neck like this, look. Au, see? -He's hungry. I'll find us some dinner. -I'll get the firewood. Hey, where are you going? Oh man, I can't feel my thumbs. I don't have any thumbs!!! I think I need a hug. This is good. This is really good. -What is this? -Wheat rat. -Rotisserie style. -No kidding. -Oh, this is delicious. -Well, they also great in stews. Now, I don't mean to brag, but I make a mean wheat rat stew. I guess I'll be dining a little different late tomorrow night. Maybe you can come visit me in the swamp sometime. I'll cook all kinds of stuff for you. Swamp toast, soup fish, eye tartar. You name it. I'd like that. -Ah... , princess? -Yes, Shrek? I'm a.... I was wondering. Are you... a... Are you gonna eat that? Man, isn't this romantic. Just look at that sunset. Sunset?! Oh, no. It's late. It's very late. -What? -Wait a minute. I see what's going on here. You're afraid of the dark. Aren't you? Yes, yes. That's it. That's, I'm terrified. You know I'll better go inside. But don't feel bad, princess. I used to be afraid of the dark too. Until... Hey, no, wait. I'm still afraid of the dark. -Good night. -Good night. Ahh. Now I really see what's going on here. Oh, what are you talking about. Hey I don't wanna even hear. Look, I'm an animal and I got instincts. And I know that you two are digging on each other. I can feel it. Oh, you're crazy. I'm just bringing her back to Farquaad. Oh, come on, Shrek. Wake up and smell the fairemones. Just go in there and tell her how you feel. There's nothing to tell. Besides, even if I did tell her that... well you know. I'm not saying that I do, 'cause I don't. She's a princess and I'm... ...an Ogre. Yeah, an Ogre. -Hey, where are you going? -To get more firewood. Princess. Princess Fiona? Princess, where are you? Princess? It's very spooky in here and are we playing little games. -No, no. -Help! Shrek! Shrek! -No. -Shrek! -It's ok. It's ok. -What did you do with the princess? -Donkey, shhh. I'm the princess. -It's me, in this body. -Oh my god. You ate the princess. -Can you hear me? -Donkey! Listen, keep breathing. I'll get you out of there! Shrek! Shrek! Shrek! This is me. Princess? What happened to you? You're a... different. -I'm ugly, ok? -Yeah. Was it something that you ate? 'Cause I told Shrek those rats were a bad idea. -You are what you eat, I say. -No. I've been this way as long as I can remember. What do you mean? Look, I've never seen you like this before. It only happens when the sun goes down. By night one way, by day another. This shall be the norm until you find true love's first kiss. Then, take love's true form... -Oh, that's beautiful. I didn't know you wrote poetry. -It's the spell. When I was a little girl, a witch cast a spell on me. Every night I become this. This horrible ugly beast. I was placed in a tower to await the day when my true love would rescue me. That's why I have to marry lord Farquaad tomorrow, before the sun sets and he sees me, like this? All right, all right. Calm down. Look, it's not that bad. You're not that ugly. Wait, wait, I'll not lie, you are ugly. But you only look like this at night. Shrek's ugly 24/7. But Donkey, I'm a princess. And this is not how a princess is meant to look. Princess. How about if you don't marry Farquaad? I have to. Only my true love's kiss can brake the spell. But you know,
you're kind of an Ogre. And Shrek... Well you've got a lot in common. Shrek? Princess, I... How is it going first of all? Good? Good for me to. I'm ok. I saw this flower and thought of you because it's pretty. And, well, I don't really like it, but I thought you may like it, because you're pretty. But I like you anyway. A.... I'm in trouble. Ok, here we go. Who could ever love a piece so hideous and ugly? Princess and ugly don't go together. That's why I can't stay here with Shrek, but only chance to live happily ever after is to marry my true love. Don't you see, Donkey? That's just how it has to be. It's the only way to break the spell. Well, at least you've got tell Shrek the truth. No, no. You can't breathe the word. No one must ever know. What's the point of being unable to talk? You got to keep secrets. Promise you won't tell. Promise! You know, before this is over, I'm going to need whole lot of serious therapies. All right, all right. I won't tell him. But you should. Look at my eye twitching. I tell him, I tell him not. I tell him. I tell him not. I tell him! Shrek! Shrek! There's something I want ... Shrek. Are you all right? Perfect. Never been better. I... There's something I have to tell you. You don't have to tell me anything, princess. I heard enough last night. -You've heard what I said? -Every word. I thought you'd understand? Oh, I understand! Like you said, who could love a hideous, ugly beast! -I thought that wouldn't matter to you. -Yeah, well, it does. Ah, right on time. Princess. I brought you a little something. What I missed? What I missed? -Princess Fiona. -As promised. Now hand it over. Very well, Ogre. The deed to your swamp. Cleared out as agreed. Take it and go. Before I change my mind. Forgive me princess for startling you, but you startled me. For I've never seen such a radiant beauty before. -I am lord Farquaad. -Lord Farquaad? Oh, no, no... forgive me my lord for I was just saying short... farewell. Oh. That is so sweet. You don't have to raise good manners on the Ogre. -It's not like it has feelings. -No. You're right. It doesn't. Princess Fiona, beautiful fair flawless Fiona, I ask your hand in marriage. Will you be the perfect bride for the perfect groom? Lord Farquaad, I accept. Nothing would make... Excellent! I'll start the plans for tomorrow we wedd... No! I mean I... Why wait? Let's get married today. Before sunset. Oh, anxious are we? You're right. The sooner, the better. There's so much to do. There is the camera, the cake, the band, the guests... Captain! Round up some guests. Farewell Ogre. Shrek, what are you doing? You let her get away. -Yeah, so what. -Shrek. There's something about her that you don't know. -I talked to her last night. She's... -Yeah I know you talked to her last night. You're great pal, aren't you? Now, if you two are such good friend, why didn't you follow her home? -Shrek. I want to go with you. -I told you, didn't I? You're not coming home with me. I live alone. My swamp, me and nobody else! Understand? Nobody! Especially useless, pathetic, annoying, talking donkeys! -But. I thought... -Yeah. You know what? You thought wrong. Shrek. Donkey? What are you doing? I was thinking of all the people, you would recognize a wall when you see one. Well, yeah. But the wall supposed to go around my swamp. Not through it. It is around your half. See? That's your half and this is my half. Oh, your half? Yes, my half. I helped rescue the princess. I did half the work. I get half the booty. Now hand me that big old rock, the one that looks like your head -Back off! -No. You back off! -This is my swamp. -Our swamp. -Let go, Donkey! -You let go! -Stubborn jackass. -Smelly Ogre. Fine! Hey, hey, come back here. I'm not through with you, yet. -Well, I'm through with you! -Well, you know. You were always me, me, me. Well, guess what? Now it's my turn! So you just shut up and pay attention! You are mean to me, you insult me, you don't appreciate anything that I do! You're always pushing me around or pushing me away. Oh, yeah? Well, if I treated you so bad, how come you came back? Because that's what friend do. They forgive each other! Oh, yeah. You're right Donkey. I forgive you for stabbing me in the back! You're so wrapped up in layers, onion boy. You're afraid of your own feelings. -Go away. -See? There you are, doing it again. Just like you did it to Fiona. And all she ever do, was like you. Maybe even love you. Love me? She said I was ugly! A hideous creature. -I heard that you two were talking. -She wasn't talking about you. She was talking about... ...somebody else. She wasn't talking about me? Well then, who was she talking about? No way, I'm not saying anything. You won't listen to me, right? Right? -Donkey. -No! Ok, look. I'm sorry, all right? I'm sorry. I guess I am just a big stupid, ugly Ogre. Can you forgive me? -Hey, that's the friends are for, right? -Right. -Friends? -Friends. So? What did Fiona said about me? Why are you asking me for? Why don't you just go ask her. The wedding! We'll never make it in
time! Never fear! For where there is a will, there is a way. And I have I way. Donkey? -I guess this is just my act of magnetism. -Oh, come here, you. All right. All right. Don't get all started. No one likes kissass. All right, hop on. Hold on tight. I hadn't have a chance to install seat belts, yet. People of Duloc. We gather here today to bear witness to reunion of our new king... Excuse me. Could you just skip ahead to "I do's"? Go on. Go ahead and have some fun, if we need you, I'll whistle. How about that? Shrek, wait, wait a minute. You want to do this right, don't you? -What are you talking about? -It's the line, it's the line you got to wait for. The priest is going to say: "Speak now or forever hold your peace". And that's where you say: "I object". -I don't have time for this. -Wait, wait. What are you doing? Listen to me! Look, you love this woman, don't you? -Yes. -You want to hold her! -Yes. -Please her! -Yes! Then you got to, got to try a little tender love. -The chicks love that romantic crap. -All right. Cut it out. When does this guy say the line? We got to check it out. And as so by the power of these two... What do you see? -I now pronounce you... -There they go! -...he all ready said it. -Oh, for 'the love of pit'. I object! Shrek? Oh, now what does he want? Hi, everyone. Having a good time, aren't you? I love Duloc, first of all. Very clean. -What are you doing here? -Really, it's rude enough being alive, when no one wants you. But showing up uninvited to a wedding... -Fiona! I need to talk to you. -Oh, now you wanna talk? Well it's a little late for that. So if you'll excuse me. -But you can't marry him! -And why not? Because, because he's just marrying you so he can be king. -Outrageous! Fiona, don't listen to him. -He's not your true love. -What do you know about true love? -Well, I ...I'm in... Oh, this is precious. The Ogre has fallen in love with the princess. Laugh. Shrek. Is this true? Who cares. It's preposterious. Fiona, my love, we gonna kiss away for our happily ever after. Now kiss me! By night one way, by day another. I wanted to show you before. Well. That explains a lot. Oh. It's disgusting. Guards, guards. I order you to get them out of my sight. -Now! Get them! Get them, both! -No! This marriage is minding, and that makes me king. See? See? -Shrek! -No. -Don't just stand there, you dogs. -Get out of my way. No! Shrek! -And as for you my wife. -Fiona! I'll have you locked back in that tower for the rest of your days! I will have order. I will have potential. I will have... All right, nobody move! I got a dragon here and I'm not afraid to use it. I'm a donkey on the edge! Celebrity marriages. They never last, do they? Go ahead Shrek. -Fiona? -Yes, Shrek? I love you. Really? Really, really. I love you too. A time for true love's first kiss... Fiona? Fiona? Are you all right? Yes. But I don't understand. I'm supposed to be beautiful. But you are beautiful. I was hoping this would be a happy ending. God bless us, everyone.
*/

/*
(In the beginning, the island of Madagascar appears in a daydream. A zebra yells like Tarzan and jumps out the vine after swinging it. The choir penguins in their black bowties singing Born Free by John Barry and they fly. He runs and jumps to the water in slow motion. A lion appears, sneaking towards the zebra as almost in the middle of a dream, he jumps up snapping him out of his dream.)

Alex: Surprise!

Marty: (screaming, falls from treadmill and crashes into a fence) Alex! Do not interrupt me when I’m daydreaming! When a zebra’s in the zone, leave him alone.

Alex: Come on, Marty. Just wanted to wish you a happy birthday!

Marty: (Chuckles) Hey, man. Thanks!

(Alex expresses pain on the right side of his jaw)

Alex: Oh, ah! Oh! Hey, um... I got s—I got something stuck in my teeth. It's driving me crazy! Can you help me out here? Please?

Marty: Ah! You came to the right place, my friend. Doctor Marty, D.D.S., is in the house! Please hop on top of my sterilized examination table, if you may.

(Alex opens the mouth, but Marty can't see anything, because it's dark)

Marty: I don't see anything.

Alex: (Muffled) It's on the left.

Marty: Ow!

Alex: (Muffled) Oh, sorry.

Marty: Okay, just don't talk with your mouth full. (Alex nods) Aha! Right here. (takes out a snow globe and holds it) What the heck is this doing in there?

Alex: Happy birthday!

Marty: Aww, hey, thanks, man. You put it in behind the tooth. You all right.

Alex: These aren't even on the shelf yet. Here! Check it out. Check it out! Look at that. Ooh! Look at that! Ooh!

Marty: Look at that. It's snowing.

Alex: Ten years old, huh? A decade. Double digits. The big 1-0! You don't like it?

Marty: No, no, it's great!

Alex: You hate it. Ugh! I should've gotten you the Alex alarm clock. That's the one. That’s the big seller.

Marty: No, no, no. The present's great, really. It's just that another year's come and gone and I'm still doing the same old thing. (imitating) "Stand over here. Trot over there. Eat some grass. Walk back over here."

Alex: I see your problem.

Marty: Maybe I should go to law school.

Alex: You just need to break out of that boring routine.

Marty: How?

Alex: Throw out the old act. Get out there! Who knows what you're gonna do. Make it up as you go along. Ad lib. Improvise. On the fly. Boom, boom, boom!

Marty: Really?

Alex: You know, make it fresh.

Marty: Fresh, huh? OK. I could do fresh.

Alex: Works for me.

[Earth, Wind and Fire's Boogie Wonderland plays as the statue monkeys ring the bell at the front of the zoo ring at the zoo's opening hour at 9:00 AM. The People are coming! Alex bursts with excitement about them!]

Alex: Here come the people, Marty! Oh, I love the people! It's fun people fun time! Whoo!

(Alex hops into a hippo's habitat and tap dances on her butt)

Alex: Let's go, Gloria! Up and at 'em! We're open!

Gloria: (yawning) What day is it?

Alex: It's Friday! Field trip day! Dadadadada! Boom! Let’s go! Come on!

Gloria: Yes, it's field trip day. Let's get up and go... (falls asleep again) in 10 more minutes.

(ricocheting off a lamppost, Alex arrives at the roof of a pen. A timid giraffe with constant health problems, or so he thinks)

Alex: Come on! (sings in Conga style) Melman, Melman, Melman! Melman, Melman, Melman! Wake up! Rise and shine! It's another fabulous morning in the Big Apple. Let's go!

Melman: (scoffs) Not for me. I'm calling in sick.

Alex: What?

Melman: I found a brow-- another brown spot on my shoulder. Right here. See? Right th- Right there. You see?

Alex: Melman, you know it's all in your head. Hmm?

[Kids and adults burst through the zoo gates eager to view the animals and Alex.]

Kid: Let's go! Come on!

[As rushed parents threw away their coffee cups in the trash, Mason the chimp yawns, retrieves a newspaper, a half-empty coffee cup, and a bagel and returns to his roommate Phil, a mute chimp who doesn't speak.]

Mason: Phil! Wake up, you filthy monkey. (Mason gives Phil his coffee while he reads the newspaper and eats his bagel. Meanwhile, Marty prepares to give his audience something special for his birthday.)

Marty: Oh, I'm going to be fresh. Straight out the ground. Tasty fresh! Freshalicious. (sips some water and spits it out) Ziploc fresh.

[an eager crowd awaits outside Alex's rock as they wait for their king to emerge]

Announcer: (on intercom) Ladies and gentlemen, children of all ages, the Central Park Zoo proudly presents:

Kids: (chanting) Alex! Alex! Alex! Alex!

[backstage Alex prepares himself for another day of people pleasing]

Alex: Oh! Show them the cat! Who's the cat? Whoo!

Announcer: The king of New York City.

Both: Alex the Lion!

Alex: (roars) Ahhhh!

Marty: It's showtime! (simultaneously as Alex emerges and turns on the fan blowing his mane)

[Alex emerges on his rock and lets out his signature roar.]

Alex: Roar!!!

[Crowds go wild! This is what he lived for! The cameraman takes pictures of him. Meanwhile, folks gather around Marty's pen to see his act.]

Marty: Gather around, people. Big show about to start. Check out the zebra taking care of biz. That's right.

[sucking up some water, Marty performs impossibly impressive water tricks with his mouth then sprays at 3 adults. This amazes the kids and attracts photographers to take pictures of him. A series of pictures show Gloria swimming tricks and Melman's MRI and medication treatments. On another side of the zoo, the four penguin brothers who are also agents, Skipper, Kowalski, Rico, and Private are plotting something of their mission...]

Skipper: Just smile and wave, boys. Smile and wave. Kowalski, progress report!

[Kowalski, the brains of the group, emerges from a hole dug out previously by the penguins]

Kowalski: We're only 500 feet from the main sewer line.

Skipper: And the bad news?

Kowalski: We've broken our last shovel. (shows a broken spoon)

Skipper: Right. (turns to his weapon specialist Rico) Rico, you're on litter patrol. We need shovels. And find more Popsicle sticks. We don't want to risk another cave-in. (Rico jumps in the pool)

[Private, the youngest of the group, perks up]

Private: And me, Skipper?

Skipper: I want you to look cute and cuddly, Private. Today we're gonna blow this dump.

(Rico snatches a plastic spoon from a boy eating his frozen yogurt. Marty, meanwhile at sunset, impresses his last fans by making fart noises with his arm pits.)

Marty: Yeah! You don't see that on Animal Planet! Ha-ha. (mesmerized kids are hauled away by disgusted and confused parents) Well, show's over, folks. Thanks for coming. I hope you thought it was fresh. I'll be here all week. In fact, I'll be here for my whole life. 365 days a year, including Christmas, Hanukkah, Halloween, Kwanzaa. Please don't forget to never spay or neuter your pets. (sips on his beverage) And tip your cabbie, because he's broke.

[suddenly a pair of shovels dig up from the ground and the penguin brothers emerge]

Skipper: You, quadruped. (In German) Sprechen sie Englisch?

Marty: I sprechen.

Skipper: What continent is this?

Marty: Manhattan.

Skipper: Hoover Dam! We're still in New York. Abort. Dive! Dive! Dive!

Marty: Hey, hey! You in the tux! Wait a minute! What are you guys doing?

Private: We're digging to Antarctica. (receives a slap from Skipper to silence him)

Marty: Ant-who-tica?

Skipper: Can you keep a secret, my monochromatic friend? (Marty nods and leans down to listen a little secret without the others noticing) Do you ever see any penguins running free around New York City? (he shakes his head for no) Of course not. We don't belong here. It's just not natural. This is all some kind of whacked-out conspiracy. We're going to the wide-open spaces of Antarctica. To the wild! (the four high five each other as Skipper slaps Private again.)

Marty: The wild? You could actually go there? That sounds great. (before he can thank them, the four have already gone down the hole) Hey, hold up! Where is this place?! (Muffled) Tell me where it is! (Skipper alone emerges from the hole pushing his face)

Skipper: You didn't see anything... Right?

Marty: Yes, sir! Oh! Uh, I'm sorry. No, sir. (Skipper dives back into the hole and seals the hole entrance with Marty's cup)

Announcer: For his final appearance of the day, the king of New York City. Alex the Lion!

Alex: Roar!!!

[And the bells are ringing, because it's time to go home and close the Zoo.]

Alex: Thank you. Thank you very much. You guys are great. You're a great crowd. Give yourselves a hand, huh. Thank you. (underpants flies in his face) Oh. Thank you. Oh! Well. Thank you. Oh, that's too kind. Too kind. (sling shoots the I Heart NY undies which land on Melman's nose)

Melman: Aah! Underpants!!

Alex: (humans leave the zoo) Everybody get home safe. Hey! Check out my Website. Twenty-four hour Alex Cam. Watch me sleep.

ADVERTISEMENT

Scene 2: Marty's 10th birthday begins
[Dusk hits the zoo, and the staff roams the zoo with a band of chefs and groomers to relax the exhausted animals of their hard work. Marty gets his hooves polished like shoes and receives a fresh patch of green grass from the chef as a birthday meal.]

Gloria: This is the life. (Gloria receives a wide variety of fruit for her meal while drying in a big towel and polish nails for a massage.)

Melman: (Melman is still getting medical treatment) That's the spot. (a chef reveals a tray full of medications and vitamins to make him feel better) Oh! I'm in heaven.

[Alex seems to get the most treatment out of all the animals and receives mane grooming, nail trimming, and a full pack of steak meal; which he devours in a number of seconds, leaving a bone. And later that night, the four friends gather through a small party to celebrate Marty's 10th birthday]

Gloria: Ooh, happy birthday!

Alex: Just rip it open. Come on!

Marty: What is it? What is it?

Gloria: Come on. Open it up. What you get? What you get? What you get?

Marty: Yeah! A thermometer. Thanks. I love it, Melman. I love it. (puts it in his mouth with style)

Melman: Yeah, I wanted to give you something personal. You know, that was my first rectal thermometer.

Marty: Mother-?! (Marty proceeds to gag at the thought and spits out the thermometer while licking his tongue)

Melman: I'll miss that bad boy.

Alex: Okay. Get the cake. Melman, come on.

Everyone but Marty: ♪ Hmmmm… ♪

Alex: Happy

Gloria: birth-

Melman: day

Alex: to

Gloria: you.

Alex: You

Melman: live

Gloria: in

Alex: a zoo.

Gloria: You

Melman: look

Alex: like a

Melman: mon-

Alex: key.

Melman: (holds long note) Aaaaand

Alex: you smell

Gloria: like  

Melman: one

Everyone: too!

Mason: (spits out his coffee) I say!

Phil: (Smells his armpits and faints)

Marty: Aw, well, now, you guys are just embarrassing me. And yourselves.

Alex: What are you talking about? We worked on that all week.

Gloria: Let's go. Let's make a wish, babycakes.

(Marty blows out the candle shaped like a 10 then takes a big bite)

Alex: Come on. What'd you wish for?

Marty: Nope. Can't tell you that.

Alex: Come on. Tell.

Marty: No, siree. I'm telling you, it's bad luck. You want some bad luck, I'll blab it out. But if you want to be safe, I'll keep my mouth shut.

Gloria: Oh, for crying out loud, Marty. Would you just tell us? I mean, really. What could happen?

Marty: OK. I wished I could go to the wild!

Alex: The wild?! Whoa! (falls over)

(Melman swallows the party tooter and chokes)

(Gloria drops her jaw and Alex thuds)

Marty: I told you it was bad luck.

(Then Gloria tries to get the tooter out of Merman's throat)

Alex: The wild? Are you nuts? That is the worst idea I've ever heard.

Melman: (coughs) It's unsanitary.

Marty: The penguins are going. So why can't I?

Alex: The penguins are psychotic.

Marty: Come on. Just imagine going back to nature. Back to your roots. Clean air, wide-open spaces!

Gloria: Well, I hear they have wide-open spaces in Connecticut.

Marty: Connecticut?

Melman: Yeah. What you got to do is you got to go over to Grand Central. Then you got to take the Metro-North train... north?

Marty: So one could take the train? Just hypothetically.

Alex: Marty, come on. What would Connecticut have to offer us?

Melman: Lyme disease.

Alex: Thank you, Melman.

Marty: No, no, really! Really, I just want...

Alex: There's certainly none of this in the wild. Plus, this is a highly refined type of food thing that you do not find in the wild.

Marty: You ever thought there might be more to life than steak, Alex?

Alex: He didn't mean that, baby. No, no, no.

Marty: Doesn't it bother you guys that you don't know anything about life outside this zoo?

Melman: Nuh-uh.

Gloria: Mmm-mm.

Melman: Nope.

Alex: Well. I mean, come on. That's just one subject. You got a little, uh, you got a little schmutz right there on your... (eats his steak)

Marty: (Sighs and uses a napkin to clean his mouth) Thanks, guys. Thanks for the party. It was great. Really. (Alex spits a bone and drops it as Marty uses the treadmill)

Melman: What's eating him?

Gloria: (whispered) Maybe you should talk to him, Alex. You know, go over there and give him a little pep talk.

Alex: Hey, I already gave him a snow globe. I can't top that.

Gloria: (Sighs) Alex…

Melman: I can see where this is going. (Yawns) It is getting late. I guess I'm gonna... (snores)

Gloria: (whispered) Come on. He's your best friend.

Alex: All right, all right. OK.

Gloria: Night, Marty.

Marty: Night, Glo.

(Gloria backflips into her pool. Alex takes out an umbrella to avoid the chlorine)

Alex: Ahhh… What a day. I mean, just really, really I mean I tell you, it just doesn't get any better than this, you know? Ooh! It just did. Even the star's out. Not going to find a star like that in the wild.

Marty: Helicopter. (it flies away)

Alex: Marty. Buddy. Listen. Everybody has days when they think the grass might be greener somewhere else.

Marty: Alex. Look at me. I'm 10 years old. My life is half over. And I don't even know if I'm black with white stripes... or white with black stripes.

Alex: Marty. I'm thinking of a song.

Marty: Alex. Please. Not now.

Alex: Oh, yes. It's a wonderful song. I think you're familiar with it. ♪ Da da da da da! Da da da da da! Da da da da da! Da! ♪

Marty: Oh, no. Oh, no, you don't. No, no, no. I'm not listening! Lalalalalalalalalalala!

Alex: ♪ Start spreadin' the news ♪

Marty: I don't know you!

Alex: ♪ I'm leaving today! We are a great big part of it ♪

Marty: (Laughs) He's funny. Who is that?

Alex: Come on. You know you know the words. Two little words.

Marty: New York.

Both: ♪ New York! ♪

Bird: Shut up, shut up, shut up!! Hey, I'm sleeping here! We're not all nocturnal, you know!!

Marty: Hey, I'll knock your "turnal" right off, pal.

Snake: Yeah, you and what army, stripes?

Alex: You mess with him, you mess with me, Howard!

Marty: Ah ha ha ha!

Unknown Animal: You're a bigmouth lion!

Alex: See? Mr. Grumpy Stripes! We make a great team, the two of us.

Marty: We sure do. No doubt about it.

Alex: So, what are you going to do? Just go running off to the wild by yourself?

Marty: No.

Alex: Good.

Marty: You and me. Let's go.

Alex: What?

Marty: The wild. Come on. You and me together. It's a straight shot down Fifth Avenue to Grand Central. We'll grab a train, we'll head north. We can be back by morning. No one will ever know.

Alex: (Chuckles) You're joking. Right?

Marty: (Chuckles) Yeah. I'm joking. Of course I'm joking. Give me a break. Like we're going to get a train.

Alex: (Chuckles) Oh. (Sighs) Don't do that. You really had me worried there.

Marty: (Yawning) Oh, well. I guess I'll hit the sack.

Alex: Yeah, me too. I'll need to rest my voice for tomorrow. It's Seniors' Day, you know. Have to roar extra loud. Give them a little jolt! You know what I’m talking about?

Marty: Good night, Ally Al.

Alex: (Sighs and claps twice to turn on the red light and hears a bird) Oh. They forgot to turn off the ambiance again!

Marty: Don't worry. It's cool. You know, I got it. (kicks the speaker, shooing the bird away as it now turns to the sounds of the Police)

Alex: Ah. Much better. (2 hours later) Come on, now, baby. My little filet. My little filet mignon with a little fat around the edges. I like that. I like a little fat on my steak. My sweet, juicy steak. You are a rare delicacy.

[Melman poked his head in Alex's pen.]

Melman: Alex. Alex. Alex. Alex. Alex!

Alex: What? What?

Melman: You suck your thumb?

Alex: (sighs) What is it, Melman?

Melman: Okay, okay. (Sighs) You know how I have that bladder infection and I have to get up every two hours? Well, I got up to pee, um, and looked over at Marty's pen, which, you know, I usually don't do. I don't know why, but I did. And this time I looked over and...

Alex: What, Melman? What's going on?

Melman: It's Marty. He's gone.

Alex: Gone?! (Hits in his head) Agh! What do you mean, "gone"?!

Melman: (Looks at the hole that the penguins were in) How long has he been working on this?? Marty! Marty!!

Gloria: He wouldn't fit down there.

Alex: (tries to look for Marty in the haystacks, noticing that he isn't there) Marty? Marty?! Marty! Marty!!

Gloria: This doesn't make any sense. Where would he go?

Alex: (in terror) Connecticut!!

Gloria: He wouldn't.

Melman: Oh, no! What are we going to do? We gotta-- we gotta-- I mean, we gotta-- we gotta-- we gotta call somebody!

Alex: (Gasps as he calls 911 on the phone) Hello?! Get me Missing Animals!! And hurry! We've got a lost zebra probably on the way to Connecticut by now, and we're gonna need...!!

Police: (only hears Alex roaring) Hello? Hello?

Alex: Wait a second. We can't call the people.

Police: What the...?!

Alex: (takes the phone and throws it out) They'll be really mad! It'll get Marty transferred for good. You don't bite the hand that feeds you.

Gloria: Mm-hmm. I know that's right.

Alex: We got to go after him.

Melman: Go after him?

Alex: He's not thinking straight. We gotta stop him from making the biggest mistake of his life. He's probably out there lost and cold, confused. (sadly sighs) Poor little guy.

[The Bee Gees's Stayin’ Alive is playing while Marty walks through New York]

(Alex tries to land while he grabs Melman, but he falls down)

Gloria: (bursts through the zoo wall) Melman, come on!

Melman: You know, maybe one of us should wait here in case he comes back.

Gloria: Oh, no. Not now. This is an intervention, Melman. We all got to go for Marty.

Alex: What's the fastest way to Grand Central?!

Melman: Ooh! You should take Lexington.

Gloria: Melman!!

Melman: OK. "We." We should take Lexington.

Alex: What about Park?

Melman: No, Park goes 2 ways. You can't time the lights.

Mason: I heard Tom Wolfe is speaking at Lincoln Center.

Phil: (in sign language) Are we gonna throw poo at him?

Mason: Well, of course we're going to throw poo at him.

(Marty does ice skating then falls. Alex, Gloria, and Melman were at the Subway train station)

Alex: I knew we should've taken Park. Are you sure this is the fastest way to Grand Central Station?

Gloria: I don't know! That's what my buddy said.

Melman: Hey. Hey, you, guys. That room has some nifty little sinks you can wash up in and look! (sticks out tongue with a blue peppermint) Free mints!

Alex: This isn't a field trip, Melman! This is an urgent mission to save Marty from throwing his life away! Now, where's the train?

Melman: Ah, Here it comes. (He hears the train and looks to the other side, screaming as the train hits his head as the warning horn blares)

Gloria: What did Marty say to you? I asked you to talk to him.

Alex: I did! I did! I don't understand! He said, "Let's go." And I said, "What are you, crazy?" And he says, "I'm ten years old." And he is black with white stripes, and so then we sang and... (people screaming and running away thinking they're getting attacked)

Police Horse: What you got to do is go straight back down West 42nd.

Marty: Uh-huh.

Police Horse: It's on your left after Vanderbilt.

Marty: Okay.

Police Horse: If you hit the Chrysler Building, you've gone too far.

Marty: Uh-huh. Thanks a lot, officer.

Police Horse: Hey! Wait for the light! Freak.

Police radio: Did you say "zebra"?

Police Officer: Yeah, yeah, that's right. A zebra. Right in front of me. Can I shoot it?

Police radio: Negative.

Police Officer: Then I'm going to need some backup.

(At the subway, Alex and his gang are on inside it as Alex sees a frightened man reading his newspaper about basketball game.)

Alex: (reads a frightened man's sports paper then roars) Aww! Knicks lost again.

Melman: What are you going to do?

Conductor: Grand Central Station.

Alex: Did that just say "Grand Central Station" or "my aunt's constipation"?

Gloria: This is it.

Marty: Grand Central Station. It's grand and it's central.

Melman: Ow, ow, ow, ow, ow, ow, ow, ow, ow, ow, ow! (squeezes his head out of the train doors, hits the ceiling sign and destroys a man's drum set)

Alex: (more people screaming and running away) Move aside. We have an emergency here. This is an emergency situation. No need. Hey, hey. Just chill out. It's not that big of an emergency. Hey! Hey! Would you-? Hey! Aah! Ooh!

Nana: (Hitting Alex with her handbag, kicks his crotch, and sprays in his eyes) Upstairs, downstairs! How do you like that?! Yah!

Alex: Ooh! Lady, what is wrong with you?! (gets hit by her bag twice) Ow! Get a grip on yourselves, people!

Nana: (notices that lion can talk) You're a bad kitty!

Announcer: The next train to Connecticut has been…

Marty: (angrily) Dagnabbit! I missed the express! (then calms himself down for another plan) Looks like I’m gonna have to take the Stamford local. Aah!

(Suddenly, Alex tackles Marty in victorious)

Alex: I got him! I've got him!

Gloria: He's got him!

Melman: He's got him! He's got him! He's got...

Nana: I got something for you! (hits Melman with her bag)

Melman: Whoa, whoa, whoa, whoa! (crashes into a clock that reads 12:21 AM) I'm OK. I'm OK. I'm OK.

Marty: Whoa! What are you guys doing here?

Alex: Oh! I am so glad we found you.

Gloria: We were so... worried about you.

Marty: Don't worry, I'm fine, I'm fine. Look at me. I'm fine.

Alex: You're fine? Oh, he's fine. Oh, great. Hey, you hear that? Marty's fine. Ah. That's good to know. 'Cause I was just wondering, uh... (now becomes desperate, disappointed and frustrated about the escape) HOW COULD YOU DO THIS TO US, BUDDY?!?! I thought we were your friends!!!

Marty: WHAT'S THE BIG DEAL!!! I WAS COMING BACK IN THE MORNING!!!

Alex: Don't you ever do this again!! Do you hear me?!

Gloria: Do you hear him?!

Melman: (with the clock on his head) Guys? We're running out of time.

Gloria: Oh, Melman, you broke their clock?!

Alex: Do you even realize what you've put us through?! Don't you ever do this again! Don't you ever, ever do this again!!

[Grand Central Station goes dark as the Police and Firemen are called]

Gloria: Don't--Come here! (grunting and panting as she tries to remove the broken clock off Melman's head until the police came to stop them while Skipper and his agents are reading a newspaper)

Skipper: We've been ratted out, boys. (they raise their arms)

Police: Hold your fire! (points guns at the animals as firefighters use their hoses and Nana also came with a drummer)

Skipper: Cute and cuddly, boys. Cute and cuddly.

Mason: (gets caught by the police with Phil) If you have any poo, fling it now.

Marty: (Whispering) It's the Man. (Loudly) Good evening, officers!

Alex: No. No. Nope. You don't talk now. OK? You're not so good with the "putting the words together and they’re coming out good" thing. You keep it "shh"! (turns to the people) Hey! How you doing? Yeah. You know what? Everything's cool. We just, uh, had a little situation here. (The Police push an Animal Control, but he's frightened of Alex, so the Police use their shields to block the sacredly man's path that he's not going anywhere) Little internal situation. Actually, my friend just went a little crazy. It happens to everybody. The city gets to us all. Just went a little cuckoo in the head.

Marty: Hey! Don't be calling me cuckoo in the head.

Alex: Just shush! I will handle this. Ooh!

Nana: (kicks Alex in between the legs) Oh, I got him!

Police: Go, go, go! (pulls Nana away) Right here, please.

Alex: Oh! Would you give a guy a break? Ah! We’re just gonna take my little friend here home and... uh, forget this ever happened. All right? No harm, no foul, right? (policemen and animal control feel shocked) Oh, no, no, no. Hey, it's cool. It's me, Alex the lion. From the zoo. Rrrr! (roars, scaring the people and the Animal Control) Rrrr! What's the matter with them? (gets shot in the butt by a purple tranquilizer dart) Ow! Ow… (Starts to faint) Wow! Whoo! I feel really, really weird. Hey! Aw. I love you guys. (in slow motion) I love you so much...

[Sammy Davis Jr.: The Candy Man plays in Alex's dream]

News Reporter: Last night's dramatic incident in Grand Central is an example of what animal rights wackos have been shouting for years: The animals clearly don't belong in captivity. Now they are to be sent back to their natural habitat, where they will live their lives in the freedom they so clearly desire.

Alex: (sticks out his hand weakly) Hey. Little help?

Guard: (audience runs away) He's awake! He's awake, aah! (shoots more tranquilizer darts with different colors, the blue one lands in the middle of his palm revealing it to the viewers)

Reporter: DO SOMETHING!!!!

Alex: Oh, man...

[Alex's The Candy Man dream plays again, but speeded up]

Alex: (his eyes glow in the dark) Ugh… Oh, my head. (Bumps his head) Oh! Ah! What the...? Wait. Where...? What...? I'm in a box! Oh, no. No, no! Not the box. Oh, no, they can't transfer me. Not me! (Whimpering) Oh, I can't breathe. I can't breathe. Darkness creeping in. I can't breathe. I can't breathe. Walls closing in around me. So alone. So alone.

Marty: (his eyes open) Alex! Alex, are you there?

Alex: Marty?

Marty: Yeah! Talk to me, buddy.

Alex: Oh, Marty! You're here!

Marty: What's going on? Are you OK?

Alex: This doesn't look good, Marty.

Gloria: (her eyes open) Alex? Marty, is that you?

Marty: Gloria!

Alex: You're here too!

Marty: I am loving the sound of your voice!

Gloria: What is going on?

Alex: We're all in crates.

Gloria: Oh, no! Wha...?

Melman: (opens his eyes) Oh… Sleeping just knocks me out.

Gloria: Melman!

Alex: Melman!

Marty: Is that Melman?

Gloria: Are you OK?

Melman: Yeah. No, I'm fine. (Yawning) I often doze off while I'm getting an MRI.

Alex: Melman, you're not getting an MRI.

Melman: CAT scan?

Alex: No! No CAT scan. It's a transfer. It's a zoo transfer!

Melman: Zoo transfer?! Oh, no. No, no, I can't be transferred. I have an appointment with Dr. Goldberg at 5:00.

Gloria: Melman. Melman! Calm down, Melman. Relax.

Marty: Melman. Calm down, Melman.

Melman: There are prescriptions that have to be filled. No other zoo could afford my medicine care! And I am not going HMO!

Marty: Take it easy, Melman. It's gonna be OK. We are going to be okizay.

Alex: No, Marty. We're not going to be okizay. Now because of you, we're ruined!

Marty: Because of me? I fail to see how this is my fault.

Gloria: You're kidding, right, Marty?

Alex: You! You ticked off the people. You bit the hand, Marty. You bit the hand. (mimicking) "I don't know who I am. I don't know who I am. I got to go find myself in the wild!" Oh, please.

Marty: Hey, hey. I did not ask you to come after me, did I?

Melman: He does have a point.

Alex: What?!

Melman: I did say we should stay at the zoo, but you guys--

Alex: (cuts him off, as the view changes to outside of the boxes) Melman, just shut it! You’re the one who suggested this whole idea to him in the first place.

Gloria: Alex, leave Melman out of this, please.

Melman: Thank you, Gloria. Besides, Alex, it's not my fault that we were transferred!

Gloria: Melman, shut it. Does anybody feel nauseous?

Melman: I feel nauseous.

Alex: Melman, you always feel nauseous.

(Horn blares from the freighter as Kowalski tries to read the yellow paper from a box)

Skipper: Progress report.

Kowalski: It's an older code, Skipper. I can't make it out.

Skipper: Hmm... You, higher mammal.

Mason: Hmm?

Skipper: Can you read?

Mason: No. Phil can read, though. Phil! (Phil gets up from a pile of cans as Kowalski taps to the yellow paper quickly as Phil is making a sign language of what does it mean) Hmm... Ship to Kenya Wildlife Preserve, Africa!

Skipper: Africa? That ain't going to fly. Rico!

[Rico pulled out a paper clip, makes a shape that looks like a key and unlocks the crate. The penguins started to attack the guards and infiltrate the captain's deck and knocked him out. They are now in control of the ship as the new crew. Cut to Alex and Marty still arguing inside their crates]

Gloria: Guys!

Alex: I was the star in the greatest city on Earth!

Gloria: Guys, listen.

Alex: A king! Loved by my people!

Gloria: Okay look! Let's just be civil.

Alex: And you've ruined everything!

Gloria: Guys, guys! Quit it up there!

Marty: "Loved"? If the people loved you, it's only because they didn't know the real you!

Gloria: Don’t make me come up there. I'd get the whooping on both of y'all!

Alex: I thought I knew the real you! Oh wait, Marty? Your black-and-white stripes? They cancel each other out. OW! You're nothing!!!

Gloria: Let's – let's just talk about it like adults. You’re so scary!

Melman: Stop it, stop it, stop it!

Gloria: Hey! Listen. You're not helping the situation!

Skipper: Status!

Private: [nervously] It's no good, Skipper. I don't know the codes.

Skipper: [angrily] Don't give me excuses! Give me results!! Navigation. (Kowalski tries to investigate, but there's nothing) All right. Let me think. And shut him up!! (Rico slaps the Captain)

Private: (Completes the Override code) I did it!

Skipper: (Alarm blaring) Let's get this tin can turned around!

[As Kowalski turns the wheel, the boat begins to tilt slowly. The crates started to skid across the deck and towards the rail. Alex peeps out and notices Gloria's box sliding towards his]

Gloria: Oh!

[Gloria crashes into Alex, and the rail breaks, causing the four boxes to fall into the sea, with the animals screaming in terror. The currents start to wash them apart.]

Alex: Guys? Oh, no. Gloria! Melman! Marty!

Marty: Alex!

Alex: Marty?!

Marty: Alex!

Alex: Marty! No, wait. Come back, Marty! Don't go. (Night falls, Alex is asleep and a wave bumps His Crate as he falls into the mysterious Island that has a jungle and Alex feels scared and lonely and tries to call his friends) Marty? Melman? Gloria? Marty?! Melman?! Gloria?! Marty! Ah! Ooh! Ooh! Melman! Gloria! Ooh! Ooh! Ah! Ah! Hey, anyone! Hello!

(The next morning, Alex feels weary and exhausted of yelling and calling to his friends)

Alex: Marty, Melman, Gloria. Gloria, Melman, Marty. Marty, Gelman, Gloria. Marty, Melman. Morty, Morty, Gelman. Regis. Kelly. Matt, Katie, Al.

[Suddenly, Alex hears a voice]

Melman: Hey! Whoa! Hey! Help! Whoa! Get me out of this thing. Somebody. Hello? Get me out of this thing right now! Hello? Somebody?

[Alex goes up close and has found Melman]

Alex: Melman!

Melman: Alex? Is that you?

Alex: Melman, I got you. Hang on! Hang on. I got you. Melman!

Melman: Ow…

Alex: I got you, buddy.

Melman: Ow, ow, ow, ow, ow, ow, ow, ow, ow, ow, ow, ow, ow, ow, ow, ow, ow!

Alex: Wait a sec, Melman.

Melman: Ow.

Alex: Wait right there. (Picks up the branch) Aha!

Melman: Alex, what are you doing?

Alex: Getting you out of the box. Relax.

Melman: Alex? (Gasps)

Alex: Giraffe, corner pocket! Here goes nothing!

Melman: Wait, wait, wait! No, come on! Wait, wait, wait, wait, wait, wait, wait, wait, wait!

Alex: Hold still!

Melman: Wait, Alex!

Alex: Hold still. Hold still. Hold still.

Melman: No, no, come on. Come on!

Alex: Here I come! (yelling)

Melman: Look! Look! Look! Look! It's Gloria. It's Gloria! Oh, hey, it is Gloria. Oh, my...

Alex: Gloria! (Knocking the crate door, but Gloria kicks the door and Alex flies!) WAAAAAAUGH!!!!!!

Melman: (Screaming and crash! His long crate broke into pieces)

Alex: Gloria! Ooh!

Gloria: Alrighty, boys, fun's over.

[The crab and the two starfishes go back into the ocean]

Alex: Gloria!

Gloria: [takes off the seaweed] Alex!

(Suddenly, Alex and Gloria see Marty riding on dolphins)

Marty: Whoa! (Hawaiian Five-O playing)

Gloria: Marty?!

Alex: Marty!

Marty: Yeah! All right! That's right! Whoo! Left! Left! Left. No, no, no, no, no, your left! Your left! Your left! Woohoo! Right here's good. You know, I don't really have anything on me right now. I'll have to get you later. (Dolphins chattering of saying goodbye) Ah-eheheh--to you too.

Alex: Marty! Marty!

("Chariots of Fire" playing)

Marty: Alex!

Alex: (Slow motion) Marty!

Marty: (Slow motion) Alex!

Alex: Marty!

Marty: Al!

Alex: (Firmly) Marty!

Marty: (Confused) Alex??

Alex: (Angrily) MARTY!!!!!

Marty: Oh, sugar, honey, iced tea!

Alex: Martin!!

Marty: Hey! Hold up! Hold up! Whoa! Whoa! Whoa! Whoa!

Alex: I'm going to kill you! You come here! Don't run away from me!

Marty: Whoa, wait! Wait, wait! Calm down! Calm down!

Gloria: Marty!

Alex: If you keep running, I'm going to just kill you more!

Melman: Marty!

Gloria: Oh, look at us. We're all here together. Safe and sound.

Melman: Yeah, here we are. Where exactly is "here"? (Everyone is surprised as they turn while they see many trees of Madagascar, but Melman knows it's...) San Diego.

Gloria: San Diego?

Melman: White sandy beaches, cleverly simulated natural environment, wide-open enclosures. I'm telling you, this could be the San Diego Zoo. Complete with fake rocks. (tapping a rock) Wow, that looks real.

Alex: San Diego? What could be worse than San Diego?

Marty: I don't know. This place is crack-a-lacking! Oh, I could hang here. I could hang here.

Alex: I’m gonna kill you, Marty!

Marty: Take it easy! Take it easy!

Alex: I’m gonna strangle you!

Marty: Calm down. Calm down.

Alex: Then bury you, then dig you up and clone you and kill your clones!!

Marty: 20-second timeout. 20-second timeout.

Alex: And then I'm never talking to you again!!

Gloria: (picks up Alex to stop him from arguing with Marty) STOP IT!! Look. We're just going to find the people, get checked in, and have this mess straightened out.

Alex: Oh, great. This is just great. San Diego! Now I'll have to compete with Shamu and his smug little grin. I can't top that. Can't top it. I'm ruined! I'm done! I'm out of the business! It's your fault, Marty! You've ruined me!

Marty: Come on, Alex. Do you honestly think I intended all of this to happen? You want me to say that I'm sorry? Is that what you want? OK, I'm...

Alex: Shh!

Marty: He just shushed me.

Gloria: Marty, you've got to be just a little bit more und--

Alex: (cuts her off) Shush!

Gloria: Don't you shush me!

Alex: Do you hear that? Don't you hear that? (the others realize he's trying to listen to the music as they run into the jungle, while they're hearing the music that has a similar beat to Stayin Alive by Bee Gees)

Marty: I hear it now.

Gloria: Where there's music, there's people.

Alex: We’ll go to the head honcho.

Melman: A sidewalk would be nice.

Gloria: Yeah, what a dump.

Alex: They should call it the San Di-lame-o Zoo. First they tell you, "Hey, we got this great open plan thing. Let animals run wild." Next thing you know, it’s flowers in your hair, everybody's hugging everybody!

Marty: This place kind of grows on you. This way, guys! Come on!

Alex: (gets hit by a branch) Ow! Ooh! (screams then cries in his hands) Aah! (his foot hits a rock) Oh, oh! Aah! (his foot pricks a thorn) Aah! What the...? (jumps through spider webs) Oh! Aah! Ew! Ew! (sputters as he tries to get the webs off himself then knocks down a tree on himself) Oh, no! Aah!!

[Gloria, Melman and Marty arrive at the part, they could see shadows from the giant leaves.]

Gloria: OK, let's make a good impression on the people. Smiles, everyone. Let's get it together. Is that the best you can do, Melman?

Melman: Oh, I'm not smiling. It's gas.

Gloria: Okay. Well, great. Let's make gas look good.

[Gloria opened up the leaves and they saw a huge small group of strange furry creatures, who are the lemurs.]

Marty: Wow!

Gloria: It's not people. It's animals.

Melman: California animals. Dude.

Marty: This is like a Puffy party!

King Julien: (singing) I like to move it, move it I like to move it, move it Ya like to

Lemurs: Move it!

King Julien: I like to move it, move it I like to move it, move it I like to move it, move it Ya like to

Lemurs: Move it!

King Julien: I like to move it, move it You like to move it, move it She like to move it, move it He like to

Lemurs: Move it!

King Julien: All girls all over the world Original King Julien 'pon yer case, man I love how all the girls that love to move their body When ya move your body, ya do Move it nice and sweet and sassy, all right

Gloria: What kind of zoo is this?

Melman: I just saw 26 blatant health code violations.

Marty: I'm loving San Diego. This place is off the chizain.

Melman: 27!

King Julien: Woman, physically fit, physically fit, physically, physically, physically fit Woman Physically fit, Physically fit...

Marty: We should've brought chips and dip!

Gloria: (looking around) Wait. Where's Alex? [pulls Marty away] What happened to him? He was right behind us. Wasn't he right behind us?

Marty: I don't know where he's at, but he's missing one heck of a party.

Lemur: The foosa! The foosa! The foosa are attacking! Run for your lives! (Screaming)

Fossa: Foosa hungry. Fossa eat.

Alex: Ech! I hate spiderwebs. Yeah, thanks a lot, guys. Thanks for waiting up. Really appreciate it.

[Alex pulled away the leaves to see the Fossa.]

Alex: Hey. Hi. We just got in from New York, and we're looking for a supervisor. Because we've been sitting on that beach there for hours, and nobody's even bothered to show up. I don't know if things are… Yeah, I don't know how things are normally run around here....

[Marty, Gloria and Melman froze then they saw a spider crawling on his back. Gloria picked up a stick to whack it.]

Alex:...but there's been some sort of major screw-up, which is cool. If you could point us towards the administrative offices, we'll just uh...(before he can finish, he notices the spider crawling on his back)

Spider: Well, howdy-do.

Alex: [screaming in horror, then roaring in slow motion by scaring the Fossa away] Spider! Spider!! Spider on my back!!!

King Julien: Maurice? Did you see that?!

Maurice: He scared the fossa away.

(Alex screaming in horror as Gloria uses a stick to hit him, but the spider has finally escaped!)

Melman: Come on, Gloria. Get him.

Spider: Get it! Get it! Get it! Get it!

Melman: That's it! Catch it, Gloria! Smack it! Get it, get it! Whip it! Whip it good! Where'd it go?

Mort: King Julien, what are they? WHAT ARE THEY?!?!

King Julien: They are aliens. Savage aliens from the savage future.

Maurice: They've come to kill us. And take our women. And our precious metals!

(Lemurs gasp. Mort starts sobbing while lands on Julien's feet.)

King Julien: Get up, Mort. Do not be near the king's feet, OK? Shh! We're hiding. Be quiet, everyone. Including me. Shh! Who's making that noise? Oh, it's me again.

Melman: There it is! Get it! Come on, Gloria!

Alex: Stop it! Stop it! That's enough! Enough with the stick.

Melman: You got it. I think you got it. I think she got it.

Alex: Is it still on me? I hate spiders.

Gloria: It's OK. It's gone.

Mort: They are savages. Tonight we die. (grabs Julien's foot)

King Julien: The feet. I told you... I told you to... I told every... Didn't I tell him about the feet?!

Maurice: He did tell you about the feet.

Mort: E-he.

King Julien: Wait. I have a plan.

Maurice: Really?

King Julien: I have devised a cunning test to see whether these are savage killers.

[They just push Mort out of the hiding place as the Zoo animals stare. Mort starts to become scared as he shakes in fear.]

Marty: Hi there.

Alex: Ahem! You let me handle it. (Whispering) Alex handles it. Marty does nothing.

[Alex walks up to a whimpering Mort]

Alex: [kindly] Hi there! (Mort starts crying and bursting into tears) Oh, jeez. Oh. Oh, sorry.

Melman: Oh, Alex, what'd you do?

Alex: Oh Shh! Shh! Shh! No, no, no. Stop. Stop. Shh! It's OK. It's OK. I'm just a silly... Just a silly lion. (Mort starts screaming while crying louder) Oh, jeez!

Marty: Aw, Alex!

Gloria: Oh, you poor little baby. Did that big mean lion scare you?

Mort: Mm-hmm…[muttering]

Gloria: He did? He's a big, bad old puddy tat, isn't he? Come on. Mama'll hold you. Aww, look at you.

Melman: They are cute from a reasonable distance.

Gloria: Aren't you the sweetest little thing. I just want to dunk him in my coffee.

King Julien: They are just a bunch of pansies.

Maurice: I don't know. There's still something about that one with the crazy hairdo that I find suspicious.

King Julien: Nonsense, Maurice. Come on, everybody! Let's go and meet the pansies!

[All the lemurs come out of their hiding places to meet them.]

Maurice: Presenting your royal highness, our illustrious King Julien XIII, self-proclaimed lord of the lemurs, et cetera, et cetera. Hooray, everybody.

Marty: He's got style.

Alex: What is he, like, king of the guinea pigs?

Melman: I think it's a squirrel.

King Julien: Welcome, giant pansies! Please feel free to bask in my glow!

Alex: Definitely a squirrel.

Melman: Yep. Squirrel

King Julien: We thank you with enormous gratitude for chasing away the foosa.

Gloria: The "whossa"?

King Julien: The foosa. They're always annoying us by trespassing, interrupting our parties and ripping our limbs off.

Alex: Yeah, sounds good. Look. We're just uh, we’re just trying to find out where the people are, so if you could uh...

Maurice: Oh, my. What big teeth you have. Man!

King Julian: Shame on you, Maurice! Can you not see that you have insulted the freak?! Ha-ha. You must tell me, who the heck are you?

Alex: I'm Alex. The Alex. And this is Gloria, Marty and Melman.

Maurice: And just where are you giants from, hmm?

Alex: We're from New York and uh we...

King Julien: All hail the New York giants!

Lemurs: New York giants! (Cheering)

Alex: Is there some sort of inbreeding program? Well, I say we just got to ask these bozos where the people are.

King Julien: Excuse me. We bozos have the people, of course.

Alex: Whoa!

Melman: Hey, the bozos have the people!

Alex: Oh, well, great. Good. Phew. Heh.

King Julien: They're up there.

[Julien shows Alex and the gang a Skeleton who's stuck with a parachute!]

King Julien: Don't you love the people? Not a very lively bunch, though.

Alex: Oh. Wow. So do you have any live people?

King Julien: Uh… No. Uh, only dead ones.

Maurice: I mean, if we had a lot of live people here, it wouldn't be called the wild, would it?

Marty: The wild?

Alex: Whoa. Hold up there a second, fuzzbucket. You mean, like uh, like, the "live in a mud hut, wipe yourself with a leaf" type wild?

King Julien: Who wipes? [Laughing]

Gloria: Oy vey.

King Julien: Oy vey!

Maurice: Oy vey, everybody!

Lemurs: Oy vey!

Alex: Could you excuse me for a moment? (runs back to the shore, crying) Get me out of here! We got to get out of here!! Help!!!

Gloria: (catches Alex as he's about to dive in the ocean) Alex! What are you doing?!

Alex: I'm swimming back to New York!!

Marty: Yeah, baby! We are in the wild!

Alex: I know my chances are slim, but I have to try!

Gloria: You can't swim!

Alex: I said my chances are slim!!

Melman: AAHHHHH!! NATURE!!! It's all over me! Get it off! I can't see! I can't see!

Gloria: (Steps on a vine to freed Melman's head)

Melman: (happily) I can see! (now becomes frightened) Aah! [dunks his head in the sand]

Gloria: Okay, look. There's obviously just been a little mistake. I’m sure the people didn't dump us here on purpose. As soon as they realize what happened, they'll come looking for us, right?

Melman: [Muffled] Yeah, right.

Marty: ♪Born free! [Babbling] I don’t know the words But we’re born free!♪♪

Gloria: You know something? I bet they're already on their way. (puts down Alex as he inhales)

[In the meantime, the boat sails to Antarctica for 2501 Miles South by the Penguins on an important mission.]

Skipper: Well, boys, it's gonna be ice-cold sushi for breakfast. (All give a high-5!) Rico. (Rico uses the wine with foam as a toast of their victory! Meanwhile in Madagascar island...)

Melman: Well, since I'm doomed to die on this forsaken island, I, Melman Mankiewicz, being of sound mind and unsound body, have divided my estate equally among the three of you. [Right before he could finish his sentence, a wave came in and go rid of it] Oh… Sorry, Alex.

Marty: Hey! A latrine. Nice work, Melman. Outdoor plumbing.

Alex: No, it's not a latrine. It's a grave! You sent Melman to his grave! Are you happy?

Marty: Aw, come on. This isn't the end. This is a whole new beginning. This could be the best that's ever happened to us.

Alex: No. No. No. No. No. No. No. No. No. No. This is not the best thing that's ever happened to us!

Melman: Yeah! You abused the power of the birthday wish and brought this bad luck on all of us. So why'd you tell your wish? You're not supposed to do that.

Marty: Wait a minute. I didn't wanna tell you. Remember? You guys made me tell you.

Melman: Oh, OK.

Marty: Besides, this isn't bad luck. This is good luck. Look around. There's no fences, no schedules. This place is beautiful. Baby, we were born to be here.

Alex: OK. OK. I've had enough of this. This is your side of the island, and this is our side of the island. That is the bad side, where you can prance and skip around like a magical pixie horse and do whatever the heck you wanna do all day long. And this, this is the good side of the island for those who love New York and care about going home.

Marty: Come on.

Alex: No, no. Back! Back! Back! Back!

Gloria: You know what? This isn't good.

Marty: OK! You all have your side, and I'll have mine. And if you need me, I'll be over here, on the fun side of the island, having a good old time! A gay old time! A yay old time! A Yabba-dabba-doo old time!

Alex: That’s not the fun side, this is the fun side! This is the fun side, where we're gonna have a great time surviving until we go home. Whoo! I love this side. This side's the best. That side stinks! You're on the Jersey side of this cesspool!!

Marty: Wilma!!!

Melman: Well, now what do we do?

Alex: Don't worry, Melman. I have a plan to get us rescued.

[At nightfall, Alex builds a statue that looks like the Statue of Liberty]

Alex: Can't wait to see the look on Marty's face when he sees this. Ooh. Just look at him. He's helpless without us. Shut up, Spalding!

Gloria: I've been standing here for hours, man. How long do I have to pose like this?

Alex: She is. Finito! I defy any rescue boat within a million miles to miss this baby. When the moment is right, we will ignite the beacon of liberty and be rescued from this awful nightmare! What do you think? Pretty cool, huh? How's the liberty fire going, buddy?

Melman: Great. Idiot.

Alex: I heard that!

Melman: Ugh. Why can't we just borrow some of Marty's fire?

Alex: That's wildfire! We're not using wildfire on the Lady Liberty. Now, rub, Melman.

Melman: I've been doing... I can't. I can't. I can't do it. I ju... I can't do it! Fire. Fire. Fire! Fire! Ha-ha-ha-ha-ha-ha-ha-ha!! Ah. Oh, my... Ah! Oh! Fire!! (Screaming)

Alex: Not yet! No, no! No!

Melman: Fire! AAAAHHHHH!!!!

(The flames gets onto the statue and spreads across the statue)

Alex: No, no! No! Not yet!

(Alex looks down in horror as the statue is being burned)

Gloria: Melman, hold still! Jump! Alex, jump! Don't worry, cats always land on their... Face? Man, what kind of cat are you?

(Melman lands on the ground putting the flames on the wood out as the flames on the statue goes out which causes the statue to collapse much to Alex's dismay.)

Alex: YOU MANIAC!! YOU BURNED IT UP, LIBERTY! DARN YOU! DARN YOU ALL TO HECK!!

Melman: Can we go to the fun side now?

[Meanwhile in the jungle, the lemurs have gathered at an old airplane.]

Maurice: Everybody, calm down. Come on. Into your chairs. Yes. Everybody please, calm down. Let go of his tail. Separate those two, would you, please? You over here, and you over there. Everybody, Shhh... Calm down, people, OK? Ugh. Now, presenting your royal highness, the illustrious blah, blah, blah. You know, et cetera, et cetera. Hooray. Let's go.

King Julien: Now, everybody, we all have great curiosity about our guests, the New York giants. Yes, Willie?

Willie: I like them.

Mort: I like them. I like them. I liked them first. Before I even met them I liked them.

King Julien: Yes, yes.

Mort: When I saw them, I liked them right away. You hate them compared to how much I like them.

King Julien: Oh, shut up. You're so annoying!

Mort: Hee-hee-hee.

King Julien: Now, for as long as we can remember, we have been attacked and eaten by the dreaded fossa.

Lemur: The fossa! The fossa are attacking! AAAHHH!!! AAHHH!!

[Everyone all screamed and panic.]

Lemur: (Holds a book that says "To Serve Lemur") It's a cookbook! IT'S A COOKBOOK!!!!!

King Julien: Alright! Please. Please. Maurice.

Maurice: Shh! Quiet!! Come on, y'all. They're not attacking us this very instant.

(All lemurs sigh in relief)

King Julien: So my genius plan is this: We will make the New York giants our friends and keep them close. Then, with Mr. Alex protecting us, we will be safe and never have to worry about the dreaded fossa ever again!

[Everyone all agrees.]

King Julien: I thought of that! I thought of that! Yes! Me! I did.

Maurice: Hold on, hold on, everybody. Hold on. I'm just thinking now. I mean, does anyone wonder why the fossa were so scared of Mr. Alex? I mean, maybe we should be scared too. What if Mr. Alex is even worse than the fossa?! (Lemurs gasp in shock) I'm telling you, that dude just gives me the heebiedabajeebies!

King Julien: Maurice, you did not raise your hand. Therefore, your heinous comment will be stricken from the record. (Chameleon uses the typewriter) Does anyone else have the heebie-jeebies? No? Good. So shut up. When the New York giants wake up, we will make sure that they wake up in paradise. Ha-ha-ha-ha! Now, who would like a cookie?

(All lemurs cheering for a cookie. And in the meantime, Alex makes the sign of "Help!" for waiting the boat. And Marty tries to cheer up Alex for an apology)

Marty: Yo, Al. Melman and Gloria are over there having a good time. There's room on the fun side for one more.

Alex: No, thanks.

Marty: Look, I've been thinking. Maybe if you gave this place a chance, I don't know, you might even enjoy yourself.

Alex: Marty, I'm tired. I'm hungry. I just want to go home.

Marty: Could you just give it a chance? Think about it. It really isn't the fun side without you.

(When Marty walks away from Alex, The P breaks and falls apart, which now says "Hell")

Melman: Shh. Shh. It's him.

Marty: Who is it?

Alex: It's the pizza man. Who the heck do you think it is?

Marty: Yes? Can I help you?

Alex: Can I come to the fun side?

Marty: Beg your pardon?

Alex: You know, I've been kind of a jerk, Marty. But I've been thinking about what you said, and I'm sorry.

Marty: Welcome to Casa del Wild! Take a load off. Hey, hey, wipe your feet.

Gloria: Alex!

Marty: Mi casa is su casa.

Alex: Very impressive.

Marty: Hey, have a drink. It's on the house.

Alex: (Drinks the water, but it's salad and he spits it!) This is seawater.

Marty: Oh, you don't swallow it. It's just temporary till the plumbing's done. Hey, y'all look hungry. How would you like some of nature's goodness?

Gloria: You have food?

Marty: The Fun Side Special, coming up. Seaweed on a stick.

Alex: Seaweed?

Marty: On a stick. Don't love it till you try it.

Melman: That's unbelievable!

Gloria: Mmm… So good.

Marty: Well, thanks. It does kind of hit the spot, doesn't it? (Alex coughs of eating seaweed, because he wants steak.) Well, maybe it could use a little lemon.

Alex: No, it's great. It's really great. Doesn't get any better than this?

Marty: Oh, but it does. Check this out.

Gloria: Wow! Would you look at that.

Alex: It's like billions and billions of helicopters.

Marty: It's a shooting star. Make a wish. Quick!

Alex: Ooh! How about a thick, juicy steak?

Marty: You know what, Alex? I promise you I'm going to find you a steak tomorrow if it kills me.

Alex: Thanks, Marty.

Melman: (Yawns) It is getting late. I guess I'm gonna... (Snores)

Gloria: I think I'm gonna hit the sack too. Sweet dreams, everyone.

(The dream appears many steaks that Alex wants them, when he grabs on of the steaks and licks it up)

Marty: Alex. (Alex accidentally licks Marty as the others are shocked) What are you doing?

Alex: 27, 28, 29, 30. Hmm. 30. 30 black and only 29 white. Looks like you're black with white stripes after all. Dilemma solved. Good night. (Pretends to sleep with his eyes open)

[From the trees, Julien and Maurice looked below at the sleeping group.]

King Julien: You see, Maurice, Mr. Alex was grooming his friend. He is clearly a tender, loving thing. How can you have the heebie-jeebies for Mr. Alex? Look at him. He's so cute and plushy.

Maurice: I don't think he was grooming him, Julien. Look more like he was tasting him to me.

King Julien: Suit yourself, no matter. I don't care. Soon we will put my excellent plan to action. All we have to do is wait until they are deep in their sleep... [a long pause] How long is this going to take?! (Alex and his gang thought there are lemurs, but they see nothing. So they have to go to sleep again.)

[In Antarctica, the penguins stand at the cold breeze, finding Antarctica to be inhospitable. Private turns to his brothers.]

Private: Well, this sucks.

[Cut to black of the next morning]

King Julien: Wake up, Mr. Alex. Wake up, Mr. Alex. Rise and shining. Wakey-waking, Mr. Alex! (Loudly) WAKE UP!! ALEX!!! (Alex muffled gasp) You suck your thumb?

Alex: AAH!

Everyone but Alex: AAH!!

Everyone: AAAAHH!!!!

[Shocked, the zoo animals get up.]

Alex: Where are we? What the heck is going on?

King Julien: Take it easy.

Alex: What is this?

Melman: Who built a forest?

King Julien: Whoa, whoa, whoa! Don't be alarmed, giant freaks! While you were asleep, we simply took you to our little corner of heaven. Welcome to Madagascar.

Marty: Mada-who-ah?!

Gloria: What?

King Julien: No, not who-hah. Ascar.

[The zoo animals stare from the open view of Madagascar as "Born Free" plays.]

Alex: Marty. It's...

Marty: It's just like my mural back at the zoo.

Gloria: Oh, no, fella, that is the real deal right there.

King Julien: Look at that, that's not a bad view.

Alex: I mean, that's the thing that you were always looking at, but it's actually there. I mean, that's like the real version of your...

Marty: Hey, how about once around the park? Let's get our blood pumping, get those lungs breathing all this fresh air! Who's with me?!

Alex: Ah, naw. I really, I don't think I could... You're it!

Marty: Hey! Want to play around? Ho! Hey!

Alex: Ha-ha! Oof!

Marty: Got you there! Ha-ha!

Alex: Come here! Ha-ha-ha!

Marty: You’re it!

Alex: (Chuckles) Hey, hey, hey!

Marty: Hey, stop that! Hey, you’re crazy!

Alex: OK, Marty, I'm it. I'm it. I'm it. You win. (Groans in exhaustion)

Marty: Come on, Alex, get in the groove.

Alex: I haven't eaten in two days. My blood sugar's real low. I just don't have the energy.

Marty: I don't think that's your problem. First of all, that's not how you run in the wild. Let's go, man. Put the rubber to the road! You just have to let out that inner lion. Now, who's the cat?

Alex: Marty, I really don't...

Marty: You are, that's who. Come on! Here we go! That's it. Now let's build up some steam! You the cat. You the cat. You the cat. You the cat. You the cat. Whoo! Whoo!

Alex: Alright. Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? (His eyes changed of being crazy) I'M THE CAT!! (Zooms against Marty) Surprise!

Marty: Yahhh!! (Crashes with Alex)

Alex: Hoo! You're it! You're it! Can't juke the cat. Cat's too quick! Whoo! I feel like a mile-high pastrami on rye on the fly from the deli in the sky! Roar! Let's go wild!

Marty: Now you're talking!

(Alex and Marty are now doing the Tarzan Yell as they enter to the wild party.)

Alex: Whoo! Man! I feel, ha-ha-ha-ha, different! Noogie, noogie, noogie. Noogie, noogie, noogie! Whoo! Kind of charged up or something. Hoo!

Gloria: Ah, Marty, Marty, Marty! Like you said, baby.

Alex: It's Crack-a-lacking. Ain't that right, Melman? Whoo!

Melman: Oh, yeah. Oh, yeah. I'm in heaven.

King Julien: You see, Maurice, Alex is now our friend and the fossas are nowhere to be seen. It could be said that my plan is working in a very good working kind of way.

Alex: Yeah!

Marty: Alex. You got to try some of this.

(Alex spits the pineapple to King Julien)

Alex: I feel good. Feel like a king again!

King Julien: (Throws the pineapple to Maurice) King?

Marty: Yeah! You should see his act. Come on, Alex, why don't you show him some of your act?

Alex: (Chuckles) Oh. No, I really don't think I could... OK.

[Moments later....]

Marty: Ladies and gentlemen, primates of all ages. The wild proudly presents: The king!

Marty & Alex: Alex the lion!

Alex: (roars) Ahhhh!

Marty: E flat, fellas.

(Fanfare playing)

Marty: Yeah! The king is in the house!

King Julien: See, if he is the king, then where is his crown? I've got a crown. Got a very nice one! And it's here on my head! Look at it! Have I got it on?

[From the rocks, the fossa approached ready to eat the lemurs again, but they are surprised of seeing Alex.]

Marty: Do the roar, man. Do the roar!

[Alex no longer use his normal roar, so instead, he uses the real roar, Marty, Melman, Gloria, King Julien, Maurice, Mort, and The Lemurs gasped in shock. Frightened, the fossa ran away again.]

Marty: Wow. I've never heard that one before. Yeah! Go wild, man! Come on! Break out the wave!

[Lemurs cheer. Since Alex hasn't eaten for along time, he thought the lemurs look like steaks to him. His claws show up and he bit Marty on the butt as Marty screams. Everyone became shocked.]

Marty: Excuse me. You're biting my butt!

Alex: No, I'm not.

Marty: Yes, you are.

Alex: (Looks and sees that he was biting Marty's butt and spits)

Gloria: Alex, what did you do?

Marty: He just bit me on the butt!

Alex: No. I didn't. Did I?

Melman: You kind of did.

Marty: He just bit me on the butt. What the heck is wrong with you?

Alex: (stutters) I... Oh! Uh...

Marty: Why'd you bite me?

Maurice: [coming out of the crowd] Man, it's because you are his dinner.

Alex: What?!

Gloria: Excuse me?!

Melman: That's dumb.

King Julien: Come, come, Maurice. What is a simple bite on the buttocks among friends? Here, give me a nibble.

Maurice: [pushing Julien away] The party is over, Julien. Your brilliant plan has failed.

Marty: What are you talking about?

Maurice: Your friend here is what we call a deluxe-model hunting and eating machine. And he eats steak... which is you.

Gloria: Get out of here.

[Julien thinks for a moment, realizing how selfish he was being and contemplates what Maurice had mentioned about Alex during the last night's meeting on a plane as it's so much for everyone not having the heebie jeebies.]

King Julien: Okey-dokey, Maurice, I admit it. The plan failed. All is lost! We're all doomed! The fossas will come back and gobble us with their mouths! Because... we are all steak.

Mort: (taking the steak statement as a compliment) I'm steak! Me, me, me, me, me, me, me!

Maurice: Mr. Alex cannot stay here. He belongs with his own kind [Alex's eyes dilate and sees everyone (including Julien, Maurice, Mort, Marty, Melman, and Gloria) becoming steak once again for his hunger] on the fossa side of the island.

King Julien: By the power vested in me, by the law of the jungle, blah, blah, blah, blah, blah... Be gone!!

Marty: What? Come on, do I look like a steak to you?

Alex: [seeing Marty through his vision] Yeah!

Marty: See, I told you I don't look like a... (mishears) Wait, wait, ...What did you say?

Alex: Oh, yeah! (he growls as he prepares to eat all of his friends)

[The lemurs and the zoo animals get scared.]

Mort: (scared) He's going savage....

King Julien: Run for your lives!!

[Everyone runs away. Alex roars wildly, getting ready to devour them all.]

Gloria: Marty, run!

Marty: Aah!!

(The Fanfare of National Geographic plays as Alex is preparing to eat Marty once again, but Maurice throws a coconut to stop Alex!)

King Julien: A bullseye. Excellent shot, Maurice.

Maurice: Thank you.

Alex: Marty? I'm so sorry, Marty. What is wrong with me?! Ow. Oh, no. What have I done? It's true. I'm a monster. I got to get out of here.

("What a Wonderful World" by Louis Armstrong plays as Alex and his gang are going separate ways with Alex running through the jungle gets his claws caught on leaves and then a tree. He pulls them out only for him to fall down a hill through jagged rocks, a field of flowers, and finally a cactus patch before landing on his feet with a cactus stuck on his back before falling into a river and plummets down a waterfall. He arrives on the Fossa side of the island walks pass a few Foosas and uses his claws to sharpen pieces of wood as he makes an enclosure resembling his back at the zoo and sits on a rock feeling sad and guilty. Meanwhile Marty, Melman and Gloria walks through the jungle witness how dangerous the wild can be such as a hummingbird flew into the snapdragon flowers only for it to be eaten. They also saw a mouse escaped from a snake, by gets caught by an eagle, and they spot a duckling and gets it to a lake but it gets eaten by a crocodile much to their shock as they walk by the grassy field that Marty and Alex played on earlier.)

Marty: What have I done? This is a nightmare! And it's all my fault. Now, because of me, we've lost Alex.

Melman: Well, what are we going to do?

Gloria: We'll find a way to help him. That's what we'll do.

Melman: Oh! OK.

Gloria: Come on, we are New Yorkers, right?

Marty: Yeah.

Gloria: We're tough. We're gritty.

Marty: Yeah!

Gloria: We're adaptable!

Marty: Yeah!!

Gloria: And we are not going to lay down like a bunch of Melmans!

Melman: No, we're not. Oh. Gloria.

Gloria: That was not me, OK? That was the boat. The boat!

Marty: The boat? The boat's come back for us! Come on, guys, we got to flag it down.

[Marty Melman and Gloria race to the beach where they saw the boat,]

Marty:: There it is!

Melman: Hey, over here!

Gloria: Over here!

Marty: Over here! Over here! Yo! Yo! Yo!

Gloria: Melman, give me a lift. Hurry up! Lift me up!

Marty: Help! Help! Help!

Melman: Oh, my neck. My neck. My neck. You guys. Over here!

Gloria: Over here! Melman! Steady. This way!

Marty: Over here!

Melman: You have no idea how much this hurts.

Marty: Hey, boat! We're over here!

Gloria: Look! It's turning! It's coming back! It's coming back! It's coming back!

Melman: Yes! This way! Come on! Come on, baby! WHOO!! Yes, you guys!

Marty: You guys flag down that boat. I’ll go get Alex.

Gloria: [stopping Marty] Whoa! Hold on there. You cannot go back there by yourself.

Marty: Aw, come on. I know Alex. He hears we're rescued, he'll snap right out of it.

Melman: The people are coming. They can help us.

Gloria: Melman's right. The people will know what to do. Now, come on. We got to flag down that boat.

[The penguins land on the beach.]

Skipper: Now, this is more like it.

Gloria: You?! Oh, ma... Where are the people?

Skipper: We killed them and ate their livers. [Gloria looks shocked] Got you, didn't I? Just kidding, doll, the people are fine. They're on a slow lifeboat to China. Hey, I know you two. Where's that psychotic lion and our monochromatic friend?

Melman: Marty? He's right...[they realized Marty was gone] Where did he go? He was right behind us.

Gloria: (groans) He went back for Alex. He's going to get himself killed!

Skipper: Well, boys, our monochromatic friend's in danger. Looks like we have a job to do. Captain's log: Embarking into hostile environment. Kowalski. We'll need to win hearts and the minds of the natives. Rico. We'll need special tactical equipment. We're gonna face extreme peril. Private probably won't survive.

Marty: Alex! Come out, Alex! The boat's here! We can go home!

Zoo Patrons: Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex!

Marty: Alex! Alex.

Alex: Marty?

Marty: Snap out of it, Alex. The boat came back. We can get out of here. We can go back to civilization, and everything will be just like it used to be.

Alex: Stay back. Please. I'm a monster.

Marty: Alex, you're no monster. You're my friend. We're a team. You and me, remember?

[Alex tried to attack Marty but the zebra scuttle back away from the crazed lion.]

Alex: I don't want to hurt you.

Marty: Alex. I ain't leaving without you. Alex? I'm thinking of a song. It's a wonderful song. I'm sure you're familiar with it. ♪ Start spreadin' the news I'm leaving today We are a great big part of it ♪ Come on, you know the words. Two little words. Please don't make me sing this by myself. You really don't want to hear me sing this by myself.

[The fossa appeared from above the rocks]

Marty: Uh, Alex? Could you come out here for a minute? Hey, Alex, a l-l-little help. AAH!!! HELP ME!!! ALEX!! HEEEELLLPPP!!!!!!! [Alex began to snap out of it, and The Fossas started to chase Marty] Help me!! Anybody, help me!! Somebody!! (The Foosas are using salt on Marty's Butt) Ah! HEEEELLLPPP!!!!!!!

(As the Fossa made a dog pile to eat Marty, Melman is swinging on a vine while doing a Tarzan Yell to save Marty.)

Marty: Melman?

Melman: That's right, baby. (Both crash into the rock)

Gloria: Run!

Marty: What's the plan?

Gloria: This is the plan!

Fossa: Fossa hungry. Fossa eat.

Marty: This is the plan?!

Skipper: Fossa halt!

Fossa: Huh? (Skipper fires the gun of the red light) Ooh. Fossa aaahh. Fossa ooh. Fossa aaahh.

Private: Come and get it!

Fossa: Fossa-Huh?

Gloria: Take that!

Fossa: Fossa ow!

Private: There's too many of them, Skipper.

Skipper: It's been a real pleasure serving with you boys.

(Just then, they hear Alex roaring for preparing to trick the Fossa)

Marty: Alex?

Alex: That's my kill! Mine. Alex hungry. Alex eat. (Unleashes his claws) Psst! It's showtime. Thanks for not giving up on me, Marty.

Marty: Man, you almost gave me a heart attack. You can't just come sneak up on me. Just because you're a lion... (Muffled) Let go of me. Let go of me.

Alex: Shh! We're getting out of here. Guys, just go with me on this. Like I said, it's showtime. Rrr! Mine! My kill! Rrahh! They're all mine! (Roars as his gang start to scream)

Gloria: Aah! It's the king of the beasts! Oh, no! Aah!

Marty: Don't eat me, Mr. Lion!

Melman: He's scary!

Alex: Fear me! Savagery beyond comprehension!

Marty: I am far too young to die!

Melman: You're a monster! A monster, I say!

Alex: And, you!

Fossa: Me?!

Gloria: Oh, you want some of this? (Grunts) You better run for your lives!

Marty: Somebody call a cop!

Melman: He's psychotic!

Alex: This is my territory!! Understand?! I never, ever want to see you on my turf again! [Roaring to scare all Fossas] Boo.

Marty: Yeah! You the cat!

Gloria: Got my boy back!

King Julien: Ha-ha-ha-ha-ha! I did it! Give me some love! The plan worked! The plan worked! I'm very clever! I'm the one, baby! Come on. Time to robot! I am very clever king. I am super genius. I am robot king of the monkey things. Compute, compute.

Alex: So, what's for lunch?

Skipper: Close those eyes.

Alex: Why do I have to close my eyes?

Skipper: Do it.

Alex: Yeah. They're closed.

Skipper: Tighter.

Alex: Yes, sir.

Skipper: No peeking.

Alex: Alright. They're closed.

Skipper: Rico.

Rico: Hai.

Skipper: Open that hatch.

Alex: Aah…

Skipper: Fire in the hole. Now chew. Chew like you mean it. Savor it.

Alex: Mmm… Mmm.

Marty: And?

Gloria: Well?

Melman: Pretty good, right?

King Julien: There's always Plan B.

Mort: Ha-ha-ha.

Alex: Mmm. Mmm! This is better than steak! I love it. I love it!

Skipper: The kitty loves the fishy.

Marty: Well, I propose a toast. Now, he may be a pain in the butt at times... And trust me, I know. But this cat proved to me without a doubt that his heart is bigger than his stomach. To Alex.

Everyone: To Alex!

King Julien: Enough! Stop it!

Marty: Well, what do you guys think? Should we head back to New York?

Alex: I don't know, Marty. I mean, this is your dream. You sure you want to leave?

Marty: I don't care where we are. As long as we're together, it doesn't matter to me.

Alex: Well, in that case... Yo. Rico. I'll take 300 orders to go.

Rico: Hai.

King Julien: Yes, yes. But before you leave, I have an announcement to make. So shut up, everyone, please. Thank you. After much deep and profound brain things inside my head, I have decided to thank you for bringing peace to our home. And to make you feel good, I'm gonna give you this lovely parting gift.

Alex: No, I couldn't. Really, I can't take your crown.

King Julien: That's OK, I've got a bigger crown. It's got a gecko on it. Look at him shake. Go, Stevie, go!

Alex: Bye, little fuzzbuckets!

Gloria: Thanks for everything!

Marty: Bye!

Alex: So long!

King Julien: Okay, bye-bye, now.

Marty: Arrivederci.

King Julien: Bye-bye.

Maurice: Toodle-oo!

Mort: Bye! Goodbye!

King Julien: See you later, crocodile. Maurice, my arm is tired. Wave it for me. Faster, you naughty little monkey!

Alex: You know, by the time we get to New York, it’s gonna be the middle of winter. So I was just thinking, why rush? Maybe we could make a few side stops along the way?

Marty: Maybe Paris.

Gloria: Ooh! You just read my mind.

Alex: I was thinking Spain.

Marty: Yeah. Run with the bulls.

Gloria: What about Fiji?

Melman: Ooh! Canada. Can we? Cheap meds. Eh?

Alex: You know, I wouldn't even mind coming back here sometime.

Melman: Yeah, I could do that.

Gloria: You could say that again.

Private: Skipper, don't you think we should tell them that the boat's out of gas?

Skipper: Nah. Just smile and wave, boys. Smile and wave.
*/
