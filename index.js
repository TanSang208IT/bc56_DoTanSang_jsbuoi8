//BÀI TẬP
// 1. THÊM SỐ VÀO MẢNG
var arr = [];

function themSo() {
  var soN = document.getElementById("soN").value * 1;
  arr.push(soN);
  document.getElementById("mangNguoiDungNhap").innerHTML = arr;
}
//2. TÍNH TỔNG CÁC SỐ DƯƠNG

function tinhTongCacSoDuong() {
  var tongCacSoDuong = 0;
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      tongCacSoDuong += arr[i];
      console.log(tongCacSoDuong);
    }
  }
  document.getElementById("tongCacSoDuong").innerHTML = tongCacSoDuong;
}
document.querySelector(".tinhTong").onclick = tinhTongCacSoDuong;

//3. ĐẾM SỐ DƯƠNG
function demSoDuong() {
  var demSoDuong = 0;
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      demSoDuong++;
    }
  }
  document.getElementById("demSoDuong").innerHTML = demSoDuong;
}
document.querySelector(".demSo").onclick = demSoDuong;

//4. TÌM SỐ NHỎ NHẤT

function timSoNhoNhat() {
  var min = arr[0];
  for (var i = 0; i <= arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  document.getElementById("timSoNhoNhat").innerHTML = min;
}
document.querySelector(".xetSoNhoNhat").onclick = timSoNhoNhat;

// 5. TÌM SỐ DƯƠNG NHỎ NHẤT

function timSoDuongNhoNhat() {
  var minDuong = arr[0];
  for (var i = 0; i <= arr.length; i++) {
    if (minDuong > arr[i] && arr[i] > 0) {
      minDuong = arr[i];
    }
  }
  document.getElementById("timSoDuongNhoNhat").innerHTML = minDuong;
}
document.querySelector(".xetSoDuongNhoNhat").onclick = timSoDuongNhoNhat;

//5. SỐ CHĂN CUỐI CÙNG TRONG MẢNG
function timSoChanCuoiCung() {
  var soChan = -1;
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
      soChan = arr[i];
    } else {
      return soChan;
    }
  }
  document.getElementById("soChanCuoiCung").innerHTML = soChan;
}
document.querySelector(".timSoChanCuoiCung").onclick = timSoChanCuoiCung;

//6. ĐỔI VỊ TRÍ 2 SỐ TRONG MẢNG

function doiViTriHaiSo() {
  var viTri1 = document.getElementById("soViTri1").value;
  var viTri2 = document.getElementById("soViTri2").value;
  var a = arr[viTri1];
  arr[viTri1] = arr[viTri2];
  arr[viTri2] = a;
  document.getElementById("result").innerHTML = arr;
}

// 7. SẮP XẾP THỨ TỰ TĂNG DẦN

function sapXepThuTu() {
  var arrNew = arr.sort();
  document.getElementById("sapXepThuTu").innerHTML = arrNew;
}
document.querySelector(".sapXep").onclick = sapXepThuTu;

//8. SỐ NGUYÊN ĐẦU TIÊN TRONG MẢNG
function xacDinhSoNguyenTo(num) {
  if (num <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(xacDinhSoNguyenTo(6));
function soNguyenToDauTien() {
  var soNguyenTo = 0;
  for (var i = 0; i <= arr.length; i++) {
    if (xacDinhSoNguyenTo(arr[i]) == "true") {
      return (soNguyenTo = arr[i]);
    } else {
      soNguyenTo = -1;
    }
  }
  document.getElementById("soNguyenTo").innerHTML = soNguyenTo;
}
// 10. So sánh số âm và số dương
function demSoAm() {
  var soAm = 0;
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] < 0) {
      soAm++;
    }
  }
}

function soSanhAmDuong() {
  var x = soAm;
  var y = demSoDuong;
  console.log(x,y)
}
