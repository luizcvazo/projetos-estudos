nascimento = int(input('Digite seu ano de nascimento: '))

idade = 2025-nascimento

if idade < 12:
    print (f'Você tem {idade} anos, ainda é uma criança')

elif 12 <= idade <= 17:
    print (f'Você tem {idade} anos, está na adolescência')

elif 18 and idade <= 59:
    print (f'Você tem {idade} anos, já é um adulto')

elif idade >= 100:
    print (f'NOSSA! {idade} ANOS! PARABÉNS PELA LONGIVIDADE, IMORTAL!')

else:
    print (f'Você tem {idade} anos, já é um idoso')