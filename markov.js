/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chain = new Map();

    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i+1];
      if(chain.has(word)){
        chain.get(word).push(nextWord);
      }else{
        chain.set(word, [nextWord])
      }
    }
    this.chain = chain
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let words = Array.from(this.chain.keys())
    let word = words[Math.floor(Math.random() * words.length)]
    let text = []
    while(word !== undefined && text.length < numWords){
      text.push(word);
      word = this.chain.get(word)[Math.floor(Math.random() * (Array.from(this.chain.get(word)).length))]
    }
    return text.join(' ');
  }
}

module.exports = {MarkovMachine}
