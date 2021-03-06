/*
���� �calc.js� ������ ����������� ��������� ��������� ������� �� ��������� ��������:
1.	���� �������� �������� ����� 0 � �������� 10
2.	���� �������� �������� ������ 100 � ������� 100
3.	���� �������� �������� ������ 100 � �������� 100
4.	���� �������� �������� �� �������� ������ (�������� � �������� ������������� ��� �����) � �� ����������� ������� ���������
*/

var arrayLength = data.length;
var i;

for (i = 0; i < arrayLength; i++){
	/* ��������, �������� �� ������� ������ (�� �������, ������ ���� ������� ������).
	   ������ ������� �� ��������� ��������, ������� null ��� undefined (��� ���� ��� ��������� ���������� ���� � �����, ��� ����� ������ 2 �������)
	   ������ ������� �� ��������� ���������� �������� */
	if ((data[i] != null) && (typeof data[i] != "boolean")){
		/* ���������� � Number, �� ������ ������, �������� �����, � ������, ���� ������ ����� ����������� � � ��� ����� ��������� �������� ����� "0", '500' � �.�.
		   � ������ ���������� � Number �� ��������� ������������ ��������� += � -=, ���� ������ data[i] += 0 ���� �� �������.*/
		if (data[i] == 0){
			data[i] = Number(data[i]) + 10; 
		}
		else if (data[i] > 100){
			data[i] = Number(data[i]) - 100;
		}
		else if (data[i] < 100){
			data[i] = Number(data[i]) + 100;
		}
	}
}
