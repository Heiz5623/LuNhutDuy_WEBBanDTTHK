let SanPham = JSON.parse(localStorage.getItem('Product'));
function createProduct() {
    if (localStorage.getItem('Product') === null) {
        let Product = [
{
                id: "0",
                img: "./img/xiaomi11lite.jpg",
                Name: "Xiaomi Mi 11 Lite",
                type: "Xiaomi",
                price: 335
            },
            {

                id: "1",
                img: "./img/galaxya52.jpg",
                Name: "Samsung Galaxy A52",
                type: "Samsung",
                price: 499
            },
            {

                id: "2",
                img: "./img/xiaomi11t.jpg",
                Name: "Xiaomi 11T",
                type: "Xiaomi",
                price: 599
            },
            {

                id: "3",
                img: "./img/redminote11.jpg",
                Name: "Xiaomi Redmi Note 11 Pro",
                type: "Xiaomi",
                price: 330
            },
            {

                id: "4",
                img: "./img/galaxya72.jpg",
                Name: "Samsung Galaxy A72",
                type: "Samsung",
                price: 499
            },
            {

                id: "5",
                img: "./img/xiaomipocox3.jpg",
                Name: "Xiaomi POCO X3 PRO",
                type: "Xiaomi",
                price: 299
            },
            {

                id: "6",
                img: "./img/iphone11promax.jpg",
                Name: "iPhone 11 Pro Max",
                type: "Apple",
                price: 799
            },
            {
                id: "7",
                img: "./img/iphone13promax.jpg",
                Name: "iPhone 13 Pro Max",
                type: "Apple",
                price: 1149
            },
            {
                id: "8",
                img: "./img/iphone13mini1.jpg",
                Name: "iPhone 13 Mini",
                type: "Apple",
                price: 830
            },
            {

                id: "9",
                img: "./img/iphone12pro.jpg",
                Name: "iPhone 12 Pro",
                type: "Apple",
                price: 999
            },
            {

                id: "10",
                img: "./img/oppoa54.jpg",
                Name: "OPPO A54",
                type: "Oppo",
                price: 175
            },
            {
                id: "11",
                img: "./img/oppoa74.jpg",
                Name: "OPPO A74",
                type: "Oppo",
                price: 220
            },
            {
                id: "12",
                img: "./img/oppoa55.jpg",
                Name: "OPPO A55",
                type: "Oppo",
                price: 195
            },
            {
                id: "13",
                img: "./img/redminote10.jpg",
                Name: "Xiao Redmi Note 10 Pro",
                type: "Xiaomi",
                price: 330
            },
            {

                id: "14",
                img: "./img/galaxym52.jpg",
                Name: "Samsung Galaxy M52 5G",
                type: "Samsung",
                price: 465
            },
            {

                id: "15",
                img: "./img/redminote10s.jpg",
                Name: "Xiaomi Redmi Note 10S",
                type: "Xiaomi",
                price: 259
            },
            {

                id: "16",
                img: "./img/redmi-10.jpg",
                Name: "Xiaomi Redmi 10",
                type: "Xiaomi",
                price: 280
            },
            {

                id: "17",
                img: "./img/redmi9a.jpg",
                Name: "Xiaomi Redmi 9A",
                type: "Xiaomi",
                price: 169
            },

            {

                id: "18",
                img: "./img/redmi9c.jpg",
                Name: "Xiaomi Redmi 9C",
                type: "Xiaomi",
                price: 199
            },
            {

                id: "19",
                img: "./img/redminote8.jpg",
                Name: "Xiaomi Redmi Note 8",
                type: "Xiaomi",
                price: 199
            }



        ];
        localStorage.setItem('Product', JSON.stringify(Product))
        SanPham = JSON.parse(localStorage.getItem('Product'));
    }
    else SanPham = JSON.parse(localStorage.getItem('Product'));
}
console.log("Chuỗi SP" + JSON.stringify(SanPham));
//Tạo Những Mảng Sản Phẩm Theo Hãng
// let Xiaomi = SanPham.filter(function(e) {
//     return e.type == "Xiaomi";
// });

// let Samsung = SanPham.filter(function(e) {
//     return e.type == "Samsung";
// });
// let Oppo = SanPham.filter(function(e) {
//     return e.type == "Oppo";
// });

//Lấy mảng tìm kiếm 
let Mangtsp = JSON.parse(localStorage.getItem('Mangsp'));

//Reset mảng lọc giá
localStorage.setItem('locgiasp',JSON.stringify({tugia:"",dengia:""}));

