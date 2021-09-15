import {Cliente} from "./Cliente.js";
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";

const diretor = new Diretor("Rodrigo", 10000, 12344567890);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Ricardo", 5000, 98765432156);
gerente.cadastrarSenha("654321");

const cliente = new Cliente("Lais", 789521456, "445566");

const clienteLogado = SistemaDeAutenticacao.login(cliente,"445566")
const diretorLogado = SistemaDeAutenticacao.login(diretor, "123456");
const gerenteLogado = SistemaDeAutenticacao.login(gerente, "654321");

console.log(clienteLogado);
