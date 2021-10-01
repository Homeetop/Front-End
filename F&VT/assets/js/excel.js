let selectedFile;
console.log(window.XLSX);
document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})

let data=[{
    "name":"jayanth",
    "data":"scd",
    "abc":"sdef"
}]


document.getElementById('button').addEventListener("click", () => {
    XLSX.utils.json_to_sheet(data, 'out.xlsx');
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary"});
         console.log(workbook);
         workbook.SheetNames.forEach(sheet => {
              let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
              console.log(rowObject);
			  jsondata = JSON.stringify(rowObject,undefined,4);
			  updateData(jsondata);
              document.getElementById("jsondata").innerHTML =jsondata
         });
        }
    }
});

function updateData(jsonData){
	const request = new XMLHttpRequest();
	request.open("PUT", "https://json.extendsclass.com/bin/d42aa353a4a9", true);
	request.setRequestHeader("Security-key", "");
	request.onreadystatechange = () => {
	};
	request.send(jsonData);
	console.log("inserted successfully");
};