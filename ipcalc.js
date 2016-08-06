// Subnet selects
var CLASS_A_SUBNETMASK = '<select name="subnet_mask" id="subnet_mask"><option value="0">255.0.0.0</option><option value="1">255.128.0.0</option><option value="2">255.192.0.0</option><option value="3">255.224.0.0</option><option value="4">255.240.0.0</option><option value="5">255.248.0.0</option><option value="6">255.252.0.0</option><option value="7">255.254.0.0</option><option value="8">255.255.0.0</option><option value="9">255.255.128.0</option><option value="10">255.255.192.0</option><option value="11">255.255.224.0</option><option value="12">255.255.240.0</option><option value="13">255.255.248.0</option><option value="14">255.255.252.0</option><option value="15">255.255.254.0</option><option value="16">255.255.255.0</option><option value="17">255.255.255.128</option><option value="18">255.255.255.192</option><option value="19">255.255.255.224</option><option value="20">255.255.255.240</option><option value="21">255.255.255.248</option><option value="22">255.255.255.252</option></select>';
var CLASS_B_SUBNETMASK = '<select name="subnet_mask" id="subnet_mask"><option value="0">255.255.0.0</option><option value="1">255.255.128.0</option><option value="2">255.255.192.0</option><option value="3">255.255.224.0</option><option value="4">255.255.240.0</option><option value="5">255.255.248.0</option><option value="6">255.255.252.0</option><option value="7">255.255.254.0</option><option value="8">255.255.255.0</option><option value="9">255.255.255.128</option><option value="10">255.255.255.192</option><option value="11">255.255.255.224</option><option value="12">255.255.255.240</option><option value="13">255.255.255.248</option><option value="14">255.255.255.252</option></select>';
var CLASS_C_SUBNETMASK = '<select name="subnet_mask" id="subnet_mask"><option value="0">255.255.255.0</option><option value="1">255.255.255.128</option><option value="2">255.255.255.192</option><option value="3">255.255.255.224</option><option value="4">255.255.255.240</option><option value="5">255.255.255.248</option><option value="6">255.255.255.252</option></select>';

// Max hosts select
var CLASS_A_MAX_HOSTS = '<select size="1" name="max_hosts" id="max_hosts"><option value="0">16777214</option><option value="1">8388606</option><option value="2">4194302</option><option value="3">2097150</option><option value="4">1048574</option><option value="5">524286</option><option value="6">262142</option><option value="7">131070</option><option value="8">65534</option><option value="9">32766</option><option value="10">16382</option><option value="11">8190</option><option value="12">4094</option><option value="13">2046</option><option value="14">1022</option><option value="15">510</option><option value="16">254</option><option value="17">126</option><option value="18">62</option><option value="19">30</option><option value="20">14</option><option value="21">6</option><option value="22">2</option></select>';
var CLASS_B_MAX_HOSTS = '<select size="1" name="max_hosts" id="max_hosts"><option value="0">65534</option><option value="1">32766</option><option value="2">16382</option><option value="3">8190</option><option value="4">4094</option><option value="5">2046</option><option value="6">1022</option><option value="7">510</option><option value="8">254</option><option value="9">126</option><option value="10">62</option><option value="11">30</option><option value="12">14</option><option value="13">6</option><option value="14">2</option></select>';
var CLASS_C_MAX_HOSTS = '<select size="1" name="max_hosts" id="max_hosts"><option value="0">254</option><option value="1">126</option><option value="2">62</option><option value="3">30</option><option value="4">14</option><option value="5">6</option><option value="6">2</option></select>';

// Max subnets select
var CLASS_A_MAX_SUBNETS = '<select size="1" name="max_subnets" id="max_subnets"><option value="0">1</option><option value="1">2</option><option value="2">4</option><option value="3">8</option><option value="4">16</option><option value="5">32</option><option value="6">64</option><option value="7">128</option><option value="8">256</option><option value="9">512</option><option value="10">1024</option><option value="11">2048</option><option value="12">4096</option><option value="13">8192</option><option value="14">16384</option><option value="15">32768</option><option value="16">65536</option><option value="17">131072</option><option value="18">262144</option><option value="19">524288</option><option value="20">1048576</option><option value="21">2097152</option><option value="22">4194304</option></select>';
var CLASS_B_MAX_SUBNETS = '<select size="1" name="max_subnets" id="max_subnets"><option value="0">1</option><option value="1">2</option><option value="2">4</option><option value="3">8</option><option value="4">16</option><option value="5">32</option><option value="6">64</option><option value="7">128</option><option value="8">256</option><option value="9">512</option><option value="10">1024</option><option value="11">2048</option><option value="12">4096</option><option value="13">8192</option><option value="14">16384</option></select>';
var CLASS_C_MAX_SUBNETS = '<select size="1" name="max_subnets" id="max_subnets"><option value="0">1</option><option value="1">2</option><option value="2">4</option><option value="3">8</option><option value="4">16</option><option value="5">32</option><option value="6">64</option></select>';

