//var drainBy = -0.0005;
//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS

question = ["Is a step where it divides the problem into smaller subproblems"];
answer = ["Divide Step"];
group = "Divide and Conquer";
picture = "img/";
items.push({question,answer,group,picture});

question = ["Is a step where it solves the smaller subproblem"];
answer = ["Conquer Step"];
group = "Divide and Conquer";
picture = "img/";
items.push({question,answer,group,picture});

question = ["Is a step where it combines the solutions of the smaller subproblems  to form a solution to the larger problem"];
answer = ["Combine Step"];
group = "Divide and Conquer";
picture = "img/";
items.push({question,answer,group,picture});

question = ["an algorithm technique used primarily for optimizing problems, where we wish to find the best way of doing something. "];
answer = ["Dynamic Programming"];
group = "Definition";
picture = "img/";
items.push({question,answer,group,picture});

question = ["It is both a  mathematical optimization method and a computer programming method."];
answer = ["Dynamic Programming"];
group = "Definition";
picture = "img/";
items.push({question,answer,group,picture});

question = ["a sequence of integers where the next integer in the series is the sum  of the previous two."];
answer = ["Fibonacci Series"];
group = "Definition";
picture = "img/";
items.push({question,answer,group,picture});

question = ["makes choices at each step to ensure that the objective function is optimized"];
answer = ["Greedy Algorithm"];
group = "Definition";
picture = "img/";
items.push({question,answer,group,picture});


/* exclusion from remix */
var DontIncludeFromRemix1 = [""];
var DontIncludeFromRemix2 = [""];
var DontIncludeFromRemix3 = [""];

/* game configuration */
var identificationMode = false;
var drainBy = -0.005;
var wrongDamage = 25;
var examMode = false; // no practice mode 
var PanicMode = false; // with health and timer
var RemixModeRarity = 5; // the lower the value, the more remixes occuring | if 0 then all will be remix mode


/* level management */
var DontIncludeGroups = [""];

/* music configuration*/
var bgmusic0_PF = '../../seriousSoundtrack/bgmusic0.mp3';
var bgmusic1_PF = '../../seriousSoundtrack/bgmusic1.mp3';
var bgmusic2_PF = '../../seriousSoundtrack/bgmusic2.mp3';
var bgmusic3_PF = '../../seriousSoundtrack/bgmusic3.mp3'; 
var bgmusic4_PF = '../../seriousSoundtrack/bgmusic4.mp3'; 
var noMusic = true; // noMusic in practice mode??