let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed on", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function excuse(param1, param2, param3, param4) {
  let who = param1[Math.floor(Math.random() * 4)];
  let action = param2[Math.floor(Math.random() * 4)];
  let what = param3[Math.floor(Math.random() * 3)];
  let when = param4[Math.floor(Math.random() * 5)];
  return who + " " + action + " " + what + " " + when;
}

document.write(excuse(who, action, what, when));
