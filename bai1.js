let text = 'nguyen                 van kien';
const splitString = [...text.split(' ')].filter((i) => i.trim() != ''); // lọc chuỗi khác rỗng

const arr = [...splitString];
const test2 = (arr = [], res = [], used = []) => {
  let i, ch;
  for (i = 0; i < arr.length; i++) {
    ch = arr.splice(i, 1)[0]; // tach phan tu tai vi tri
    // tai i = 0 lay phan tu dau tien trong mang arr["nguyen","van","kien"] -> ch = nguyen , bo phan tu "nguyen"
    // tai i = 1 lay phan tu dau trong mang arr["nguyen","van","kien"] -> ch = kien , bo phan tu "kien"
    used.push(ch);
    // tai i = 0 them ch "nguyen" vao mang used -> used["nguyen"] -> used["nguyen","van"] -> used["nguyen","van","kien"]
    // tai i = 1 them ch "kien" vao mang used -> used["kien"] -> used["kien","van"] -> used["nguyen","kien","van"]
    if (arr.length === 0) {
      res.push(used.slice()); // arr.length === 0 ==> res["nguyen","van","kien"]
    }
    test2(arr, res, used); // goi lai ham lay phan tu tiep theo la "van"
    arr.splice(i, 0, ch); // them ch vao vi tri thu i trong arr (theo thứ tự từ kiên -> văn -> nguyễn vào vị trí i )

    // tai i = 0 , arr.splice(0, 0, ch), ch = nguyen
    // arr[] -> arr.splice(0, 0, ch) khi ch = kien -> arr["kien"]
    // arr[] -> arr.splice(0, 0, ch) khi ch = van -> arr["van","kien"]
    // arr[] -> arr.splice(0, 0, ch) khi ch = nguyen -> arr["nguyen","van","kien"]
    // ----------------------------------------------------------------------------
    // tai i = 1 , arr.splice(1, 0, ch) , ch = van
    // arr[] -> arr.splice(1, 0, ch) khi ch = van  -> arr["van"]
    // arr[] -> arr.splice(1, 0, ch) khi ch = kien -> arr["kien","van"]
    // arr[] -> arr.splice(1, 0, ch) khi ch = nguyen  -> arr["nguyen","kien","van"]

    // xong 3 phan tu thi tiep i + 1
    used.pop();
    // tai i = 0 lay ra phan tu cuoi trong used ["nguyen","van","kien"] -> ["nguyen","van"]
    // tai i = 1 lay ra phan tu cuoi trong used ["nguyen","van","kien"] -> ["nguyen"]
  }
  return res;
};
console.log(test2(arr));
