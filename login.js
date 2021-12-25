var arruser=[];
function taokhachhang(){
    if(localStorage.getItem('taikhoankhachhang')===null){
        arruser=[{taikhoan:'abc123',matkhau:'123123',nameuser:'Lữ Nhựt Duy',phone:'9999999999',thuoctinh:'1'},{taikhoan:'admin',matkhau:'admin',nameuser:'Nguyễn Hải Dương',phone:'6969696969',thuoctinh:'0'}];
        localStorage.setItem('taikhoankhachhang',JSON.stringify(arruser));
    }else{
        arruser=JSON.parse(localStorage.getItem('taikhoankhachhang'));
    }
}
taokhachhang();
function ShowDangNhap() {
    document.getElementById('TK_Nen').style.display = "flex";
    document.getElementById('Nut_DangNhap').style.backgroundColor="#464747f6"
    document.getElementById('Nut_DangNhap').style.color="white"
    document.getElementById('Nut_DangKy').style.backgroundColor="white"
    document.getElementById('Nut_DangKy').style.color="black"   
}
function alertClose() {
    document.getElementById('TK_Nen').style.display = "none";
}
function DangKy() {
    // var dangki = document.querySelector('.form');
    // dangki.innerHTML = '<h2 class="">REGISTER</h2> <div onclick="dkClose();" class="btnclose"><i class="icon_close far fa-times-circle"></i></div><div>Username</div><input class="in" type="text" placeholder="Enter your Username..." id="tk"><div style="color: red;" id="loitaikhoan"></div><div >Password</div><input class="in" type="text" placeholder="Enter your Password..." id="mk"><div style="color: red;" id="loimatkhau"></div><div>Name</div><input class="in" type="text" placeholder="Enter your Name..." id="nm"><div>Phone</div><input class="in" type="number"  placeholder="Enter your Phone..." id="ph"> <div style="color: red;" id="loiphone"></div><a href="#"><input type="button" class="dangnhap" onclick="register();" value="Đăng Kí"></input></a> <div class="footerfrom">Bạn đã có tài khoản ?<a href="#" style="color: darkgreen; opacity: 0.8; cursor: pointer; " onclick="dn()">Đăng Nhập</a></div>';
    document.getElementById('TK_CONTENT_DK').style.display="flex";
    document.getElementById('TK_CONTENT_DN').style.display="none";
    document.getElementById('NUT_DN_DK').value="Đăng Ký"; 
    document.getElementById('Nut_DangKy').style.backgroundColor="#464747f6"
    document.getElementById('Nut_DangKy').style.color="white"   
    document.getElementById('Nut_DangNhap').style.backgroundColor="white"
    document.getElementById('Nut_DangNhap').style.color="black"
}
function DangNhap() {
    // var dangnhap = document.querySelector('.form');
    // dangnhap.innerHTML = '<h2 class="">LOGIN</h2>  <div onclick="alertClose();" class="btnclose"><i class="icon_close far fa-times-circle"></i></div>    <div>       <div id="NhapTK">Username</div>       <input class="in" type="text" placeholder="Enter your Username..." id="tk">  <div id="NhapMK" >Password</div>  <input class="in" type="password" placeholder="Enter your Password..." id="mk">   </div> <a href="#"><input type="button" class="dangnhap" onclick="login();" value="Đăng Nhập"></input></a>   <div class="footerfrom">Bạn đã có tài khoản chưa ?<a href="#" style="color: darkgreen; opacity: 0.8; cursor: pointer; " onclick="dk()">Đăng Kí</a></div>';
    document.getElementById('TK_CONTENT_DK').style.display="none";
    document.getElementById('TK_CONTENT_DN').style.display="flex";
    document.getElementById('NUT_DN_DK').value="Đăng Nhập";
    document.getElementById('Nut_DangNhap').style.backgroundColor="#464747f6"
    document.getElementById('Nut_DangNhap').style.color="white"
    document.getElementById('Nut_DangKy').style.backgroundColor="white"
    document.getElementById('Nut_DangKy').style.color="black"   
}
function dkClose() {
    document.querySelector('.modal_login').style.display = "none";
}
function Choose_DN_DK(val) {
    console.log(val);
    if(val=="Đăng Nhập")
    {
        login();
    }
    else if(val=="Đăng Ký")
    {
        register();
    }
    else{
        alert("Xảy Ra Lỗi");
        return false;
    }
}
function register() {
    var isregister=true;
    var tk = document.getElementById('DK_TK').value;
    var mk = document.getElementById('DK_MK').value;
    var nm = document.getElementById('nm').value;
    var ph = document.getElementById('ph').value;
    console.log(tk)
    console.log(mk)
    console.log(nm)
    console.log(ph)
    if(tk.length<5||mk.length<5||nm.length==""||ph.length!=10 || isNaN(ph)){
        isregister=false;
        if(tk.length<5){
            document.getElementById('loitaikhoan').textContent="Tài khoản phải từ 5 kí tự";
            isregister=false;
        }if(mk.length<5){
            document.getElementById('loimatkhau').textContent="Mật khẩu phải từ 5 kí tự";
            isregister=false;
        }if(nm.length==""){
            alert("Không được bỏ trống");
            isregister=false;
        }        
        if(ph.length!=10){
            document.getElementById('loiphone').textContent="Số điện thoại phải là 10 số";
            isregister=false;
        }
        if(isNaN(ph))
        {
            alert("Điện thoại phải ở dạng số");
            isregister=false;
        }
    }
    for(var index in arruser)
    {
        if(tk.toUpperCase()==arruser[index].taikhoan.toUpperCase())
        {
            isregister=false;
            alert('Tài khoản đã có người sử dụng');
            break;
        }
        if(ph==arruser[index].phone)
        {
            isregister=false;
            alert('Số điện thoại đã có người sử dụng');
            break;
        }
    }
    if(isregister)
    {
        var user={taikhoan: tk, matkhau: mk, nameuser:nm, phone: ph, thuoctinh:'1'};
        arruser.push(user);
        localStorage.setItem('taikhoankhachhang',JSON.stringify(arruser));
        alert('Đăng kí thành công');
        DangNhap();
    }
}

