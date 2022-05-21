//var drainBy = -0.0005;
//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS

question = ["The minimum number of children of the root node of a B*Tree of order m=9 is..."];
answer = ["2"];
group = "Numbers";
picture = "img/";
items.push({question,answer,group,picture});

question = ["The minimum number of key values of an interior node of a B tree of order m=7 is?"];
answer = ["3"];
group = "Numbers";
picture = "img/";
items.push({question,answer,group,picture});

question = ["The maximum number of children in an interior node of a B* tree of order m=5 is?"];
answer = ["5"];
group = "Numbers";
picture = "img/";
items.push({question,answer,group,picture});

question = ["In a B+ tree, S0 is a pointer to a node containing key values ___ the first key value in the parent node.."];
answer = ["<"];
group = "Numbers";
picture = "img/";
items.push({question,answer,group,picture});

question = ["In a B tree, Sn is a pointer to a node containing key values ___ the last key value in the parent node.."];
answer = ["<"];
group = "Numbers";
picture = "img/";
items.push({question,answer,group,picture});

question = ["A node in a B tree with 3 key values can have 0 or __ pointers"];
answer = ["4"];
group = "Numbers";
picture = "img/";
items.push({question,answer,group,picture});

question = ["In an AVL tree, the height difference between the left and the right subtree is at most?"];
answer = ["1"];
group = "Numbers";
picture = "img/";
items.push({question,answer,group,picture});



/////

question = ["A kind of tree which is useful in storing words in a dictionary"];
answer = ["Trie"];
group = "Definition";
picture = "img/";
items.push({question,answer,group,picture});

question = ["Insertion in a full root node of a B* Tree, where all the children are also full results to a/an"];
answer = ["Increase in tree height"];
group = "Definition";
picture = "img/";
items.push({question,answer,group,picture});

question = ["Deletion in an interior node of a B tree where the children contain the minimum number of key values results to a?"];
answer = ["Merge"];
group = "Definition";
picture = "img/";
items.push({question,answer,group,picture});

question = ["Deletion in the root node of a B* tree with only one key value and the children are all at a minimum results to a?"];
answer = ["Decrease in tree height"];
group = "Definition";
picture = "img/";
items.push({question,answer,group,picture});

question = ["Insertion to a full node in a B tree results to a?"];
answer = ["Split"];
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