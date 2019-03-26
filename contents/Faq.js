import Qna from '../components/Qna'

const qna = [
[
"What is this locked big chest in the middle of The Ice Palace?",

"Welcome to A Day Out!",

"This special world contains six very hard levels. \
These levels were simple yet extremely hard to be in The Ice Palace, \
so we gathered those to make a new world. Dare solve it?",
],

[
"In the first level “Easy Mode”, boxes keep block the narrow hole next to the start position. \
It’s very annoying.",

"Down + Jump = Fall off from a box.",

"You don’t have to know this, but it will make your life much easier.",
],

[
"This level is too hard, I need a hint.",

"Alright, we can give you hints.",

"Sometimes, to halt the game and start logical deduction helps. \
But if you still think it’s too hard, feel free to contact us. \
Or you can just ask for a hint on the forum. We can give you a hint. \
Also, please feel free to share your hints and solutions! \
We don’t mind it as long as you take care of the spoilers.",
],

[
"This level is logically impossible and I can prove it!",

"You missed something.",
"Believe me, all gems are collectible. Have you got the diamond in the Void - Escalate? \
How about the ruby in the Last Tapestry - Flight? Did you think those levels are \
also impossible at the first glance? Well, I did actually. \
Or maybe it’s the case which you missed some unusual control tricks, \
just like some key moves in some maps. Do you remember yourself solving The Void - Grasp? \
We have found some other original tricks. Some levels are completely built on it, \
which may seem to be logically impossible to solve until you get the trick. \
You could solve it when you catch the trick.",
],

[
"I hate jars.",

"Good.",

"Working as intended.",
],

[
"Bug! Strange behavior!",

"It doesn’t change anything.",

"Oobleck in aqua mortua: Wow, you are pretty quick-witted. You reached Low Tide, right? \
It’s actually a hidden feature that Portponky made. It doesn’t change anything though, \
we didn’t want to actively use it. Submerged ledge: Portponky was too lazy to make properly \
working submerged ledge, so they are actually translucent solid blocks. Fear not! \
We designed levels very carefully to make sure it doesn’t change anything. \
There were several other non-intuitive behaviors (such as making the second paradox \
by entering a cauldron, instead of leaving a room) which are really hard to understand, \
but no puzzle exploits them, so relax."
],

[
"Is there any hint for the locations of diamonds/rubies, or at least a number of them?",

"Yep.",

"For The Ice Palace - yes, two rooms contain hints. One room shows the total number of \
each of the gems. Another room shows the exact locations of them. Navigate rooms carefully. \
For A Day Out - no. We believe you already realized how to distinguish \
whether a level contains bonus gems or not by now.",
],

[
"Are you going to translate the mission names?",

"Nah.",

"We can’t do all the translations job - we know you can read English, \
‘cuz this sentence is written in English.",
],

[
"Will this DLC be updated?",

"Maybe, maybe not.",

"If more great custom levels are made or we desperately have to remove \
some unexpected alternative solutions. But since we have no way to notice it to you, \
we will try to update it as least as possible. The current version is v1.0. \
We have no way to automatically update your game since this DLC is not an official one. \
You need to manually update it by installing it again.",
],

[
"How can I remove this DLC?",

"How sad! You don’t.",

"Just kidding. In the zip file you downloaded, there’s the uninstall file. \
Execute “uninstall-Windows.bat” or “uninstall-Mac.sh” depending on your OS, \
and find your Steam folder. This will remove this DLC without erasing your whole progress. \
When you re-install the DLC, your progress will still be there.",
],
]

export default () => (
  <>
    <h1>FAQ</h1>
    <Qna contents={qna} />
  </>
)