// Max Bits select
var CLASS_A_MAX_BITS = '<select size="1" name="mask_bits" id="mask_bits"><option value="0">8</option><option value="1">9</option><option value="2">10</option><option value="3">11</option><option value="4">12</option><option value="5">13</option><option value="6">14</option><option value="7">15</option><option value="8">16</option><option value="9">17</option><option value="10">18</option><option value="11">19</option><option value="12">20</option><option value="13">21</option><option value="14">22</option><option value="15">23</option><option value="16">24</option><option value="17">25</option><option value="18">26</option><option value="19">27</option><option value="20">28</option><option value="21">29</option><option value="22">30</option></select>';
var CLASS_B_MAX_BITS = '<select size="1" name="mask_bits" id="mask_bits"><option value="0">16</option><option value="1">17</option><option value="2">18</option><option value="3">19</option><option value="4">20</option><option value="5">21</option><option value="6">22</option><option value="7">23</option><option value="8">24</option><option value="9">25</option><option value="10">26</option><option value="11">27</option><option value="12">28</option><option value="13">29</option><option value="14">30</option></select>';
var CLASS_C_MAX_BITS = '<select size="1" name="mask_bits" id="mask_bits"><option value="0">24</option><option value="1">25</option><option value="2">26</option><option value="3">27</option><option value="4">28</option><option value="5">29</option><option value="6">30</option></select>';

var CLASS_A_SUBNET_BITS = '<select id="subnet_bits" name="subnet_bits"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option></select>';
var CLASS_B_SUBNET_BITS = '<select id="subnet_bits" name="subnet_bits"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option></select>';
var CLASS_C_SUBNET_BITS = '<select id="subnet_bits" name="subnet_bits"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>';

var CALCULATIONS_FORM = function(values) {
	return '<p class="intro">Please select your network class and enter the information to calculate your subnet configuration.</p>' +
	'<div class="fields">' +
	'<div class="netClass row" id="subnetClass"><div class="label"><label>Network Class</label></div><div class="field"><span class="radio">A</span><input type="radio" id="netClassA" name="netClass_value" value="0" ' +
	values.selected_a + '><span class="radio radio_margin">B</span><input type="radio" id="netClassB" name="netClass_value" value="1" ' + values.selected_b + '><span class="radio radio_margin">C</span><input type="radio" id="netClassC" name="netClass_value" value="2" ' + values.selected_c + '></div></div>' +
	'<div class="ipAdress row" id="ipAdress"><div class="label"><label for="ipAdress_value">IP Address</label><span class="notice">With the format 127.0.0.1</span></div><div class="field"><input type="text" class="text" name="ipAdress_value" id="ipAdress_value" size="15" value="' + values.ipAddress + '"></div></div>' +
	'<div class="subnetMask row" id="subnetMask"><div class="label"><label for="subnetMask_value">Subnet Mask</label><span class="notice"></span></div><div class="field">' + values.subnetmask_select + '</div></div>' +
	'<div class="hostsSubnet row" id="hostsSubnet"><div class="label"><label>Hosts per Subnet</label></div><div class="field">' + values.maxHostsSelect + '</div></div>' +
	'<div class="maxSubnets row" id="maxSubnets"><div class="label"><label>Maximum subnets</label></div><div class="field">' + values.maxSubnetsSelect + '</div></div>' +
	'<div class="maxBits row" id="maxBits"><div class="label"><label>Mask Bits</label></div><div class="field">' + values.maxBitsSelect + '</div></div>' +
	'<div class="maxBits row" id="subnetBits"><div class="label"><label>Subnet Bits</label></div><div class="field">' + values.subnetBitsSelect + '</div></div> ' +
	'<div class="information_row"><div class="label"><label>Host Address Range</label></div><div class="field" id="startHostAddr">' + values.startHostAddr + '</div><div class="field separator">&nbsp;-&nbsp;</div><div class="field" id="endHostAddr">' + values.endHostAddr +
	'</div></div>' +
	'<div class="information_row"><div class="label"><label>Network Address</label></div><div class="field" id="networkAddr">' + values.networkAddr + '</div></div>' +
	'<div class="information_row"><div class="label"><label>Broadcast Address</label></div><div class="field" id="broadcastAddr">' + values.broadcastAddr + '</div></div>' +
	'<div class="information_row"><div class="label"><label>Host Address Size</label></div><div class="field" id="hostAddrSize">' + values.hostAddrSize + ' bits</div></div>' +
	'</div>';
}

var formView = null;

