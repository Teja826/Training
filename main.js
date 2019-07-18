
function createbody(){
	createheader();	
	createmain();
	for(var i=1;i<11;i++){
		createmain.createleftblock();
		createmain.createarticle();
		if(i==1){
			createmain.createarticle.one();
			createform();
		}
		if(i==2){	
			createmain.createarticle.two();			
		}
		if(i==3){			
			createmain.createarticle.three();			
		}
		if(i==4){			
			createmain.createarticle.four();			
		}
		if(i==5){			
			createmain.createarticle.five();			
		}
		if(i==6){			
			createmain.createarticle.six();			
		}
		if(i==7){			
			createmain.createarticle.seven();			
		}
		if(i==8){			
			createmain.createarticle.eight();			
		}
		if(i==9){			
			createmain.createarticle.nine();			
		}
		if(i==10){			
			createmain.createarticle.ten();			
		}
		if(i!=1){
		createmain.createrightblock();
		}
	}
	
	createfooter();
}

function createform(){
	var form = document.createElement("form");
	var brk = document.createElement("br")
	var lbl = document.createElement("label");
	var t7 = document.createTextNode("SELECT CATEGORY");
	var str = document.createElement("strong");
	str.appendChild(t7);
	lbl.appendChild(str);
	form.appendChild(lbl);

	var select = document.createElement("select");
	select.setAttribute('onchange',"");
	var op = new Option();
	var op1 = new Option();
	var op2 = new Option();
	var op3 = new Option();
	var op4 = new Option();
	var op5 = new Option();
	var op6 = new Option();
	var op7 = new Option();
	var op8 = new Option();
	var op9 = new Option();
	var op10 = new Option();

	op.value = "";
	op1.value = "One";
	op2.value = "Two";
	op3.value = "Three";
	op4.value = "Four";
	op5.value = "Five";
	op6.value = "Six";
	op7.value = "Seven";
	op8.value = "Eight";
	op9.value = "Nine";
	op10.value = "Ten";

	op.text = "All";
	op1.text = "BBC World News";
	op2.text = "Fox News";
	op3.text = "CNN";
	op4.text = "Sky News";
	op5.text = "MSNBC";
	op6.text = "Al Jazeera";
	op7.text = "Euronews";
	op8.text = "Al Arabiya";
	op9.text = "Geo News";
	op10.text = "NDTV India";


	select.options.add(op);
	select.options.add(op1);
	select.options.add(op2);
	select.options.add(op3);
	select.options.add(op4);
	select.options.add(op5);
	select.options.add(op6);
	select.options.add(op7);
	select.options.add(op8);
	select.options.add(op9);
	select.options.add(op10);

	
	var lbl1 = document.createElement("label");
	var t8 = document.createTextNode("SUBSCRIBE");
	var str1 = document.createElement("strong");
	str1.appendChild(t8);
	lbl1.appendChild(str1);

	var input = document.createElement("input");
	input.setAttribute('id','email')
	input.setAttribute('type',"text");
	input.setAttribute('placeholder',"Email Address");
	
	var button = document.createElement("button");
	button.setAttribute('class','submit');
	var t9 = document.createTextNode("SUBSCRIBE");
	button.appendChild(t9);

	form.appendChild(select);
	form.appendChild(lbl1);
	form.appendChild(input);
	form.appendChild(button);



	var main = document.getElementsByClassName("mn")[0];
	var div2 = document.createElement("div");
	div2.appendChild(form);
	main.appendChild(div2);
	div2.style.backgroundColor = "white";
	div2.style.width = "27%";
	div2.style.height = "170px";
	div2.style.margin = "2%";
	div2.style.float = "left";

}
function createmain(){

	function createleftblock(){
		var main = document.getElementsByClassName("mn")[0];
		var div1 = document.createElement("div");
		main.appendChild(div1);
		div1.style.backgroundColor = "#c7ccccf3";
		div1.style.width = "15%";
		div1.style.height = "170px";
		div1.style.margin = "2%";
		div1.style.float = "left";
	
	}
	createmain.createleftblock = createleftblock;
	
	function createarticle(){
		var main = document.getElementsByClassName("mn")[0];
		var h3 = document.createElement("h3");
		var t3;
		var p2 = document.createElement("p");
		var t4;
		var p3 = document.createElement("p");
		var t5;
		function one(){
			t3 = document.createTextNode("BBC World News");
			h3.appendChild(t3);
			t4 = document.createTextNode("Posted on 29 June,2019 //Category:Category One");
			p2.appendChild(t4);
			t5 = document.createTextNode("Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.");
			p3.appendChild(t5);
		}
		function two(){
			t3 = document.createTextNode("Fox News");
			h3.appendChild(t3);
			t4 = document.createTextNode("Posted on 29 June,2019 //Category:Category One");
			p2.appendChild(t4);
			t5 = document.createTextNode("Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.");
			p3.appendChild(t5);
		}
		function three(){
			t3 = document.createTextNode("CNN");
			h3.appendChild(t3);
			t4 = document.createTextNode("Posted on 29 June,2019 //Category:Category One");
			p2.appendChild(t4);
			t5 = document.createTextNode("Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.");
			p3.appendChild(t5);
		}
		function four(){
			t3 = document.createTextNode("Sky News");
			h3.appendChild(t3);
			t4 = document.createTextNode("Posted on 29 June,2019 //Category:Category One");
			p2.appendChild(t4);
			t5 = document.createTextNode("Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.");
			p3.appendChild(t5);
		}
		function five(){
			t3 = document.createTextNode("MSNBC");
			h3.appendChild(t3);
			t4 = document.createTextNode("Posted on 29 June,2019 //Category:Category One");
			p2.appendChild(t4);
			t5 = document.createTextNode("Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.");
			p3.appendChild(t5);
		}
		function six(){
			t3 = document.createTextNode("Al Jazeera");
			h3.appendChild(t3);
			t4 = document.createTextNode("Posted on 29 June,2019 //Category:Category One");
			p2.appendChild(t4);
			t5 = document.createTextNode("Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.");
			p3.appendChild(t5);
		}
		function seven(){
			t3 = document.createTextNode("Euronews");
			h3.appendChild(t3);
			t4 = document.createTextNode("Posted on 29 June,2019 //Category:Category One");
			p2.appendChild(t4);
			t5 = document.createTextNode("Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.");
			p3.appendChild(t5);
		}
		function eight(){
			t3 = document.createTextNode("Al Arabiya");
			h3.appendChild(t3);
			t4 = document.createTextNode("Posted on 29 June,2019 //Category:Category One");
			p2.appendChild(t4);
			t5 = document.createTextNode("Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.");
			p3.appendChild(t5);
		}
		function nine(){
			t3 = document.createTextNode("Geo News");
			h3.appendChild(t3);
			t4 = document.createTextNode("Posted on 29 June,2019 //Category:Category One");
			p2.appendChild(t4);
			t5 = document.createTextNode("Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.");
			p3.appendChild(t5);
		}
		function ten(){
			t3 = document.createTextNode("NDTV India");
			h3.appendChild(t3);
			t4 = document.createTextNode("Posted on 29 June,2019 //Category:Category One");
			p2.appendChild(t4);
			t5 = document.createTextNode("Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.");
			p3.appendChild(t5);
		}
		createarticle.one = one;
		createarticle.two = two;
		createarticle.three = three;
		createarticle.four = four;
		createarticle.five = five;
		createarticle.six = six;
		createarticle.seven = seven;
		createarticle.eight = eight;
		createarticle.nine = nine;
		createarticle.ten = ten;

		var bt1 = document.createElement("button");
		var t6 = document.createTextNode("Continue Reading");
		bt1.appendChild(t6);
		var art = document.createElement("article");
		art.appendChild(h3);
		art.appendChild(p2);
		art.appendChild(p3);
		art.appendChild(bt1);
		main.appendChild(art);

		art.style.backgroundColor = "white";
		art.style.marginTop = "2%";
		art.style.width = "50%";
		art.style.float = "left";
		art.style.height = "170px";

		h3.style.color = "#1f4061";
		h3.style.marginTop = "0%";

		p2.style.lineHeight = "1px";

		bt1.style.backgroundColor = "#e0380ee7";
		bt1.style.width = "140px";
		bt1.style.height = "25px";
		bt1.style.color = "white";
		bt1.style.marginTop = "6px";
		bt1.style.border = "0px";


	}
	createmain.createarticle = createarticle;
		
	function createrightblock(){
		var main = document.getElementsByClassName("mn")[0];
		var div2 = document.createElement("div");
		main.appendChild(div2);
		div2.style.backgroundColor = "white";
		div2.style.width = "27%";
		div2.style.height = "170px";
		div2.style.margin = "2%";
		div2.style.float = "left";

	}
	createmain.createrightblock = createrightblock;
}

function createfooter(){
	var p = document.createElement("p");
	var t = document.createTextNode("Newsfeed2019");
	p.appendChild(t);
	var ftr = document.getElementsByClassName("fr")[0];
	ftr.appendChild(p);
	
}

function createheader(){

	var h2 = document.createElement("h2");
	var t1 = document.createTextNode("NEWSFEED");
    h2.appendChild(t1);
	var pre = document.createElement("pre");
	var sp = document.createTextNode("     ");
	pre.appendChild(sp);
	var p = document.createElement("p");
	var t2 = document.createTextNode("Yet another newsfeed");
	p.appendChild(t2);
	var header = document.getElementsByClassName("hd")[0];
	header.appendChild(h2);
	header.appendChild(pre);
	header.appendChild(p);
	pre.style.display = "inline";
	p.style.display = "inline";
	h2.style.display = "inline";

}




