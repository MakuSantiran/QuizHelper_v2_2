//var drainBy = -0.0005;
//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS

question = ["consists of a finite set of nodes, and a finite set of directed arcs that connect pairs of nodes."];
answer = ["Tree"];
group = "Definition";
picture = "img/";
items.push({question,answer,group,picture});

question = ["A tree which has at most 2 children, the left child and the right child"];
answer = ["Binary Tree"];
group = "Definition";
picture = "img/";
items.push({question,answer,group,picture});

question = ["Its the same thing as binary tree but, left should be smaller and right should be bigger"];
answer = ["Binary Search Tree","BST","BST Tree"];
group = "Definition";
picture = "img/";
items.push({question,answer,group,picture});

question = ["where the height difference of the left and right subtree is at most 1"];
answer = ["AVL Tree","Adelson Velskii Landis Tree"];
group = "Definition";
picture = "img/";
items.push({question,answer,group,picture});

///

question = ["are multi-way trees which are generalised versions of binary trees where each node contains multiple elements."];
answer = ["M Way Search Tree","M Tree","M way Search Tree of Order"];
group = "TypesOfTrees";
picture = "img/";
items.push({question,answer,group,picture});

question = ["What does this refer to?"];
answer = ["M Way Search Tree","M Tree","M way Search Tree of Order"];
group = "TypesOfTrees";
picture = "img/TS_BTree.png";
items.push({question,answer,group,picture});

question = ["What does this refer to?"];
answer = ["B tree"];
group = "TypesOfTrees";
picture = "img/TS_BTree.png";
items.push({question,answer,group,picture});

question = ["What does this refer to?"];
answer = ["B* Tree"];
group = "TypesOfTrees";
picture = "img/TS_BastTree.png";
items.push({question,answer,group,picture});


question = ["What does this refer to?"];
answer = ["B+ Tree"];
group = "TypesOfTrees";
picture = "img/TS_B+Tree.png";
items.push({question,answer,group,picture});

question = ["Used to store dictionary"];
answer = ["B+ Tree"];
group = "TypesOfTrees";
picture = "img/";
items.push({question,answer,group,picture});


///

question = ["is a binary search tree in which each node has a color (red or black) associated with it"];
answer = ["Red-Black Tree","Red Black Tree"];
group = "Definition";
picture = "img/";
items.push({question,answer,group,picture});

////

question = ["What kind of tree corresponds to this order?"];
answer = ["B Tree"];
group = "Orders";
picture = "img/TS_BOrder.png";
items.push({question,answer,group,picture});

question = ["Used to store dictionary"];
answer = ["B* Tree"];
group = "Orders";
picture = "img/";
items.push({question,answer,group,picture});

////

question = ["The root of the red-black tree is??"];
answer = ["Black"];
group = "RedBlack";
picture = "img/";
items.push({question,answer,group,picture});

question = ["The children of a ____ are black"];
answer = ["Red"];
group = "RedBlack";
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
var noMusic = ftrue; // noMusic in practice mode??