function calculate(ipAddress,subnetMask) {

	// check that the IP Address is Correct, otherwise use the default
	if (!ipAddress.match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)) {
	if(currentClass() == '0' || currentClass() === 0){ipAddress = '10.0.0.1';}
	if(currentClass() == '1' || currentClass() == 1){ipAddress = '172.16.0.1';}
	if(currentClass() == '2' || currentClass() == 2){ipAddress = '192.168.0.1';}
	}

	// IP address an subnet mask splited by numbers
	var ipvalues = ipAddress.split(".");
	var ip1 = parseInt(ipvalues[0],10);
	var ip2 = parseInt(ipvalues[1],10);
	var ip3 = parseInt(ipvalues[2],10);
	var ip4 = parseInt(ipvalues[3],10);

	var maskvalues = subnetMask.split(".");
	var subNet1 = parseInt(maskvalues[0],10);
	var subNet2 = parseInt(maskvalues[1],10);
	var subNet3 = parseInt(maskvalues[2],10);
	var subNet4 = parseInt(maskvalues[3],10);

	// Check that the values are correct, otherwise use the default ones
	if((currentClass() == '0' || currentClass() === 0) && ip1 > 127){ip1 = 10;ip2= 0;ip3=0;ip4 = 1;}
	if((currentClass() == '1' || currentClass() == 1) && ((ip1 < 128) || (ip1 > 191))){ip1 = 172;ip2= 16;ip3=0;ip4 = 1;}
	if((currentClass() == '2' || currentClass() == 2) && ((ip1 < 192) || (ip1 > 223))){ip1 = 192;ip2= 168;ip3=0;ip4 = 1;}

	// Validate IP Address
	if (ip1 == 127){ip1 = 10;}
	if (ip1 === 0){ip1 = 10;}

	// Additional variables used on the calculation below.
	var var9 = ip1, var10 = 0, var11 = 0, var12 = 0, var13 = ip1, var14 = 0, var15 = 0, var16 = 0, x = 0, ipdec = 0, smdec = 0, addressSize = 0;

	//Convert ip and subnet to decimal
	smdec = (subNet2 * 65536) + (subNet3 * 256) + subNet4;
	ipdec = (ip2 * 65536) + (ip3 * 256) + ip4;

	//Network address size
	for (var t = 2; t < 25; t = t + 1){if (smdec == (16777216 - Math.pow(2,t))){(addressSize = 32 - t);}}

	if (addressSize > 23){
	x = Math.pow(2,(32 - addressSize));
	// calculate the resultant values for elements with big masks
	for (i = -1;  i < (256 - x);  i = (i + x)){
		// iterate until we find the last value larger than the final octet of the original IP.
		if ((ip4 >= (i + 1)) && (ip4 <= (i + x))){
		var12 = (i + 2);
		var16 = (i + (x - 1));
		}
	}
	var10 = ip2;
	var11 = ip3;
	var14 = ip2;
	var15 = ip3;
	}

	/* Calculation of range for addressSize >=16 AND <24 */
	if ((addressSize >= 16) && (addressSize < 24)){
	x = Math.pow(2,(24 - addressSize));
	for (var i = 0;  i <= (256 - x);  i = (i + x)){
		if ((ip3 >= (i)) && (ip3 <= (i + x))){
		var11 = (i);
		var15 = (i + (x - 1));
		}
	}
	var10 = ip2;
	var14 = ip2;
	var12 = 1;
	var16 = 254;
	}

	/* Calculation of range for addressSize >=8 AND <16 */
	if ((addressSize >= 8) && (addressSize < 16)){
	x = Math.pow(2,(16 - addressSize));
	for (i = 0;  i <= (256 - x);  i = (i + x)){
		if ((ip2 >= (i)) && (ip2 <= (i + x))) {
		var10 = (i);
		var14 = (i + (x - 1));
		}
	}
	var11 = 0;
	var15 = 255;
	var12 = 1;
	var16 = 254;
	}

	document.getElementById('ipAdress_value').value = ip1+"."+ip2+"."+ip3+"."+ip4;
	document.getElementById('startHostAddr').innerHTML = var9+"."+var10+"."+var11+"."+var12;
	document.getElementById('endHostAddr').innerHTML = var13+"."+var14+"."+var15+"."+var16;
	document.getElementById('networkAddr').innerHTML = var9+"."+var10+"."+var11+"."+((var12)-1);
	document.getElementById('broadcastAddr').innerHTML = var13+"."+var14+"."+var15+"."+((var16)+1);
	document.getElementById('hostAddrSize').innerHTML = (32 - addressSize)+" bits";
}

function currentClass(){
	return document.querySelector('input:checked[name=netClass_value]').value;
}

