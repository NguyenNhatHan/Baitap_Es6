import getEle from "./helper.js";

function validateStudent(){
    let isValid = true;
    //ktra id
    let id = getEle("#id").value;
    if(!id.trim()) {
        isValid = false;
        getEle("#tbId").innerHTML = "ID không được để trống"
    }else {
        getEle("#tbId").innerHTML = ""
    }
    //ktra tên
    let fullName = getEle("#fullName").value;
    if(!fullName.trim()) {
        isValid = false;
        getEle("#tbTen").innerHTML = "Tên không được để trống"
    }else {
        getEle("#tbTen").innerHTML = " "
    }
    //ktra email
    let email = getEle("#email").value;
    if(!email.trim()){
        isValid = false;
        getEle("#tbEmail").innerHTML = "Email không được để trống"
    }else{
        getEle("#tbEmail").innerHTML = " "
    }
    //ktra address
    let address = getEle("#address").value;
    if(!address.trim()){
        isValid = false;
        getEle("#tbAddres").innerHTML = "Địa chỉ không được để trống"
    }else{
        getEle("#tbAddres").innerHTML = " "
    }
    //ktra điểm toán
    let math = getEle("#math").value;
    if(!math.trim()){
        isValid = false;
        getEle("#tbMath").innerHTML = "Điểm không được để trống"
    }else{
        getEle("#tbMath").innerHTML = ""
    }
    //ktra điểm lý
    let physics = getEle("#physics").value;
    if(!physics.trim()){
        isValid = false;
        getEle("#tbPhysics").innerHTML = "Điểm không được để trống"
    }else{
        getEle("#tbPhysics").innerHTML = ""
    }
    //ktra điểm hóa
    let chemistry = getEle("#chemistry").value;
    if(!chemistry.trim()){
        isValid = false;
        getEle("#tbChemistry").innerHTML = "Điểm không được để trống"
    }else{
        getEle("#tbChemistry").innerHTML = ""
    }
    return isValid
}

function validateEmployee(){
    let isValid = true;
    //ktra id
    let id = getEle("#id2").value;
    if(!id.trim()) {
        isValid = false;
        getEle("#tbId2").innerHTML = "ID không được để trống"
    }else {
        getEle("#tbId2").innerHTML = ""
    }
    //ktra tên
    let fullName = getEle("#fullName2").value;
    if(!fullName.trim()) {
        isValid = false;
        getEle("#tbTen2").innerHTML = "Tên không được để trống"
    }else {
        getEle("#tbTen2").innerHTML = " "
    }
    //ktra email
    let email = getEle("#email2").value;
    if(!email.trim()){
        isValid = false;
        getEle("#tbEmail2").innerHTML = "Email không được để trống"
    }else{
        getEle("#tbEmail2").innerHTML = " "
    }
    //ktra address
    let address = getEle("#address2").value;
    if(!address.trim()){
        isValid = false;
        getEle("#tbAddress2").innerHTML = "Địa chỉ không được để trống"
    }else{
        getEle("#tbAddress2").innerHTML = " "
    }


    return isValid

}














export { validateStudent, validateEmployee};