window.onload = function () {
    ;
    createProduct();
    LocSP();
    MangLoaiSP();
    checkvotk();
    sortMode("BT");

}

// chèn sản phẩm vào trang
class LoaiSP {
    idSP;
    tenSP;
    constructor(idsp, tensp) {
        this.idSP = idsp;
        this.tenSP = tensp;
    }
}
var HangSP
if (localStorage.getItem('HangSP') == null) {
    HangSP = [
        new LoaiSP("Xiaomi", "Xiaomi"),
        new LoaiSP("Samsung", "Samsung"),
        new LoaiSP("Apple", "Apple"),
        new LoaiSP("Oppo", "Oppo")
    ];
    localStorage.setItem('HangSP', JSON.stringify(HangSP))
 }

 HangSP = JSON.parse(localStorage.getItem('HangSP'));
 function MangLoaiSP() {
    for (i = 0; i < HangSP.length; i++) {
        for(j=0; j<SanPham.length; j++)
        {
            if(SanPham[j].type==HangSP[i].tenSP)
            {
                document.getElementById("MenuPC").innerHTML += '<a href="?SP=' + HangSP[i].idSP + '"  class="Hang"><div class="Danhmuc" id="' + HangSP[i].idSP + '" >' + HangSP[i].tenSP + '</div></a>'
                break;
            }
            if(j==(SanPham.length-1))
            break;     
        }
    }
}

function innerSP(SP, soTrang) {
    for (i = 0; i < 8; i++) {
        if (i + 8 * soTrang < SP.length) {
            document.getElementById("SP" + (i + 1)).style.display = 'block';
            document.getElementById("SP" + (i + 1)).innerHTML = `  <img id="img${i}"  src=${SP[i + 8 * soTrang].img} alt=""> <div><div class="name" id="name${i}" style="font-size: 120%; ">${SP[i + 8 * soTrang].Name}</div><div class="price" id="price${i}" style="font-size: 120%; ">${SP[i + 8 * soTrang].price}$</div></div>`
        }
        else
            document.getElementById("SP" + (i + 1)).style.display = 'none';
    }
}

//sắp xếp mảng SPOf theo lựa chọn
function SapXep(val, SPOf) {
    switch (val) {
        case "BT":
            return SPOf;
            break;
        case "TD":
            SPOf.sort((a, b) => (a.price > b.price) ? 1 : -1);
            return SPOf;
            break;
        case "GD":
            SPOf.sort((a, b) => (a.price > b.price) ? -1 : 1);
            return SPOf;
            break;
        case "AZ":
            SPOf.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
            return SPOf;
            break;
        case "ZA":
            SPOf.sort((a, b) => (a.Name > b.Name) ? -1 : 1);
            return SPOf;
            break;
        default:
            return SPOf;
            break;
    }
};

