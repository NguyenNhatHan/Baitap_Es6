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
    }else if (Number(math) > 10 || Number(math) < 0) {
        isValid = false;
        getEle("#tbMath").innerHTML = " Điểm không hợp lệ";
    }
    else{
        getEle("#tbMath").innerHTML = ""
    }
    //ktra điểm lý
    let physics = getEle("#physics").value;
    if(!physics.trim()){
        isValid = false;
        getEle("#tbPhysics").innerHTML = "Điểm không được để trống"
    }else if (Number(physics) > 10 || Number(physics) < 0) {
        isValid = false;
        getEle("#tbPhysics").innerHTML = " Điểm không hợp lệ";
    }
    else{
        getEle("#tbPhysics").innerHTML = ""
    }
    //ktra điểm hóa
    let chemistry = getEle("#chemistry").value;
    if(!chemistry.trim()){
        isValid = false;
        getEle("#tbChemistry").innerHTML = "Điểm không được để trống"
    }else if (Number(chemistry) > 10 || Number(chemistry) < 0) {
        isValid = false;
        getEle("#tbChemistry").innerHTML = " Điểm không hợp lệ";
    }
    else{
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
    // kiem tra days
    let days = getEle("#days").value;

    if(!days.trim()){
        isValid = false;
        getEle("#tbDays").innerHTML = "Ngày làm không được để trống"
    }else{
        getEle("#tbDays").innerHTML = "";
    }
    // kiem tra baseSalary
    let baseSalary = getEle("#baseSalary").value;
    if(!baseSalary.trim()){
        isValid = false;
        getEle("#tbBaseSalary").innerHTML = "Lương không được để trống"
    }else{
        getEle("#tbBaseSalary").innerHTML = "";
    }


    return isValid

}

function validateCustomer(){
    let isValid = true;
    //ktra id
    let id = getEle("#id3").value;
    if(!id.trim()) {
        isValid = false;
        getEle("#tbId3").innerHTML = "ID không được để trống"
    }else {
        getEle("#tbId3").innerHTML = ""
    }
    //ktra tên
    let fullName = getEle("#fullName3").value;
    if(!fullName.trim()) {
        isValid = false;
        getEle("#tbTen3").innerHTML = "Tên không được để trống"
    }else {
        getEle("#tbTen3").innerHTML = " "
    }
    //ktra email
    let email = getEle("#email3").value;
    if(!email.trim()){
        isValid = false;
        getEle("#tbEmail3").innerHTML = "Email không được để trống"
    }else{
        getEle("#tbEmail3").innerHTML = " "
    }
    //ktra address
    let address = getEle("#address3").value;
    if(!address.trim()){
        isValid = false;
        getEle("#tbAddress3").innerHTML = "Địa chỉ không được để trống"
    }else{
        getEle("#tbAddress3").innerHTML = " "
    }

    // ktra company
    let company = getEle("#company").value;
    if(!company.trim()){
        isValid = false;
        getEle("#tbCompany").innerHTML = "Tên công ty không được để trống"
    }else {
        getEle("#tbCompany").innerHTML = ""
    }
    // ktra invoice
    let invoice = getEle("#invoice").value;
    if(!invoice.trim()){
        isValid = false;
        getEle("#tbInvoice").innerHTML = "Gía trị hóa đơn không được để trống"
    }else{
        getEle("#tbInvoice").innerHTML = "";
    }
    // ktra comment
    let comment = getEle("#comment").value;
    if(!comment.trim()){
        isValid = false;
        getEle("#tbComment").innerHTML = "Đánh giá không được để trống"
    }else{
        getEle("#tbComment").innerHTML = ""
    }

    return isValid
}














export { validateStudent, validateEmployee, validateCustomer};