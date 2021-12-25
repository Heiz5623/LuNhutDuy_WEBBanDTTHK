var doituong=0;
function GioiThieu(){
    if(doituong==0)
    {
        document.getElementById('layer_GT').style.display="flex";

        doituong=1;
    }else
    if(doituong==1)
    {
        document.getElementById('layer_GT').style.display="none";
        doituong=0;
    }
    console.log(doituong);
}
function LienHe(){
    if(doituong==0)
    {
        document.getElementById('layer_LH').style.display="flex";

        doituong=1;
    }else
    if(doituong==1)
    {
        document.getElementById('layer_LH').style.display="none";
        doituong=0;
    }
    console.log(doituong);
}