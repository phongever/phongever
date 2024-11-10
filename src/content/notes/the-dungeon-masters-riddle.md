---
title: The dungeon master's riddle
tags:
  - Tào lao
---

It's a Monday, which means yet another party of adventurers has broken into your lair, here to slay your minions and steal your treasures. Judging by the trail of the destruction, you're up against a fighter, a rogue, and a cleric. The first two won't be a problem for a powerful necromancer like you, but the cleric's spells are trouble. If they can cast even one on you, you're a goner. Which is why it's lucky that the party has fallen prey to one of your traps.

In order to enter your inner centum, each adventurer had to drink either a truth or lying potion. Then, foolishly, one picked up a cursed skull, which immobilized all three adventurers' limbs for 10 minutes or until you physically interact with one of them. You rush to the scene, bearing a magical ring that can render a cleric harmless, and have no idea which adventurer is which.

Well, that's OK. The potions they drank will compel each to answer one question with either the truth or a lie. You demand, "Which one of you is the cleric?"

Agan answers, "Beorn is not both a lying-potion drinker and a cleric."

Beorn says, "Either Agan drank a lying-potion or I am not a cleric."

And Cedar replies, "The cleric drank a lying-potion."

In order to find the cleric in this puzzle, originally crafted by master logician Raymond Smullyan, we'll need to also figure out who drank what. There are several paths to this solution, but Cedar's statement is more straightforward than the other two, so let's start there.

If Cedar's telling the truth, she can't be the cleric since then the cleric would also have to be a liar. But if she's lying, she also can't be the cleric because then the cleric should've told the truth. So the cleric must be Agan or Beorn. Let's assume Cedar is telling the truth, meaning the cleric is lying.

If Agan is also teliing the truth, Beorn must be the lying cleric by the process of elimination. But Agan's statement contradicts this by saying that Beorn can't be both lying and a cleric, leaving no possible cleric. If, on the other hand, Agan is lying, then her statement means Beorn is a lying cleric.

Now we need to look at Beorn's sentence, and this is where things get tricky. Because the way it's structured, it can be confusing understanding what a lie would be. So let's simplify.

Beorn stated two facts, and said excatly one of them is true. So if Beorn is telling the truth, it could be that 1 is true and 2 is false, or 1 is false and 2 is true. And if Beorn is lying, it means that 1 and 2 are both true or both false. This is equivalent to the xor, or exclusive or function in boolean algebra, a branch of mathemetics that deals with logical operations. Boolean algebra is the underpinning of the electronic logic gates, that allow computers to function, using 1's and 0's instead of true and false.

So now let's assess Beorn's statement based on what we know. We're assuming that Agan is a liar, making 1 true and 2 false, because Beorn would be the cleric. But in that case, Beorn would be telling the truth, which contradicts the idea that the cleric is a liar. In other words, if Cedar is telling the truth, Agan can't be telling the truth or lying. Therefore, Cedar must be lying, so the cleric is telling the truth.

So again, let's consider the posibilities for Agan. She can't be lying because then Beorn would be a lying cleric, which we know isn't possible. So Agan must be telling the truth, and we're back to our truth table for Beorn.

Statement 1 is false. And if the second was false, Agan would be a lying cleric; again, impossible. So statement 2 is true, making both Agan and Beorn truthtellers, and Agan the cleric.

You slide the ring onto her finger, polymorph all three into skeletal mice, temporarily, of course, you're not a monster, and send them on their marry way. But in that moment, was there a connection?

https://www.youtube.com/watch?v=xMcOUyyk9Hk