function sortMode(sort="BT"){
    localStorage.setItem('SX',JSON.stringify(sort));
}
// Lọc Sản Phẩm theo Hãng và số trang để Inner sản phẩm
function LocSP(val = 0, TK="") {
    if (val != 0)
        var sotrang = val.value - 1;
    else
        var sotrang = 0;
    var url = location.href;
    var Hang = url.split(/[?,#]/);
    sort=JSON.parse(localStorage.getItem('SX'));
    console.log(sort);
    var t = SanPham;
    if (Hang[1] == undefined) {
        var a = SanPham;
        t=a;
        if(TK != "")
        var t = timkiemsp(a);
    }//regex
    else if (Hang[1].split(/[=]/)[0] == "SP") {
        var a = SanPham.filter(function (e) {
            return e.type == Hang[1].split(/[=]/)[1];
        });
        t=a;
        if(TK != "")
        t = timkiemsp(a);
    }
    var s=JSON.parse(localStorage.getItem('locgiasp'));
    if(s.tugia!=="" && s.dengia!=="" || s.tugia > s.dengia) {
        var tkt=parseInt(s.tugia);
        var tkc=parseInt(s.dengia);
        t = t.filter(function(e){
            return parseInt(e.price)>=tkt && parseInt(e.price)<=tkc;
        });
        if(TK != "")
        t = timkiemsp(t);
    }
    console.log(TK);    
    localStorage.setItem('LenMangSPhienhanh', JSON.stringify(t.length));    
    ;
    innerSoTrang(t.length);
    innerSP(SapXep(sort, t), sotrang);
    
}
function innerSoTrang(tlen) {
    var max = Math.ceil(tlen / 8);
    console.log(max);
    document.getElementById("sotrang2").innerHTML="";
    if(max>1)
    {       
        for (i = 1; i <= max; i++)
        document.getElementById("sotrang2").innerHTML += '<a href="#"><input class="soTrang" id="sT' + i + '" type="button" value="' + i + '" onclick="+LocSP(this, '+"document.getElementById('timkiem').value"+')"></a>'
    }
}

function ShowIfSP(SP) {
    document.getElementById("ThongTinSP").style.display = 'flex';
    document.getElementById("ifSP_Overlay").style.display = 'flex';
    console.log(SP);
    id = (SP.split(/[SP]/));
    var IDimg = "img" + id[2];
    var img = $('#SP' + id[2] + ' img').attr('src');
    var name = document.getElementById("name" + (id[2] - 1) + "").innerHTML;
    var price = document.getElementById("price" + (id[2] - 1) + "").innerHTML;
    console.log(price);
    document.getElementById("ThongTinSP").innerHTML = '<img src="' + img + '" alt=""><div id="ThongTinSP_text"><div id="name_TTSP">' + name + '</div><div id="gia_TTSP">' + price + '</div><div ><input class="SoluongSP" type="button" value="-" onclick="TangSLSP(this.value)"><input class="SoluongSP" id="soluongSP" type="text" min="1" max="10" value="1"><input class="SoluongSP"type="button" value="+" onclick="TangSLSP(this.value)"></div><input id="order" type="button" onclick="check();getTTSP();" value="Order"><h6 style="margin-top: 50%; margin-bottom: 0%;">Cấu Hình</h6><div id="TABLE_CAUHINH"><div id="cot1"><div>CPU</div><div>MÀN HÌNH</div><div>RAM</div><div>BỘ NHỚ TRONG</div><div>HỆ ĐIỀU HÀNH</div><div>PIN</div></div><div id="cot2"><div>CHƯA CẬP NHẬT</div><div>CHƯA CẬP NHẬT</div><div>CHƯA CẬP NHẬT</div><div>CHƯA CẬP NHẬT</div><div>CHƯA CẬP NHẬT</div><div>CHƯA CẬP NHẬT</div></div></div></div>'
}
var arrgiohang = [];
function check() {
    var t = JSON.parse(localStorage.getItem('abc'));
    if (t == 0) {
        ShowDangNhap();
    }
    if (t == 1) {
        if (document.getElementById("soluongSP").value <= 0) {
            document.getElementById("soluongSP").focus();
            return false;
        }
    }
}
function hoadon() {

}
function TatTTSP(val) {
    document.getElementById("ifSP_Overlay").style.display = "none";
}

function TangSLSP(val) {
    if (val == '+') {
        (document.getElementById("soluongSP").value)++;
    }
    if (val == '-') {
        if ((document.getElementById("soluongSP").value) != 1)
            (document.getElementById("soluongSP").value)--;
    }
}

//Function chạy tìm sản phẩm
function timkiemsp(arr) {
    var productArr = arr;
    var Timkiem = document.getElementById('timkiem');
    let Arrayfind = [];
    var r = 0;
    for (i = 0; i < productArr.length; i++) {
        var tensp = productArr[i].Name.toLowerCase();
        var tentk = Timkiem.value.toLowerCase();
        if (tensp.indexOf(tentk) !== -1) {
            Arrayfind[r] = productArr[i];
            r++;
        }
    }
    return Arrayfind;
}
function Runtimkiemsp() {
    localStorage.setItem('Mangsp', JSON.stringify(timkiemsp()));
    window.location.href = "?SP=Timkiem";
}

//Function lọc giá
function Locgiasp(){
    var tkgt = document.getElementById('tkt');
    var tkgd = document.getElementById('tkc');
    if(tkgt.value===""){
        tkt.focus();
    }
    else if(tkgd.value===""){
        tkc.focus();
    }
    else if(parseInt(tkgt.value)>parseInt(tkgd.value)){
        alert("Mời nhập lại giá ");
        tkt.focus();
    }
    else {
        var locgia={tugia:tkgt.value,dengia:tkgd.value};
        console.log(locgia);
        localStorage.setItem('locgiasp',JSON.stringify(locgia));
    }
    LocSP(document.getElementsByClassName('soTrang').value, document.getElementById("timkiem").value);
}

// Show Lọc 
var mode=0;
function showLoc(){
    if(mode == 0)
    {
        document.getElementById('Loc_Gia').style.display="flex";
        mode++;
    }
    else 
    {
        document.getElementById('Loc_Gia').style.display="none";
        mode=0;
    }   
}