//�����˵�
function showselect(qz,select_count)
{
	
	for(i=2;i<=select_count;i++)
	{
		document.getElementById(qz+'_'+i).style.display='';
		document.getElementById(qz+'_'+i).style.backgroundColor="#F1F7FA"; //��������������ɫ
		document.getElementById(qz+'_'+i).style.borderLeft="1px solid #c0d0b7"; //������߱߿���ɫ
		document.getElementById(qz+'_'+i).style.borderRight="1px solid #c0d0b7"; //�����ұ߱߿���ɫ
		
	}
}
//�ƿ�����������
function clearselect(qz,select_count)
{
	
	for(i=2;i<=select_count;i++)
	{
		document.getElementById(qz+'_'+i).style.display='none';	
	}
}
function input_ks(qz,select_count,value)
{
	for(j=2;j<=select_count;j++)
	{
		document.getElementById(qz+'_'+j).style.display='none';	
	}
	document.getElementById(qz+'_1').innerHTML=value;
	document.getElementById(qz+'input').value=value;
}
//��꾭��������ʱ��ı���ʽ
function updatestyle(qz,select_count,count)
{
	document.getElementById(qz+'_'+select_count).style.color="#a74d12";
	document.getElementById(qz+'_'+select_count).style.backgroundColor="#F1F7FA";
	for(i=2;i<=count;i++)
	{
		document.getElementById(qz+'_'+i).style.display='';	
	}
}
//����뿪��ԭ��ʽ
function bakstyle(qz,select_count,count)
{
	document.getElementById(qz+'_'+select_count).style.color="#5e3219";
	document.getElementById(qz+'_'+select_count).style.backgroundColor="#F1F7FA";
	for(i=2;i<=count;i++)
	{
		document.getElementById(qz+'_'+i).style.display='none';	
	}
}


//����������ʽ

//for(k=2;k<=6;$k++)
//{c0d0b7
	
	//document.getElementById('ks_'+k).style.backgroundColor='F1F7FA';	
	//document.getElementById('ks_'+k).style.color='#ffffff';	
//}

//����֤
function submitgh()
{
	if(document.form1['ghform[gh_name]'].value=='')
	{
		alert('��������Ϊ��');
		return false;
	}
	if(document.form1['ghform[gh_tel]'].value=='')
	{
		alert('�绰����Ϊ��');
		return false;
	}
	if(document.form1['ghform[gh_y]'].value=='')
	{
		alert('��ݲ���Ϊ��');
		return false;
	}
	if(document.form1['ghform[gh_m]'].value=='')
	{
		alert('�·ݲ���Ϊ��');
		return false;
	}
	if(document.form1['ghform[gh_d]'].value=='')
	{
		alert('���ڲ���Ϊ��');
		return false;
	}
	if(document.form1['ghform[gh_ks]'].value=='')
	{
		alert('ԤԼ���ǲ���Ϊ��');
		return false;
	}
	if(document.form1['ghform[gh_zj]'].value=='')
	{
		alert('ԤԼר�Ҳ���Ϊ��');
		return false;
	}
	if(document.form1['ghform[gh_about]'].value=='')
	{
		alert('������������Ϊ��');
		return false;
	}
	return true;
}
function submitjy()
{
	if(document.form2['jyform[jy_name]'].value=='')
	{
		alert('�ǳƲ���Ϊ��');
		return false;
	}
	if(document.form2['jyform[jy_about]'].value=='')
	{
		alert('��������Ϊ��');
		return false;
	}
	return true;
}