function login() {
    var arr = document.getElementsByTagName('input');
    console.log(arr);
    var TK = document.getElementById('tk').value;
    var MK= document.getElementById('mk').value;
    if (TK == "" || MK == "") {
        if(MK=="")
            document.getElementById('mk').focus();
        if(TK=="")
            document.getElementById('tk').focus();
    } else {
        var userArray1= this.arruser;
        var inputUsername = document.getElementById('tk').value;
        var inputPassword = document.getElementById('mk').value;
        console.log( inputPassword);
        console.log( userArray1);
        for (var i = 0; i <userArray1.length; i++) {
            if (userArray1[i].taikhoan.toUpperCase() == inputUsername.toUpperCase() && userArray1[i].matkhau ==  inputPassword )
            {
                localStorage.setItem('tendangnhap',JSON.stringify(inputUsername));
                alertClose();
                alert('Đăng nhập thành công');
                console.log(userArray1[i].thuoctinh=='0');
                localStorage.setItem('abc','1');
                document.getElementById('showmuahang').style.display='flex';
                checkvotk();
                return;
            }
            console.log(userArray1[i].matkhau);
            if(userArray1[i].taikhoan == inputUsername && userArray1[i].matkhau !=  inputPassword )
            {
                alert('Sai mật khẩu');
                return;
            }
            if(userArray1[i].taikhoan != inputUsername && userArray1[i].matkhau !=  inputPassword )
            {
                var d=0;
                d++;
            }
        }
        if(d>0)
        {
            alert('Sai tài khoản hoặc mật khẩu');
            return;
        }
    }
}
function logout(){
    var outtaikhoan=document.querySelector('.outtk');
    outtaikhoan.innerHTML='<i class="far fa-user-circle vitri_nutdangnhap" onclick="ShowDangNhap();" ></i>';
    document.getElementById('tenuser').innerHTML='';
    document.getElementById('showmuahang').style.display='none';
    document.getElementById("nutchuyensangadmin").innerHTML='';
    localStorage.setItem('abc','0');   
}
function checkvotk()
{
    var t=JSON.parse(localStorage.getItem('abc'));
    if(t==0)
    {
        var votaikhoan=document.querySelector('.vtk');
        votaikhoan.innerHTML='<i class="far fa-user-circle vitri_nutdangnhap" onclick="ShowDangNhap();" ></i>';
    }if(t==1||t==2){
        if(t==2)
        {
            t=1;
            localStorage.setItem('abc','1');
        }
        var nutouttaikhoan=document.querySelector('.vtk');                          
        nutouttaikhoan.innerHTML='<a href="#" class="outtk"><i class="fas fa-sign-out-alt vitri_nutdangnhap" onclick="logout();"></i></a>';   
        var innerten=JSON.parse(localStorage.getItem('tendangnhap'));
        document.getElementById('tenuser').innerHTML=innerten;
        document.getElementById('showmuahang').style.display='flex';
        return;
    }
    else{
        localStorage.setItem('abc','0');
    }
}