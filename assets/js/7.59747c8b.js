(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{364:function(t,e,a){t.exports=a.p+"assets/img/1.1ab6a50e.png"},365:function(t,e,a){t.exports=a.p+"assets/img/2.64fc5024.png"},366:function(t,e,a){t.exports=a.p+"assets/img/3.c2abd35b.png"},403:function(t,e,a){"use strict";a.r(e);var s=a(44),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"what-you-shouldn-t-unit-test-in-games"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-you-shouldn-t-unit-test-in-games"}},[t._v("#")]),t._v(" What you shouldn't unit test in games")]),t._v(" "),s("p",[s("em",[t._v("Disclaimer: Images shown here are from the game Divinity: Original Sin which")]),t._v(" "),s("em",[t._v("is developed by Larian Studios. Code shown here isn't the real code of the")]),t._v(" "),s("em",[t._v("game.")])]),t._v(" "),s("p",[t._v("Hi, you are David, the programmer. For the last couple of months you've been\nassigned to some project with huge legacy code base. To be more precise, to an\nRPG game with turn-based combat. There were some good decisions in the old\narchitecture, but mostly there was highly coupled code almost everywhere.")]),t._v(" "),s("p",[t._v("Everything is going very well (let's say, there are no deadlines, lol), you\ncomplete various tasks, refactor all the way and now you've got a task about\ntweaking one of the most interesting parts of the game - turn-based combat.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(364),alt:"1"}})]),t._v(" "),s("p",[t._v("You look at all the stuff going on here and find a part that you were assigned\nto tweak - turn queue bar.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(365),alt:"2"}})]),t._v(" "),s("p",[t._v("This bar shows the order of character's turns (see, initiative). So, the first\ngoes some white-haired woman, then, er, another white-haired woman (called\nMadora), then four demon-kind guys... you get the point. This queue is not\nstatic: if character gets slowed/stunned - he/she moves in this queue to the\nright. You look at the code and see this:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TurnQueueBar")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ChangeInitiative")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),t._v(" character"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" newValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hundreds of lines that contain game logic and visuals.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other Update/Render logic")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("You crawl through this class trying to figure out what game logic actually\nhappens over here and after a couple of hours you manage to complete your task.\nGame designers are extatic about changes and propose a dozen of other tweaks.\nYou think about amount of time that you will waste if don't do something about\nthis code and it makes you shiver. So, armed with "),s("a",{attrs:{href:"http://www.oodesign.com/single-responsibility-principle.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SRP"),s("OutboundLink")],1),t._v(" (Single Responsibility\nPrinciple) you decide to separate visuals and logic to ease future changes to\nthis code. After you finish separation refactoring you get clearly dedicated\nmodules:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TurnQueueBar")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TurnQueue")]),t._v(" turnQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TurnQueueBar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TurnQueue")]),t._v(" turnQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("turnQueue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turnQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        turnQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PositionChanged "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" PositionChanged"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PositionChanged")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),t._v(" character"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" newPosition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Visuals of icon moving in the bar.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other Update/Render logic")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TurnQueue")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Character"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" PositionChanged"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddCharacter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),t._v(" character"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        character"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InitiativeChanged "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" InitiativeChanged"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("InitiativeChanged")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),t._v(" character"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" newValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Game logic")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("positionChanged"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PositionChanged")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("character"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newPosition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Everything looks cool and dandy and you decide to refactor\n"),s("code",[t._v("TurnQueue.InitiativeChanged")]),t._v(' a bit more and whoops... you break something. You\nthink "Darn it, I\'m tired of refactoring that breaks code. I should clearly\nstart unit testing!", revert code to the initial state and begin to write some\ntests for it. You start with '),s("code",[t._v("TurnQueue")]),t._v(" and finish after twenty minutes. Ok,\ngreat, now new code won't break existing one.")]),t._v(" "),s("p",[t._v("You move on to "),s("code",[t._v("TurnQueueBar")]),t._v(", and feel that something is wrong. You try to\nwrite one test, try again, try write other test logic and other, and other. Your\ntests either do nothing to signal about fails after breaking changes or they\nbecome very big and brittle. You may even try to extract "),s("code",[t._v("ITurnQueue")]),t._v(" interface\nto isolate bar from queue, further making these tests unreliable and introducing\nunnecessary abstractions.")]),t._v(" "),s("p",[t._v("So, you are staring at your code and wondering: "),s("em",[t._v("What's wrong with it?")]),t._v(" and\n"),s("em",[t._v("Why can't I test it?")])]),t._v(" "),s("blockquote",[s("p",[t._v("You are trying to unit test fun and visuals.")])]),t._v(" "),s("p",[t._v("Let me bring an analogy:")]),t._v(" "),s("p",[t._v("There is one of the most famous patterns in web development called MVC\n(Model-View-Controller). In this pattern there's clear separation between code\nthat does business logic (M), code that shows result of this logic to user (V)\nand code that glues these parts together (C).")]),t._v(" "),s("p",[s("img",{attrs:{src:a(366),alt:"3"}})]),t._v(" "),s("p",[t._v("Most of the time the only part that gets covered by tests is the Model part, as\nit contains business-sensitive operations. On the other hand View contains\nHTML/JS stuff that is VERY hard to test properly for two reasons:")]),t._v(" "),s("ol",[s("li",[t._v("Visuals tend to chage much (MUCH) more than business logic => Tests for Views\nbecome outdated pretty quickly")]),t._v(" "),s("li",[t._v("What will you test? Which pixels are of which color after rendering? On which\nposition image in rendered? => It's pretty hard to figure out proper\nverification process for Views")])]),t._v(" "),s("p",[t._v("What we have with "),s("code",[t._v("TurnQueue")]),t._v(" and "),s("code",[t._v("TurnQueueBar")]),t._v(" is very much the same MVC:\n"),s("code",[t._v("TurnQueue")]),t._v(" is M and "),s("code",[t._v("TurnQueueBar")]),t._v(" contains V and C (they can be separated too,\nthat's not the point). So, by trying to test "),s("code",[t._v("TurnQueueBar")]),t._v(" you are almost\ntackling HTML/JS testing problem. Pretty pointless, huh?")]),t._v(" "),s("p",[t._v("And here goes the "),s("strong",[t._v("fun")]),t._v(" part (pun intended): you can't test the fun of one or\nanother visual/feature. This is very important part of V in games and it's just\nimpossible to measure/verify (unless you are creating game for robots). Yep, no\n100% code coverage, sorry.")]),t._v(" "),s("p",[t._v('But now you are asking me: "Whoa dude, you told nothing about C part of\n'),s("code",[t._v("TurnQueueBar")]),t._v(", should we test it?\". You'll find the answer for this question in\nfuture posts (hint: no, you shouldn't).")]),t._v(" "),s("Giscus")],1)}),[],!1,null,null,null);e.default=n.exports}}]);