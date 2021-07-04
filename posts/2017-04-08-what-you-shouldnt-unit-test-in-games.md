---
title: What you shouldn't unit test in games
date: 2017-04-08
excerpt: Hi, you are David, the programmer. For the last couple of months you've been assigned to some project with huge legacy code base.
---

# What you shouldn't unit test in games

*Disclaimer: Images shown here are from the game Divinity: Original Sin which is developed by Larian Studios. Code shown here isn't the real code of the game.*

Hi, you are David, the programmer. For the last couple of months you've been assigned to some project with huge legacy code base. To be more precise, to an RPG game with turn-based combat. There were some good decisions in the old architecture, but mostly there was highly coupled code almost everywhere.

Everything is going very well (let's say, there are no deadlines, lol), you complete various tasks, refactor all the way and now you've got a task about tweaking one of the most interesting parts of the game - turn-based combat.

![](./images/what-you-shouldnt-unit-test-in-games/DOS.png)

You look at all the stuff going on here and find a part that you were assigned to tweak - turn queue bar.

![](./images/what-you-shouldnt-unit-test-in-games/DOS-bar.png)

This bar shows the order of character's turns (see, initiative). So, the first goes some white-haired woman, then, er, another white-haired woman (called Madora), then four demon-kind guys... you get the point. This queue is not static: if character gets slowed/stunned - he/she moves in this queue to the right. You look at the code and see this:

```csharp
public class TurnQueueBar
{
    public void ChangeInitiative(Character character, int newValue)
    {
        // Hundreds of lines that contain game logic and visuals.
    }

    // Other Update/Render logic
}
```

You crawl through this class trying to figure out what game logic actually happens over here and after a couple of hours you manage to complete your task. Game designers are extatic about changes and propose a dozen of other tweaks. You think about amount of time that you will waste if don't do something about this code and it makes you shiver. So, armed with [SRP](http://www.oodesign.com/single-responsibility-principle.html) (Single Responsibility Principle) you decide to separate visuals and logic to ease future changes to this code. After you finish separation refactoring you get clearly dedicated modules:

```csharp
public class TurnQueueBar
{
    private readonly TurnQueue turnQueue;

    public TurnQueueBar(TurnQueue turnQueue)
    {
        this.turnQueue = turnQueue;
        turnQueue.PositionChanged += PositionChanged;
    }

    private void PositionChanged(Character character, int newPosition)
    {
        // Visuals of icon moving in the bar.
    }

    // Other Update/Render logic
}

public class TurnQueue
{
    public event Action<Character, int> PositionChanged;

    public void AddCharacter(Character character)
    {
        character.InitiativeChanged += InitiativeChanged;
    }

    public void InitiativeChanged(Character character, int newValue)
    {
        // Game logic
        if (positionChanged)
            PositionChanged(character, newPosition);
    }
}
```

Everything looks cool and dandy and you decide to refactor `TurnQueue.InitiativeChanged` a bit more and whoops... you break something. You think "Darn it, I'm tired of refactoring that breaks code. I should clearly start unit testing!", revert code to the initial state and begin to write some tests for it. You start with `TurnQueue` and finish after twenty minutes. Ok, great, now new code won't break existing one.

You move on to `TurnQueueBar`, and feel that something is wrong. You try to write one test, try again, try write other test logic and other, and other. Your tests either do nothing to signal about fails after breaking changes or they become very big and brittle. You may even try to extract `ITurnQueue` interface to isolate bar from queue, further making these tests unreliable and introducing unnecessary abstractions.

So, you are staring at your code and wondering: *What's wrong with it?* and *Why can't I test it?*

> You are trying to unit test fun and visuals.

Let me bring an analogy:

There is one of the most famous patterns in web development called MVC (Model-View-Controller). In this pattern there's clear separation between code that does business logic (M), code that shows result of this logic to user (V) and code that glues these parts together (C).

![](./images/what-you-shouldnt-unit-test-in-games/MVC.png)

Most of the time the only part that gets covered by tests is the Model part, as it contains business-sensitive operations. On the other hand View contains HTML/JS stuff that is VERY hard to test properly for two reasons:

1. Visuals tend to chage much (MUCH) more than business logic => Tests for Views become outdated pretty quickly
2. What will you test? Which pixels are of which color after rendering? On which position image in rendered? => It's pretty hard to figure out proper verification process for Views

What we have with `TurnQueue` and `TurnQueueBar` is very much the same MVC: `TurnQueue` is M and `TurnQueueBar` contains V and C (they can be separated too, that's not the point). So, by trying to test `TurnQueueBar` you are almost tackling HTML/JS testing problem. Pretty pointless, huh?

And here goes the **fun** part (pun intended): you can't test the fun of one or another visual/feature. This is very important part of V in games and it's just impossible to measure/verify (unless you are creating game for robots). Yep, no 100% code coverage, sorry.

But now you are asking me: "Whoa dude, you told nothing about C part of `TurnQueueBar`, should we test it?". You'll find the answer for this question in future posts (hint: no, you shouldn't).

<Giscus />