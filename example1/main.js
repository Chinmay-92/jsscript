var check = {

	bankName:'Citi',
        accountNumber:'123xxx567',
        routingNumber:'AF567',
        logo:[],
        checkStartingNumber:'5497',
        colors:[]
};

function StandardChecks(){
		check.colors = ['red','green','yellow','black','blue'];
}

function VoucherChecks(){
		check.logo = ['citi.png','citiSafe,png'];
		check.colors = ['red','green','yellow','black','blue','grey','white','pink','brown','amber'];
}

function WalletChecks(){
		check.prototype.signature = true;
}

StandardChecks.prototype = check;

VoucherChecks.prototype = check;

WalletChecks.prototype = check;

// Call this when user selects Standard check
function getStandardCheck(){
	var stndCheck = new StandardChecks();
	printCheck(stndCheck);
}

// Call this when user selects Voucher check
function getVoucherCheck(){
	var vochrCheck = new VoucherChecks();
	printCheck(vochrCheck);
}

// Call this when user selects Wallet check
function getWalletCheck(){
	var wlltCheck = new WalletChecks();
	printCheck(wlltCheck);
}

// Function to check type and display check
function checkType(obj){
	var chckType = obj.value;
  document.getElementByIdchckDetails
	if(chckType === 'standard'){
		getStandardCheck();
	}else if(chckType === 'voucher'){
		getVoucherCheck();
		//Display second logo
		$("#bankLogoLft").css('display','block');
	}else if(chckType === 'wallet'){
		getWalletCheck();
		//Display boolean signature 
		$("#signature").css('display','block');
	}

	$("#chckDetails").css('display','block');
}

// Function to populate check details
function printCheck(details){
// Populate details from corresponding object
}