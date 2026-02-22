num1 = int(input('Digite um número de 1 a 10: '))
num2 = int(input('Digite outro número de 1 a 10: '))

if num1 > num2:
    print('O primeiro número é maior.')
elif num1 == num2:
    print('Os números são iguais.')
else:
    print('O segundo número é maior.')

if num1 % 2 == 0:
    print(f'e {num1} é um número par.')
else:
    print(f'e {num1} é um número ímpar.')

if num2 % 2 == 0:
    print(f'e {num2} é um número par.')
else:
    print(f'e {num2} é um número ímpar.')