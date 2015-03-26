/**
 * 
 */

function addToTable()
{
	var table = document.getElementById("Table");
	var parkJson = '{"carAllocatedParking":[' +	
		'{"buildingName":"Silver Spring","flatNo":"3110","parkingNo":"10" },' +
		'{"buildingName":"Alphasanso","flatNo":"1311","parkingNo":"11" },' +
		'{"buildingName":"Royal Plaza","flatNo":"1132","parkingNo":"12" } ]}';
	
	var obj=JSON.parse(parkJson);
	
	for(var i=0;i<3;i++){
		var row = table.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);		
		cell1.innerHTML = obj.carAllocatedParking[i].buildingName;
		cell2.innerHTML = obj.carAllocatedParking[i].flatNo;
		cell3.innerHTML = obj.carAllocatedParking[i].parkingNo;
	}	
}

