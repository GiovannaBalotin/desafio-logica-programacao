// Definição da classe Heroi
class Heroi {
    // Construtor que recebe nome, idade e tipo do herói
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque;
  
      // Escolha do tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case 'mago':
          ataque = ' magia';
          break;
        case 'guerreiro':
          ataque = ' espada';
          break;
        case 'monge':
          ataque = ' artes marciais';
          break;
        case 'ninja':
          ataque = ' shuriken';
          break;
        default:
          ataque = 'realizou um ataque';
      }
  
      // Exibe a mensagem de ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe Heroi
  const heroi1 = new Heroi('Aragorn', 30, 'guerreiro');
  heroi1.atacar();
  
  const heroi2 = new Heroi('Gandalf', 100, 'mago');
  heroi2.atacar();
  
  const heroi3 = new Heroi('Bruce Lee', 35, 'monge');
  heroi3.atacar();
  
  const heroi4 = new Heroi('Hanzo', 28, 'ninja');
  heroi4.atacar();