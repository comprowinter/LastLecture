function moveMySelf()
{
	decreaseOpacity("#MyHobbiesBar","#mySkillsBar");
	$("#mySelfBar").animate({
				opacity: '1',
			});

	$("#mySkillsBar").animate({left: '511px'});
	$("#MyHobbiesBar").animate({left: '614px'});
	$("#myContent").animate({left: '108px'});
	$("#myContent").css('background-color', '#43A8B4');
	hiddenText(false,true,true);
}
function moveMySkills()
{
	decreaseOpacity("#MyHobbiesBar","#mySelfBar");
	$("#mySkillsBar").animate({
				opacity: '1',
			});
	$("#mySkillsBar").animate({left: '110px'});
	$("#MyHobbiesBar").animate({left: '612px'});
	$("#myContent").animate({left: '210px'});
	$("#myContent").css('background-color', '#456E8C');
	hiddenText(true,false,true);
}
function moveMyHobbies()
{
	decreaseOpacity("#mySkillsBar","#mySelfBar");
	$("#MyHobbiesBar").animate({
				opacity: '1',
			});
	$("#mySkillsBar").animate({left: '110px'});
	$("#MyHobbiesBar").animate({left: '212px'});
	$("#myContent").animate({left: '312px'});
	$("#myContent").css('background-color', '#B9F1F0');
	hiddenText(true,true,false);
}

function decreaseOpacity(nonSelectBar1,nonSelectBar2)
{
	$(nonSelectBar1).animate({
				opacity: '0.5',
			});
	$(nonSelectBar2).animate({
				opacity: '0.5',
			});
	}
	
function hiddenText(txtMySelf,txtMySkills,txtMyHobbies)
{
	document.getElementById("txtMySelf").hidden=txtMySelf;
	document.getElementById("txtMySkills").hidden=txtMySkills;
	document.getElementById("txtMyHobbies").hidden=txtMyHobbies;
	}