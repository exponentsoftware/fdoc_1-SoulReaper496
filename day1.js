const paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";

//function for count words
function countWords(paragraph, word1, word2) {
  let count1 = 0;
  let count2 = 0;
  let a = paragraph.split(" ");

  for (let i = 0; i < a.length; i++) {
    if (a[i].includes(word1)) {
      count1++;
    }
    if (a[i].includes(word2)) {
      count2++;
    }
  }
  //compare 2 num

  if (count1 > count2) {
    console.log("The Word" + word1 + "more frequently occured than" + word2);
  } else if (count2 > count1) {
    console.log("The Word" + word2 + "more frequently occured than" + word1);
  } else {
    console.log("Both accured same time");
  }
}

console.log(countWords(paragraph, "teaching", "you"));
