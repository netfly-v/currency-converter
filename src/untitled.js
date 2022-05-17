const power = (num, pow) => {
  if (pow > 0) {
    return num * power(num, pow - 1);
  }
  return 1;
};

power(2, 3); // 8
// 2*power(2,2)
// 2*2*power(2,1)
// 2*2*2*power(2,0)
// 2*2*2*

const counter = () => {
  let a = 0;
  return () => {
    return a++;
  };
};

counter()();
const abc = counter();
abc();
const adfsd = counter();
adfsd();

for (var i = 0; i < 10; i++) {
  function func(j) {
    setTimeout(() => console.log(j), 0);
  }
  func(i);
}

//func(0) i=0 settime... ..... i=10
//func() i=1 settime... ..... i=10
//func() i=2 settime... ..... i=10

func();

function func() {
  console.log('123');
}
