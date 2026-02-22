print('Cálculo da média dos alunos:')
print('Média maior ou igual a 7 → ✅ Aprovado, Média entre 5 e 6.9 → ⚠ Recuperação, Média menor que 5 → ❌ Reprovado')

nome = input('Digite o nome do aluno: ')
nota1 = float(input('Digite a nota 1 do aluno: '))
nota2 = float(input('Digite a nota 2 do aluno: '))
nota3 = float(input('Digite a nota 3 do aluno: '))

nota = (nota1 + nota2 + nota3) / 3

if nota >= 7:
    print(f'O aluno {nome} foi aprovado com média {nota}')
elif nota >= 5 and nota < 7:
    print(f'O aluno {nome} está em recuperação com média {nota}')
else: 
    print(f'O aluno {nome} foi reprovado com média {nota}')