function calculateSubnetMaskValue(selectedVal){
	var curClass = currentClass();
	var maxAllowedBits = 24;
	// Set initial values for the Mask
	var initMask = "255.";
	if(curClass == '1'|| curClass==1){
	initMask = "255.255.";
	maxAllowedBits = 16;
	}else if(curClass=='2' || curClass==2){
	initMask = "255.255.255.";
	maxAllowedBits = 8;
	}

	var binaryMask = '';
	// set the amount of 1's that we should use in the Mask (after the initMask)
	selectedVal = parseInt(selectedVal,10);
	for(var i = 0; i < maxAllowedBits; i++){
	// add the element to the binary mask
	if(i < selectedVal){
		binaryMask += '1';
	}else{
		binaryMask += '0';
	}
	// if we already stored 8 values, pack it as an IP octet
	if(i%8 == 7 && i > 0){
		// Create and join the new value fot the octect
		var tempVal = parseInt(binaryMask,2);
		initMask += tempVal.toString(10);
		if(i < maxAllowedBits -1){
		initMask += '.';
		}
		binaryMask = '';
	}
	}
	return initMask;
}

function class_a_change(){
	var classADefault = {'selected_a':"checked='checked'",'ipAddress':'10.0.0.1','subnetmask_select':CLASS_A_SUBNETMASK,'maxHostsSelect':CLASS_A_MAX_HOSTS,'maxSubnetsSelect':CLASS_A_MAX_SUBNETS,'maxBitsSelect':CLASS_A_MAX_BITS,'subnetBitsSelect':CLASS_A_SUBNET_BITS,'startHostAddr':'10.0.0.1','endHostAddr':'10.255.255.254','networkAddr':'10.0.0.0','broadcastAddr':'10.255.255.255','hostAddrSize':'24'};
	// display calculations form
	formView.innerHTML = CALCULATIONS_FORM(classADefault);
	// we have to redo the even handler initialization (all the elements were overriden)
	initEventHandlers();
}

function class_b_change(){
	var classBDefault = {'selected_b':"checked='checked'",'ipAddress':'172.16.0.1','subnetmask_select':CLASS_B_SUBNETMASK,'maxHostsSelect':CLASS_B_MAX_HOSTS,'maxSubnetsSelect':CLASS_B_MAX_SUBNETS,'maxBitsSelect':CLASS_B_MAX_BITS,'subnetBitsSelect':CLASS_B_SUBNET_BITS,'startHostAddr':'172.16.0.1','endHostAddr':'172.16.255.254','networkAddr':'172.16.0.0','broadcastAddr':'172.16.255.255','hostAddrSize':'16'};
	// display calculations form
	formView.innerHTML = CALCULATIONS_FORM(classBDefault);
	// we have to redo the even handler initialization (all the elements were overriden)
	initEventHandlers();
}

function class_c_change(){
	var classCDefault = {'selected_c':"checked='checked'",'ipAddress':'192.168.0.1','subnetmask_select':CLASS_C_SUBNETMASK,'maxHostsSelect':CLASS_C_MAX_HOSTS,'maxSubnetsSelect':CLASS_C_MAX_SUBNETS,'maxBitsSelect':CLASS_C_MAX_BITS,'subnetBitsSelect':CLASS_C_SUBNET_BITS,'startHostAddr':'192.168.0.1','endHostAddr':'192.168.0.254','networkAddr':'192.168.0.0','broadcastAddr':'192.168.0.255','hostAddrSize':'8'};
	// display calculations form
	formView.innerHTML = CALCULATIONS_FORM(classCDefault);
	// we have to redo the even handler initialization (all the elements were overriden)
	initEventHandlers();
}

// initialize all the event Handlers
function initEventHandlers(){
	['subnet_mask', 'max_hosts', 'max_subnets', 'mask_bits', 'subnet_bits'].forEach(function(id) {
		document.getElementById(id).addEventListener("change", function(e) {
			changeComboboxes(e.target.value)
		});
	});
	document.getElementById('ipAdress_value').addEventListener("change", function(e) {
		calculate(e.target.value, calculateSubnetMaskValue(document.getElementById('subnet_mask').value));
	});

	document.getElementById('netClassA').addEventListener('click', class_a_change);
	document.getElementById('netClassB').addEventListener('click', class_b_change);
	document.getElementById('netClassC').addEventListener('click', class_c_change);
}

// Update All the values in the UI.
function changeComboboxes(newVal){

	var option_groups = [
		"select#subnet_mask option",
		"select#max_hosts option",
		"select#max_subnets option",
		"select#mask_bits option",
		"select#subnet_bits option"
	];
	option_groups.forEach(function(option_group) {
		Array.prototype.forEach.call(document.querySelectorAll(option_group), function(o) {
			o.selected = o.getAttribute('value') == newVal;
		});
	});

	calculate(document.getElementById('ipAdress_value').value, calculateSubnetMaskValue(newVal));
}

document.addEventListener("DOMContentLoaded", function() {
	formView = document.getElementById('form_view');
	class_a_change();
	initEventHandlers();
});
