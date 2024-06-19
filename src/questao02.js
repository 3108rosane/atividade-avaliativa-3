
import leia, { questionFloat } from "readline-sync"

var horastrabalhadas = questionFloat("Informe a quantidade de horas trabalhadas: ");
var valorhora = questionFloat("Informe o valor da hora trabalhada: ");
var percentualdesconto = questionFloat("Informe o percentual de desconto (em %): ");

if (Calcula "salário_bruto");{
console.log ("salario_bruto = horastrabalhadas * valorhora")
}

else{
    ("Calcula o valor do desconto")
console.log ("desconto = salario_bruto * (percentual_desconto / 100");
}
else{
     console.log ("Calcula o salário líquido");
console.log("salario_liquido = salario_bruto - desconto");
}

else{
("\nResumo do Salário:");
("SalárioBruto: R$ {salariobruto:/100}");
("Desconto ({percentualdesconto}%): R$ {desconto}");
("SalárioLíquido: R$ {salario_liquido:.2f}");
}
