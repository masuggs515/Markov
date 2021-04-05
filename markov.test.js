const markov = require('./markov');



describe('output should be a string', function(){
    
    test('makeText should return a string', function () {
        let mm = new markov.MarkovMachine("the cat in the hat");
        const res = mm.makeText(numWords = 10);
        expect(res).toEqual(expect.any(String));
    })
    test('Markov machine should have word in ', function(){
        let mm = new markov.MarkovMachine("the cat in the hat");
        expect(mm).toEqual(expect.any(Object));
    })
})