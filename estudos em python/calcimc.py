peso = float (input ("Digite seu peso em Quilos: "))
altura = float (input ('Digite sua altura: '))

imc = peso / (altura ** 2)

print(f'Seu IMC é de {imc}.')

if imc <= 18.5:
    print("Está abaixo do peso!")

elif 18.5 <= imc <= 24.9:
    print("Seu peso está normal!")

elif 24.9 <= imc <= 29.9:
    print("Está com sobrepeso")

elif 29.9 <= imc > 30:
    print("Obesidade")

