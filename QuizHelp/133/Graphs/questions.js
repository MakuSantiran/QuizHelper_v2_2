//var drainBy = -0.0005;
//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS


question = ["Is defined to be a set of vertices or nodes V, and a  set of edges or arcs E."];
answer = ["Graph"];
group = "Definition";
picture = "img/";
items.push({question,answer,group,picture});

question = ["Is an ordered pair of nodes"];
answer = ["Arc"];
group = "Definition";
picture = "img/";
items.push({question,answer,group,picture});

/// Arc

question = ["What does U stands for?"];
answer = ["Tail"];
group = "Arc(U or V)";
picture = "img/";
items.push({question,answer,group,picture});

question = ["What does V stands for?"];
answer = ["Head"];
group = "Arc(U or V)";
picture = "img/";
items.push({question,answer,group,picture});

/// directed or un?

question = ["What type of Graph is this?"];
answer = ["Undirected"];
group = "TypesOfGraph";
picture = "img/G_Undirected.png";
items.push({question,answer,group,picture});

question = ["What type of Graph is this?"];
answer = ["Weighted Directed"];
group = "TypesOfGraph";
picture = "img/G_WDirected.png";
items.push({question,answer,group,picture});

question = ["What type of Graph is this?"];
answer = ["Weighted Undirected"];
group = "TypesOfGraph";
picture = "img/G_WUndirected.png";
items.push({question,answer,group,picture});

/////

question = ["What type of Adjacency is this?"];
answer = ["Adjacency Matrix","Matrix"];
group = "Matrix or List?";
picture = "img/G_Matrix.png";
items.push({question,answer,group,picture});

question = ["What type of Adjacency is this?"];
answer = ["Adjacency List","List"];
group = "Matrix or List?";
picture = "img/G_List.png";
items.push({question,answer,group,picture});

/////


question = ["What graph operations where it returns the index of the first vertex that is adjacent to vertex v"];
answer = ["First_adj(v)"];
group = "WhatOperations";
picture = "img/";
items.push({question,answer,group,picture});

question = ["What graph operations where it returns the index of the second vertex adjacent to v"];
answer = ["Next_adj(v)"];
group = "WhatOperations";
picture = "img/";
items.push({question,answer,group,picture});

////

question = ["it attempts to follow a path as deep as possible; a generalisation of pre-order traversal of trees"];
answer = ["Depth-First Search","Depth First Search","DFS"];
group = "GraphSearching";
picture = "img/";
items.push({question,answer,group,picture});

question = ["It makes use of stack structure"];
answer = ["Depth-First Search","Depth First Search","DFS"];
group = "GraphSearching";
picture = "img/";
items.push({question,answer,group,picture});

question = ["Its where the nodes closest to the start are evaluated  first, and the most distant nodes are evaluated last; same as the  inorder traversal of trees"];
answer = ["Breadth-First Search","Breadth First Search","BFS"];
group = "GraphSearching";
picture = "img/";
items.push({question,answer,group,picture});

question = ["It makes use of a queue structure"];
answer = ["Breadth-First Search","Breadth First Search","BFS"];
group = "GraphSearching";
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